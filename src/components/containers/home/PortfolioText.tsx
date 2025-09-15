import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const PortfolioText = () => {
  const [hover, setHover] = useState(0);
  return (
    <section
      className="section portfolio pb-0 fade-wrapper position-relative bg-black "
      style={{
        padding: "20px",
      }}
    >
      <div
        className="portfolio__text-slider-w "
        style={{
          paddingBottom: "0px",
          marginBottom: "20px",
        }}
      >
        <Swiper
          slidesPerView="auto"
          spaceBetween={40}
          speed={10000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false,
          }}
          className="portfolio__text-slider"
        >
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                Clicks that Stick
                <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
              </h2>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                Ad-dicted to ROI
                <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
              </h2>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                Post. Engage. Repeat.
                <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
              </h2>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                Brands Without the Bland
                <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
              </h2>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                Content That Converts
                <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
              </h2>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                Pixel Perfect. Profit Driven.
                <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
              </h2>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                Growth You Can Scroll
                <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default PortfolioText;
