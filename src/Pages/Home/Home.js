import React from "react";
import Banner from "../../Components/layout/Banner";
import Additionalinfo from "../../Components/layout/Additionalinfo";

import Advertise from "../../Components/layout/Advertise";
import NewArrivals from "../../Components/layout/NewArrivals";
import Bestsellers from "../../Components/layout/Bestsellers";
import MiddalAds from "../../Components/layout/MiddalAds";
import SpecialOffers from "../../Components/layout/SpecialOffers";



const Home = () => {
  return (
    <div>
      <Banner/>
      <Additionalinfo/>
      <Advertise/>
      <NewArrivals/>
      <Bestsellers/>
      <MiddalAds/>
      <SpecialOffers/>
     
    </div>
  );
};

export default Home;
