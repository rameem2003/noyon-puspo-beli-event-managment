import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../components/shared/AdminHeader";

const AdminRootLayout = () => {
  return (
    <>
      <AdminHeader />
      <Outlet />
    </>
  );
};

export default AdminRootLayout;
