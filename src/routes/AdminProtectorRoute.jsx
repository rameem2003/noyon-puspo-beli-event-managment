import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/features/AdminAuthSlice";

const AdminProtectorRoute = ({ children }) => {
  const dispatch = useDispatch(); // dispatch instance
  const navigate = useNavigate(); // navigation instance
  const token = localStorage.getItem("token");

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await axios.get(`${import.meta.env.VITE_BASE_URL}/api/admin/verify`, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } catch (error) {
        localStorage.removeItem("token");
        dispatch(logout());
        navigate("/admin/login");
      }
    };

    if (token) {
      verifyToken();
    } else {
      navigate("/admin/login");
    }
  }, [token]);

  // if (!token) {
  //   navigate("/admin/login");
  // }
  return children;
};

export default AdminProtectorRoute;
