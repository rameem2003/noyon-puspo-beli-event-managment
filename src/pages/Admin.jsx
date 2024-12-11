import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/features/AdminAuthSlice";

const Admin = () => {
  const navigate = useNavigate(); // navigation instance
  const dispatch = useDispatch(); // dispatch instance
  const admin = useSelector((state) => state.AuthReducer.admin);
  console.log(admin);

  // function for logout
  const handleLogout = () => {
    dispatch(logout(null));
    navigate("/admin/login");
  };

  useEffect(() => {
    if (!admin) {
      navigate("/admin/login");
    }
  }, []);

  return (
    <main>
      <button onClick={handleLogout}>Logout</button>
    </main>
  );
};

export default Admin;
