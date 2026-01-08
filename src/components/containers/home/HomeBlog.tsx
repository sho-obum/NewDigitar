import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MobileProductCard } from "./MobileProductCard";

gsap.registerPlugin(ScrollTrigger);

type Product = {
  tag: "DSP" | "SDK";
  number: string;
  title: string;
  domain: string;
  href: string;
  src: string;
  points: string[];
  chipBg: string;
  chipFg: string;
  accent: string;
};

const products: Product[] = [
  {
    tag: "DSP",
    number: "01",
    title: "Adxity",
    domain: "adxity.com",
    href: "https://adxity.com",
    src: "https://panel.digitarmedia.com/admin/uploads/adxitu1756375027.png",
    points: [
      "Access premium inventory for wider reach.",
      "Unlock audience insights to target smarter.",
      "Redefining brand success with premium CTV reach",
    ],
    chipBg: "rgba(59,130,246,0.15)",
    chipFg: "#3b82f6",
    accent: "rgba(59,130,246,0.35)",
  },
  {
    tag: "SDK",
    number: "02",
    title: "Adpocket",
    domain: "adpocket.ai",
    href: "https://adpocket.ai",
    src: "	https://panel.digitarmedia.com/admin/uploads/adpocket1756375023.png",
    points: [
      "Partner with thousands of seamlessly integrated apps.",
      "Maintain cost transparency and control.",
      "Deliver quality traffic that drives real conversions.",
    ],
    chipBg: "rgba(147,51,234,0.15)",
    chipFg: "#9333ea",
    accent: "rgba(147,51,234,0.35)",
  },
];

const HomeProducts = () => {
  // MOBILE refs (only used on mobile)
  const mobileWrapRef = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth < 768);
    checkViewport(); // run once on mount
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);
  const card1TitleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 767px)", () => {
      const wrap = mobileWrapRef.current;
      const c2 = card2Ref.current;
      const title = card1TitleRef.current;
      if (!wrap || !c2 || !title) return;

      const titleH = title.getBoundingClientRect().height;
      const gap = 12;
      const targetY = -(titleH + gap);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrap,
          start: "top 70%",
          end: "bottom 20%",
          scrub: true,
        },
      });

      tl.fromTo(
        c2,
        { y: 72, opacity: 0.95, boxShadow: "0 0 0 rgba(0,0,0,0)" },
        {
          y: targetY,
          opacity: 1,
          boxShadow: "0 14px 36px rgba(0,0,0,0.28)",
          ease: "power2.out",
        }
      );

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      className="section fade-wrapper"
      style={{ paddingTop: 14, paddingBottom: 14 }}
    >
      <hr
        style={{
          position: "relative",
          bottom: "34px",
        }}
      />
      <div
        className="container"
        style={{
          maxWidth: "75vw",
          width: "100%",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div
          className="row justify-content-center"
          style={{
            position: "relative",
            zIndex: 10,
          }}
        >
          <div className="col-12 col-lg-8">
            <div className="text-center">
              <span
                className="sub-title"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 12px",
                  borderRadius: 999,
                  background: "rgba(255,122,0,0.12)",
                  color: "#ff7a00",
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                }}
              >
                Our Products <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2
                className="title"
                style={{
                  marginTop: 15,
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                }}
              >
                Supercharge Your Advertising Performance
              </h2>
              <p
                style={{
                  marginTop: 12,
                  color: "#aaa",
                  maxWidth: 680,
                  marginInline: "auto",
                }}
              >
                Maximize ROI with powerful programmatic solutions and mobile app
                monetization tools built for precision, scale, and transparency.
              </p>
            </div>
          </div>
        </div>

        {/* ----- MOBILE VIEW  ----- */}
        {isMobile && (
          <div style={{ marginTop: 12, paddingLeft: 10, paddingRight: 10 }}>
            {products.map((p) => (
              <MobileProductCard key={p.title} product={p} />
            ))}
          </div>
        )}

        {/* DESKTOP (2 gamified cards, animated glow on hover) */}
        <div className="d-none d-md-block" style={{ marginTop: 32 }}>
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-12 col-md-6">
              <div className="gp-wrap">
                <div className="gp-card gp-desktop">
                  <div className="gp-top">
                    <span
                      className="gp-chip"
                      style={{
                        background: products[0].chipBg,
                        color: products[0].chipFg,
                        borderColor: products[0].accent,
                      }}
                    >
                      {products[0].tag}
                    </span>
                    <a
                      href={products[0].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gp-link"
                    >
                      {products[0].domain}
                    </a>
                  </div>

                  <div className="gp-logo-container">
                    <div
                      className="gp-logo"
                      style={{
                        background: `rgba(59,130,246,0.1)`,
                        border: `1px solid rgba(59,130,246,0.3)`,
                        boxShadow: `0 8px 32px rgba(59,130,246,0.1)`,
                      }}
                    >
                      <img
                        src={products[0].src}
                        alt={`${products[0].title} logo`}
                        className="gp-logo-img"
                      />
                    </div>
                  </div>

                  <h3 className="gp-title gp-title--center">Adxity</h3>
                  <div className="gp-subtitle gp-subtitle--center">
                    Demand‑Side Platform
                  </div>

                  <ul className="gp-points">
                    {products[0].points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <div style={{ marginTop: 32 }}>
                    <div className="row g-3">
                      {/* Two old metric tiles side-by-side */}
                      <div
                        className="col-12 col-md-6 d-flex"
                        style={{
                          gap: 12,
                          margin: "0 auto",
                          justifyContent: "center",
                          width: "fit-content",
                        }}
                      >
                        <div
                          className="gp-metric"
                          style={{ flex: 1, lineHeight: "normal" }}
                        >
                          <div className="gp-metric__value">1.2B+</div>
                          <div className="gp-metric__label">
                            Monthly Active Users
                          </div>
                          <div className="gp-meter">
                            <div
                              className="gp-meter__fill"
                              style={{ width: "72%" }}
                            />
                          </div>
                        </div>
                        <div
                          className="gp-metric"
                          style={{ flex: 1, lineHeight: "normal" }}
                        >
                          <div className="gp-metric__value">85%</div>
                          <div className="gp-metric__label">High Fill Rate</div>
                          <div className="gp-meter">
                            <div
                              className="gp-meter__fill"
                              style={{ width: "39%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="gp-cta-row">
                    <span className="gp-dim">
                      <strong>Drive measurable ROI</strong>
                    </span>
                    <a
                      href={products[0].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gp-btn"
                      style={{
                        color: products[0].chipFg,
                        borderColor: products[0].accent,
                      }}
                    >
                      <span className="gp-btn__label">Learn More</span>
                      <i className="fa-solid fa-arrow-right-long" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-12 col-md-6">
              <div className="gp-wrap">
                <div className="gp-card gp-desktop">
                  <div className="gp-top">
                    <span
                      className="gp-chip"
                      style={{
                        background: products[1].chipBg,
                        color: products[1].chipFg,
                        borderColor: products[1].accent,
                      }}
                    >
                      {products[1].tag}
                    </span>
                    <a
                      href={products[1].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gp-link"
                    >
                      {products[1].domain}
                    </a>
                  </div>

                  <div className="gp-logo-container">
                    <div
                      className="gp-logo"
                      style={{
                        background: `rgba(147,51,234,0.1)`,
                        border: `1px solid rgba(147,51,234,0.3)`,
                        boxShadow: `0 8px 32px rgba(147,51,234,0.1)`,
                      }}
                    >
                      <img
                        src={products[1].src}
                        alt={`${products[1].title} logo`}
                        className="gp-logo-img"
                      />
                    </div>
                  </div>

                  <h3 className="gp-title gp-title--center">Adpocket</h3>
                  <div className="gp-subtitle gp-subtitle--center">
                    In‑App Monetization SDK
                  </div>

                  <ul className="gp-points">
                    {products[1].points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <div style={{ marginTop: 32 }}>
                    <div className="row g-3">
                      {/* Two old metric tiles side-by-side */}
                      <div
                        className="col-12 col-md-6 d-flex"
                        style={{
                          gap: 12,
                          margin: "0 auto",
                          justifyContent: "center",
                          width: "fit-content",
                        }}
                      >
                        <div
                          className="gp-metric"
                          style={{ flex: 1, lineHeight: "normal" }}
                        >
                          <div className="gp-metric__value">10K+</div>
                          <div className="gp-metric__label">
                            Integrated Apps
                          </div>
                          <div className="gp-meter">
                            <div
                              className="gp-meter__fill"
                              style={{ width: "58%" }}
                            />
                          </div>
                        </div>
                        <div
                          className="gp-metric"
                          style={{ flex: 1, lineHeight: "normal" }}
                        >
                          <div className="gp-metric__value">38k/s</div>
                          <div className="gp-metric__label">Throughput</div>
                          <div className="gp-meter">
                            <div
                              className="gp-meter__fill"
                              style={{ width: "76%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="gp-cta-row">
                    <span className="gp-dim">
                      <strong>Monetize without compromise</strong>
                    </span>
                    <a
                      href={products[1].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gp-btn"
                      style={{
                        color: products[1].chipFg,
                        borderColor: products[1].accent,
                      }}
                    >
                      <span className="gp-btn__label">Learn More</span>
                      <i className="fa-solid fa-arrow-right-long" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        /* Responsive container width */
        .container {
          max-width: 90vw !important;
          width: 100% !important;
          margin: 0 auto !important;
        }

        /* Cap width at 1200px on very large screens */
        @media (min-width: 1600px) {
          .container {
            max-width: 1200px !important;
          }
        }

        .title.title-anim {
          transition: transform 200ms ease;
          will-change: transform;
          display: inline-block;
        }
        .title.title-anim:hover {
          transform: scale(1.05);
        }
        .gp-wrap {
          position: relative;
          overflow: visible;
        }

        /* Static fade effect for background lines */
        .lines {
          opacity: 0.1;
          transition: opacity 0.3s ease;
        }

        .lines .line {
          opacity: 0.1;
          transition: opacity 0.3s ease;
        }

        /* When section is in view, lines become fully opaque */
        .section.fade-wrapper:in-view {
          --lines-opacity: 1;
        }

        .section.fade-wrapper:in-view ~ .lines,
        .section.fade-wrapper:in-view + .lines {
          opacity: 1;
        }

        .section.fade-wrapper:in-view ~ .lines .line,
        .section.fade-wrapper:in-view + .lines .line {
          opacity: 1;
        }

        .gp-card {
          position: relative;
          display: block;
          background: #000;
          color: #fff;
          border: 3px solid rgba(255, 122, 0, 0.75);
          border-radius: 18px;
          padding: 18px;
          text-decoration: none;
          box-shadow: 0 0 0 3px rgba(255, 122, 0, 0.32) inset,
            0 0 36px rgba(255, 122, 0, 0.45);
          overflow: hidden; /* clip inner content only */
          transition: box-shadow 220ms ease, border-color 220ms ease,
            transform 200ms ease;
          will-change: transform;
          transform-origin: center;
          z-index: 2; /* above halo */
        }
        .gp-card::before {
          content: "";
          position: absolute;
          inset: -2px;
          background: radial-gradient(
            320px 320px at 50% 50%,
            rgba(255, 122, 0, 0.38),
            rgba(255, 176, 102, 0.28),
            rgba(255, 122, 0, 0) 62%
          );
          opacity: 0; /* default off */
          transition: opacity 180ms ease;
          pointer-events: none;
          filter: blur(18px) saturate(135%);
          z-index: -1;
        }
        .gp-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 18px;
          padding: 3px; /* border thickness */
          background: radial-gradient(
            260px 260px at 50% 50%,
            rgba(255, 176, 102, 0.95),
            rgba(255, 122, 0, 0.28) 52%,
            rgba(255, 122, 0, 0) 62%
          );
          -webkit-mask: linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 180ms ease;
          pointer-events: none;
        }
        .gp-card:hover,
        .gp-card:focus-visible {
          border-color: #ff7a00;
          box-shadow: 0 0 42px rgba(255, 122, 0, 0.6),
            0 0 88px rgba(255, 176, 102, 0.35);
          outline: none;
          transform: scale(1.05);
        }
        /* Removed rotating halo */

        .gp-desktop {
          height: 100%;
        }

        .gp-mobile {
          margin-bottom: 16px;
        }
        .gp-mobile .gp-title.gp-sticky {
          position: sticky;
          top: 80px;
          background: #0a0a0a;
          z-index: 3;
          padding-bottom: 6px;
        }

        .gp-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 6px;
        }
        .gp-chip {
          display: inline-flex;
          padding: 6px 10px;
          font-size: 0.78rem;
          border-radius: 999px;
          border: 1px solid;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          font-weight: 700;
        }
        .gp-num {
          opacity: 0.6;
          font-size: 13px;
        }
        .gp-link {
          color: #ff7a00;
          font-weight: 800;
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .gp-logo-container {
          display: flex;
          justify-content: center;
          margin: 16px 0;
        }
        .gp-logo {
          width: 80px;
          height: 80px;
          border-radius: 16px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .gp-logo::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.05)
          );
          border-radius: inherit;
        }
        .gp-logo-img {
          width: 50px;
          height: 50px;
          object-fit: contain;
          position: relative;
          z-index: 1;
          filter: brightness(1.1) contrast(1.1);
        }
        .gp-title--center {
          text-align: center;
        }
        .gp-subtitle {
          margin-top: 10px;
          font-size: 0.9rem;
          color: #9a9a9a;
          font-weight: 400;
          letter-spacing: 0.3px;
        }
        .gp-subtitle--center {
          text-align: center;
        }

        .gp-title {
          margin: 10px 0 4px;
          font-size: 2rem;
          line-height: 1.15;
          font-weight: 900;
          letter-spacing: 0.2px;
        }
        .gp-domain {
          display: inline-block;
          font-weight: 800;
          margin-bottom: 8px;
          letter-spacing: 0.2px;
        }

        .gp-points {
          margin-top: 12px;
          margin-bottom: 0;
          padding-left: 18px;
          line-height: 15 !important;
          font-size: 1rem;
          text-align: center;
        }
        .gp-cta-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 16px;
        }

        .gp-dim {
          opacity: 0.75;
          font-size: 15px;
        }
        .gp-btn {
          padding: 10px 14px;
          border-radius: 12px;
          border: 1px solid;
          font-weight: 800;
          display: inline-flex;
          gap: 8px;
          align-items: center;
          background: linear-gradient(
            90deg,
            rgba(255, 122, 0, 0.18),
            rgba(255, 176, 102, 0.28),
            rgba(255, 122, 0, 0.18)
          );
          background-size: 200% 100%;
          color: #ffd7b0;
          transition: background-position 400ms ease, transform 160ms ease;
        }
        .gp-btn:hover {
          background-position: 100% 0;
        }
        .gp-btn:hover i {
          transform: translateX(6px);
        }
        .gp-btn i {
          transition: transform 200ms ease;
        }
        .gp-btn__label {
          font-weight: 900;
        }
        .metric-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .gp-metrics {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px 14px;
          margin-top: 14px;
          min-width: 500px;
        }
        .gp-metric {
          background: linear-gradient(
            180deg,
            rgba(255, 122, 0, 0.08),
            rgba(255, 122, 0, 0.03)
          );
          border: 1px solid rgba(255, 122, 0, 0.25);
          border-radius: 14px;
          padding: 12px 12px 10px;
          transition: none;
        }
        .gp-metric__value {
          font-size: 1.7rem;
          line-height: 1.1;
          font-weight: 900;
          letter-spacing: 0.2px;
        }
        .gp-metric__label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.7px;
          opacity: 0.9;
          margin-top: 2px;
        }
        .gp-meter {
          margin-top: 8px;
          height: 6px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 999px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .gp-meter__fill {
          height: 100%;
          background: linear-gradient(90deg, #ff7a00, #ffb066);
          border-radius: 999px;
          transform: translateZ(0);
        }

        @media (min-width: 768px) {
          .gp-title {
            font-size: 1.62rem;
          }
          .gp-metric__value {
            font-size: 2rem;
          }
        }

        /* Responsive metric boxes for small screens */
        @media (max-width: 767px) {
          .gp-metric {
            min-width: 120px;
            flex: 1 1 0;
            width: 100%;
          }
          .gp-metric__value {
            font-size: 1.2rem;
          }
          .gp-metric__label {
            font-size: 0.65rem;
            line-height: 1.2;
          }
        }

        /* Extra small screens */
        @media (max-width: 480px) {
          .gp-metric {
            min-width: 100px;
            padding: 8px 8px 6px;
          }
          .gp-metric__value {
            font-size: 1rem;
          }
          .gp-metric__label {
            font-size: 0.6rem;
          }
        }
      `}</style>

      <script
        dangerouslySetInnerHTML={{
          __html: `
        (function(){
          var cards = document.querySelectorAll('.gp-card');
          function handleEnter(e){
            this.style.setProperty('--glow','1');
            this.style.setProperty('--ring','1');
          }
          function handleLeave(e){
            this.style.setProperty('--glow','0');
            this.style.setProperty('--ring','0');
          }
          function handleMove(e){}
          cards.forEach(function(card){
            card.addEventListener('mouseenter', handleEnter, { passive: true });
            card.addEventListener('mouseleave', handleLeave, { passive: true });
            // removed mousemove to keep glow static and avoid any tilt illusion
          });

          // Count-up and progress animation on view (smooth, no bump)
          var animated = false;
          function animateNumbers(){
            if(animated) return; animated = true;
            var nums = document.querySelectorAll('.gp-metric__value[data-count-target], .gp-num[data-count-target]');
            var bars = document.querySelectorAll('.gp-meter__fill[data-fill-target]');

            nums.forEach(function(el){
              var target = parseFloat(el.getAttribute('data-count-target')||'0');
              var suffix = el.getAttribute('data-count-suffix')||'';
              var isInt = Number.isInteger(target);
              var duration = 2000; // ms, slower
              var start = performance.now();
              function tick(now){
                var p = Math.min(1, (now - start)/duration);
                // smoothstep easing for a gentle start/stop
                var t = p * p * (3 - 2 * p);
                var val = target * t;
                var text = isInt ? Math.round(val).toString() : (Math.round(val*10)/10).toString();
                // pad gp-num to 2 digits
                if(el.classList.contains('gp-num')){ text = text.padStart(2,'0'); }
                el.textContent = text + suffix;
                if(p < 1) requestAnimationFrame(tick);
              }
              requestAnimationFrame(tick);
            });

            bars.forEach(function(bar){
              var target = parseFloat(bar.getAttribute('data-fill-target')||'0');
              bar.style.transition = 'width 2000ms cubic-bezier(0.4, 0.0, 0.2, 1)';
              requestAnimationFrame(function(){ bar.style.width = target + '%'; });
            });
          }

          var root = document.querySelector('.section.fade-wrapper');
          if('IntersectionObserver' in window && root){
            var io = new IntersectionObserver(function(entries){
              entries.forEach(function(entry){ if(entry.isIntersecting){ animateNumbers(); io.disconnect(); }});
            }, { root: null, threshold: 0.25 });
            io.observe(root);
          } else {
            // fallback
            setTimeout(animateNumbers, 500);
          }
        })();
      `,
        }}
      />
    </section>
  );
};

export default HomeProducts;
