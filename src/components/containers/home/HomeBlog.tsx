import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Product = {
  tag: "DSP" | "SDK";
  number: string;
  title: string;
  domain: string;
  href: string;
  points: string[];
  chipBg: string;
  chipFg: string;
  accent: string;
};

const products: Product[] = [
  {
    tag: "DSP",
    number: "01",
    title: "Adxity — Demand-Side Platform",
    domain: "adxity.com",
    href: "https://adxity.com",
    points: [
      "Performance-first media buying across programmatic & social.",
      "Real-time optimization with transparent reporting.",
      "Audience, creative, and LTV insights for scale.",
    ],
    chipBg: "rgba(255,122,0,0.12)",
    chipFg: "#ff7a00",
    accent: "rgba(255,122,0,0.35)",
  },
  {
    tag: "SDK",
    number: "02",
    title: "Adpocket — In-App Monetization SDK",
    domain: "adpocket.ai",
    href: "https://adpocket.ai",
    points: [
      "Plug-and-play SDK for premium, non-intrusive ad formats.",
      "High eCPMs with smart mediation & fill optimization.",
      "Lightweight, privacy-safe, and developer-friendly.",
    ],
    chipBg: "rgba(76,175,80,0.15)",
    chipFg: "#9be89f",
    accent: "rgba(76,175,80,0.35)",
  },
];

const HomeProducts = () => {
  // MOBILE refs (only used on mobile)
  const mobileWrapRef = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);
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
        { y: targetY, opacity: 1, boxShadow: "0 14px 36px rgba(0,0,0,0.28)", ease: "power2.out" }
      );

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="section fade-wrapper" style={{ paddingTop: 64, paddingBottom: 64 }}>
      <div className="container">
        {/* Header */}
        <div className="row justify-content-center">
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
              <h2 className="title title-anim" style={{ marginTop: 16, fontWeight: 800, letterSpacing: "-0.02em" }}>
                Ideas Turned Into Impact
              </h2>
              <p style={{ marginTop: 12, color: "#aaa", maxWidth: 680, marginInline: "auto" }}>
                Built to scale performance across channels—privacy-safe, measurable, and fast to integrate.
              </p>
            </div>
          </div>
        </div>

        {/* MOBILE (stacked, keeps your GSAP parallax for card 2) */}
        <div className="d-block d-md-none" ref={mobileWrapRef} style={{ marginTop: 32 }}>
          {/* Card 1 (mobile) */}
          <div className="gp-wrap">
            <span className="gp-halo" aria-hidden="true" />
            <div className="gp-card gp-mobile">
              
              
              <div className="gp-top">
                <span
                  className="gp-chip"
                  style={{ background: products[0].chipBg, color: products[0].chipFg, borderColor: products[0].accent }}
                >
                  {products[0].tag}
                </span>
                <span className="gp-num">{products[0].number}</span>
              </div>
              <h3 ref={card1TitleRef} className="gp-title gp-sticky">{products[0].title}</h3>
              <Link href={products[0].href} target="_blank" rel="noopener noreferrer" className="gp-domain" style={{ color: products[0].chipFg }}>
                {products[0].domain}
              </Link>
              <ul className="gp-points">
                {products[0].points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <div className="gp-cta-row">
                <span className="gp-dim">Drive measurable ROI</span>
                <Link
                  href={products[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gp-btn"
                  style={{ color: products[0].chipFg, borderColor: products[0].accent }}
                >
                  Learn More <i className="fa-solid fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 (mobile with GSAP motion) */}
          <div className="gp-wrap">
            <span className="gp-halo" aria-hidden="true" />
            <div className="gp-card gp-mobile" ref={card2Ref}>
              
              <div className="gp-top">
                <span
                  className="gp-chip"
                  style={{ background: products[1].chipBg, color: products[1].chipFg, borderColor: products[1].accent }}
                >
                  {products[1].tag}
                </span>
                <span className="gp-num">{products[1].number}</span>
              </div>
              <h3 className="gp-title">{products[1].title}</h3>
              <Link href={products[1].href} target="_blank" rel="noopener noreferrer" className="gp-domain" style={{ color: products[1].chipFg }}>
                {products[1].domain}
              </Link>
              <ul className="gp-points">
                {products[1].points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <div className="gp-cta-row">
                <span className="gp-dim">Monetize without compromise</span>
                <Link
                  href={products[1].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gp-btn"
                  style={{ color: products[1].chipFg, borderColor: products[1].accent }}
                >
                  Learn More <i className="fa-solid fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP (2 gamified cards, animated glow on hover) */}
        <div className="d-none d-md-block" style={{ marginTop: 32 }}>
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-12 col-md-6">
              <div className="gp-wrap">
                <span className="gp-halo" aria-hidden="true" />
                <a href={products[0].href} target="_blank" rel="noopener noreferrer" className="gp-card gp-desktop">
                  
                  <div className="gp-top">
                    <span
                      className="gp-chip"
                      style={{ background: products[0].chipBg, color: products[0].chipFg, borderColor: products[0].accent }}
                    >
                      {products[0].tag}
                    </span>
                    <span className="gp-num">{products[0].number}</span>
                  </div>

                  <h3 className="gp-title">{products[0].title}</h3>
                  <span className="gp-domain" style={{ color: products[0].chipFg }}>{products[0].domain}</span>

                  <ul className="gp-points">
                    {products[0].points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>

                  {/* Gamified metrics row (optional, feel free to edit values) */}
                  <div className="gp-metrics">
                    <div className="gp-metric">
                      <div className="gp-metric__value">4.7×</div>
                      <div className="gp-metric__label">ROAS</div>
                      <div className="gp-meter"><div className="gp-meter__fill" style={{ width: "82%" }} /></div>
                    </div>
                    <div className="gp-metric">
                      <div className="gp-metric__value">6.1%</div>
                      <div className="gp-metric__label">CVR</div>
                      <div className="gp-meter"><div className="gp-meter__fill" style={{ width: "71%" }} /></div>
                    </div>
                  </div>

                  <div className="gp-cta-row">
                    <span className="gp-dim">Drive measurable ROI</span>
                    <span className="gp-btn" style={{ color: products[0].chipFg, borderColor: products[0].accent }}>
                      Learn More <i className="fa-solid fa-arrow-right-long" />
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-12 col-md-6">
              <div className="gp-wrap">
                <span className="gp-halo" aria-hidden="true" />
                <a href={products[1].href} target="_blank" rel="noopener noreferrer" className="gp-card gp-desktop">
                  
                  <div className="gp-top">
                    <span
                      className="gp-chip"
                      style={{ background: products[1].chipBg, color: products[1].chipFg, borderColor: products[1].accent }}
                    >
                      {products[1].tag}
                    </span>
                    <span className="gp-num">{products[1].number}</span>
                  </div>

                  <h3 className="gp-title">{products[1].title}</h3>
                  <span className="gp-domain" style={{ color: products[1].chipFg }}>{products[1].domain}</span>

                  <ul className="gp-points">
                    {products[1].points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>

                  <div className="gp-metrics">
                    <div className="gp-metric">
                      <div className="gp-metric__value">99.9%</div>
                      <div className="gp-metric__label">Uptime</div>
                      <div className="gp-meter"><div className="gp-meter__fill" style={{ width: "93%" }} /></div>
                    </div>
                    <div className="gp-metric">
                      <div className="gp-metric__value">38k/s</div>
                      <div className="gp-metric__label">Throughput</div>
                      <div className="gp-meter"><div className="gp-meter__fill" style={{ width: "79%" }} /></div>
                    </div>
                  </div>

                  <div className="gp-cta-row">
                    <span className="gp-dim">Monetize without compromise</span>
                    <span className="gp-btn" style={{ color: products[1].chipFg, borderColor: products[1].accent }}>
                      Learn More <i className="fa-solid fa-arrow-right-long" />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        .gp-wrap { position: relative; overflow: visible; }
        .gp-card {
          position: relative;
          display: block;
          background: #000;
          color: #fff;
          border: 2px solid #ff7a00;
          border-radius: 18px;
          padding: 18px;
          text-decoration: none;
          box-shadow:
            0 0 0 2px rgba(255,122,0,0.35) inset,
            0 0 28px rgba(255,122,0,0.45);
          overflow: hidden; /* clip inner content only */
          transform: none;
          transition: none;
          will-change: auto;
          z-index: 2; /* above halo */
        }
        .gp-card:hover,
        .gp-card:focus-visible {
          transform: none;
          border-color: #ff7a00;
          box-shadow:
            0 0 0 2px rgba(255,122,0,0.35) inset,
            0 0 28px rgba(255,122,0,0.45);
          outline: none;
        }

        /* Outer rotating glow strictly behind the card */
        .gp-halo {
          position: absolute;
          inset: -50%;
          border-radius: 50%;
          background: conic-gradient(
            from 0deg,
            rgba(0,0,0,0) 0%,
            #ff7a00 12%,
            rgba(0,0,0,0) 30%,
            rgba(0,0,0,0) 55%,
            #ffb066 68%,
            rgba(0,0,0,0) 100%
          );
          filter: blur(28px) saturate(120%);
          opacity: 0.55;
          z-index: 1; /* behind card */
          transform: rotate(0deg) scale(1);
          animation: gp-spin 10s linear infinite;
          pointer-events: none;
        }
        @keyframes gp-spin { to { transform: rotate(360deg) scale(1); } }

        .gp-desktop { height: 100%; }

        .gp-mobile { margin-bottom: 16px; }
        .gp-mobile .gp-title.gp-sticky {
          position: sticky; top: 80px; background: #0a0a0a; z-index: 3; padding-bottom: 6px;
        }

        .gp-top {
          display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 6px;
        }
        .gp-chip {
          display: inline-flex; padding: 6px 10px; font-size: 0.78rem; border-radius: 999px;
          border: 1px solid; letter-spacing: 0.04em; text-transform: uppercase; font-weight: 700;
        }
        .gp-num { opacity: 0.6; font-size: 13px; }

        .gp-title { margin: 8px 0 2px; font-size: 1.22rem; font-weight: 800; letter-spacing: 0.2px; }
        .gp-domain { display: inline-block; font-weight: 700; margin-bottom: 6px; }

        .gp-points { margin-top: 12px; margin-bottom: 0; padding-left: 18px; line-height: 1.7; }
        .gp-cta-row { display: flex; justify-content: space-between; align-items: center; margin-top: 16px; }

        .gp-dim { opacity: 0.7; font-size: 14px; }
        .gp-btn {
          padding: 10px 14px; border-radius: 12px; border: 1px solid; font-weight: 700; display: inline-flex; gap: 8px; align-items: center;
          background: rgba(255,122,0,0.12); color: #ffd7b0;
          transition: none;
        }

        .gp-metrics { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 12px 14px; margin-top: 14px; }
        .gp-metric {
          background: linear-gradient(180deg, rgba(255,122,0,0.08), rgba(255,122,0,0.03));
          border: 1px solid rgba(255,122,0,0.25);
          border-radius: 14px; padding: 12px 12px 10px;
          transition: none;
        }
        .gp-metric__value { font-size: 1.7rem; line-height: 1.1; font-weight: 900; letter-spacing: 0.2px; }
        .gp-metric__label { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.7px; opacity: 0.9; margin-top: 2px; }
        .gp-meter { margin-top: 8px; height: 6px; background: rgba(255,255,255,0.08); border-radius: 999px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); }
        .gp-meter__fill { height: 100%; background: linear-gradient(90deg, #ff7a00, #ffb066); border-radius: 999px; transform: translateZ(0); }

        @media (min-width: 768px) {
          .gp-title { font-size: 1.28rem; }
          .gp-metric__value { font-size: 1.8rem; }
        }
      `}</style>
    </section>
  );
};

export default HomeProducts;
