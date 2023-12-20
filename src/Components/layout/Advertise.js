import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { Link } from "react-router-dom";
import Image from "./Image";

const Advertise = () => {
  return (
    <div className="mt-10 md:mt-32">
      <Container>
        <Flex className="flex gap-x-2 md:gap-x-10">
           <div className="max-w-2/4">
            <Link to="#">
               <Image imgsrc="assets/images/ad1.png"></Image>
            </Link>
           </div>
           <div className="max-w-2/4 ">
           <Link to="#" className=" inline-block mb-2 md:mb-10">
               <Image imgsrc="assets/images/ad2.png"></Image>
            </Link>
            <Link to="#" >
               <Image imgsrc="assets/images/ad3.png"></Image>
            </Link>
           </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Advertise;
