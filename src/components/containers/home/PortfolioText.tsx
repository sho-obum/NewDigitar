import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const lines = [
  { text: "Clicks that Stick" },
  { text: "Ad-dicted to ROI" },
  { text: "Post. Engage. Repeat." },
  { text: "Brands Without the Bland" },
  { text: "Content That Converts" },
  { text: "Pixel Perfect. Profit Driven." },
];

function MobileTextSlider() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    setIsPaused((prev) => !prev);
  };

  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={40}
      speed={10000}
      loop={true}
      centeredSlides={true}
      allowTouchMove={false} // ✅ disable drag/scroll control
      modules={[Autoplay]}
      autoplay={
        isPaused
          ? false
          : {
              delay: 1,
              disableOnInteraction: false,
              reverseDirection: false, // ✅ left → right
            }
      }
      className="portfolio__text-slider"
    >
      {lines.map((line, i) => {
        const isEven = i % 2 === 0;
        const isActive = activeIndex === i;
        const isWhite = isActive ? !isEven : isEven; // toggle color on click

        return (
          <SwiperSlide key={i}>
            <div
              className="portfolio__text-slider-single"
              onClick={() => handleClick(i)}
              style={{ cursor: "pointer" }}
            >
              <h2
                className="h1 mobile-slide"
                style={{
                  color: isWhite ? "white" : "#FF7A00",
                  fontWeight: "700",
                  WebkitTextStroke: "0px",
                }}
              >
                {line.text}
                <i
                  className="fa-sharp fa-solid fa-arrow-down-right"
                  style={{ marginLeft: 6, color: "#FF7A00" }}
                ></i>
              </h2>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

function DesktopTextSlider() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={40}
      speed={10000}
      loop={true}
      centeredSlides={true}
      allowTouchMove={false} // ✅ disable drag/scroll control
      modules={[Autoplay]}
      autoplay={
        isPaused
          ? false
          : {
              delay: 1,
              disableOnInteraction: false,
              reverseDirection: true, // ✅ right → left
            }
      }
      className="portfolio__text-slider"
    >
      {lines.map((line, i) => (
        <SwiperSlide key={i}>
          <div
            className="portfolio__text-slider-single"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <h2 className={`h1 ${i % 2 === 1 ? "str" : ""} desktop-slide`}>
              {line.text}
              <i
                className="fa-sharp fa-solid fa-arrow-down-right"
                style={{ marginLeft: 6, color: "#FF7A00" }}
              ></i>
            </h2>
          </div>
        </SwiperSlide>
      ))}
      <style jsx global>{`
        /* ✅ DESKTOP HOVER COLOR SWAP */
        .desktop-slide:hover {
          color: #ff7a00 !important;
          transition: color 0.3s ease;
        }
      `}</style>
    </Swiper>
  );
}

export default function PortfolioText() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth < 768);
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  return (
    <section
      className="section portfolio pb-0 fade-wrapper position-relative bg-black"
      style={{ padding: "20px" }}
    >
      <div
        className="portfolio__text-slider-w"
        style={{ paddingBottom: "0px", marginBottom: "20px" }}
      >
        {isMobile ? <MobileTextSlider /> : <DesktopTextSlider />}
      </div>
    </section>
  );
}
