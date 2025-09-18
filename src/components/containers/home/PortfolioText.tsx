import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const PortfolioText = () => {
  const [hover, setHover] = useState(0);

  // Prevent link navigation
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <section
      className="section portfolio pb-0 fade-wrapper position-relative bg-black"
      style={{ padding: "20px" }}
    >
      <div
        className="portfolio__text-slider-w"
        style={{ paddingBottom: "0px", marginBottom: "20px" }}
      >
        <Swiper
          slidesPerView="auto"
          spaceBetween={40}
          speed={10000}
          loop
          centeredSlides
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
                <Link href="/services/seo" onClick={handleClick}>
                  Clicks that Stick
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                <Link href="/services/performance-marketing" onClick={handleClick}>
                  Ad-dicted to ROI
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="/services/social-media" onClick={handleClick}>
                  Post. Engage. Repeat.
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                <Link href="/services/branding" onClick={handleClick}>
                  Brands Without the Bland
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="/services/content-marketing" onClick={handleClick}>
                  Content That Converts
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                <Link href="/services/design-dev" onClick={handleClick}>
                  Pixel Perfect. Profit Driven.
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="/portfolio" onClick={handleClick}>
                  Growth You Can Scroll
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default PortfolioText;
