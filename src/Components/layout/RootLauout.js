import React from "react";
import Navber from "./Navber";
import Hedar from "./Hedar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const RootLauout = () => {
  return (
    <>
      <Navber />
      <Hedar />
      <Outlet/>
      <Footer/>
    </>
  );
};

export default RootLauout;
