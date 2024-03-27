import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import Dropdown from "./Dropdown";
import { FaBars, FaSearch, FaUserAlt } from "react-icons/fa";
import { RxTriangleDown } from "react-icons/rx";
import { BsFillCartFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import List from "./List";
import ListItem from "./ListItem";
import Search from "./Search";
import Image from "./Image";

const Hedar = () => {
  let [cetagoryDropDownShow, setCetagoryDropDownShow] = useState(false);
  let [userDropDownShow, setUserDropDownShow] = useState(false);
  let [cartDropDownShow, setCartDropDownShow] = useState(false);
  let cetagoryref = useRef();
  let userref = useRef();
  let cartref = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (cetagoryref.current.contains(e.target)) {
        setCetagoryDropDownShow(true);
      } else {
        setCetagoryDropDownShow(false);
      }
      if (userref.current.contains(e.target)) {
        setUserDropDownShow(true);
      } else {
        setUserDropDownShow(false);
      }
      if (cartref.current.contains(e.target)) {
        setCartDropDownShow(true);
      } else {
        setCartDropDownShow(false);
      }
    });
  });
  return (
    <div className="bg-[#F5F5F3] py-6">
      <Container>
        <Flex className="flex justify-between">
          <div className="z-50 flex items-center">
            <Dropdown dropref={cetagoryref}>
              <p className="flex items-center gap-2 font-dm text-sm font-normal ">
                <FaBars />
                <span className="hidden lg:inline-block">
                  {" "}
                  Shop by Category
                </span>
              </p>
              {cetagoryDropDownShow && (
                <List className="absolute mt-5 w-[263px] bg-[#262626] font-dm text-sm font-normal ">
                  <ListItem
                    className="border-b border-solid border-[#2D2D2D]  py-4 px-5 text-[#9b9999]  duration-200 hover:pl-8 hover:font-bold   hover:text-white "
                    itemname="Accesories"
                  />
                  <ListItem
                    className=" border-b  border-solid border-[#2D2D2D] py-4  px-5 text-[#9b9999] duration-200 hover:pl-8 hover:font-bold  hover:text-white "
                    itemname="Furniture"
                  />
                  <ListItem
                    className="border-b  border-solid border-[#2D2D2D] py-4  px-5 text-[#9b9999] duration-200 hover:pl-8 hover:font-bold  hover:text-white "
                    itemname="Electronics"
                  />
                  <ListItem
                    className="border-b  border-solid border-[#2D2D2D] py-4  px-5 text-[#9b9999]  duration-200 hover:pl-8 hover:font-bold  hover:text-white "
                    itemname="Clothes"
                  />
                  <ListItem
                    className="border-b  border-solid border-[#2D2D2D] py-4  px-5 text-[#9b9999] duration-200 hover:pl-8 hover:font-bold  hover:text-white "
                    itemname="Bags"
                  />
                  <ListItem
                    className="border-b  border-solid border-[#2D2D2D] py-4  px-5 text-[#9b9999] duration-200 hover:pl-8 hover:font-bold  hover:text-white "
                    itemname="Home appliances"
                  />
                </List>
              )}
            </Dropdown>
          </div>
          <div className="relative  lg:w-[600px]">
            <Search
              className="w-full py-4 px-5 font-dm text-sm font-normal placeholder:text-[#C4C4C4] "
              placeholder="Search Products"
            />
            <FaSearch className=" absolute top-5 right-4" />
          </div>
          <div className=" flex items-center">
            <Flex className="flex gap-10">
              <Dropdown className="relative z-50" dropref={userref}>
                <div className="flex">
                  <FaUserAlt />
                  <RxTriangleDown />
                </div>
                {userDropDownShow && (
                  <List className="absolute right-0 mt-5  w-[200px] border border-solid border-[#F0F0F0] bg-white text-center font-dm text-sm font-normal ">
                    <ListItem
                      className="border-b border-solid border-[#F0F0F0]  py-4 px-5 text-[#262626]  duration-200  hover:bg-[#262626]  hover:font-bold  hover:text-white "
                      itemname="My Account"
                      href="/my_account"
                    />

                    <ListItem
                      className=" border-b  border-solid border-[#F0F0F0] py-4  px-5 text-[#262626] duration-200  hover:bg-[#262626] hover:font-bold   hover:text-white "
                      itemname="Login"
                      href="/login"
                    />
                  </List>
                )}
              </Dropdown>

              <div>
                <Dropdown className="relative z-50" dropref={cartref}>
                  <BsFillCartFill className=" text-xl" />
                  {cartDropDownShow && (
                    <div className="absolute right-0 mt-5  w-[360px] border border-solid border-[#F0F0F0] bg-[#F5F5F3] ">
                      <div className=" flex p-5">
                        <div>
                          <Image imgsrc="assets/images/CartImg.png" />
                        </div>
                        <div className=" ml-5 mt-4 font-dm text-sm font-bold">
                          <h1>Black Smart Watch</h1>
                          <p className=" mt-3">$44.00</p>
                        </div>
                        <div className="ml-10 flex items-center ">
                          <ImCross />
                        </div>
                      </div>
                      <div className="bg-white px-5">
                        <div className="flex py-3">
                          <h2 className=" font-dm text-base font-normal text-[#767676]">
                            Subtotal:
                          </h2>
                          <p className=" font-dm text-base font-bold text-[#262626]">
                            $44.00
                          </p>
                        </div>
                        <List className=" flex gap-5 pb-5">
                          <ListItem
                            className=" border border-solid  border-[#262626] px-10 py-4 font-dm text-sm font-bold text-[#262626] duration-200 hover:bg-[#262626] hover:text-white"
                            itemname=" View Cart"
                            href="/cart"
                          />
                          <ListItem
                            className=" border border-solid  border-[#262626] px-10 py-4 font-dm text-sm font-bold text-[#262626] duration-200 hover:bg-[#262626] hover:text-white"
                            itemname="Checkout"
                            href="/my_account"
                          />
                        </List>
                      </div>
                    </div>
                  )}
                </Dropdown>
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Hedar;
