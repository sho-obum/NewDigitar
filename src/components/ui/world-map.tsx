"use client";

import { useRef, useMemo } from "react";
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
  background = "black", // always black by default
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  // ✅ Memoize map creation (runs once)
  const map = useMemo(() => new DottedMap({ height: 80, grid: "diagonal" }), []);

  // ✅ Memoize SVG output (runs once unless background changes)
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

  // Projection function
  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  // Curved path generator
  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // ✅ Added 6 standalone pulsing dots (centered within 30% Y threshold)
  const extraDots = [
    { lat: 10, lng: -100 }, // Pacific
    { lat: 5, lng: -40 }, // Atlantic near Africa
    { lat: -5, lng: 30 }, // Central Africa
    { lat: -8, lng: 80 }, // Indian Ocean
    { lat: 15, lng: 120 }, // SE Asia
    { lat: -12, lng: 150 }, // Pacific near Australia
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
      }}
    >
      {/* ✅ Precomputed SVG as background image */}
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

      {/* ✅ SVG overlay for paths + points */}
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        preserveAspectRatio="xMidYMid meet"
        style={{
          position: "absolute",
          inset: "0",
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 10,
        }}
      >
        {/* Existing path animation */}
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <motion.path
              key={`path-${i}`}
              d={createCurvedPath(startPoint, endPoint)}
              fill="none"
              stroke="url(#path-gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.3 + i * 0.3, ease: "easeOut" }}
            />
          );
        })}

        {/* Gradient for line stroke */}
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Pulsing points for provided dots */}
        {dots.map((dot, i) => {
          const start = projectPoint(dot.start.lat, dot.start.lng);
          const end = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`points-${i}`}>
              {[start, end].map((p, idx) => (
                <g key={idx}>
                  <circle cx={p.x} cy={p.y} r="2" fill={lineColor} />
                  <circle cx={p.x} cy={p.y} r="2" fill={lineColor} opacity="0.5">
                    <animate attributeName="r" from="2" to="8" dur="1.5s" begin="0s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
                  </circle>
                </g>
              ))}
            </g>
          );
        })}

        {/* ✅ Extra pulsing dots */}
        {extraDots.map((p, i) => {
          const point = projectPoint(p.lat, p.lng);
          return (
            <g key={`extra-${i}`}>
              <circle cx={point.x} cy={point.y} r="2" fill={lineColor} />
              <circle cx={point.x} cy={point.y} r="2" fill={lineColor} opacity="0.5">
                <animate attributeName="r" from="2" to="8" dur="1.5s" begin="0s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
              </circle>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
