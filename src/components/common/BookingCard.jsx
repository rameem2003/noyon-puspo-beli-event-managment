import React from "react";
import Flex from "./Flex";
import { Link } from "react-router-dom";

const BookingCard = ({ item }) => {
  return (
    <div className="relative mb-2 overflow-hidden rounded-lg border-[2px] border-primary p-3">
      <div
        className={`absolute left-0 top-0 flex h-full w-[30px] items-center justify-center ${item.accepted == "accepted" ? "bg-green-600" : item.accepted == "cancel" ? "bg-red-600" : "bg-orange-600"} `}
      >
        <p className="-rotate-90 font-bold capitalize text-white">
          {item.accepted}
        </p>
      </div>
      <Flex className="ml-6 flex-col items-start justify-between md:flex-row md:items-center">
        <div>
          <h2 className="text-base font-medium text-black">{item.name}</h2>

          <h3>Phone: {item.phone}</h3>
          <h3>Package Name: {item.packID}</h3>
        </div>

        <div>
          <h3>District: {item.district}</h3>
          <h3>Time: {item.time}</h3>

          <Link
            to={`/admin/bookings/${item._id}`}
            className="mt-2 inline-block rounded-lg bg-primary px-4 py-1 text-white"
          >
            View
          </Link>
        </div>
      </Flex>
    </div>
  );
};

export default BookingCard;
