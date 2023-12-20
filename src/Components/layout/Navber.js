import React, { useEffect, useState } from "react";
import Flex from "./Flex";
import Image from "./Image";
import List from "./List";
import ListItem from "./ListItem";
import { FaBars } from "react-icons/fa";
import Container from "./Container";
import { Link } from "react-router-dom";
const Navber = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    function scrollWidth() {
      if (window.innerWidth < 1024) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    scrollWidth();
    window.addEventListener("resize", scrollWidth);
  }, []);
  return (
    <nav className=" py-7">
      <Container>
        <Flex className="lg:flex">
          <div className="w-1/4">
            <Image imgsrc="assets/images/logo.png" />
          </div>
          <div className="lg:w-3/4">
            <FaBars
              onClick={() => {
                setShow(!show);
              }}
              className="absolute top-2.5 right-0 ml-auto lg:hidden"
            />
            {show && (
              <List className="gap-x-10 lg:flex  lg:justify-end ">
                <ListItem
                  className="hover:font-regular mt-2.5 font-dm text-sm font-bold text-[#767676] lg:mt-0"
                  itemname="Home"
                />
              
                <ListItem
                  className="font-regular mt-2.5 font-dm text-sm text-[#767676] hover:font-bold lg:mt-0"
                  itemname="Shop"
                  href="/product"
                />
           
               
                <ListItem
                  className="font-regular mt-2.5 font-dm text-sm text-[#767676] hover:font-bold lg:mt-0"
                  itemname="about"
                />
                <ListItem
                  className="font-regular mt-2.5 font-dm text-sm text-[#767676] hover:font-bold lg:mt-0"
                  itemname="Contacts"
                />
                <ListItem
                  className="font-regular  mt-2.5 font-dm text-sm  text-[#767676] hover:font-bold lg:mt-0"
                  itemname="Journal"
                />
              </List>
            )}
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navber;
