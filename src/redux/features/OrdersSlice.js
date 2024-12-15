import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderList: [],
};

export const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    orders: (state, action) => {
      state.orderList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { orders } = OrderSlice.actions;

export default OrderSlice.reducer;
