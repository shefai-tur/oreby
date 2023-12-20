import React from "react";
import Container from "../../Components/layout/Container";
import Flex from "../../Components/layout/Flex";

import Paginate from "../../Components/layout/Paginate";
import Bradcamp from "../../Components/layout/Bradcamp";

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
