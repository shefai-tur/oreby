import React from "react";
import Container from "../../Components/layout/Container";
import Bradcamp from "../../Components/layout/Bradcamp";
import Flex from "../../Components/layout/Flex";
import List from "../../Components/layout/List";
import ListItem from "../../Components/layout/ListItem";
const My_Account = () => {
  return (
    <Container>
      <Bradcamp />
      <Flex className="flex gap-10">
        <List className=" w-[233px]">
          <ListItem
            className=" border-b border-[#F0F0F0] py-5 font-dm text-base font-bold text-[#262626]"
            itemname="Dashboard"
          />

          <ListItem
            className=" border-b border-[#F0F0F0] py-5 font-dm text-base text-[#767676]"
            itemname="Others"
          />
          <ListItem
            className=" border-b border-[#F0F0F0] py-5 font-dm text-base text-[#767676]"
            itemname="Donwloads"
          />
          <ListItem
            className=" border-b border-[#F0F0F0] py-5 font-dm text-base text-[#767676]"
            itemname="Addresses"
          />
          <ListItem
            className=" border-b border-[#F0F0F0] py-5 font-dm text-base text-[#767676]"
            itemname="Account details"
          />
          <ListItem
            className=" border-b border-[#F0F0F0] py-5 font-dm text-base text-[#767676]"
            itemname="Logout"
          />
        </List>
        <div>
          <p className=" pt-5 font-dm text-base text-[#767676]">
            Hello <span className=" text-[#262626]">admin</span> (not{" "}
            <span className=" text-[#262626]">admin</span> ?{" "}
            <span className=" text-[#262626]">Log out</span> )
          </p>
          <p className=" pt-10 font-dm text-base text-[#767676]">
            From your account dashboard you can view your{" "}
            <span className=" text-[#262626]">recent sorder</span>, manage your{" "}
            <span className=" text-[#262626]">
              shipping and billing addresses
            </span>{" "}
            , and{" "}
            <span className=" text-[#262626]">
              edit your password and account details.
            </span>
          </p>
        </div>
      </Flex>
    </Container>
  );
};

export default My_Account;
