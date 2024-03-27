import React from "react";
import Container from "../../Components/layout/Container";
import Bradcamp from "../../Components/layout/Bradcamp";
import InputBox from "../../Components/layout/InputBox";
import Flex from "../../Components/layout/Flex";
import Button from "../../Components/layout/Button";
import { Link } from "react-router-dom";
const Signup = () => {
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
          Your Personal Details{" "}
        </h1>
        <Flex className="mb-4 flex w-1/2 gap-10">
          <InputBox as="input" placeholder="First Name" title="First Name" />
          <InputBox as="input" placeholder="Last Name" title="Last Name" />
        </Flex>
        <Flex className="mb-4 flex w-1/2 gap-10">
          <InputBox
            as="input"
            type="email"
            placeholder="company@domain.com"
            title="Email address"
          />
          <InputBox
            as="input"
            type="number"
            placeholder="Your phone number"
            title="Telephone"
          />
        </Flex>

        <h1 className=" mt-16 border-t py-12 font-dm text-4xl font-bold text-[#262626]">
          New Customer
        </h1>
        <Flex className="mb-4 flex w-1/2 gap-10">
          <InputBox
            as="input"
            placeholder="4279 Zboncak Port Suite 6212"
            title="Address 1"
          />
          <InputBox as="input" placeholder="_" title="Address 2" />
        </Flex>
        <Flex className="mb-4 flex w-1/2 gap-10">
          <InputBox as="input" placeholder="Your city" title="City" />
          <InputBox
            as="input"
            type="number"
            placeholder="05228"
            title="Post Code"
          />
        </Flex>
        <Flex className="mb-4 flex w-1/2 gap-10">
          <form className=" w-1/2 max-w-sm">
            <label
              for="countries"
              className=" mb-2 block  font-dm text-base font-bold text-[#262626]"
            >
              Country
            </label>
            <select
              id="countries"
              className="block w-full border-b border-[|#F0F0F0] p-2.5 font-dm text-sm text-[#767676] outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option selected>Please select</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
          <form className=" w-1/2 max-w-sm">
            <label
              for="region"
              className=" mb-2 block  font-dm text-base font-bold text-[#262626]"
            >
              Region/State
            </label>
            <select
              id="region"
              className="block w-full border-b border-[|#F0F0F0] p-2.5 font-dm text-sm text-[#767676] outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option selected>Please select</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
        </Flex>
        <h1 className=" mt-16 border-t py-12 font-dm text-4xl font-bold text-[#262626]">
          Your Personal Details{" "}
        </h1>
        <Flex className="mb-4 flex w-1/2 gap-10">
          <InputBox
            as="input"
            type="password"
            placeholder="Password"
            title="Password"
          />
          <InputBox
            as="input"
            type="password"
            placeholder="Repeat Password"
            title="Repeat Password"
          />
        </Flex>
        <div className=" mb-6 flex items-center gap-2 border-t pt-16 ">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="h-4 w-4  border-[#767676]  text-[#767676] "
          />
          <label
            for="default-checkbox"
            className="ms-2  font-dm text-sm text-[#767676] dark:text-gray-300"
          >
            I have read and agree to the Privacy Policy
          </label>
        </div>
        <div className=" mb-7 flex items-center gap-10">
          <label
            for="default-checkbox"
            className="ms-2  font-dm text-sm text-[#767676] dark:text-gray-300"
          >
            Subscribe Newsletter
          </label>
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="h-4 w-4  border-[#767676]  text-[#767676] "
          />
          <label
            for="default-checkbox"
            className="ms-2  font-dm text-sm text-[#767676] dark:text-gray-300"
          >
            Yes{" "}
          </label>
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            className="h-4 w-4  border-[#767676]  text-[#767676] "
          />
          <label
            for="checked-checkbox"
            className="ms-2  font-dm text-sm text-[#767676] dark:text-gray-300"
          >
            No{" "}
          </label>
        </div>

        <Link to="/login">
          <Button title="Log in" />
        </Link>
      </div>
    </Container>
  );
};

export default Signup;
