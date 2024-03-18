import React, { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import LeftSiteSubItem from "./layout/LeftSiteSubItem";

const LeftsSdbarContent = ({ Dropdown, title, data }) => {
  let [show, setShow] = useState(true);
  let [drop, setDrop] = useState(Dropdown);
  console.log(data);
  return (
    <div>
      {drop ? (
        <div
          onClick={() => setShow(!show)}
          className="mb-8 flex cursor-pointer items-center justify-between"
        >
          <div className=" font-dm text-xl font-bold text-[#262626]">
            {title}
          </div>

          <IoMdArrowDropup />
        </div>
      ) : (
        <div className=" mb-8 cursor-pointer font-dm text-xl font-bold text-[#262626] ">
          {title}
        </div>
      )}

      {show && (
        <div>
          {data.map((item) => (
            <LeftSiteSubItem
              SubDropdown={item.subcategory ? true : false}
              itemTitle={item.name}
              color={item.code}
            >
              {item.subcategory &&
                item.subcategory.map((sItem) => (
                  <p className="cursor-pointer  border-b-2 border-[#F0F0F0] py-2 font-dm  text-base font-normal text-[#767676]">
                    {sItem.name}
                  </p>
                ))}
            </LeftSiteSubItem>
          ))}
        </div>
      )}
    </div>
  );
};

export default LeftsSdbarContent;
