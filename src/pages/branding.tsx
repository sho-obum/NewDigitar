"use client";

import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import { motion } from "framer-motion";
import CreativePage from "./creative";
import BrandingProcess from "@/components/BrandingProcess";

export default function BrandingPage() {
  return (
    <Layout header={2} footer={1} video={0}>
      {/* BACKGROUND GRID + VIGNETTE */}
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

      {/* PAGE BANNER */}
      <CmnBanner title="Branding" navigation="Branding" />

      {/* PAGE CONTENT */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "1rem 1rem" }}>
        {/* HERO SECTION */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 900,
            textAlign: "center",
            marginBottom: "7rem",
            background: "linear-gradient(to right, white, #ddd)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Build a Brand That Sticks
        </motion.h1>
        <div style={{
          position: "relative",
          marginTop: "-100px",  // Negative margin to pull it up
          width: "100%",
          height: 0,  // This prevents the div from taking up space
        }}>
          <motion.img 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotate: -2 }}
            style={{
              position: "relative",
              width: "clamp(80px, 20vw, 300px)",
              left:"760px",
              top: "-167px",
              zIndex: -1,
            }}
            src="https://media-public.canva.com/Xi0gw/MAFoKeXi0gw/1/tl.png" 
            alt="" 
          />
            <img
              src="http://media-public.canva.com/P5wOs/MAGGhGP5wOs/1/tl.png"
              alt=""
              className="social-arrow"
              style={{
                position: "relative",
                width: "70px",
                transform: " rotate(225deg)",
                top: "10px",
                left: "50px",
              }}
            />
          <motion.img 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            style={{
              position: "absolute",
              width: "120px",
              left: "15%",
              top: "100px",
            }}
            src="https://media-public.canva.com/tfmcs/MAFCORtfmcs/1/tl.png" 
            alt="" 
          />
        </div>

        {/* INTRO ROW */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "stretch",
            marginBottom: "3rem",
            flexWrap: "wrap",
          }}
        >
          {/* LEFT TEXT */}
          <div
            style={{
              flex: 1,
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              minWidth: "280px",
            }}
          >
            <div
              style={{
                width: "4px",
                background: "#f97316",
                borderRadius: "2px",
              }}
            />
            <p style={{ fontSize: "1.2rem", lineHeight: 1.6, maxWidth: "500px" }}>
              We design every touchpoint from{" "}
              <span style={{ fontWeight: 700, color: "#f97316" }}>logo</span> to{" "}
              <span style={{ fontWeight: 700, color: "#f97316" }}>voice</span> to
              make your brand unforgettable.
            </p>
          </div>

          {/* ORANGE BOX */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            style={{
              flex: 1,
              background: "linear-gradient(135deg, #f97316, #ffae42)",
              borderRadius: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "2rem",
              boxShadow: "0 6px 20px rgba(249, 115, 22, 0.4)",
              minWidth: "300px",
            }}
          >
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: "1.8rem", fontWeight: 700 }}>
                Digitar Moves for your <span style={{ fontWeight: 900 }}>Brand</span>
              </h3>
            </div>
            <img
              src="https://media-public.canva.com/QfqXI/MAFEJQQfqXI/1/tl.png"
              alt="Growth Chart"
              style={{
                width: "80px",
                filter: "brightness(0) invert(1) drop-shadow(0 4px 6px rgba(0,0,0,0.3))",

              }}
            />
          </motion.div>
        </motion.section>

        {/* 4 BIG BOXES */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "24px",
          }}
        >
          {[
            {
              title: "Display Advertising",
              desc: "Get your brand in front of the right audience with high-impact displays.",
            },
            {
              title: "Native Advertising",
              desc: "Blend your message naturally into the user experience for better engagement.",
            },
            {
              title: "Brand Identity Development",
              desc: "Craft a cohesive, memorable identity across every platform.",
            },
            {
              title: "Content & Storytelling",
              desc: "Engage your audience with narratives that stick.",
            },
          ].map((box, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 24px rgba(249, 115, 22, 0.4)",
              }}
              style={{
                background: "black",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "16px",
                padding: "2rem",
                boxShadow: "0 4px 14px rgba(0,0,0,0.4)",
                textAlign: "center",
                transition: "all 0.3s ease",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  marginBottom: "1rem",
                }}
              >
                {box.title}
              </h3>
              <p style={{ fontSize: "1rem", color: "#ddd" }}>{box.desc}</p>
            </motion.div>
          ))}
        </section>
        {/* <CreativePage/> */}
        {/* <BrandingProcess/> */}
      </div>
    </Layout>
  );
}
