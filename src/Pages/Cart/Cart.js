import React from "react";
import Container from "../../Components/layout/Container";
import Bradcamp from "../../Components/layout/Bradcamp";
import Image from "../../Components/layout/Image";
import Button from "../../Components/layout/Button";

const Cart = () => {
  return (
    <Container>
      <Bradcamp />
      <div>
        <div className="relative overflow-x-auto shadow-sm sm:rounded-sm">
          <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-16 py-3">
                  <span className="sr-only  ">Image</span>
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Qty
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                <td className="p-4">
                  <Image
                    imgsrc="assets/images/CartImg.png"
                    className="max-h-full w-16 max-w-full md:w-32"
                    alt="Apple Watch"
                  />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  Apple Watch
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <button
                      className="me-3 inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                      type="button"
                    >
                      <span className="sr-only">Quantity button</span>
                      <svg
                        className="h-3 w-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 1h16"
                        />
                      </svg>
                    </button>
                    <div>
                      <input
                        type="number"
                        id="first_product"
                        className="block w-14 rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-1 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        placeholder="1"
                        required
                      />
                    </div>
                    <button
                      className="ms-3 inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                      type="button"
                    >
                      <span className="sr-only">Quantity button</span>
                      <svg
                        className="h-3 w-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  $599
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-red-600 hover:underline dark:text-red-500"
                  >
                    Remove
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div className=" flex justify-between">
            <form className=" my-5 ml-5 flex gap-x-5 ">
              <select
                id="SIZE"
                className="text block w-64 border  border-[#767676] p-2.5 font-dm text-sm text-[#767676] outline-none focus:border-[#767676] focus:ring-[#767676] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              >
                <option selected>SIZE</option>
                <option value="xs">XS</option>
                <option value="sm">SM</option>
                <option value="base">BASE</option>
                <option value="xl">XL</option>
                <option value="lg">LG</option>
              </select>
              <label
                for="SIZE"
                className=" flex items-center   font-dm text-base font-bold text-[#262626]"
              >
                Apply coupon
              </label>
            </form>
            <div className=" flex items-center pr-5  font-dm text-base font-bold text-[#262626]">
              Update cart{" "}
            </div>
          </div>
        </div>
      
         <div className=" mt-14">
         <h2 className="font-dm text-xl font-bold text-[#262626] mb-4">
            Cart totals
          </h2>
          <table className="  w-[664px] mb-8 ">
            <tr className=" border">
              <th>Subtotal</th>
              <td >389.99$</td>
            </tr>
            <tr className=" border">
              <th>Total</th>
              <td >389.99$</td>
            </tr>
          </table>
          <Button title="Proceed to Checkout" />
         </div>
        </div>
   
    </Container>
  );
};

export default Cart;
