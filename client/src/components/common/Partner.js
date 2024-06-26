"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const Partner = () => {
  const partnerImages = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
  const [showSlider, setShowSlider] = useState(false);
  useEffect(() => {
    setShowSlider(true);
  }, []);

  return (
    <>
      {showSlider && (
        <Swiper
          spaceBetween={10}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          slidesPerView={6}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 6,
            },
          }}
          loop
          className="swiper-container"
          style={{
            textAlign: "center",
          }}
        >
          {partnerImages.map((imageName, index) => (
            <SwiperSlide key={index}>
              <div className="item">
                <div className="partner_item">
                  <Image
                    width={122}
                    height={24}
                    style={{ objectFit: "contain" }}
                    className="wa m-auto"
                    src={`/images/partners/${imageName}`}
                    alt={imageName}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default Partner;
