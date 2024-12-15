import { configureStore } from "@reduxjs/toolkit";
import BookingSlice from "../features/BookingSlice";
import AdminAuthSlice from "../features/AdminAuthSlice";
import OrderSlice from "../features/OrdersSlice";

export const store = configureStore({
  reducer: {
    BookingReducer: BookingSlice,
    AuthReducer: AdminAuthSlice,
    OrderSlice: OrderSlice,
  },
});
