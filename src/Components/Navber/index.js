import React from "react";
import Flex from "../layout/Flex";
import Image from "../layout/Image";
import List from "../layout/List";
import ListItem from "../layout/ListItem";
const Navber = () => {
  return (
    <nav>
      <Flex className="flex">
        <div className="w-1/4">
          <Image imgsrc="images/logo.png" />
        </div>
        <div className="w-3/4">
          <List className="flex justify-end gap-x-10 font-dm text-sm font-regular text-[#767676] hover:font-bold">
            <ListItem
              className="font-dm text-sm font-regular text-[#767676] hover:font-bold"
              itemname="Home"
            />
            <ListItem className="font-dm text-sm font-regular text-[#767676] hover:font-bold" itemname="Shop"/>
            <ListItem className="font-dm text-sm font-regular text-[#767676] hover:font-bold" itemname="about" />
            <ListItem  className="font-dm text-sm font-regular text-[#767676] hover:font-bold" itemname="Contacts" />
            <ListItem className="font-dm text-sm font-regular text-[#767676] hover:font-bold" itemname="Journal" />
          </List>
        </div>
      </Flex>
    </nav>
  );
};

export default Navber;
