import React from "react";
import Flex from "../common/Flex";
import { useDispatch, useSelector } from "react-redux";
import { IoLogOut } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../redux/features/AdminAuthSlice";
import ListItem from "../common/ListItem";
import { FaHome } from "react-icons/fa";
import List from "../common/List";
import { IoMdSettings } from "react-icons/io";
import { TbAppsFilled } from "react-icons/tb";

const AdminHeader = () => {
  const navigate = useNavigate(); // navigation instance
  const dispatch = useDispatch(); // dispatch instance
  const admin = useSelector((state) => state.AuthReducer.admin); // admin data

  // function for logout
  const handleLogout = () => {
    dispatch(logout(null));
    navigate("/admin/login");
  };

  return (
    <>
      <header className="bg-primary p-2">
        <div className="mx-auto w-[90%]">
          <Flex className="items-center justify-between">
            <h1 className="text-sm font-semibold text-white lg:text-xl">
              Welcome, {admin?.admin}
            </h1>

            <button
              onClick={handleLogout}
              className="flex items-center gap-1 text-sm text-white lg:text-lg"
            >
              <IoLogOut className="text-2xl" />
              <span className="hidden md:block">Logout {admin?.userName}</span>
            </button>
          </Flex>
        </div>
      </header>

      <nav className="bg-primary">
        <List className="flex items-center justify-between">
          <ListItem className="flex-1">
            <NavLink
              to="/admin/home"
              className={({ isActive }) =>
                `flex items-center justify-center gap-2 ${isActive ? "bg-primary text-white" : "bg-white text-black"} p-2`
              }
            >
              <FaHome /> Home
            </NavLink>
          </ListItem>
          <ListItem className="flex-1">
            <NavLink
              to="/admin/bookings"
              className={({ isActive }) =>
                `flex items-center justify-center gap-2 ${isActive ? "bg-primary text-white" : "bg-white text-black"} p-2`
              }
            >
              <TbAppsFilled /> Bookings
            </NavLink>
          </ListItem>
          {/* <ListItem className="flex-1">
            <NavLink
              to="/admin/settings"
              className={({ isActive }) =>
                `flex items-center justify-center gap-2 ${isActive ? "bg-primary text-white" : "bg-white text-black"} p-2`
              }
            >
              <IoMdSettings /> Settings
            </NavLink>
          </ListItem> */}
        </List>
      </nav>
    </>
  );
};

export default AdminHeader;
