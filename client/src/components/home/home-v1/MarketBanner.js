"use client";
import Image from "next/image";
import Slider from "react-slick";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const MarketBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <div>
          <img
            style={{
              width: "100%",
              height: "300px",
            }}
            src="/images/home/investment-banner.jpg"
            alt="scroll image"
          />
        </div>
        <div>
          <img
            style={{
              width: "100%",
              height: "300px",
            }}
            src="/images/home/investment-banner.jpg"
            alt="scroll image"
          />
        </div>
        <div>
          <img
            style={{
              width: "100%",
              height: "300px",
            }}
            src="/images/home/investment-banner.jpg"
            alt="scroll image"
          />
        </div>
        <div>
          <img
            style={{
              width: "100%",
              height: "300px",
            }}
            src="/images/home/investment-banner.jpg"
            alt="scroll image"
          />
        </div>
      </Slider>
    </div>
  );
};

export default MarketBanner;
