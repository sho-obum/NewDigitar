"use client";

import React from "react";
import { WorldMap } from "../components/ui/world-map"; // adjust path if needed
import { motion } from "framer-motion";
import { FiTarget, FiActivity, FiUsers, FiShield } from "react-icons/fi";

const containerStyle: React.CSSProperties = {
  minHeight: "100vh",
  backgroundColor: "black",
  color: "white",
  display: "flex",
  flexDirection: "column",
  fontFamily: "sans-serif",
};

const navbarStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
  borderBottom: "1px solid #333",
  position: "relative",
  background: "black",
  zIndex: 100,
};

const breadcrumbStyle: React.CSSProperties = {
  fontSize: "0.9rem",
  color: "#888",
};

const logoStyle: React.CSSProperties = {
  fontWeight: "bold",
  fontSize: "1.2rem",
  color: "#f97316",
};

const mainStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: "4rem 1rem",
};

const headlineStyle: React.CSSProperties = {
  fontSize: "5rem",
  fontWeight: 800,
  color: "#f97316",
  marginBottom: "1.5rem",
  lineHeight: 0.8,
  maxWidth: "800px",
};

const introStyle: React.CSSProperties = {
  fontSize: "1.1rem",
  color: "#ccc",
  maxWidth: "700px",
  marginBottom: "3rem",
};

export default function PerformancePage() {
  const cards = [
    {
      title: "User Retention",
      points: [
        "Dynamic Retargeting — Re-engage users with personalized ads based on behavior.",
        "ROI & LTV — Boost ROI by retaining users and increasing lifetime value.",
      ],
      icon: <FiTarget size={42} />,
    },
    {
      title: "Performance Optimization",
      points: [
        "Creative Optimisation — Deliver engaging personalized ads.",
        "KPI — Align campaigns with measurable business goals.",
      ],
      icon: <FiActivity size={42} />,
    },
    {
      title: "Audience Segmentation",
      points: [
        "Demographic Segmentation — Target users by behavior, demographics & interests.",
        "Targeted Messaging — Deliver tailored messaging for higher engagement.",
      ],
      icon: <FiUsers size={42} />,
    },
    {
      title: "Fraud Detection",
      points: [
        "IP Fraud Detection — Real-time AI tool blocking fake installs & bots.",
        "Avg. Fraud Rate < 12% — Maintain quality with proactive fraud control.",
      ],
      icon: <FiShield size={42} />,
    },
  ];

  return (
    <div style={containerStyle}>
      {/* NAVBAR */}
      <nav style={navbarStyle}>
        <div style={logoStyle}>DIGITAR MEDIA</div>
        <div style={breadcrumbStyle}>
          Home &gt; <span style={{ color: "#f97316" }}>Performance</span>
        </div>
      </nav>

      {/* MAIN SECTION */}
      <main style={mainStyle}>
        {/* HEADLINE */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
          }}
        >
          <motion.h1
            style={headlineStyle}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Drive Results with Precision Marketing
          </motion.h1>
          {/* INTRO */}
          <motion.p
            style={introStyle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            At{" "}
            <span style={{ color: "#f97316", fontWeight: 600 }}>
              Digitar Media
            </span>
            , our performance marketing strategies are driven by measurable
            results — every click, lead, and conversion is tracked for
            ROI-focused growth. With campaigns tailored for global reach, the
            map below showcases the worldwide impact of our data-driven
            approach.
          </motion.p>
        </div>

        {/* WORLD MAP */}
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            marginBottom: "3rem",
            position: "relative",
            zIndex: 1,
            bottom: "350px",
            scale: "1.5",
          }}
        >
          <WorldMap
            dots={[
              {
                start: { lat: 28.61, lng: 77.2 }, // India
                end: { lat: 28.61, lng: 77.2 }, // same as start (just a point)
              },
              {
                start: { lat: 44.82, lng: -106.9 }, // Sheridan, Wyoming
                end: { lat: 44.82, lng: -106.9 },
              },
              {
                start: { lat: 19.43, lng: -99.13 }, // Mexico City
                end: { lat: 19.43, lng: -99.13 },
              },
            ]}
            lineColor="#f97316"
          />
        </div>

        {/* 4 CARDS */}
        <div className="cards-grid "
        style={{
            bottom: "400px",
        }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="feature-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="icon">{card.icon}</div>
              <h2>{card.title}</h2>
              <ul>
                {card.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </main>

      <style jsx>{`
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          max-width: 1200px;
          width: 100%;
          position: relative;
          bottom: "350px !important";
          z-index: 20;
        }
        @media (max-width: 1024px) {
          .cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .cards-grid {
            grid-template-columns: 1fr;
          }
        }
        .feature-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          border: 1.5px solid rgba(255, 122, 0, 0.5);
          border-radius: 16px;
          padding: 1.5rem;
          box-shadow: 0 0 18px rgba(255, 122, 0, 0.25);
          animation: pulse-border 3s infinite;
          display: flex;
          flex-direction: column;
          text-align: left;
          transition: box-shadow 0.3s ease;
        }
        .feature-card:hover {
          box-shadow: 0 0 32px rgba(255, 122, 0, 0.6);
        }
        .icon {
          background: rgba(255, 122, 0, 0.1);
          border: 1px solid rgba(255, 122, 0, 0.3);
          backdrop-filter: blur(6px);
          display: inline-flex;
          padding: 10px;
          border-radius: 50%;
          margin-bottom: 12px;
          color: #ff7a00;
        }
        h2 {
          font-size: 1.4rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 10px;
        }
        ul {
          color: #ddd;
          font-size: 0.95rem;
          line-height: 1.5;
          padding-left: 1rem;
          list-style: disc;
        }
        @keyframes pulse-border {
          0% {
            box-shadow: 0 0 12px rgba(255, 122, 0, 0.25);
          }
          50% {
            box-shadow: 0 0 26px rgba(255, 122, 0, 0.55);
          }
          100% {
            box-shadow: 0 0 12px rgba(255, 122, 0, 0.25);
          }
        }
      `}</style>
    </div>
  );
}
