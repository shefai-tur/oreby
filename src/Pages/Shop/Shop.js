import React, { useState } from "react";
import Container from "../../Components/layout/Container";
import Flex from "../../Components/layout/Flex";

import Paginate from "../../Components/layout/Paginate";
import Bradcamp from "../../Components/layout/Bradcamp";
import Leftsidbarshop from "../../Components/layout/Leftsidbarshop";

const Shop = () => {
const [paginateNumber,SetPaginateNumber]= useState(12)
let handelpasintaionSelect =(e)=>{
  SetPaginateNumber(+e.target.value);
}

  return (
    <Container>
      <div>
        <Bradcamp />
        <Flex className="flex gap-10">
          <div className=" w-1/4">
            <Leftsidbarshop/>
          </div>
          <div className=" relative w-3/4">
            <div className="flex gap-4  mb-14">
            <div className=" font-dm font-regular text-base text-[#767676]">Sort by:</div>
            <select className="select select-bordered w-60 max-w-xs border border-[#F0F0F0] font-dm font-regular text-base text-[#767676]">
              <option disabled selected>
                Featured
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <div className=" font-dm font-regular text-base text-[#767676] ml-6">Show:</div>
            <select onClick={handelpasintaionSelect} className="select select-bordered w-36 max-w-xs border border-[#F0F0F0] font-dm font-regular text-base text-[#767676]">
              <option >
                12
              </option>
              <option >24</option>
              <option >36</option>
            </select>
            </div>

            <Paginate itemsPerPage={paginateNumber} />
          </div>
        </Flex>
      </div>
    </Container>
  );
};

export default Shop;
