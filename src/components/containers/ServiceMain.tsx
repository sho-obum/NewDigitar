import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { services, ServiceItem } from "@/data/service"; // 👈 NEW

const Card = ({ item }: { item: ServiceItem }) => (
  <div className="service-t-single-wrapper">
    <div className="service-t__slider-single">
      <div className="intro">
        <h4>
          {/* 👇 changed */}
          <Link href={`/services/${item.id}`}>{item.title}</Link>
        </h4>
      </div>

      <div className="service-card__desc">
        {item.desc.map((d, i) => (
          <p key={i}>{d}</p>
        ))}
      </div>

      <div className="service-card__metrics">
        {item.metrics.map((m, i) => (
          <div key={i} className="service-card__metric">
            <span className="value">{m.value}</span>
            <span className="label">{m.label}</span>
          </div>
        ))}
      </div>

      <div className="cta">
        {/* 👇 changed */}
        <Link href={`/services/${item.id}`}>
          <i className="icon-arrow-top-right"></i>
          <span>service details</span>
        </Link>
      </div>
    </div>
  </div>
);

const ServiceMain = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(typeof window !== "undefined" && window.innerWidth >= 1200);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="section service-t">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {isDesktop ? (
              <div className="row g-4">
                {services.map((item) => (
                  <div className="col-12 col-md-6 col-xl-3" key={item.id}>
                    <Card item={item} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="service-t__slider-w">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  slidesPerGroup={1}
                  speed={800}
                  loop={true}
                  centeredSlides={false}
                  modules={[Autoplay, Navigation]}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  navigation={{
                    nextEl: ".next-service-t",
                    prevEl: ".prev-service-t",
                  }}
                  className="service-t__slider"
                  breakpoints={{
                    768: { slidesPerView: 2 },
                  }}
                >
                  {services.concat(services).map((item, idx) => (
                    <SwiperSlide key={`${item.id}-${idx}`}>
                      <Card item={item} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>
        </div>
      </div>

      {!isDesktop && (
        <div className="slide-group">
          <button aria-label="previous item" className="slide-btn prev-service-t">
            <i className="fa-light fa-angle-left"></i>
          </button>
          <button aria-label="next item" className="slide-btn next-service-t">
            <i className="fa-light fa-angle-right"></i>
          </button>
        </div>
      )}
    </section>
  );
};

export default ServiceMain;
