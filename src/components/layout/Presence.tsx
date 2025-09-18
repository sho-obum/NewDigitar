"use client";

import React, { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import Image from "next/image";

const Presence = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [activeDot, setActiveDot] = useState<number | null>(null);

  // --- generate dotted map ---
  const map = useMemo(() => new DottedMap({ height: 100, grid: "diagonal" }), []);
  const svgMap = useMemo(
    () =>
      map.getSVG({
        radius: 0.22,
        color: "#FFFFFF40",
        shape: "circle",
        backgroundColor: "black",
      }),
    [map]
  );

  // --- helper to project lat/lng to x/y in 800x400 space ---
  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  // --- dots data ---
  const bigDots = [
    {
      lat: 40.5,
      lng: -95,
      label: "USA HQ",
      address: "123 Silicon Ave, San Francisco, CA",
      email: "usa@example.com",
    },
    {
      lat: 18,
      lng: -102,
      label: "Mexico Office",
      address: "Av. Reforma 250, CDMX",
      email: "mexico@example.com",
    },
    {
      lat: 16,
      lng: 78,
      label: "India Office",
      address: "Plot 45, Bangalore, India",
      email: "india@example.com",
    },
  ];

  return (
    <section className="presence-section">
      {/* Map Background */}
      <div className="map-container">
        <Image
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
          alt="world map"
          fill
          priority
          draggable={false}
          style={{
            objectFit: "contain",
            pointerEvents: "none",
          }}
        />

        {/* Orange Dots + Cards */}
        <div className="dots-layer">
          <svg
            ref={svgRef}
            viewBox="0 0 800 400"
            preserveAspectRatio="xMidYMid meet"
            className="dots-svg"
          >
            {bigDots.map((p, i) => {
              const point = projectPoint(p.lat, p.lng);
              return (
                <g
                  key={`dot-${i}`}
                  // onClick={() => setActiveDot(activeDot === i ? null : i)}
                  // style={{ cursor: "pointer" }}
                >
                  <circle cx={point.x} cy={point.y} r="6" fill="#ff7a00" />
                  <circle cx={point.x} cy={point.y} r="6" fill="#ff7a00" opacity="0.5">
                    <animate
                      attributeName="r"
                      from="6"
                      to="20"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.5"
                      to="0"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              );
            })}
          </svg>

          {/* Floating Cards */}
          {/* {bigDots.map((dot, i) => {
            if (activeDot !== i) return null;
            const point = projectPoint(dot.lat, dot.lng);
            return (
              <motion.div
                key={`card-${i}`}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.25 }}
                className="dot-card"
                style={{
                  left: `${point.x}px`,
                  top: `${point.y - 80}px`,
                  transform: "translateX(-50%)",
                }}
              >
                <h4>{dot.label}</h4>
                <p>{dot.address}</p>
                <p>{dot.email}</p>
              </motion.div>
            );
          })} */}
        </div>
      </div>

      {/* Text Overlay */}
      <div className="content-overlay">
        <motion.h1
          className="headline"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Global Presence
        </motion.h1>
        <motion.div
          className="subheadline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Connecting brands worldwide through strategic locations
        </motion.div>
      </div>

      {/* Vignette Overlays */}
      <div className="vignette-top" />
      <div className="vignette-bottom" />

      <style jsx>{`
        .presence-section {
          position: relative;
          height: 70vh;
          width: 100%;
          overflow: hidden;
          background: black;
        }

        .map-container {
          position: absolute;
          width: 100%;
          height: 100%;
          inset: 0;
        }

        .dots-layer {
          position: absolute;
          inset: 0;
          z-index: 20;
          pointer-events: none;
        }

        .dots-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: auto;
        }

        .dot-card {
          position: absolute;
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid #ff7a00;
          box-shadow: 0 0 15px #ff7a00aa;
          color: white;
          padding: 12px 16px;
          border-radius: 12px;
          backdrop-filter: blur(10px);
          min-width: 220px;
          z-index: 30;
        }

        .content-overlay {
          position: relative;
          z-index: 10;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 2rem;
        }

        .headline {
          font-size: 5rem;
          font-weight: 900;
          color: #f97316;
          margin-bottom: 1rem;
          text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        }

        .subheadline {
          font-size: 2.5rem;
          color: #fff;
          max-width: 600px;
        }

        .vignette-top,
        .vignette-bottom {
          position: absolute;
          left: 0;
          right: 0;
          height: 200px;
          z-index: 5;
          pointer-events: none;
        }

        .vignette-top {
          top: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0.8) 40%,
            rgba(0, 0, 0, 0) 100%
          );
        }

        .vignette-bottom {
          bottom: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0.8) 40%,
            rgba(0, 0, 0, 0) 100%
          );
        }

        @media (max-width: 768px) {
          .headline {
            font-size: 3rem;
          }

          .subheadline {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Presence;
