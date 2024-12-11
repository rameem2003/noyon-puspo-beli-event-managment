import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: localStorage.getItem("event_admin")
    ? JSON.parse(localStorage.getItem("event_admin"))
    : null,
};

export const AdminAuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    signin: (state, action) => {
      state.admin = action.payload;
      localStorage.setItem("event_admin", JSON.stringify(action.payload));
    },

    logout: (state) => {
      state.admin = null;
      localStorage.setItem("event_admin", JSON.stringify(null));
    },
  },
});

// Action creators are generated for each case reducer function
export const { signin, logout } = AdminAuthSlice.actions;

export default AdminAuthSlice.reducer;
