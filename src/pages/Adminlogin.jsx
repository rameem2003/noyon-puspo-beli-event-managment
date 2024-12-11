import React, { useState } from "react";
import axios from "axios";
import Image from "../components/common/Image";
import ButtonAnimation from "../components/common/ButtonAnimation";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { signin } from "../redux/features/AdminAuthSlice";

const Adminlogin = () => {
  const dispatch = useDispatch(); // dispatch instance
  const navigate = useNavigate(); // navigate instance

  // states for get admin name & pass
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    let admin = {
      userName,
      password,
    };

    try {
      const res = await axios.post(
        "https://smcorpapi.vercel.app/api/admin/login",
        admin,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      setLoading(false);
      console.log(res.data);
      if (res.data.status == false) {
        setErr(res.data.msg);
      } else {
        setErr("");
        dispatch(signin(res.data));
        navigate("/admin");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <main className="flex h-screen w-full items-center justify-between">
      <div className="flex h-full w-1/2 items-center justify-center bg-primary">
        <Image src="/footerlogo.png" alt="logo" />
      </div>

      <div className="flex w-1/2 items-center justify-center">
        <form
          onSubmit={handleLogin}
          action=""
          className="mx-auto w-full border-[1px] border-[#F0F0F0] p-2 md:w-[450px]"
        >
          <h2 className="mb-5 text-center text-2xl font-semibold">
            Login Here
          </h2>

          {err && <p className="text-lg font-bold text-red-500">{err}</p>}

          <div className="mb-5 w-full">
            <label className="text-base font-medium text-black" htmlFor="">
              Your Username
            </label>

            <input
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              className="h-full w-full border-[1px] border-black p-2 font-kanit text-base font-medium 2xl:text-xl"
              type="text"
              placeholder=""
              required
            />
          </div>

          <div className="mb-5 w-full">
            <label className="text-base font-medium text-black" htmlFor="">
              Password
            </label>
            <div className="relative">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="h-full w-full border-[1px] border-black p-2 font-kanit text-base font-medium 2xl:text-xl"
                type={passwordToggle ? "text" : "password"}
                required
              />

              {passwordToggle ? (
                <IoEyeOff
                  onClick={() => setPasswordToggle(!passwordToggle)}
                  className="absolute right-2 top-[50%] translate-y-[-50%] cursor-pointer text-black lg:text-2xl"
                />
              ) : (
                <IoEye
                  onClick={() => setPasswordToggle(!passwordToggle)}
                  className="absolute right-2 top-[50%] translate-y-[-50%] cursor-pointer text-black lg:text-2xl"
                />
              )}
            </div>
          </div>
          {loading ? (
            <ButtonAnimation />
          ) : (
            <button
              type="submit"
              className="w-full bg-slate-800 p-3 text-xl font-medium text-white"
            >
              Login
            </button>
          )}
        </form>
      </div>

      <p className="fixed bottom-2 right-2 text-lg text-sm font-semibold">
        Software Developer: Mahmood Hassan Rameem || ROL Studio
      </p>
    </main>
  );
};

export default Adminlogin;
