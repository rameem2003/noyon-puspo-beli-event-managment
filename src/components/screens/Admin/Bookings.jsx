import React, { useEffect, useState } from "react";
import BookingCard from "../../common/BookingCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const admin = useSelector((state) => state.AuthReducer.admin);
  const navigate = useNavigate(); // navigation instance
  const [status, setStatus] = useState([]); // filter bookings by status
  const bookings = useSelector((state) => state.OrderSlice.orderList); // all bookings

  let list = [...bookings];

  // filter products by the category name
  const showByStatus = (cat) => {
    if (cat === "all") {
      setStatus(list);
    } else {
      const filterCategory = list.filter((item) => item.accepted == cat);
      setStatus(filterCategory);
    }
  };

  useEffect(() => {
    setStatus(list);
  }, [bookings]);

  useEffect(() => {
    if (!admin) {
      navigate("/admin/login");
    }
  }, []);
  return (
    <main>
      <div className="mx-auto w-[90%]">
        <h2 className="mb-4 text-3xl font-semibold text-black">All Bookings</h2>

        <select
          onChange={(e) => showByStatus(e.target.value)}
          id="countries"
          class="block w-full rounded-lg border border-primary bg-gray-50 p-2.5 text-sm text-gray-900"
        >
          <option selected disabled>
            Filter
          </option>
          <option value="all">All</option>
          <option value="accepted">Accepted</option>
          <option value="pending">Pending</option>
          <option value="cancel">Cancel</option>
        </select>

        <section className="my-2">
          {status.length > 0 ? (
            <>
              {status
                .sort((a, b) => b.timeStamp - a.timeStamp)
                .map((item, i) => (
                  <BookingCard key={i} item={item} />
                ))}
            </>
          ) : (
            <p className="text-xl text-red-600">Empty</p>
          )}
        </section>
      </div>
    </main>
  );
};

export default Bookings;
