import React, { useEffect, useState } from "react";
import Flex from "../components/common/Flex";
import SendingAnimation from "../components/common/SendingAnimation";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

const AdminSettings = () => {
  const navigate = useNavigate(); // navigation instance
  const [admins, setAdmins] = useState([]); // store all admins
  // all admin states
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const admin = useSelector((state) => state.AuthReducer.admin);

  // fetch all admins
  const getAllAdmins = async () => {
    let res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/admin/`);
    setAdmins(res.data);
  };

  // function for adding new admin
  const handleNewAdmin = async (e) => {
    e.preventDefault();

    let newAdmin = {
      adminID: uuidv4(),
      name,
      userName,
      password,
      created: new Date().toLocaleString(),
    };

    if (name && userName && password) {
      setLoading(true);

      try {
        let res = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/api/admin/register`,
          newAdmin,
          {
            headers: { "Content-Type": "application/json" },
          },
        );

        console.log(res);
        setLoading(false);

        setName("");
        setUserName("");
        setPassword("");
        Swal.fire({
          icon: "success",
          title: res.data.msg,
          showConfirmButton: true,
          confirmButtonText: "ok",
          confirmButtonColor: "green",
        })
          .then(async (result) => {
            if (result.isConfirmed) {
              navigate("/admin/home");
            }
          })
          .finally(() => {
            navigate("/admin/home");
          });
      } catch (error) {
        setLoading(false);
        console.log(error);
        Swal.fire({
          icon: "error",
          title: error.response.data.msg,
          showConfirmButton: true,
          confirmButtonText: "Back",
          confirmButtonColor: "#856702",
        });
      }
    } else {
      setLoading(false);
      Swal.fire({
        icon: "warning",
        title: "Pls Provide Full Info",
        showConfirmButton: true,
        confirmButtonText: "Back",
        confirmButtonColor: "#856702",
      });
      setLoading(false);
      setErr(true);
      return;
    }
  };

  // handle delete booking
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonColor: "red",
      cancelButtonColor: "#856702",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      setLoading(true);
      if (result.isConfirmed) {
        try {
          const res = await axios.delete(
            `${import.meta.env.VITE_BASE_URL}/api/admin/${id}`,
          );
          console.log(res.data.msg);
          setLoading(false);

          Swal.fire({
            title: "Deleted!",
            text: res.data.msg,
            icon: "success",
            showConfirmButton: true,
            confirmButtonText: "Ok",
            confirmButtonColor: "#856702",
          })
            .then(() => {
              navigate("/admin/home");
            })
            .finally(() => {
              navigate("/admin/home");
            });
        } catch (error) {
          setLoading(false);
          console.log(error);
          Swal.fire({
            icon: "error",
            title: error.response.data.msg,
            showConfirmButton: true,
            confirmButtonText: "Try Again",
            confirmButtonColor: "red",
            // timer: 1500,
          });
        }
      } else {
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    getAllAdmins();
  }, []);

  useEffect(() => {
    if (!admin) {
      navigate("/admin/login");
    }
  }, []);
  return (
    <main>
      {loading && <SendingAnimation />}
      <div className="mx-auto w-[90%]">
        <h2 className="mb-4 text-3xl font-semibold text-black">
          Admin Settings
        </h2>

        <section className="mt-5">
          <h2 className="mb-4 text-2xl font-semibold text-black">All Admins</h2>

          <div className="mt-2">
            {admins.map((data, i) => (
              <Flex
                className="mb-2 flex-col items-start justify-start rounded-lg border-[2px] border-primary p-2 md:flex-row md:items-center md:justify-between"
                key={i}
              >
                <div>
                  <h2 className="text-lg font-medium text-black">
                    Name: {data.name}
                  </h2>
                  <h2 className="text-lg font-medium text-black">
                    Username: {data.userName}
                  </h2>
                </div>

                {data.userName !== admin.userName ? (
                  <button
                    onClick={() => handleDelete(data.adminID)}
                    className="mt-2 inline-block rounded-lg bg-red-600 px-2 py-2 text-white"
                  >
                    Delete Admin
                  </button>
                ) : (
                  <button className="mt-2 inline-block rounded-lg bg-gray-500 px-2 py-2 text-white">
                    Its you
                  </button>
                )}
              </Flex>
            ))}
          </div>
        </section>

        <section className="mt-5">
          <h2 className="mb-4 text-2xl font-semibold text-black">
            Add New Admin
          </h2>

          <div className="mt-2 rounded-lg border-[2px] border-primary p-2">
            <form action="" onSubmit={handleNewAdmin}>
              <Flex className="mb-5 gap-5">
                <div className="relative mb-5 w-full">
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    id="floating_filled"
                    className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_filled"
                    className="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-primary rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                  >
                    Admin Full Name
                  </label>
                </div>
              </Flex>
              <Flex className="mb-5 gap-5">
                <div className="relative mb-5 w-1/2">
                  <input
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                    type="text"
                    id="floating_filled"
                    className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_filled"
                    className="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-primary rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                  >
                    User Name
                  </label>
                </div>
                <div className="relative mb-5 w-1/2">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="text"
                    id="floating_filled"
                    className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_filled"
                    className="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-primary rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                  >
                    Password
                  </label>
                </div>
              </Flex>

              <button
                type="submit"
                className="w-full bg-black px-5 py-2 text-center text-white"
              >
                Add New Admin
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AdminSettings;
