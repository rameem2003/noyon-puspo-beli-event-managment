import React, { useEffect } from "react";
import AdminHeader from "../components/shared/AdminHeader";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { orders } from "../redux/features/OrdersSlice";

const AdminRootLayout = () => {
  const navigate = useNavigate(); // navigation instance
  const dispatch = useDispatch(); // dispatch instance
  const admin = useSelector((state) => state.AuthReducer.admin); // admin data

  // useEffect(() => {
  //   if (admin) {
  //     navigate("/admin/home");
  //   } else {
  //     navigate("/admin/login");
  //   }
  // }, []);
  // fetch all order's
  const fetchOrders = async () => {
    let res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/booking`);
    dispatch(orders(res.data));
  };

  useEffect(() => {
    fetchOrders();
  });
  return (
    <>
      <AdminHeader />
      <Outlet />
    </>
  );
};

export default AdminRootLayout;
