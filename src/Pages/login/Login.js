import React from "react";
import Container from "../../Components/layout/Container";
import Bradcamp from "../../Components/layout/Bradcamp";
import InputBox from "../../Components/layout/InputBox";
import Flex from "../../Components/layout/Flex";
import Button from "../../Components/layout/Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <Bradcamp />
      <div>
        <p className=" w-[644px] font-dm text-base text-[#767676]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </p>
        <h1 className=" mt-16 border-t py-12 font-dm text-4xl font-bold text-[#262626]">
          Returning Customer
        </h1>
        <Flex className="flex w-1/2 gap-10 mb-4">
          <InputBox
            as="input"
            type="email"
            placeholder="company@domain.com"
            title="Email address"
          />
          <InputBox
            as="input"
            type="password"
            placeholder="......"
            title="Password"
          />
        </Flex>
       <Button title="Log in"/>
       <h1    className=" mt-16 border-t py-12 font-dm text-4xl font-bold text-[#262626]">
       New Customer
        </h1>
        <p    className=" w-[644px] font-dm text-base text-[#767676] mb-12">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </p>
        <Link to="/signup">
        <Button  title="Continue"/>
        </Link>
      
      </div>
    </Container>
  );
};

export default Login;
