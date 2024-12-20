import React, { useEffect, useState } from "react";
import axios from "axios";
import Flex from "../../common/Flex";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import SendingAnimation from "../../common/SendingAnimation";

const BookingDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({}); // store booking details
  const [loading, setLoading] = useState(false);
  const admin = useSelector((state) => state.AuthReducer.admin);
  const navigate = useNavigate(); // navigation instance

  console.log(details);

  // fetch booking details
  const fetchDetails = async () => {
    let res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/booking/${id}`,
    );

    setDetails(res.data);
  };

  // handel cancel booking
  const handleCancel = async () => {
    setLoading(true);
    try {
      let res = await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/api/booking/update/${id}`,
        { accepted: "cancel" },
        {
          headers: { "Content-Type": "application/json" },
        },
      );
      setLoading(false);

      Swal.fire({
        icon: "success",
        title: "Booking Canceled",
        showConfirmButton: true,
        confirmButtonText: "Back",
        confirmButtonColor: "green",
        // timer: 1500,
      })
        .then((result) => {
          if (result.isConfirmed) {
            navigate("/admin/bookings");
          }
        })
        .finally(() => {
          navigate("/admin/bookings");
        });

      console.log(res);
    } catch (error) {
      setLoading(false);
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Try Again",
        showConfirmButton: true,
        confirmButtonText: "Try Again",
        confirmButtonColor: "red",
        // timer: 1500,
      });
    }
  };
  // handel accept booking
  const handleAccept = async () => {
    setLoading(true);
    try {
      let res = await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/api/booking/update/${id}`,
        { accepted: "accepted" },
        {
          headers: { "Content-Type": "application/json" },
        },
      );
      setLoading(false);

      Swal.fire({
        icon: "success",
        title: "Booking Accepted",
        showConfirmButton: true,
        confirmButtonText: "Back",
        confirmButtonColor: "green",
        // timer: 1500,
      })
        .then((result) => {
          if (result.isConfirmed) {
            navigate("/admin/bookings");
          }
        })
        .finally(() => {
          navigate("/admin/bookings");
        });

      console.log(res);
    } catch (error) {
      setLoading(false);
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Try again",
        showConfirmButton: true,
        confirmButtonText: "Try Again",
        confirmButtonColor: "red",
        // timer: 1500,
      });
    }
  };

  // handle delete booking
  const handleDelete = () => {
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
            `${import.meta.env.VITE_BASE_URL}/api/booking/delete/${id}`,
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
              navigate("/admin/bookings");
            })
            .finally(() => {
              navigate("/admin/bookings");
            });
        } catch (error) {
          setLoading(false);
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Try again",
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
    fetchDetails();
  }, []);

  useEffect(() => {
    // if (!admin) {
    //   navigate("/admin/login");
    // }
  }, [details]);
  return (
    <main>
      {loading && <SendingAnimation />}
      <div className="mx-auto w-[90%]">
        <h2 className="mb-4 text-3xl font-semibold text-black">
          Booking Details
        </h2>

        <section className="my-2">
          <Flex className="flex-col gap-5 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <form action="">
                <div className="relative mb-5">
                  <input
                    value={details.name}
                    type="text"
                    id="floating_filled"
                    className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0"
                    placeholder=" "
                    required
                    disabled
                  />
                  <label
                    htmlFor="floating_filled"
                    className="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-primary rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                  >
                    Full Name
                  </label>
                </div>

                <div className="relative mb-5">
                  <input
                    value={details.email}
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
                    Email Address
                  </label>
                </div>
                <div className="relative mb-5">
                  <input
                    value={details.phone}
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
                    Phone Number
                  </label>
                </div>

                <div className="relative mb-5">
                  <input
                    value={details.address}
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
                    Address
                  </label>
                </div>
                <div className="relative mb-5">
                  <input
                    value={details.district}
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
                    District
                  </label>
                </div>

                {/* <div className="mb-5">
                  <label htmlFor="underline_select" className="sr-only">
                    Underline select
                  </label>
                  <select
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
                </div> */}
              </form>

              {details.accepted == "completed" ? (
                <h2 className="my-2 text-3xl font-bold capitalize text-green-600">
                  {details.accepted}
                </h2>
              ) : details.accepted == "pending" ? (
                <h2 className="my-2 text-3xl font-bold capitalize text-orange-600">
                  {details.accepted}
                </h2>
              ) : (
                <h2 className="my-2 text-3xl font-bold capitalize text-red-600">
                  {details.accepted}
                </h2>
              )}

              <div>
                <Flex className="items-center gap-5">
                  <button
                    onClick={handleAccept}
                    className="w-1/2 bg-green-600 px-5 py-2 text-lg font-semibold text-white"
                  >
                    Accepted
                  </button>
                  <button
                    onClick={handleCancel}
                    className="w-1/2 bg-red-600 px-5 py-2 text-lg font-semibold text-white"
                  >
                    Cancel
                  </button>
                </Flex>

                <button
                  onClick={handleDelete}
                  className="mt-5 w-full bg-black px-5 py-2 text-lg font-semibold text-white"
                >
                  Delete Booking
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              {details.package ? (
                <div
                  className={`group mb-8 w-full rounded-lg border-2 ${details.package.color} w-full bg-white p-6 shadow-md duration-300 ease-in-out`}
                >
                  <h2
                    className={`text-2xl font-bold ${details.package.textColor} group-hover:text-white`}
                  >
                    {details.package.name} ({details.package.packageID})
                  </h2>

                  <h3
                    className={`text-2xl font-extrabold ${details.package.textColor} group-hover:text-white`}
                  >
                    {details.package.price}
                  </h3>

                  <p className="mt-4 text-lg font-medium group-hover:text-white">
                    What’s included:
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-6 text-lg">
                    {details.package.features.map((d, i) => (
                      <li key={i} className="text-black group-hover:text-white">
                        ➡ {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <h3 className="text-lg font-bold text-red-600">Loading....</h3>
              )}
            </div>
          </Flex>
        </section>
      </div>
    </main>
  );
};

export default BookingDetails;
