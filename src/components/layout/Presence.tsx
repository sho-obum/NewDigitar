"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
import { GiIndiaGate } from "react-icons/gi";
import { PiBuildingsFill } from "react-icons/pi";

const Presence = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [activeDot, setActiveDot] = useState<number | null>(null);

  // --- helper to project lat/lng to x/y in 800x400 space ---
  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  // --- dots data ---
  const bigDots = [
    {
      lat: 39.3,
      lng: -176,
      label: "USA HQ",
      address: "",
      email: "",
    },
    {
      lat: -15,
      lng: -183,
      label: "Mexico Office",
      address: "Av. Reforma 250, CDMX",
      email: "mexico@example.com",
    },
    {
      lat: 4,
      lng: 104,
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
          src="https://panel.digitarmedia.com/admin/uploads/world1758255760.png"
          alt="world map"
          fill
          priority
          quality={100}
          draggable={false}
          style={{
            objectFit: "cover",
            pointerEvents: "none",
            opacity: 0.7,
          }}
        />

       
      </div>

      {/* Text Overlay */}
      <div className="content-overlay"
      style={{position: 'relative', top: '0px',}}
      >
        <motion.h1
          className="headline"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{ fontWeight: '900 !important', color: '#f97316 !important' }}

        >
          Our Presence
        </motion.h1>
        <motion.div
          className="subheadline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ fontWeight: '500', fontSize: '1.2rem',marginTop: '10px' }}
        >
          Connecting brands worldwide through strategic locations
        </motion.div>

        {/* Location Tiles */}
        <motion.div
          className="location-tiles"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            display: 'flex',
            gap: '2rem',
            marginTop: '3rem',
            justifyContent: 'center'
          }}
        >
          {/* USA Tile */}
          <motion.div
            className="location-tile"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              background: 'rgba(255, 115, 0, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid #ff7300',
              borderRadius: '15px',
              padding: '2rem',
              width: '250px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              boxShadow: '0 0 20px rgba(255, 115, 0, 0.2)'
            }}
          >
            <PiBuildingsFill size={40} color="#ff7300" />
            <h3 style={{ color: 'white', margin: 0 }}>USA</h3>
           
          </motion.div>

          {/* India Tile */}
          <motion.div
            className="location-tile"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              background: 'rgba(255, 115, 0, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid #ff7300',
              borderRadius: '15px',
              padding: '2rem',
              width: '250px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              boxShadow: '0 0 20px rgba(255, 115, 0, 0.2)'
            }}
          >
            <GiIndiaGate  size={40} color="#ff7300" />
            <h3 style={{ color: 'white', margin: 0 }}>INDIA</h3>
           
          </motion.div>
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
          font-weight: 900 !important;
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
