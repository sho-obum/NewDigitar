import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import star from "public/images/offer/star.png";

type Key = "performance" | "social" | "branding" | "influencer" | null;

type Metric = {
  label: string;
  value: string;
  sub: string;
  progress: number;
};

type Metrics = Array<Metric>;

const previews = {
  performance: {
    title: "Performance Marketing",
    href: "/services/performance",
    badges: ["CRO Sprint", "Attribution"],
    level: "Lvl 8 Optimizer",
    tagline: "Scale spend with profitable efficiency.",
    metrics: [
      { label: "Monthly Conversion", value: "250K+", progress: 82, sub: "" },
      { label: "LTV Users", value: "28%", progress: 74, sub: "" },
      { label: "Revenue Growth", value: "35%", progress: 71, sub: "" },
      { label: "Conversion Rate", value: "8%", progress: 68, sub: "" },
    ],
  },
  social: {
    title: "Social Media Marketing",
    href: "/services/social",
    badges: ["UGC", "Always-On"],
    level: "Lvl 7 Storyteller",
    tagline: "Turn scrolls into saves and shares.",
    metrics: [
      { label: "Engagement ", value: "6%", sub: "Rate ", progress: 76 },
      { label: "Audience Growth Rate", value: "12%", sub: "MOM", progress: 63 },
      { label: "Clients", value: "120+", progress: 58, sub: "" },
      { label: "ROAS", value: "2X", progress: 81, sub: "" },
    ],
  },
  branding: {
    title: "Branding & Creative",
    href: "/services/branding",
    badges: ["Identity", "Ad Toolkit"],
    level: "Lvl 6 Creator",
    tagline: "Distinctive assets that drive recall.",
    metrics: [
      { label: "Brand Lift", value: "23%", progress: 72, sub: "" },
      { label: "Brand Recall", value: "32%", progress: 67, sub: "" },
      { label: "Average Session", value: "1 min+", progress: 54, sub: "" },
      { label: "Ads Viewability", value: "88%", progress: 88, sub: "" },
    ],
  },
  influencer: {
    title: "Influencer Marketing",
    href: "/services/influencer",
    badges: ["Creator Ops", "Rights"],
    level: "Lvl 9 Connector",
    tagline: "Creators at scale, content that converts.",
    metrics: [
      { label: "Creators", value: "2.5K+", progress: 79, sub: "" },
      { label: "Avg Engagement Rate", value: "22%", progress: 61, sub: "" },
      { label: "Followers Growth", value: "8%", progress: 73, sub: "" },
      { label: "Follower Retention", value: "78%", progress: 69, sub: "" },
    ],
  },
};

const cardVariants = {
  initial: { opacity: 0, x: -60, y: -40, scale: 0.9 },
  animate: { opacity: 1, x: 0, y: 0, scale: 1 },
  exit: { opacity: 0, x: -60, y: -40, scale: 0.9 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const HomeOffer = () => {
  const [activeKey, setActiveKey] = useState<Key>(null);
  const [isTouch, setIsTouch] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onTouch = () => setIsTouch(true);
    const checkMobile = () => setIsMobile(window.innerWidth <= 991.98);
    checkMobile();
    window.addEventListener("touchstart", onTouch, {
      once: true,
      passive: true,
    });
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("touchstart", onTouch);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const showCard = (key: Exclude<Key, null>) => setActiveKey(key);

  const attach = (key: Exclude<Key, null>) => ({
    onMouseEnter: () => !isMobile && !isTouch && showCard(key),
    onMouseLeave: () => {}, // no timer on desktop — keep open until mouse leaves popup too
    onClick: () => {
      if (isMobile || isTouch) {
        setActiveKey(activeKey === key ? null : key);
      }
    },
    tabIndex: 0,
    role: "listitem" as const,
    "aria-controls": "offer-pop",
    "aria-expanded": activeKey === key,
  });

  return (
    <div className="agency">
      <section className="section offer fade-wrapper agency">
        <div className="container agency">
          <div className="row gaper">
            {/* LEFT for desktop */}
            <div className="col-12 col-lg-5 position-relative">
              <div
                className={`offer__left ${
                  !isMobile && activeKey ? "is-dimmed" : ""
                }`}
              >
                <div className="offer__content section__content">
                  <span className="sub-title">
                    WHAT WE OFFER <i className="fa-solid fa-arrow-right"></i>
                  </span>
                  <h2 className="title title-anim">
                    Driving Your Business Growth With 360° Marketing
                  </h2>
                  <div className="paragraph">
                    <p>
                      Beyond clicks and likes, we create impact. From
                      performance ads to meaningful stories, unforgettable
                      branding, and influencer voices, we help brands grow with
                      purpose.
                    </p>
                  </div>
                </div>

                {/* Desktop card stays open as long as hover is active */}
                {!isMobile && (
                  <AnimatePresence>
                    {activeKey && (
                      <motion.div
                        id="offer-pop"
                        className="offer__pop"
                        role="dialog"
                        aria-modal="false"
                        aria-live="polite"
                        variants={cardVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        onMouseEnter={() => {}} // keep open
                        onMouseLeave={() => setActiveKey(null)} // close only when leaving popup
                      >
                        <h3 className="pop-title">
                          {previews[activeKey].title}
                        </h3>
                        <p className="pop-tagline">
                          {previews[activeKey].tagline}
                        </p>
                        <div className="pop-metrics">
                          {previews[activeKey].metrics.map((m, i) => (
                            <div className="metric" key={i}>
                              <div className="metric-value">{m.value}</div>
                              <div className="metric-label">{m.label}</div>
                              {m.sub && (
                                <div className="metric-sub">{m.sub}</div>
                              )}
                              {typeof m.progress === "number" && (
                                <div className="meter">
                                  <div
                                    className="meter-fill"
                                    style={{ width: `${m.progress}%` }}
                                  />
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            </div>

            {/* RIGHT container (mobile overlay approach) */}
            <div className="col-12 col-lg-7 col-xl-6 offset-xl-1 position-relative">
              <div
                className={`item-container ${
                  isMobile && activeKey ? "is-blurred" : ""
                }`}
              >
                <motion.div
                  className="offer__cta"
                  role="list"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="offer__cta-single"
                    variants={itemVariants}
                    {...attach("performance")}
                  >
                    <h2>
                      <span className="offer__cta-link">
                        Performance Marketing{" "}
                        <i className="fa-sharp fa-solid fa-arrow-up-right" />
                      </span>
                    </h2>
                  </motion.div>
                  <motion.div
                    className="offer__cta-single"
                    variants={itemVariants}
                    {...attach("social")}
                  >
                    <h2>
                      <span className="offer__cta-link">
                        Social Media Marketing{" "}
                        <i className="fa-sharp fa-solid fa-arrow-up-right" />
                      </span>
                    </h2>
                  </motion.div>
                  <motion.div
                    className="offer__cta-single"
                    variants={itemVariants}
                    {...attach("branding")}
                  >
                    <h2>
                      <span className="offer__cta-link">
                        Branding & Creative{" "}
                        <i className="fa-sharp fa-solid fa-arrow-up-right" />
                      </span>
                    </h2>
                  </motion.div>
                  <motion.div
                    className="offer__cta-single"
                    variants={itemVariants}
                    {...attach("influencer")}
                  >
                    <h2>
                      <span className="offer__cta-link">
                        Influencer Marketing{" "}
                        <i className="fa-sharp fa-solid fa-arrow-up-right" />
                      </span>
                    </h2>
                  </motion.div>
                </motion.div>
              </div>

              {isMobile && (
                <AnimatePresence>
                  {activeKey && (
                    <div className="card-overlay">
                      <motion.div
                        className="offer__pop"
                        variants={cardVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                      >
                        <button
                          className="offer__pop-close"
                          onClick={() => setActiveKey(null)}
                        >
                          ×
                        </button>
                        <h3 className="pop-title">
                          {previews[activeKey].title}
                        </h3>
                        <p className="pop-tagline">
                          {previews[activeKey].tagline}
                        </p>
                        <div className="pop-metrics">
                          {previews[activeKey].metrics.map((m, i) => (
                            <div className="metric" key={i}>
                              <div className="metric-value">{m.value}</div>
                              <div className="metric-label">{m.label}</div>
                              {m.sub && (
                                <div className="metric-sub">{m.sub}</div>
                              )}
                              {typeof m.progress === "number" && (
                                <div className="meter">
                                  <div
                                    className="meter-fill"
                                    style={{ width: `${m.progress}%` }}
                                  />
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              )}
            </div>
          </div>
        </div>
        <Image
          src={star}
          alt="Image"
          className="star"
          width={100}
          height={100}
        />
      </section>

      <style jsx global>{`
        .offer__pop-close {
          position: absolute;
          top: 10px;
          right: 12px;
          background: none;
          border: none;
          font-size: 1.6rem;
          font-weight: bold;
          color: #fff;
          cursor: pointer;
          z-index: 5;
          line-height: 1;
        }

        @media (hover: hover) and (pointer: fine) and (min-width: 992px) {
          .offer__pop-close {
            display: none; /* hide on desktop */
          }
        }

        .position-relative {
          position: relative;
        }

        .offer__left {
          position: relative;
          min-height: 480px;
        }
        .offer__left .offer__content {
          transition: filter 160ms ease, opacity 160ms ease;
        }
        .offer__left.is-dimmed .offer__content {
          filter: blur(2.8px);
          opacity: 0.6;
        }

        .offer__left-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            120% 120% at 20% 10%,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.25) 85%
          );
          opacity: 0;
          pointer-events: none;
          border-radius: 14px;
          transition: opacity 200ms ease-in-out;
        }
        .offer__left-overlay.is-visible {
          opacity: 1;
        }

        /* fixed-position card (Framer handles animation) */
        .offer__pop {
          position: absolute;
          top: 40px;
          left: 0;
          right: 0;
          padding: 20px 22px;
          background: #0a0a0a;
          color: #fff;
          border: 2px solid #ff7a00;
          border-radius: 18px;
          box-shadow: 0 0 0 2px rgba(255, 122, 0, 0.35) inset,
            0 22px 46px rgba(0, 0, 0, 0.5), 0 0 36px rgba(255, 122, 0, 0.6);
          max-height: 460px;
          overflow: auto;
          z-index: 4;
        }

        .pop-title {
          margin: 10px 0 6px;
          font-size: 2rem;
          letter-spacing: 0.2px;
          font-weight: 700;
          text-align: center;
        }
        .pop-tagline {
          margin: 0 0 12px;
          opacity: 0.9;
          font-size: 0.95rem;
          text-align: center;
          color: gray !important;
          margin-bottom: 20px;
          margin-top: -15px;
        }

        .pop-metrics {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px 16px;
          margin-top: 10px;
        }
        .metric {
          background: linear-gradient(
            180deg,
            rgba(255, 122, 0, 0.08),
            rgba(255, 122, 0, 0.03)
          );
          border: 1px solid rgba(255, 122, 0, 0.25);
          border-radius: 14px;
          padding: 12px 12px 10px;
        }
        .metric-value {
          font-size: 1.8rem;
          line-height: 1.1;
          font-weight: 800;
          letter-spacing: 0.2px;
        }
        .metric-label {
          font-size: 0.82rem;
          letter-spacing: 0.8px;
          opacity: 0.9;
          margin-top: 2px;
        }
        .metric-sub {
          font-size: 0.8rem;
          opacity: 0.75;
        }
        .meter {
          margin-top: 8px;
          height: 6px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 999px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .meter-fill {
          height: 100%;
          background: linear-gradient(90deg, #ff7a00, #ffb066);
          border-radius: 999px;
          transform: translateZ(0);
        }

        .chiprow {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 0.78rem;
          line-height: 1;
          border: 1px solid rgba(255, 255, 255, 0.16);
          background: rgba(255, 255, 255, 0.06);
        }
        .chip--badge {
          border-color: rgba(255, 122, 0, 0.35);
          background: rgba(255, 122, 0, 0.12);
          color: #ffd7b0;
        }
        .chip--level {
          background: linear-gradient(
            90deg,
            rgba(255, 122, 0, 0.18),
            rgba(255, 122, 0, 0.05)
          );
          border-color: rgba(255, 122, 0, 0.45);
          color: #ffd7b0;
        }
        .offer__pop-toprow {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .btn--thin {
          padding: 10px 14px;
        }
        @media (hover: hover) and (pointer: fine) and (min-width: 992px) {
          .offer__cta-single:hover,
          .offer__cta-single:focus {
            transform: translateX(2px);
          }

          .offer__cta-single:hover .offer__cta-link,
          .offer__cta-single:focus .offer__cta-link {
            color: #ff7a00 !important;
          }

          .offer__cta-single:hover .hover-hint,
          .offer__cta-single:focus-within .hover-hint {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .offer__cta-single {
          transition: transform 160ms ease, opacity 160ms ease;
          cursor: pointer;
        }

        /* right list link + hover hint */
        .offer__cta-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          position: relative;
          text-decoration: none;
          color: gray !important;
          width: 100%;
        }
        @media (max-width: 991.98px) {
          .offer .offer__cta .offer__cta-single {
            position: relative;
            margin-bottom: 25px;
          }
        }
        .offer__cta-iconwrap {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        .offer__cta-link .hover-hint {
          display: block;
          font-size: 0.85rem;
          line-height: 1.2;
          color: #ff7a00;
          opacity: 0;
          transform: translateY(-6px);
          transition: opacity 220ms ease, transform 220ms ease;
          margin-top: 0;
          letter-spacing: 0.3px;
        }
        /* Mobile: hide hover hints */
        @media (max-width: 991.98px) {
          .hover-hint {
            display: none;
          }
        }

        @media (max-width: 991.98px) {
          .offer__pop {
            position: relative;
            top: auto;
            left: auto;
            right: auto;
            margin-top: 12px;
            max-height: none;
          }
          .offer__left.is-dimmed .offer__content {
            filter: blur(1.5px);
          }
          .pop-metrics {
            grid-template-columns: 1fr 1fr;
          }
          .metric-value {
            font-size: 1.6rem;
          }
        }

        /* Added for new mobile overlay behavior */
        .item-container.is-blurred {
          filter: blur(3px);
          pointer-events: none;
        }
        .card-overlay {
          position: absolute;
          top: 20px;
          left: 0;
          right: 0;
          z-index: 10;
        }
      `}</style>
    </div>
  );
};

export default HomeOffer;
