import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomeProductsStacked = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const card1Ref = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !card1Ref.current || !card2Ref.current) return;

    // base styles via GSAP (for older browsers where backdrop-filter may not apply immediately)
    gsap.set([card1Ref.current, card2Ref.current], {
      willChange: "transform, box-shadow, border-color, opacity",
    });

    // Fade in the whole section when it first enters viewport
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        ease: "power1.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    // Stacked scroll animation:
    // - pin the section briefly
    // - slide card2 upward, increase elevation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 65%",
        end: "+=120%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.fromTo(
      card2Ref.current,
      { y: 80, opacity: 0.85, boxShadow: "0 0 0 rgba(0,0,0,0)" },
      {
        y: -24, // moves over/above card1
        opacity: 1,
        boxShadow: "0 18px 48px rgba(0,0,0,0.35)",
        ease: "power2.out",
      }
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section"
      style={{ paddingTop: 4, paddingBottom: 4 }}
    >
      <div className="container">
        {/* Header */}
        <div className="row justify-content-center "
        style={{
          paddingTop:"-100px"
        }}
        >
          <div className="col-12 col-lg-8">
            <div className="text-center">
              <span
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
                style={{
                  marginTop: 16,
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  fontSize: "clamp(28px, 4.8vw, 48px)",
                }}
              >
                Ideas Turned Into Impact
              </h2>
            </div>
          </div>
        </div>

        {/* Stack wrapper */}
        <div className="row justify-content-center" style={{ marginTop: 32 }}>
          <div className="col-12 col-md-10 col-lg-8" style={{ position: "relative" }}>
            {/* Card 1 (base) */}
            <div
              ref={card1Ref}
              style={{
                borderRadius: 16,
                padding: 24,
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                position: "relative",
                zIndex: 1,
                // give some bottom overlap space
                marginBottom: -48,
              }}
            >
              {/* Sticky heading so it remains visible while card2 slides over */}
              <h3
                style={{
                  position: "sticky",
                  top: 80, // adjust for your header height
                  zIndex: 3,
                  margin: 0,
                  paddingBottom: 8,
                  fontWeight: 800,
                  fontSize: "clamp(22px, 3.5vw, 36px)",
                  letterSpacing: "-0.01em",
                }}
              >
                Adxity — Demand-Side Platform
              </h3>

              <div style={{ marginTop: 12 }}>
                <Link
                  href="https://adxity.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#ff7a00", fontWeight: 700, textDecoration: "none" }}
                >
                  adxity.com
                </Link>
                <ul
                  style={{
                    marginTop: 12,
                    marginBottom: 0,
                    paddingLeft: 18,
                    lineHeight: 1.7,
                    opacity: 0.95,
                  }}
                >
                  <li>Performance-first media buying across programmatic & social.</li>
                  <li>Real-time optimization with transparent reporting.</li>
                  <li>Audience, creative, and LTV insights for scale.</li>
                </ul>
              </div>

              <div
                className="d-flex justify-content-between align-items-center"
                style={{ marginTop: 16 }}
              >
                <span style={{ opacity: 0.7, fontSize: 14 }}>Drive measurable ROI</span>
                <Link
                  href="https://adxity.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    padding: "10px 14px",
                    borderRadius: 12,
                    border: "1px solid rgba(255,122,0,0.35)",
                    color: "#ff7a00",
                    fontWeight: 700,
                  }}
                >
                  Learn More <i className="fa-solid fa-arrow-right-long" style={{ marginLeft: 8 }} />
                </Link>
              </div>
            </div>

            {/* Card 2 (slides over) */}
            <div
              ref={card2Ref}
              style={{
                borderRadius: 16,
                padding: 24,
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                position: "relative",
                zIndex: 2, // above card1
              }}
            >
              <h3
                style={{
                  margin: 0,
                  paddingBottom: 8,
                  fontWeight: 800,
                  fontSize: "clamp(22px, 3.5vw, 36px)",
                  letterSpacing: "-0.01em",
                }}
              >
                Adpocket — In-App Monetization SDK
              </h3>

              <div style={{ marginTop: 12 }}>
                <Link
                  href="https://adpocket.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#9be89f", fontWeight: 700, textDecoration: "none" }}
                >
                  adpocket.ai
                </Link>
                <ul
                  style={{
                    marginTop: 12,
                    marginBottom: 0,
                    paddingLeft: 18,
                    lineHeight: 1.7,
                    opacity: 0.95,
                  }}
                >
                  <li>Plug-and-play SDK for premium, non-intrusive ad formats.</li>
                  <li>High eCPMs with smart mediation & fill optimization.</li>
                  <li>Lightweight, privacy-safe, and developer-friendly.</li>
                </ul>
              </div>

              <div
                className="d-flex justify-content-between align-items-center"
                style={{ marginTop: 16 }}
              >
                <span style={{ opacity: 0.7, fontSize: 14 }}>Monetize without compromise</span>
                <Link
                  href="https://adpocket.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    padding: "10px 14px",
                    borderRadius: 12,
                    border: "1px solid rgba(76,175,80,0.35)",
                    color: "#9be89f",
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
    </section>
  );
};

export default HomeProductsStacked;
