"use client";

import React from "react";
import { WorldMap } from "../ui/world-map";
import { motion } from "framer-motion";

const Presence = () => {
  return (
    <section className="presence-section">
      {/* Background Map */}
      <div className="map-container">
        <WorldMap
          dots={[
            { start: { lat: 28.61, lng: 77.2 }, end: { lat: 28.61, lng: 77.2 } },
            { start: { lat: 44.82, lng: -106.9 }, end: { lat: 44.82, lng: -106.9 } },
            { start: { lat: 19.43, lng: -99.13 }, end: { lat: 19.43, lng: -99.13 } },
          ]}
          lineColor="#f97316"
        />
      </div>

      {/* Content Overlay */}
      <div className="content-overlay">
        <motion.h1
          className="headline"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            fontWeight:"900"
          }}
        >
          Global Presence
        </motion.h1>
        <motion.div
          className="subheadline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            fontSize:"1.2rem",
            color:"#ff7a00",
            fontWeight:"500",
            opacity:"0.5 !important"
          }}
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
          opacity: 0.6;
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
          text-shadow: 0 0 20px rgba(0,0,0,0.5);
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
          background: linear-gradient(to bottom, 
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,0.8) 40%,
            rgba(0,0,0,0) 100%
          );
        }

        .vignette-bottom {
          bottom: 0;
          background: linear-gradient(to top, 
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,0.8) 40%,
            rgba(0,0,0,0) 100%
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