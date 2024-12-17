import React from "react";
import BookingCard from "../../../common/BookingCard";
import { useSelector } from "react-redux";

const PendingList = () => {
  const bookings = useSelector((state) => state.OrderSlice.orderList); // all bookings

  const pending = bookings.filter((item) => item.accepted == "pending");
  return (
    <section className="mt-4">
      <h2 className="mb-2 text-3xl font-semibold text-black">
        Pending Bookings
      </h2>

      <div className="my-2">
        {pending
          .sort((a, b) => b.timeStamp - a.timeStamp)
          .map((item, i) => (
            <BookingCard key={i} item={item} />
          ))}
      </div>
    </section>
  );
};

export default PendingList;
