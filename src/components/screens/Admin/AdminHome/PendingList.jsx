import React from "react";
import { useSelector } from "react-redux";
import Flex from "../../../common/Flex";

const PendingList = () => {
  const bookings = useSelector((state) => state.OrderSlice.orderList); // all bookings

  const pending = bookings.filter((item) => item.accepted == "pending");
  return (
    <section className="mt-4">
      <h2 className="mb-2 text-3xl font-semibold text-black">
        Pending Bookings
      </h2>

      <div className="my-2">
        {pending.map((item, i) => (
          <div className="mb-2 rounded-lg border-[2px] border-primary p-3">
            <Flex className="items-center justify-between">
              <div>
                <h2 className="text-base font-medium text-black">
                  {item.name}
                </h2>

                <h3>Phone: {item.phone}</h3>
                <h3>Package Name: {item.packID}</h3>
              </div>

              <div>
                <h3>District: {item.district}</h3>
                <h3>Time: {item.time}</h3>
              </div>
            </Flex>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PendingList;
