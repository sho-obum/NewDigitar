"use client";

import { useRef, useMemo, useState } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import Image from "next/image";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
  background?: string;
}

export function WorldMap({
  dots = [],
  lineColor = "#f97316",
  background = "black",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [activeDot, setActiveDot] = useState<number | null>(null);

  const map = useMemo(() => new DottedMap({ height: 100, grid: "diagonal" }), []);
  const svgMap = useMemo(
    () =>
      map.getSVG({
        radius: 0.22,
        color: background === "black" ? "#FFFFFF40" : "#00000040",
        shape: "circle",
        backgroundColor: background,
      }),
    [map, background]
  );

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

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
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "2/1",
        borderRadius: "12px",
        overflow: "hidden",
        backgroundColor: background,
        zIndex: 0, // ✅ map stays at the bottom
      }}
    >
      {/* Background Map */}
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        alt="world map"
        fill
        priority
        draggable={false}
        style={{
          position: "absolute",
          inset: "0",
          objectFit: "contain",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Your normal text layer (from parent or children) would go ABOVE this */}

      {/* 🔥 TOP LAYER for dots + cards */}
      <div
        style={{
          position: "absolute",
          inset: "0",
          zIndex: 9999, // ✅ Topmost layer
          pointerEvents: "none", // allow clicks only on SVG/dots
        }}
      >
        <svg
          ref={svgRef}
          viewBox="0 0 800 400"
          preserveAspectRatio="xMidYMid meet"
          style={{
            position: "absolute",
            inset: "0",
            width: "100%",
            height: "100%",
            pointerEvents: "auto", // ✅ clickable
          }}
        >
          {bigDots.map((p, i) => {
            const point = projectPoint(p.lat, p.lng);
            return (
              <g
                key={`big-${i}`}
                onClick={() => setActiveDot(activeDot === i ? null : i)}
                style={{ cursor: "pointer" }}
              >
                <circle cx={point.x} cy={point.y} r="6" fill="#ff7a00" />
                <circle cx={point.x} cy={point.y} r="6" fill="#ff7a00" opacity="0.5">
                  <animate attributeName="r" from="6" to="20" dur="1.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" repeatCount="indefinite" />
                </circle>
              </g>
            );
          })}
        </svg>

        {/* Floating Cards */}
        {bigDots.map((dot, i) => {
          if (activeDot !== i) return null;
          const point = projectPoint(dot.lat, dot.lng);
          return (
            <div
              key={`card-${i}`}
              style={{
                position: "absolute",
                left: `${point.x}px`,
                top: `${point.y - 80}px`,
                transform: "translateX(-50%)",
                background: "rgba(0,0,0,0.6)",
                border: "1px solid #ff7a00",
                boxShadow: "0 0 15px #ff7a00aa",
                color: "white",
                padding: "12px 16px",
                borderRadius: "12px",
                backdropFilter: "blur(10px)",
                minWidth: "220px",
                pointerEvents: "auto",
              }}
            >
              <h4 style={{ color: "#ff7a00", margin: "0 0 6px", fontWeight: 600 }}>
                {dot.label}
              </h4>
              <p style={{ margin: 0, fontSize: "0.85rem" }}>{dot.address}</p>
              <p style={{ margin: "4px 0 0", fontSize: "0.85rem", opacity: 0.8 }}>
                {dot.email}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
