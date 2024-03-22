import React from "react";
import Container from "../../Components/layout/Container";
import Bradcamp from "../../Components/layout/Bradcamp";
import Flex from "../../Components/layout/Flex";
import Image from "../../Components/layout/Image";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Container>
      <Bradcamp />
      <Flex className="flex gap-x-5 sm:gap-x-10">
        <Link to="#">
          <Image imgsrc={"assets/images/AboutImage1.png"} className="w-full" />
        </Link>
        <Link to="#">
          <Image imgsrc={"assets/images/AboutImage2.png"} className="w-full" />
        </Link>
      </Flex>
      <div className=" my-10 md:my-32">
        <h4 className=" font-dm text-lg md:text-3xl   text-[#262626]">
          Orebi is one of the world’s leading ecommerce brands
          andisinternationally recognized for celebrating the essence of classi
          Worldwide cool looking style.
        </h4>
      </div>
      <Flex className="justify-between sm:flex">
        <div className=" sm:w-[507px] ">
          <h2 className=" font-dm text-2xl font-bold text-[#262626]">
            Our Vision
          </h2>
          <p className=" my-3 font-dm text-base font-normal text-[#767676]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className=" sm:w-[507px] ">
          <h2 className=" font-dm text-2xl font-bold text-[#262626]">
            Our Vision
          </h2>
          <p className=" my-3 font-dm text-base font-normal text-[#767676]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className=" sm:w-[507px] ">
          <h2 className=" font-dm text-2xl font-bold text-[#262626]">
            Our Vision
          </h2>
          <p className=" mt-3 font-dm text-base font-normal text-[#767676]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </Flex>
    </Container>
  );
};

export default About;
