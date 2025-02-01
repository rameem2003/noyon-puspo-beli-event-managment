import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import SendingAnimation from "../components/common/SendingAnimation";
import Swal from "sweetalert2";
import { districts } from "./../assets/data/districts";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeBooking } from "../redux/features/BookingSlice";
import AOS from "aos";
import "aos/dist/aos.css";

const CheckoutPage = () => {
  const dispatch = useDispatch(); // dispatch instance
  const navigate = useNavigate(); // navigate instance
  const data = useSelector((state) => state.BookingReducer.booking); // get the booking package

  // all states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  // function for submit the booking
  const handle_submit = async (e) => {
    e.preventDefault();
    setErr(false);
    setLoading(true);

    let booking_data = {
      name,
      email,
      phone,
      address,
      district,
      packID: data.packageID,
      package: data,
      time: new Date().toLocaleString(),
      timeStamp: Date.now(),
    };

    if (!name || !email || !phone || !address || !district) {
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

    try {
      let res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/booking/new`,
        booking_data,
        {
          headers: { "Content-Type": "application/json" },
        },
      );
      setLoading(false);

      Swal.fire({
        icon: "success",
        title: res.data.msg,
        showConfirmButton: true,
        confirmButtonText: "Back to Home",
        confirmButtonColor: "green",
        // timer: 1500,
      })
        .then((result) => {
          if (result.isConfirmed) {
            navigate("/");
            dispatch(removeBooking());
          }
        })
        .finally(() => {
          navigate("/");
          dispatch(removeBooking());
        });

      console.log(res);
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

    // console.log(booking_data);
  };
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <main>
      {loading && <SendingAnimation />}
      <section className="bg-banner bg-cover bg-bottom bg-no-repeat py-[150px] 2xl:py-[200px]">
        <Container>
          <Flex className="items-center gap-10">
            <div data-aos="fade-right" className="w-full lg:w-1/2">
              <h1 className="text-4xl font-extrabold leading-[60px] text-white 2xl:text-5xl">
                Let's Finalize Your Plan
              </h1>

              <p className="mt-5 text-lg font-medium text-white">
                We Provide Budget Friendly Event Packages
              </p>
            </div>
          </Flex>
        </Container>
      </section>

      <section className="my-20">
        <Container>
          <Flex className="flex-col gap-5 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <h3 className="mb-5 text-xl font-bold text-primary lg:text-4xl">
                Provide Your Information
              </h3>

              <form action="" onSubmit={handle_submit}>
                <div className="relative mb-5">
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
                    Your Full Name
                  </label>
                </div>

                <div className="relative mb-5">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
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
                    Your Email Address
                  </label>
                </div>
                <div className="relative mb-5">
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
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
                    Your Phone Number
                  </label>
                </div>

                <div className="relative mb-5">
                  <input
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
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
                    Your Address
                  </label>
                </div>

                <div className="mb-5">
                  <label htmlFor="underline_select" className="sr-only">
                    Underline select
                  </label>
                  <select
                    onChange={(e) => setDistrict(e.target.value)}
                    // value={name}
                    required
                    id="underline_select"
                    className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-primary focus:border-gray-200 focus:outline-none focus:ring-0"
                  >
                    <option disabled selected>
                      District
                    </option>
                    {districts.map((d, i) => (
                      <option value={d} key={i}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                {err && (
                  <p className="font-semibold text-red-600">
                    Some field is empty. Try Again
                  </p>
                )}
                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-10 py-3 text-center text-sm font-semibold text-white duration-300 ease-in-out hover:gap-4 xl:text-base 2xl:text-lg"
                >
                  Place Order <FaArrowRight />
                </button>
              </form>
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="mb-5 text-xl font-bold text-primary lg:text-4xl">
                Your Chosen Package
              </h3>
              {data ? (
                <div
                  className={`group mb-8 w-full rounded-lg border-2 ${data.color} w-full bg-white p-6 shadow-md duration-300 ease-in-out`}
                >
                  <h2
                    className={`text-2xl font-bold capitalize ${data.textColor} group-hover:text-white`}
                  >
                    {data.name} ({data.packageID})
                  </h2>
                  <h2
                    className={`text-xl font-bold capitalize ${data.textColor} group-hover:text-white`}
                  >
                    {data.title}
                  </h2>

                  <h3
                    className={`text-2xl font-extrabold capitalize ${data.textColor} group-hover:text-white`}
                  >
                    {data.price}
                  </h3>

                  <p className="mt-4 text-lg font-medium capitalize group-hover:text-white">
                    What’s included:
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-6 text-lg">
                    {data.features.map((d, i) => (
                      <li
                        key={i}
                        className="capitalize text-black group-hover:text-white"
                      >
                        ➡ {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <h3 className="text-lg font-bold capitalize text-red-600">
                  You didn't chose any package to booking
                </h3>
              )}
            </div>
          </Flex>
        </Container>
      </section>
    </main>
  );
};

export default CheckoutPage;
