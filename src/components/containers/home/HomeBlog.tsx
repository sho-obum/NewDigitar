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
  const card1Ref = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);
  const card1TitleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    // GSAP only for mobile view
    const mm = gsap.matchMedia();

    mm.add("(max-width: 767px)", () => {
      const wrap = mobileWrapRef.current;
      const c2 = card2Ref.current;
      const title = card1TitleRef.current;

      if (!wrap || !c2 || !title) return;

      // Measure the first heading height so we stop before covering it
      const titleH = title.getBoundingClientRect().height;
      const gap = 12; // little breathing room
      const targetY = -(titleH + gap); // how far card 2 may move up

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
              <h2
                className="title title-anim"
                style={{ marginTop: 16, fontWeight: 800, letterSpacing: "-0.02em" }}
              >
                Ideas Turned Into Impact
              </h2>
              <p style={{ marginTop: 12, color: "#aaa", maxWidth: 680, marginInline: "auto" }}>
                Built to scale performance across channels—privacy-safe, measurable, and fast to integrate.
              </p>
            </div>
          </div>
        </div>

        {/* ********** MOBILE STACKED (≤ md) ********** */}
        <div className="d-block d-md-none" ref={mobileWrapRef} style={{ marginTop: 32 }}>
          {/* Card 1 (solid) */}
          <div
            ref={card1Ref}
            style={{
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 16,
              padding: 20,
              background: "#111214", // solid (no transparency)
              position: "relative",
              zIndex: 2,
              marginBottom: -36, // small overlap space for card 2
            }}
          >
            {/* Sticky title so it stays visible while card 2 moves */}
            <h3
              ref={card1TitleRef}
              style={{
                position: "sticky",
                top: 80, // adjust for your navbar height if needed
                zIndex: 5,
                margin: 0,
                paddingBottom: 8,
                fontWeight: 800,
                fontSize: "clamp(20px, 5.6vw, 28px)",
                letterSpacing: "-0.01em",
                background: "#111214",
              }}
            >
              {products[0].title}
            </h3>

            <Link
              href={products[0].href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: products[0].chipFg, fontWeight: 700, textDecoration: "none" }}
            >
              {products[0].domain}
            </Link>
            <ul style={{ marginTop: 12, marginBottom: 0, paddingLeft: 18, lineHeight: 1.7 }}>
              {products[0].points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>

          {/* Card 2 (slides up but stops before covering the title) */}
          <div
            ref={card2Ref}
            style={{
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 16,
              padding: 20,
              background: "#101114", // solid
              position: "relative",
              zIndex: 3,
            }}
          >
            <h3
              style={{
                margin: 0,
                paddingBottom: 8,
                fontWeight: 800,
                fontSize: "clamp(20px, 5.6vw, 28px)",
                letterSpacing: "-0.01em",
              }}
            >
              {products[1].title}
            </h3>

            <Link
              href={products[1].href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: products[1].chipFg, fontWeight: 700, textDecoration: "none" }}
            >
              {products[1].domain}
            </Link>
            <ul style={{ marginTop: 12, marginBottom: 0, paddingLeft: 18, lineHeight: 1.7 }}>
              {products[1].points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* ********** DESKTOP (≥ md) — original two tiles ********** */}
        <div className="d-none d-md-block" style={{ marginTop: 32 }}>
          <div className="row g-4">
            {/* Adxity */}
            <div className="col-12 col-md-6">
              <div
                className="h-100 d-flex flex-column justify-content-between"
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16,
                  padding: 20,
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                  transition: "transform .25s ease, border-color .25s ease, box-shadow .25s ease",
                }}
                onMouseEnter={(e: any) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = "rgba(255,122,0,0.35)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.25)";
                }}
                onMouseLeave={(e: any) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div>
                  <div className="d-flex align-items-center justify-content-between">
                    <span
                      style={{
                        fontSize: 13,
                        padding: "6px 10px",
                        borderRadius: 999,
                        background: products[0].chipBg,
                        color: products[0].chipFg,
                        fontWeight: 700,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}
                    >
                      {products[0].tag}
                    </span>
                    <span style={{ opacity: 0.6, fontSize: 13 }}>{products[0].number}</span>
                  </div>

                  <h3 style={{ marginTop: 12, marginBottom: 8, fontWeight: 800 }}>
                    {products[0].title}
                  </h3>

                  <Link
                    href={products[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: products[0].chipFg, fontWeight: 700, textDecoration: "none" }}
                  >
                    {products[0].domain}
                  </Link>

                  <ul style={{ marginTop: 16, marginBottom: 0, paddingLeft: 18, lineHeight: 1.7 }}>
                    {products[0].points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>

                <div className="d-flex justify-content-between align-items-center" style={{ marginTop: 20 }}>
                  <span style={{ opacity: 0.6, fontSize: 14 }}>Drive measurable ROI</span>
                  <Link
                    href={products[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{
                      padding: "10px 14px",
                      borderRadius: 12,
                      border: `1px solid ${products[0].accent}`,
                      color: products[0].chipFg,
                      fontWeight: 700,
                    }}
                  >
                    Learn More <i className="fa-solid fa-arrow-right-long" style={{ marginLeft: 8 }} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Adpocket */}
            <div className="col-12 col-md-6">
              <div
                className="h-100 d-flex flex-column justify-content-between"
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16,
                  padding: 20,
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                  transition: "transform .25s ease, border-color .25s ease, box-shadow .25s ease",
                }}
                onMouseEnter={(e: any) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = "rgba(76,175,80,0.35)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.25)";
                }}
                onMouseLeave={(e: any) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div>
                  <div className="d-flex align-items-center justify-content-between">
                    <span
                      style={{
                        fontSize: 13,
                        padding: "6px 10px",
                        borderRadius: 999,
                        background: products[1].chipBg,
                        color: products[1].chipFg,
                        fontWeight: 700,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}
                    >
                      {products[1].tag}
                    </span>
                    <span style={{ opacity: 0.6, fontSize: 13 }}>{products[1].number}</span>
                  </div>

                  <h3 style={{ marginTop: 12, marginBottom: 8, fontWeight: 800 }}>
                    {products[1].title}
                  </h3>

                  <Link
                    href={products[1].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: products[1].chipFg, fontWeight: 700, textDecoration: "none" }}
                  >
                    {products[1].domain}
                  </Link>

                  <ul style={{ marginTop: 16, marginBottom: 0, paddingLeft: 18, lineHeight: 1.7 }}>
                    {products[1].points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>

                <div className="d-flex justify-content-between align-items-center" style={{ marginTop: 20 }}>
                  <span style={{ opacity: 0.6, fontSize: 14 }}>Monetize without compromise</span>
                  <Link
                    href={products[1].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{
                      padding: "10px 14px",
                      borderRadius: 12,
                      border: `1px solid ${products[1].accent}`,
                      color: products[1].chipFg,
                      fontWeight: 700,
                    }}
                  >
                    Learn More <i className="fa-solid fa-arrow-right-long" style={{ marginLeft: 8 }} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ********** /DESKTOP ********** */}
      </div>
    </section>
  );
};

export default HomeProducts;
