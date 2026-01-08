"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import { useRouter } from "next/router";

// ====== CONFIG ======
const IMAGE_SOURCES = [
  // Replace with your real images (can be any length)
  "	https://panel.digitarmedia.com/admin/uploads/WhatsApp Image 2025-09-19 at 12.15.25 PM1758266398.jpeg",
  "https://panel.digitarmedia.com/admin/uploads/WhatsApp Image 2025-09-19 at 12.15.25 PM (1)1758266394.jpeg",
  "https://panel.digitarmedia.com/admin/uploads/WhatsApp Image 2025-09-19 at 12.15.25 PM (2)1758266392.jpeg",
  "https://panel.digitarmedia.com/admin/uploads/WhatsApp Image 2025-09-19 at 12.15.26 PM1758266389.jpeg",
  "https://panel.digitarmedia.com/admin/uploads/WhatsApp Image 2025-09-19 at 12.15.26 PM (1)1758266385.jpeg",
  "https://panel.digitarmedia.com/admin/uploads/WhatsApp Image 2025-09-19 at 12.15.26 PM (2)1758266378.jpeg",
  "https://panel.digitarmedia.com/admin/uploads/WhatsApp Image 2025-09-19 at 12.15.28 PM1758266375.jpeg",
  "https://panel.digitarmedia.com/admin/uploads/WhatsApp Image 2025-09-19 at 12.15.29 PM1758266372.jpeg",
  "https://panel.digitarmedia.com/admin/uploads/WhatsApp Image 2025-09-19 at 12.15.29 PM (1)1758266370.jpeg",
  "https://panel.digitarmedia.com/admin/uploads/WhatsApp Image 2025-09-19 at 12.15.29 PM (2)1758266366.jpeg",
  "https://panel.digitarmedia.com/admin/uploads/WhatsApp Image 2025-09-19 at 12.15.30 PM1758266364.jpeg",
  "https://panel.digitarmedia.com/admin/uploads/WhatsApp Image 2025-09-19 at 12.15.30 PM (1)1758266361.jpeg",
  "https://panel.digitarmedia.com/admin/uploads/WhatsApp Image 2025-09-19 at 12.15.31 PM1758266358.jpeg",
  "https://panel.digitarmedia.com/admin/uploads/WhatsApp Image 2025-09-19 at 12.15.32 PM1758266355.jpeg",
  "https://panel.digitarmedia.com/admin/uploads/WhatsApp Image 2025-09-19 at 12.15.32 PM (1)1758266352.jpeg",
  "https://panel.digitarmedia.com/admin/uploads/WhatsApp Image 2025-09-19 at 12.15.32 PM (2)1758266349.jpeg",
  "https://panel.digitarmedia.com/admin/uploads/WhatsApp Image 2025-09-19 at 12.15.33 PM1758266346.jpeg",
  "https://panel.digitarmedia.com/admin/uploads/WhatsApp Image 2025-09-19 at 12.15.33 PM (1)1758266342.jpeg",
];

// ====== PURE REACT CAROUSEL (no libraries) ======
function useSlidesToShow() {
  const [slidesToShow, setShow] = useState(3);
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      setShow(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  return slidesToShow;
}

type CarouselProps = {
  images: string[];
  autoPlay?: boolean;
  interval?: number; // ms
};

const Carousel: React.FC<CarouselProps> = ({
  images,
  autoPlay = true,
  interval = 3000,
}) => {
  const slidesToShow = useSlidesToShow();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [index, setIndex] = useState(0); // will be set to cloneCount after mount
  const [transitioning, setTransitioning] = useState(false);

  // Clone head & tail for infinite loop
  const cloneCount =
    Math.min(slidesToShow, Math.max(1, Math.floor(images.length / 2))) || 1;
  const extended = useMemo(() => {
    if (!images.length) return [];
    const head = images.slice(0, cloneCount);
    const tail = images.slice(-cloneCount);
    return [...tail, ...images, ...head];
  }, [images, cloneCount]);

  // Measure width
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () => setContainerWidth(el.clientWidth);
    measure();
    let ro: ResizeObserver | undefined;
    if ((window as any).ResizeObserver) {
      ro = new (window as any).ResizeObserver(measure);
      if (ro) {
        ro.observe(el);
      }
    }
    window.addEventListener("resize", measure);
    return () => {
      ro?.disconnect?.();
      window.removeEventListener("resize", measure);
    };
  }, []);

  // Reset index when slidesToShow changes
  useEffect(() => {
    setIndex(cloneCount);
  }, [cloneCount, slidesToShow]);

  // Autoplay
  useEffect(() => {
    if (!autoPlay || !images.length) return;
    const id = setInterval(() => {
      next();
    }, interval);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, autoPlay, interval, slidesToShow, images.length]);

  const slideWidth = containerWidth / (slidesToShow || 1);
  const offset = -(index * slideWidth);

  const next = () => {
    if (transitioning) return;
    setTransitioning(true);
    setIndex((i) => i + 1);
  };

  const prev = () => {
    if (transitioning) return;
    setTransitioning(true);
    setIndex((i) => i - 1);
  };

  const onTransitionEnd = () => {
    setTransitioning(false);
    // If we've moved past the real slides to the cloned head, snap back
    if (index >= images.length + cloneCount) {
      setIndex(cloneCount);
    }
    // If we've moved before the real slides to the cloned tail, snap forward
    if (index <= cloneCount - 1) {
      setIndex(images.length + cloneCount - 1);
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 12,
        boxShadow: "0 6px 20px rgba(0,0,0,0.6)",
      }}
    >
      {/* Track */}
      <div
        onTransitionEnd={onTransitionEnd}
        style={{
          display: "flex",
          transform: `translateX(${offset}px)`,
          transition: transitioning ? "transform 400ms ease" : "none",
          willChange: "transform",
        }}
      >
        {extended.map((src, i) => (
          <div
            key={`${src}-${i}`}
            style={{
              width: slideWidth,
              padding: "0 10px",
              boxSizing: "border-box",
              flex: "0 0 auto",
            }}
          >
            <div
              style={{
                position: "relative",
                height:
                  slidesToShow >= 3 ? 280 : slidesToShow === 2 ? 300 : 320,
                borderRadius: 12,
                overflow: "hidden",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <img
                src={src}
                alt={`Life @ Digitar`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        aria-label="Previous"
        onClick={prev}
        style={{
          position: "absolute",
          top: "50%",
          left: 10,
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "white",
          width: 40,
          height: 40,
          borderRadius: "50%",
          backdropFilter: "blur(8px)",
          cursor: "pointer",
        }}
      >
        ‹
      </button>
      <button
        aria-label="Next"
        onClick={next}
        style={{
          position: "absolute",
          top: "50%",
          right: 10,
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "white",
          width: 40,
          height: 40,
          borderRadius: "50%",
          backdropFilter: "blur(8px)",
          cursor: "pointer",
        }}
      >
        ›
      </button>
    </div>
  );
};

// ====== PAGE ======
export default function LifePage() {
  const router = useRouter();

  useEffect(() => {
    // Check if we've already reloaded
    const hasReloaded = localStorage.getItem("lifePageReloaded");

    if (!hasReloaded) {
      // Set the flag immediately
      localStorage.setItem("lifePageReloaded", "true");
      // Reload the page
      window.location.reload();
    }
  }, []); // Empty dependency array - only runs once on mount

  return (
    <Layout header={2} footer={1} video={0}>
      {/* Background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "black",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          backgroundAttachment: "fixed",
          zIndex: -1,
        }}
      />
      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0) 70%, rgba(0,0,0,0.7) 100%)",
          zIndex: -1,
        }}
      />

      <CmnBanner title="Life @ Digitar" navigation="Life @ Digitar" />

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1rem 1rem",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Hero */}
        <h1
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
            fontWeight: 800,
            color: "#f97316",
            textAlign: "center",
            marginBottom: "0.8rem",
          }}
        >
          Life @ Digitar
        </h1>
        <p
          className="lifesubtext"
          style={{
            textAlign: "center",
            color: "#ddd",
            maxWidth: "780px",
            margin: "-30px auto 2rem auto",
            lineHeight: 1.5,
            fontSize: "0.95rem",
          }}
        >
          We believe great work comes from a happy and curious team. Here are a
          few moments that keep the energy high, learning constant, and the mood
          playful.
        </p>

        {/* Carousel (3-up desktop / 2-up tablet / 1-up mobile) */}
        <Carousel images={IMAGE_SOURCES} autoPlay interval={3200} />

        {/* Cards Grid (content merged from your earlier “Life @ Digitar”) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "18px",
            marginTop: "2.5rem",
          }}
          className="life-cards-grid"
        >
          {[
            {
              badge: "Friday Fun",
              badgeColor: "linear-gradient(90deg,#ff7b00,#ff9f1c)",
              title: "Parties every Friday",
              text: "Every Friday we close the week with an in-office gathering  snacks, music, short games and sometimes a theme. Inclusive and a great way to celebrate wins.",
            },
            {
              badge: "Games & Play",
              badgeColor: "linear-gradient(90deg,#ff7b00,#ff9f1c)",
              title: "Play games",
              text: "From quick brain teasers to team quiz nights and friendly tabletop matches  we play to build bonds and reset our focus.",
            },
            {
              badge: "Share & Grow",
              badgeColor: "linear-gradient(90deg,#ff7b00,#ff9f1c)",
              title: "Share knowledge",
              text: "Weekly knowledge sessions where teammates present learnings  campaign deep-dives, new tools and experiments. Everyone teaches and learns.",
            },
            {
              badge: "Wellness",
              badgeColor: "linear-gradient(90deg,#ff7b00,#ff9f1c)",
              title: "Small perks that matter",
              text: "Healthy snacks, flexible hours, mental health check-ins and occasional offsites  we try to make the workplace comfortable and humane.",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="life-card"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "12px",
                padding: "1.3rem",
                boxShadow: "0 6px 25px rgba(0,0,0,0.4)",
                backdropFilter: "blur(10px)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 28px rgba(249,115,22,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 6px 25px rgba(0,0,0,0.4)";
              }}
            >
              <div
                className="life-badge"
                style={{
                  background: card.badgeColor,
                  display: "inline-block",
                  padding: "10px 12px !important",
                  borderRadius: 999,
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  color: "white",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.3)",
                }}
              >
                {card.badge}
              </div>
              <h3
                className="life-card-title"
                style={{
                  marginTop: "0.7rem",
                  color: "#fff",
                  fontSize: "1.1rem",
                }}
              >
                {card.title}
              </h3>
              <p
                className="life-card-text"
                style={{ color: "#ddd", fontSize: "0.85rem", lineHeight: 1.5 }}
              >
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 768px) {
          .lifesubtext{
            margin-top: 20px !important;}
            
            .life-cards-grid {
              grid-template-columns: 1fr !important;
            }
            .life-badge {
              font-size: 0.7rem !important;
              padding: 8px 10px !important;
            }
            .life-card-title {
              font-size: 1rem !important;
              margin-top: 0.6rem !important;
            }
            .life-card-text {
              font-size: 0.8rem !important;
              line-height: 1.4 !important;
            }
          }
        `}</style>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <h3
            style={{
              color: "#f97316",
              marginBottom: "0.5rem",
              fontSize: "1.2rem",
            }}
          >
            Want to join the fun?
          </h3>
          <p
            style={{ color: "#ddd", marginBottom: "1rem", fontSize: "0.9rem" }}
          >
            We're hiring! If you're excited about growth, tech, and making work
            playful check our careers page.
          </p>
          <a
            href="/career"
            style={{
              background: "#f97316",
              color: "white",
              padding: "0.8rem 1.5rem",
              borderRadius: "8px",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 6px 20px rgba(249,115,22,0.4)",
            }}
          >
            View Careers
          </a>
        </div>
      </section>
    </Layout>
  );
}
