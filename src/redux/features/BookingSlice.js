import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  booking: localStorage.getItem("event_system")
    ? JSON.parse(localStorage.getItem("event_system"))
    : null,
};

export const BookingSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    pushBooking: (state, action) => {
      state.booking = action.payload;
      localStorage.setItem("event_system", JSON.stringify(action.payload));
    },

    removeBooking: (state) => {
      state.booking = null;
      localStorage.setItem("event_system", JSON.stringify(null));
    },
  },
});

// Action creators are generated for each case reducer function
export const { pushBooking, removeBooking } = BookingSlice.actions;

export default BookingSlice.reducer;
