import { configureStore } from "@reduxjs/toolkit";
import BookingSlice from "../features/BookingSlice";

export const store = configureStore({
  reducer: {
    BookingReducer: BookingSlice,
  },
});
