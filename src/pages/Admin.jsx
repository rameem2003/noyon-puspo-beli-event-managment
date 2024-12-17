import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HIghLights from "../components/screens/Admin/AdminHome/HIghLights";
import PendingList from "../components/screens/Admin/AdminHome/PendingList";

const Admin = () => {
  const navigate = useNavigate(); // navigation instance
  const admin = useSelector((state) => state.AuthReducer.admin);
  console.log(admin);

  useEffect(() => {
    if (!admin) {
      navigate("/admin/login");
    }
  }, []);

  return (
    <main>
      <div className="mx-auto w-[90%]">
        <HIghLights />
        <PendingList />
      </div>
    </main>
  );
};

export default Admin;
