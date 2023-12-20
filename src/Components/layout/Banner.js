import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Image from "./Image";
import { Link } from "react-router-dom";

const Banner = () => {
  let [dotActive, setDotActive] = useState(0);
  var settings = {
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => (
      <div
        style={{
          padding: "10px",
          position: "absolute",
          top: "50%",
          left: "8%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px black solid",
                padding: "10px 0",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "10px 0",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                 padding: "5px",
                position: "absolute",
                top: "50%",
                left: "1%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "30px",
                      color: "#262626",
                      borderRight: "3px black solid",
                      fontSize: "12px",
                    }
                  : {
                      width: "30px",
                      color: "transparent",
                      borderRight: "3px white solid",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div >
        <Link to="#">
          <Image  className=" w-full"  imgsrc="assets/images/Banner.png" />
        </Link>
      </div>
      <div>
        <Link to="#">
          <Image imgsrc="assets/images/Banner.png" />
        </Link>
      </div>
      <div>
        <Link to="#">
          <Image imgsrc="assets/images/Banner.png" />
        </Link>
      </div>
    </Slider>
  );
};

export default Banner;
