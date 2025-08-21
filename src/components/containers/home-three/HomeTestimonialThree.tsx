import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { testimonials } from "@/data/testimonial"; // 👈 NEW

const HomeTestimonialThree = () => {
  return (
    <section className="section testimonial testimonial-three position-relative">
      {/* Top moving text slider (kept as-is, but you can trim slides if you want) */}
      <div className="testimonial__text-slider-w">
        <Swiper
          slidesPerView="auto"
          spaceBetween={40}
          speed={5000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false,
          }}
          className="testimonial__text-slider"
        >
          {Array.from({ length: 6 }).map((_, idx) => (
            <SwiperSlide key={idx}>
              <div className="testimonial__text-slider-single">
                <h2 className="h1">
                  <Link href="client-feedback">
                    client&apos;s testimonial
                    <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                  </Link>
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container position-relative">
        <div className="row">
          <div className="col-12 col-xxl-10">
            <div className="testimonial-s__slider-w">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={800}
                loop={true}
                roundLengths={false}
                centeredSlides={false}
                centeredSlidesBounds={false}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  nextEl: ".next-testimonial-three",
                  prevEl: ".prev-testimonial-three",
                }}
                className="testimonial-s__slider"
              >
                {testimonials.map((t) => (
                  <SwiperSlide key={t.id}>
                    <div className="testimonial-s__slider-single">
                      <div className="row gaper align-items-center">
                        <div className="col-12 col-lg-4 col-xxl-4">
                          <div className="thumb">
                            {t.avatar && (
                              <Image
                                src={t.avatar}
                                alt={`${t.name} avatar`}
                                width={416}
                                height={416}
                                className="img-fluid"
                              />
                            )}
                            {/* vertical decorative svg kept (optional) */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="44"
                              height="322"
                              viewBox="0 0 44 322"
                              fill="none"
                              className="d-none d-lg-block"
                            >
                              <path
                                d="M43 -0.000976562V151.999L2 192.999H43V321.999"
                                stroke="#414141"
                              />
                            </svg>
                          </div>
                        </div>

                        <div className="col-12 col-lg-7 offset-lg-1 col-xxl-7 offset-xxl-1">
                          <div className="testimonial-s__content">
                            <div className="quote">
                              <i className="fa-solid fa-quote-right"></i>
                            </div>

                            <div className="content">
                              <h4>{t.quote}</h4>
                            </div>

                            <div className="content-cta">
                              <h5>{t.name}</h5>
                              {(t.role || t.company) && (
                                <p>
                                  {[t.role, t.company].filter(Boolean).join(" · ")}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* slider buttons */}
        <div className="slide-group justify-content-start">
          <button
            aria-label="previous item"
            className="slide-btn prev-testimonial-three"
          >
            <i className="fa-light fa-angle-left"></i>
          </button>
          <button
            aria-label="next item"
            className="slide-btn next-testimonial-three"
          >
            <i className="fa-light fa-angle-right"></i>
          </button>
        </div>
      </div>

      {/* Removed the "other-section" background image that showed next/previous person */}
      {/* Removed state & handlers related to nextSlideIndex */}

      <div className="lines d-none d-lg-flex">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default HomeTestimonialThree;
