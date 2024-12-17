import React from "react";
import Navigation from "../components/shared/Navigation";
import Footer from "../components/shared/Footer";
import { Outlet } from "react-router-dom";

const Rootlayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default Rootlayout;
