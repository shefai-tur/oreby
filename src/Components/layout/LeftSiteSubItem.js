import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const LeftSiteSubItem = (props) => {
  let [subshow, setSubshow] = useState(false);
  let [subdrop, setSubDrop] = useState(props.SubDropdown);

  return (
    <div>
      {subdrop ? (
        <div
          onClick={() => setSubshow(!subshow)}
          className="flex cursor-pointer items-center justify-between  border-b-2 border-[#F0F0F0] py-5 font-dm text-base font-normal text-[#767676] "
        >
          <div>{props.itemTitle}</div>

          <FaPlus className=" text-xs " />
        </div>
      ) : (
        <div className=" cursor-pointer  border-b-2 border-[#F0F0F0] py-5 font-dm  text-base font-normal text-[#767676]">
          {props.color && (
            <span
              className=" mr-2 inline-block h-[11px] w-[11px] rounded-full "
              style={{ background: props.color }}
            ></span>
          )}
          {props.itemTitle}{" "}
        </div>
      )}

      {subshow && <div>{props.children}</div>}
    </div>
  );
};

export default LeftSiteSubItem;
