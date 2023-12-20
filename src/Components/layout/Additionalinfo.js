import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { MdLocalShipping } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
const Additionalinfo = () => {
  return (
    <div className=" border-b-2 border-[#F0F0F0] md:py-7">
      <Container>
        <Flex className="flex justify-between">
          <Flex className="flex">
            <p className=" text-lg md:text-4xl font-bold text-[#262626]">2</p>
            <p className="ml-1 md:ml-4 md:mt-3 font-dm text-[10px] md:text-base text-[#6D6D6D]">
              Two years warranty
            </p>
          </Flex>
          <Flex className="flex">
            <MdLocalShipping className=" text-lg md:text-4xl" />
            <p className="ml-1 md:ml-4 md:mt-2 font-dm text-[10px] md:text-base text-[#6D6D6D]">
              Free shipping
            </p>
          </Flex>
          <Flex className="flex">
            <GiReturnArrow className=" text-lg md:text-4xl" />
            <p className="ml-1 md:ml-4 md:mt-2 font-dm text-[10px] md:text-base text-[#6D6D6D]">
              Return policy in 30 days
            </p>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Additionalinfo;
