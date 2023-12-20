import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
];
function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div className="ms:w-[32%]">
            <Product src="assets/images/product1.png" badge={true} />
          </div>
        ))}
    </>
  );
}
const Paginate = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="md:flex md:flex-wrap justify-between gap-y-12  ">
        <Items currentItems={currentItems} />
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        nextClassName="hidden"
        previousClassName="hidden"
        pageLinkClassName="inline-block border border-[#D8D8D8] px-3 py-2 font-dm text-base"
        containerClassName="flex gap-x-3.5 mt-12 "
        activeClassName="bg-black text-white"
      />
      <div className=" absolute bottom-0 right-0">
        <p className=" font-dm text-base text-[#767676]">Products from{itemOffset} to {itemOffset + itemsPerPage} of {items.length}</p>
      </div>
    </>
  );
};

export default Paginate;
