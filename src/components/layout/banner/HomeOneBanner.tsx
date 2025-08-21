import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import banneronethumb from "public/images/banner/banner-one-thumb.png";
import star from "public/images/star.png";
import videoframe from "public/images/video-frame.png";
import YoutubeEmbed from "@/components/youtube/YoutubeEmbed";

gsap.registerPlugin(ScrollTrigger);

const HomeOneBanner = () => {
  const [videoActive, setVideoActive] = useState(false);

  // refs for the counters
  const yearsRef = useRef<HTMLSpanElement | null>(null);
  const projectsRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const device_width = window.innerWidth;

      // existing thumb animation
      if (
        document.querySelectorAll(".g-ban-one").length > 0 &&
        device_width > 576
      ) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".banner",
            start: "center center",
            end: "+=100%",
            scrub: true,
            pin: false,
          },
        });

        tl.set(".g-ban-one", { y: "-10%" });
        tl.to(".g-ban-one", {
          opacity: 0,
          scale: 2,
          y: "100%",
          zIndex: -1,
          duration: 2,
        });
      }

      // counter animations (run once when CTA enters view)
      const orange = "#ff7a00"; // your bold orange
      const animateNumber = (
        el: HTMLSpanElement | null,
        end: number,
        suffix: string
      ) => {
        if (!el) return;

        const obj = { val: 0 };
        gsap.fromTo(
          obj,
          { val: 0 },
          {
            val: end,
            duration: 1.2,
            ease: "power2.out",
            onUpdate: () => {
              const v = Math.round(obj.val);
              el.textContent = `${v}${suffix}`;
            },
            scrollTrigger: {
              trigger: ".section__content-cta",
              start: "top 80%",
              once: true,
            },
          }
        );
      };

      animateNumber(yearsRef.current, 12, "+"); // 0 -> 12+
      animateNumber(projectsRef.current, 25, "k"); // 0 -> 25k
    }
  }, []);

  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="banner__content">
                <h1 className="text-uppercase text-start fw-9 mb-0 title-anim">
                  We think
                  <span className="text-stroke"> 360</span>
                  <span className="interval">
                    <i className="icon-arrow-top-right"></i> We build 360
                  </span>
                </h1>

                <div className="banner__content-inner"
                style={
                  {
                    // width:"1000px"
                  }
                }
                >
                  <p
                  
                  >
                    We’re a digital growth engine driving ROI with performance
                    marketing, sparking engagement through social media,
                    building trust via branding, and amplifying reach through
                    influencer marketing.
                  </p>
                  {/* CTA */}
                  <div id="cta-metrics" className="section__content-cta">
                    <div className="row justify-content-center text-center g-3">
                      {/* Years of Experience */}
                      <div className="col-6 d-flex flex-column align-items-center">
                        <h5
                          style={{
                            color: "#ff6600", // strong orange
                            fontWeight: 900,
                            fontSize: "clamp(28px, 9vw, 64px)", // bigger on small screens
                            lineHeight: 1,
                            marginBottom: 4,
                          }}
                        >
                          <span ref={yearsRef}>0+</span>
                        </h5>
                        <p style={{ margin: 0, fontSize: "14px" }}>
                          Years Of Experience
                        </p>
                      </div>

                      {/* Completed Projects */}
                      <div className="col-6 d-flex flex-column align-items-center">
                        <h5
                          style={{
                            color: "#ff6600", // strong orange
                            fontWeight: 900,
                            fontSize: "clamp(28px, 9vw, 64px)", // scale with viewport
                            lineHeight: 1,
                            marginBottom: 4,
                          }}
                        >
                          <span ref={projectsRef}>0k</span>
                        </h5>
                        <p style={{ margin: 0, fontSize: "14px" }}>
                          Completed Projects
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* /CTA */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image
          src={banneronethumb}
          alt="Image"
          className="banner-one-thumb d-none d-sm-block g-ban-one"
        />
        <Image src={star} alt="Image" className="star" />

        <div className="banner-left-text banner-social-text d-none d-md-flex">
          <Link href="mailto:info@digitar.com">mail : info@digitar.com</Link>
          <Link href="tel:99-2158-003-6980">Call : +99 2158 003 6980</Link>
        </div>

        <div className="banner-right-text banner-social-text d-none d-md-flex">
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            instagram
          </Link>
          <Link
            href="https://www.pinterest.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </Link>
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            facebook
          </Link>
        </div>

        <button
          className="video-frame video-btn"
          onClick={() => setVideoActive(true)}
        >
          <Image src={videoframe} alt="Image" priority />
          <i className="fa-sharp fa-solid fa-play"></i>
        </button>

        <div className="lines d-none d-lg-flex">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </section>

      <div
        className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner">
          <div
            className="video-container"
            onClick={(e: any) => e.stopPropagation()}
          >
            {videoActive && <YoutubeEmbed embedId="fSv6UgCkuTU" />}
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeOneBanner;
