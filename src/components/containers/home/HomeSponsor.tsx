import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

// Logos
import casino from "public/images/logos/888casino.svg";
import acko from "public/images/logos/acko.svg";
import ali from "public/images/logos/aliexpress.svg";
import alliance from "public/images/logos/alliancebank.svg";
import amazon from "public/images/logos/bbva.svg";
import banzo from "public/images/logos/banzo_azteca.svg";
import bbva from "public/images/logos/amazon_music.svg";

const HomeSponsor = () => {
  return (
    <div className="sponsor section pb-0">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="sponsor__slider-w">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={1200}
                loop={true}
                roundLengths={true}
                centeredSlides={true}
                centeredSlidesBounds={false}
                modules={[Autoplay]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  1400: {
                    slidesPerView: 6,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  576: {
                    slidesPerView: 2,
                  },
                }}
                className="sponsor__slider"
              >
                {[casino, acko, ali, alliance, amazon, banzo, bbva].map(
                  (logo, i) => (
                    <SwiperSlide key={i}>
                      <div className="sponsor__slider-item flex items-center justify-center">
                        <div className="logo-wrapper">
                          <Image src={logo} alt="logo" fill className="object-contain" />
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* background decorative lines */}
      <div className="lines d-none d-lg-flex">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default HomeSponsor;
