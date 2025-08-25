import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import star from "public/images/offer/star.png";

type Key = "performance" | "social" | "branding" | "influencer" | null;

type Metrics = Array<{ label: string; value: string; sub?: string; progress?: number }>;

const previews: Record<
  Exclude<Key, null>,
  { title: string; href: string; badges: string[]; level: string; tagline: string; metrics: Metrics }
> = {
  performance: {
    title: "Performance Marketing",
    href: "/services/performance",
    badges: ["CRO Sprint", "Attribution"],
    level: "Lvl 8 Optimizer",
    tagline: "Scale spend with profitable efficiency.",
    metrics: [
      { label: "ROAS", value: "4.7×", sub: "Last 30d", progress: 82 },
      { label: "CPO", value: "₹142", sub: "↓ 26%", progress: 74 },
      { label: "CTR", value: "3.9%", sub: "+0.8pp", progress: 68 },
      { label: "CVR", value: "6.1%", sub: "+1.4pp", progress: 71 },
    ],
  },
  social: {
    title: "Social Media Marketing",
    href: "/services/social",
    badges: ["UGC", "Always-On"],
    level: "Lvl 7 Storyteller",
    tagline: "Turn scrolls into saves and shares.",
    metrics: [
      { label: "Followers", value: "1.2M", sub: "+18k/mo", progress: 76 },
      { label: "Engagement", value: "7.4%", sub: "Median", progress: 63 },
      { label: "Saves", value: "28k", sub: "30d", progress: 58 },
      { label: "Reach", value: "24.5M", sub: "30d", progress: 81 },
    ],
  },
  branding: {
    title: "Branding & Creative",
    href: "/services/branding",
    badges: ["Identity", "Ad Toolkit"],
    level: "Lvl 6 Creator",
    tagline: "Distinctive assets that drive recall.",
    metrics: [
      { label: "Brand Lift", value: "+23%", sub: "Aided", progress: 72 },
      { label: "Recall", value: "41%", sub: "Campaign", progress: 67 },
      { label: "Concepts", value: "36", sub: "This Qtr", progress: 54 },
      { label: "Asset Kit", value: "120+", sub: "Deliverables", progress: 88 },
    ],
  },
  influencer: {
    title: "Influencer Marketing",
    href: "/services/influencer",
    badges: ["Creator Ops", "Rights"],
    level: "Lvl 9 Connector",
    tagline: "Creators at scale, content that converts.",
    metrics: [
      { label: "Creators", value: "380", sub: "Managed", progress: 79 },
      { label: "EMV", value: "₹3.8Cr", sub: "30d", progress: 61 },
      { label: "CPA", value: "₹118", sub: "↓ 19%", progress: 73 },
      { label: "Reuse", value: "64%", sub: "Whitelisted", progress: 69 },
    ],
  },
};

const cardVariants = {
  initial: { opacity: 0, x: -60, y: -40, scale: 0.9 },
  animate: { opacity: 1, x: 0, y: 0, scale: 1 },
  exit: { opacity: 0, x: -60, y: -40, scale: 0.9 },
};

const innerStagger = {
  animate: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
};
const itemFade = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 6 },
};

const HomeOffer = () => {
  const [activeKey, setActiveKey] = useState<Key>(null);
  const [isTouch, setIsTouch] = useState(false);
  const hideTimer = useRef<number | null>(null);

  useEffect(() => {
    const onTouch = () => setIsTouch(true);
    window.addEventListener("touchstart", onTouch, { once: true, passive: true });
    return () => window.removeEventListener("touchstart", onTouch);
  }, []);

  const scheduleHide = (delay = 220) => {
    if (hideTimer.current) window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => setActiveKey(null), delay) as unknown as number;
  };
  const cancelHide = () => {
    if (hideTimer.current) window.clearTimeout(hideTimer.current);
    hideTimer.current = null;
  };

  const showCard = (key: Exclude<Key, null>) => {
    cancelHide();
    setActiveKey(key);
  };

  const attach = (key: Exclude<Key, null>) => ({
    onMouseEnter: () => !isTouch && showCard(key),
    onMouseLeave: () => !isTouch && scheduleHide(),
    onFocus: () => showCard(key),
    onBlur: (e: React.FocusEvent<HTMLDivElement>) => {
      if (!e.currentTarget.contains(e.relatedTarget as Node)) scheduleHide(220);
    },
    onClick: () => isTouch && (activeKey === key ? setActiveKey(null) : showCard(key)),
    tabIndex: 0,
    role: "listitem" as const,
    "aria-controls": "offer-pop",
    "aria-expanded": activeKey === key,
  });

  return (
    <div className="agency">
      <section className="section offer fade-wrapper agency">
        <div className="agency">
          <div className="container agency">
            <div className="row gaper">
              {/* LEFT */}
              <div className="col-12 col-lg-5 position-relative">
                <div className={`offer__left ${activeKey ? "is-dimmed" : ""}`}>
                  <div className="offer__content section__content">
                    <span className="sub-title">
                      WHAT WE OFFER <i className="fa-solid fa-arrow-right"></i>
                    </span>
                    <h2 className="title title-anim">Driving Your Business Growth With 360° Marketing</h2>
                    <div className="paragraph">
                      <p>
                        We are a performance-driven digital agency delivering measurable results. From precise ad
                        campaigns to social storytelling, impactful branding, and influencer partnerships, we help
                        brands grow faster, stronger, and smarter.
                      </p>
                    </div>
                    <div className="section__content-cta">
                      <Link href="/our-services" className="btn btn--secondary">
                        EXPLORE OUR SERVICES
                      </Link>
                    </div>
                  </div>

                  <div className={`offer__left-overlay ${activeKey ? "is-visible" : ""}`} aria-hidden="true" />

                  {/* FRAMER-MOTION POP CARD (fixed position) */}
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
                      >
                        <motion.div variants={innerStagger} initial="initial" animate="animate" exit="exit">
                          <motion.div className="offer__pop-toprow" variants={itemFade}>
                            <div className="chip chip--level">{previews[activeKey].level}</div>
                            <div className="chiprow">
                              {previews[activeKey].badges.map((b) => (
                                <span key={b} className="chip chip--badge">
                                  {b}
                                </span>
                              ))}
                            </div>
                          </motion.div>

                          <motion.h3 className="pop-title" variants={itemFade}>
                            {previews[activeKey].title}
                          </motion.h3>
                          <motion.p className="pop-tagline" variants={itemFade}>
                            {previews[activeKey].tagline}
                          </motion.p>

                          <motion.div className="pop-metrics" variants={innerStagger}>
                            {previews[activeKey].metrics.map((m, i) => (
                              <motion.div className="metric" key={i} variants={itemFade} 
                              style={{
                                lineHeight:"normal"
                              }}
                              >
                                <div className="metric-value">{m.value}</div>
                                <div className="metric-label">{m.label}</div>
                                {m.sub && <div className="metric-sub">{m.sub}</div>}
                                {typeof m.progress === "number" && (
                                  <div className="meter">
                                    <div className="meter-fill" style={{ width: `${m.progress}%` }} />
                                  </div>
                                )}
                              </motion.div>
                            ))}
                          </motion.div>

                          {/* <motion.div className="pop-cta" variants={itemFade}>
                            <Link href={previews[activeKey].href} className="btn btn--primary btn--thin">
                              Enter Mission <i className="fa-sharp fa-solid fa-arrow-up-right" />
                            </Link>
                          </motion.div> */}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* RIGHT */}
              <div className="col-12 col-lg-7 col-xl-6 offset-xl-1">
                <div
                  className="offer__cta"
                  role="list"
                  onMouseLeave={() => !isTouch && scheduleHide()}
                  onMouseEnter={() => cancelHide()}
                >
                  <div className="offer__cta-single fade-top" {...attach("performance")}>
                   
                    <h2>
                      <Link href="/services/performance">
                        Performance Marketing <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                      </Link>
                    </h2>
                  </div>

                  <div className="offer__cta-single fade-top" {...attach("social")}>
                  
                    <h2>
                      <Link href="/services/social">
                        Social Media Marketing <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                      </Link>
                    </h2>
                  </div>

                  <div className="offer__cta-single fade-top" {...attach("branding")}>
                 
                    <h2>
                      <Link href="/services/branding">
                        Branding &amp; Creative <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                      </Link>
                    </h2>
                  </div>

                  <div className="offer__cta-single fade-top" {...attach("influencer")}>
                 
                    <h2>
                      <Link href="/services/influencer">
                        Influencer Marketing <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Image src={star} alt="Image" className="star" width={100} height={100} />
          <div className="lines d-none d-lg-flex">
            <div className="line"></div><div className="line"></div><div className="line"></div><div className="line"></div><div className="line"></div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .position-relative { position: relative; }

        .offer__left { position: relative; min-height: 480px; }
        .offer__left .offer__content { transition: filter 160ms ease, opacity 160ms ease; }
        .offer__left.is-dimmed .offer__content { filter: blur(2.8px); opacity: 0.6; }

        .offer__left-overlay {
          position: absolute; inset: 0;
          background: radial-gradient(120% 120% at 20% 10%, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.25) 85%);
          opacity: 0; pointer-events: none; border-radius: 14px;
          transition: opacity 200ms ease-in-out;
        }
        .offer__left-overlay.is-visible { opacity: 1; }

        /* fixed-position card (Framer handles animation) */
        .offer__pop {
          position: absolute;
          top: 40px;
          left: 0; right: 0;
          padding: 20px 22px;
          background: #0a0a0a;
          color: #fff;
          border: 2px solid #ff7a00;
          border-radius: 18px;
          box-shadow:
            0 0 0 2px rgba(255,122,0,0.35) inset,
            0 22px 46px rgba(0,0,0,0.5),
            0 0 36px rgba(255,122,0,0.6);
          max-height: 460px;
          overflow: auto;
          z-index: 4;
        }

        .pop-title { margin: 10px 0 6px; font-size: 1.25rem; letter-spacing: 0.2px; font-weight: 700; }
        .pop-tagline { margin: 0 0 12px; opacity: 0.9; font-size: 0.95rem; }

        .pop-metrics {
          display: grid; grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 14px 16px; margin-top: 10px;
        }
        .metric {
          background: linear-gradient(180deg, rgba(255,122,0,0.08), rgba(255,122,0,0.03));
          border: 1px solid rgba(255,122,0,0.25);
          border-radius: 14px; padding: 12px 12px 10px;
        }
        .metric-value { font-size: 1.8rem; line-height: 1.1; font-weight: 800; letter-spacing: 0.2px; }
        .metric-label { font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.8px; opacity: 0.9; margin-top: 2px; }
        .metric-sub { font-size: 0.8rem; opacity: 0.75; }
        .meter { margin-top: 8px; height: 6px; background: rgba(255,255,255,0.08); border-radius: 999px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); }
        .meter-fill { height: 100%; background: linear-gradient(90deg, #ff7a00, #ffb066); border-radius: 999px; transform: translateZ(0); }

        .chiprow { display: flex; gap: 8px; flex-wrap: wrap; }
        .chip { display: inline-flex; align-items: center; gap: 6px; padding: 6px 10px; border-radius: 999px; font-size: 0.78rem; line-height: 1; border: 1px solid rgba(255,255,255,0.16); background: rgba(255,255,255,0.06); }
        .chip--badge { border-color: rgba(255,122,0,0.35); background: rgba(255,122,0,0.12); color: #ffd7b0; }
        .chip--level { background: linear-gradient(90deg, rgba(255,122,0,0.18), rgba(255,122,0,0.05)); border-color: rgba(255,122,0,0.45); color: #ffd7b0; }
        .offer__pop-toprow { display: flex; align-items: center; justify-content: space-between; gap: 10px; }

        .btn--thin { padding: 10px 14px; }

        .offer__cta-single { transition: transform 160ms ease, opacity 160ms ease; cursor: pointer; }
        .offer__cta-single:hover, .offer__cta-single:focus { transform: translateX(2px); }

        @media (max-width: 991.98px) {
          .offer__pop { position: relative; top: auto; left: auto; right: auto; margin-top: 12px; max-height: none; }
          .offer__left.is-dimmed .offer__content { filter: blur(1.5px); }
          .pop-metrics { grid-template-columns: 1fr 1fr; }
          .metric-value { font-size: 1.6rem; }
        }
      `}</style>
    </div>
  );
};

export default HomeOffer;
