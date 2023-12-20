import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
const Bradcamp = () => {
  return (
    <div className=" my-32">
      <h1 className=" font-dm text-5xl font-bold">Products</h1>
      <h1 className=" mt-3 flex gap-x-2 font-dm text-[#767676] items-center ">
       <Link to="/">Home</Link>  <IoIosArrowForward /> {window.location.pathname.split("/")[1]}
      </h1>
    </div>
  );
};

export default Bradcamp;
