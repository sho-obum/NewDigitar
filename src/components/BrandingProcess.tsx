import React from "react";
import { motion } from "framer-motion";

export default function BrandingProcess() {
  const steps = [
    {
      title: "Discovery & Research",
      desc: "We dive deep into your market, audience, and competitors to find your edge.",
    },
    {
      title: "Identity Design",
      desc: "We craft your logo, colors, and brand assets for a cohesive visual identity.",
    },
    {
      title: "Messaging & Voice",
      desc: "We define how your brand speaks — tone, style, and personality that resonates.",
    },
    {
      title: "Launch & Scale",
      desc: "We roll out your new identity across touchpoints and optimize for growth.",
    },
  ];

  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "4rem auto",
        padding: "0 1rem",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: 800,
          marginBottom: "3rem",
          color: "white",
        }}
      >
        Our Branding Process
      </h2>

      {/* Steps */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          position: "relative",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {/* Connecting line (desktop only) */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "5%",
            right: "5%",
            height: "3px",
            background: "rgba(249, 115, 22, 0.4)",
            zIndex: 0,
          }}
        />

        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
            style={{
              flex: "1 1 200px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "16px",
              padding: "2rem 1rem",
              textAlign: "center",
              position: "relative",
              zIndex: 1,
              boxShadow: "0 4px 14px rgba(0,0,0,0.4)",
              transition: "all 0.3s ease",
            }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 24px rgba(249, 115, 22, 0.4)",
            }}
          >
            {/* Circle Number */}
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "#f97316",
                color: "white",
                fontWeight: 700,
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1rem",
                boxShadow: "0 4px 12px rgba(249,115,22,0.5)",
              }}
            >
              {i + 1}
            </div>

            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>
              {step.title}
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#ddd" }}>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
