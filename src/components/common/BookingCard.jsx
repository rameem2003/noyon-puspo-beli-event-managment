import React from "react";
import Flex from "./Flex";
import { Link } from "react-router-dom";

const BookingCard = ({ item }) => {
  return (
    <div className="mb-2 rounded-lg border-[2px] border-primary p-3">
      <Flex className="flex-col items-start justify-between md:flex-row md:items-center">
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
