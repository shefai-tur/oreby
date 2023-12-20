import React from "react";
import Container from "../../Components/layout/Container";
import Flex from "../../Components/layout/Flex";
import Bradcamp from "../../Components/Bradcamp";
import Paginate from "../../Components/layout/Paginate";

const Shop = () => {
  return (
    <Container>
      <div>
          <Bradcamp/>
        <Flex className="flex gap-10">
          <div className=" w-1/4 bg-red-500"></div>
          <div className=" w-3/4 relative">
          <Paginate itemsPerPage={12} />
          </div>
        </Flex>
      </div>
    </Container>
  );
};

export default Shop;
