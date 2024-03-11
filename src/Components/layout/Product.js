import React from "react";
import Image from "./Image";
import Badge from "./Badge";
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import Flex from "./Flex";
const Product = ({ src, badge }) => {
  return (
   <div>
  
     <div className=" relative overflow-hidden group">
      <Image imgsrc={src} />
      {badge && <Badge titel="New" />}
      <div className=" absolute bottom-[-97%] sm:bottom-[-60%]  left-0 h-28 sm:h-40 w-full bg-white py-6 px-7
      group-hover:bottom-0 ease-in duration-300">
        <Flex className="flex justify-end">
          <p className="font-dm text-xs sm:text-base text-[#767676] ">
            Free shipping
          </p>
          <FaHeart className=" ml-4 mt-1 text-xs sm:text-base" />
        </Flex>
        <Flex className="flex justify-end mt-2 sm:mt-5">
          <p className="font-dm text-xs sm:text-base text-[#767676] ">
          Compare
          </p>
          <TfiReload className=" ml-4 mt-1 text-xs sm:text-base" />
        </Flex>
        <Flex className="flex justify-end mt-2 sm:mt-5">
          <p className="font-dm font-bold text-[#262626]  text-xs sm:text-base ">
          Add to Cart
          </p>
          <FaShoppingCart className=" ml-4 mt-1  text-xs sm:text-base" />
        </Flex>
      </div>
    </div>
    <div className=" mt-6">
     <Flex className="flex justify-between">
     <h3 className=" font-dm font-bold text-sm sm:text-xl">Basic Crew Neck Tee</h3>
     <p className=" font-dm font-regular text-xs sm:text-base text-[#767676]">$44.00</p>
     </Flex>
     <p className=" font-dm font-regular text-xs sm:text-base text-[#767676] mt-2 sm:mt-4">Black</p>
    </div>
   </div>
  );
};

export default Product;
