import React, { useEffect, useRef, useState } from "react";
import Container from "../../Components/layout/Container";
import Flex from "../../Components/layout/Flex";

import Paginate from "../../Components/layout/Paginate";
import Bradcamp from "../../Components/layout/Bradcamp";
import Leftsidbarshop from "../../Components/layout/Leftsidbarshop";
import { FaBars } from "react-icons/fa";
const Shop = () => {

  const [paginateNumber, SetPaginateNumber] = useState(12);
  let handelpasintaionSelect = (e) => {
    SetPaginateNumber(+e.target.value);
  };
  let [show, setShow] = useState(false);
  // let sideref = useRef()
  useEffect(() => {
    function scrollWidth() {
      if (window.innerWidth < 450) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    // document.body.addEventListener("click", (e) => {
    //   if (sideref.current.contains(e.target)) {
    //     setShow(true);
    //   } else {
    //     setShow(false);
    //   }
    //   console.log("clickdsfjdfj");
    // })
    scrollWidth();
    window.addEventListener("resize", scrollWidth);
  }, []);

  return (
    <Container>
      <div  >
        <Bradcamp />

        <Flex className="relative flex gap-10">
          {show &&
           <div className=" absolute top-20 left-0 z-50 w-[70%] bg-[#fcfbfb]  p-3  sm:static sm:z-0 sm:w-1/3 sm:bg-transparent	 md:w-1/4 ">
        
           <Leftsidbarshop />
         </div>
          }

          <div className=" relative sm:w-3/4  ">
            <div className="mb-14 flex  gap-4">
              <FaBars 
                onClick={() => {
                  setShow(!show);
                }}
                // dropref={sideref}
                className="mt-5 mr-5 text-[#767676] sm:hidden"
              />
              <div className="items-center gap-4 sm:flex">
                <div className=" font-regular font-dm text-base text-[#767676] ">
                  Sort by:
                </div>
                <select className="select select-bordered font-regular max-w-xs border border-[#F0F0F0] font-dm text-base text-[#767676] md:w-60">
                  <option disabled selected>
                    Featured
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>

              <div className="items-center gap-4 sm:flex">
                <div className=" font-regular ml-6 font-dm text-base text-[#767676]">
                  Show:
                </div>
                <select
                  onClick={handelpasintaionSelect}
                  className="select select-bordered font-regular w-36 max-w-xs border border-[#F0F0F0] font-dm text-base text-[#767676]"
                >
                  <option>12</option>
                  <option>24</option>
                  <option>36</option>
                </select>
              </div>
            </div>

            <Paginate itemsPerPage={paginateNumber} />
          </div>
        </Flex>
      </div>
    </Container>
  );
};

export default Shop;
