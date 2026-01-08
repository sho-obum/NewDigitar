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
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "1rem 1rem" }}
      >
        {/* HERO SECTION */}
        <motion.h1
          className="branding-hero-heading"
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
        <div
          className="branding-decorative-images"
          style={{
            position: "relative",
            marginTop: "-100px", // Negative margin to pull it up
            width: "100%",
            height: 0, // This prevents the div from taking up space
          }}
        >
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotate: -2 }}
            style={{
              position: "relative",
              width: "clamp(80px, 20vw, 300px)",
              left: "766px",
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
          {/* <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            style={{
              position: "absolute",
              width: "120px",
              left: "15%",
              top: "10px",
            }}
            src="https://media-public.canva.com/tfmcs/MAFCORtfmcs/1/tl.png"
            alt=""
          /> */}
        </div>

        {/* INTRO ROW */}
        <motion.section
          className="branding-intro-row"
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
            className="branding-intro-text"
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
            <p
              className="branding-intro-desc"
              style={{ fontSize: "1.2rem", lineHeight: 1.6, maxWidth: "500px" }}
            >
              We design every touchpoint from{" "}
              <span style={{ fontWeight: 700, color: "#f97316" }}>logo</span> to{" "}
              <span style={{ fontWeight: 700, color: "#f97316" }}>voice</span>{" "}
              to make your brand unforgettable.
            </p>
          </div>

          {/* ORANGE BOX */}
          <motion.div
            className="branding-orange-box"
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
              <h3 className="branding-orange-title" style={{ fontSize: "1.8rem", fontWeight: 700 }}>
                Digitar Moves for your{" "}
                <span style={{ fontWeight: 900 }}>Brand</span>
              </h3>
            </div>
            <img
              className="branding-orange-icon"
              src="https://media-public.canva.com/QfqXI/MAFEJQQfqXI/1/tl.png"
              alt="Growth Chart"
              style={{
                width: "80px",
                filter:
                  "brightness(0) invert(1) drop-shadow(0 4px 6px rgba(0,0,0,0.3))",
              }}
            />
          </motion.div>
        </motion.section>

        {/* 4 BIG BOXES */}
        <section
          className="branding-boxes-grid"
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
              className="branding-box"
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
                marginBottom: " 2px",
              }}
            >
              <h3
                className="branding-box-title"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  marginBottom: "1rem",
                }}
              >
                {box.title}
              </h3>
              <p className="branding-box-desc" style={{ fontSize: "1rem", color: "#ddd" }}>{box.desc}</p>
            </motion.div>
          ))}
        </section>
        {/* <CreativePage/> */}
        {/* <BrandingProcess/> */}
      </div>
      <div
      style={{
        marginBottom:"100px"
      }}
      ></div>
      
      <style jsx>{`
        @media (max-width: 768px) {
          /* Hero heading */
          :global(.branding-hero-heading) {
            font-size: clamp(1.8rem, 5vw, 2.2rem) !important;
            margin-bottom: 1rem !important;
          }

          /* Show decorative images on mobile */
          :global(.branding-decorative-images) {
            display: block !important;
            height: auto !important;
            margin-top: -50px !important;
          }

          :global(.branding-decorative-images img) {
            position: relative !important;
          }

          /* Adjust first image positioning */
          :global(.branding-decorative-images img:first-child) {
            left: 89% !important;
            transform: translateX(-50%) !important;
            top: -20px !important;
            width: 28vw !important;
            z-index: 1 !important;
          }

          /* Social arrow positioning on mobile */
          :global(.social-arrow) {
            position: relative !important;
            width: 30px !important;
            top: -4px !important;
            left: 84% !important;
            transform: translateX(-50%) rotate(225deg) !important;
            display: block !important;
            margin-top: 10px !important;
          }

          /* Intro row - stack vertically */
          :global(.branding-intro-row) {
            flex-direction: column !important;
            gap: 1.5rem !important;
            margin-bottom: 2rem !important;
          }

          :global(.branding-intro-text) {
            min-width: 100% !important;
            justify-content: flex-start !important;
          }

          :global(.branding-intro-desc) {
            font-size: 0.95rem !important;
            line-height: 1.5 !important;
            margin-top: -46px !important;
          }

          /* Orange box */
          :global(.branding-orange-box) {
            min-width: 100% !important;
            flex-direction: row !important;
            padding: 1rem !important;
          }

          :global(.branding-orange-title) {
            font-size: 1.2rem !important;
          }

          :global(.branding-orange-icon) {
            width: 60px !important;
          }

          /* 4 boxes grid - single column */
          :global(.branding-boxes-grid) {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }

          :global(.branding-box) {
            padding: 1.5rem !important;
          }

          :global(.branding-box-title) {
            font-size: 1.2rem !important;
            margin-bottom: 0.8rem !important;
          }

          :global(.branding-box-desc) {
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </Layout>
  );
}
