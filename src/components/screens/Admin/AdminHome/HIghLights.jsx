import React from "react";
import Flex from "../../../common/Flex";
import { FaTimesCircle, FaUsers } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { TbAppsFilled } from "react-icons/tb";

const HIghLights = () => {
  const bookings = useSelector((state) => state.OrderSlice.orderList); // all bookings

  const pending = bookings.filter((item) => item.accepted == "pending");
  const complete = bookings.filter((item) => item.accepted == "accepted");
  const cancel = bookings.filter((item) => item.accepted == "cancel");

  return (
    <section className="py-4">
      <h2 className="mb-2 text-3xl font-semibold text-black">Highlights</h2>
      <Flex className="w-full flex-wrap gap-5">
        {/* <div className="relative h-[200px] w-[23%] rounded-xl bg-slate-800 p-3">
        <p className="text-2xl font-semibold text-white">Total Products</p>

        <h2 className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-6xl font-bold text-white">
          {products.length} 20
        </h2>

        <AiFillProduct className="absolute bottom-2 right-2 text-6xl text-white" />
      </div> */}
        {/* <div className="w-[23%] h-[200px] bg-green-800 rounded-xl p-3 relative">
      <p className=" font-semibold text-2xl text-white">Total Customer</p>

      <h2 className=" font-bold text-6xl text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        {customers.length}
      </h2>

      <FaUsers className=" text-6xl text-white absolute right-2 bottom-2" />
    </div> */}
        <div className="relative h-[180px] w-full rounded-xl bg-green-800 p-3 sm:w-[45%] md:w-[48%] lg:w-[23%] 2xl:h-[200px]">
          <p className="font-semibold text-white xl:text-xl 2xl:text-2xl">
            Total Completed Order's
          </p>

          <h2 className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-6xl font-bold text-white">
            {complete.length}
          </h2>

          <FaUsers className="absolute bottom-2 right-2 text-5xl text-white 2xl:text-6xl" />
        </div>
        <div className="relative h-[180px] w-full rounded-xl bg-orange-500 p-3 sm:w-[45%] md:w-[48%] lg:w-[23%] 2xl:h-[200px]">
          <p className="font-semibold text-white xl:text-xl 2xl:text-2xl">
            Pending Booking's
          </p>

          <h2 className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-6xl font-bold text-white">
            {pending.length}
          </h2>

          <TbAppsFilled className="absolute bottom-2 right-2 text-5xl text-white 2xl:text-6xl" />
        </div>
        <div className="relative h-[180px] w-full rounded-xl bg-red-800 p-3 sm:w-[45%] md:w-[48%] lg:w-[23%] 2xl:h-[200px]">
          <p className="font-semibold text-white xl:text-xl 2xl:text-2xl">
            Canceled Order's
          </p>

          <h2 className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-6xl font-bold text-white">
            {cancel.length}
          </h2>

          <FaTimesCircle className="absolute bottom-2 right-2 text-5xl text-white 2xl:text-6xl" />
        </div>
      </Flex>
    </section>
  );
};

export default HIghLights;
