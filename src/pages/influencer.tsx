"use client";

import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import {
  FaMoneyBillWave,
  FaShoppingCart,
  FaPlay,
  FaGamepad,
  FaEye,
} from "react-icons/fa";

export default function InfluencerLandingPage() {
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

      <CmnBanner
        title="Influencer Marketing"
        navigation="Influencer Marketing"
      />

      {/* Hero Section */}
      <div
        className=""
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          className="influencer-hero-heading"
          style={{
            fontSize: "clamp(2.8rem, 5vw, 3.5rem)",
            fontWeight: "800 !important",
            color: "#ffffff !important",
            lineHeight: 1.2,
            marginBottom: "1rem",
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
        >
          Influencer Marketing{" "}
          <span className="brheading">
            <br />
          </span>
          <span style={{ color: "#f97316" }}>That Delivers</span>
        </h1>
        <p
          className="influencer-hero-subheading"
          style={{
            fontSize: "1.2rem",
            color: "#dddddd !important",
            marginBottom: "2rem",
            lineHeight: 1.5,
            textAlign: "center",
          }}
        >
          We manage influencer campaigns that drive awareness, trust, and action
          <br />
          <span style={{ color: "#f97316" }}>
            from niche creators to viral voices.
          </span>
        </p>
      </div>
      <div
        className="influencer-features-section"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "4rem 2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT SECTION */}
        <div
          className="influencer-features-grid"
          style={{
            flex: 1,
            minWidth: "320px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* FEATURE CARDS */}
          <div
            className="influencer-feature-cards"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
              width: "100%",
            }}
          >
            {[
              {
                icon: <FaMoneyBillWave size={24} />,
                title: "Fintech",
                text: "Building trust and driving adoption in the digital finance space.",
              },
              {
                icon: <FaShoppingCart size={24} />,
                title: "E-commerce",
                text: "Turning product discovery into instant conversions.",
              },
              {
                icon: <FaPlay size={24} />,
                title: "Entertainment",
                text: "Keeping audiences hooked with share-worthy moments.",
              },
              {
                icon: <FaGamepad size={24} />,
                title: "iGaming",
                text: "Driving traffic, engagement, and real-time player action.",
              },
            ].map((box, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(249, 115, 22, 0.4)",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 0 18px rgba(249, 115, 22, 0.15)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.04)";
                  e.currentTarget.style.boxShadow =
                    "0 0 28px rgba(249, 115, 22, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 0 18px rgba(249, 115, 22, 0.15)";
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #f97316, #ffb366)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.4rem",
                        color: "white",
                        boxShadow: "0 4px 10px rgba(249, 115, 22, 0.5)",
                        flexShrink: 0,
                      }}
                    >
                      {box.icon}
                    </div>
                    <h3
                      className="influencer-feature-title"
                      style={{
                        fontSize: "1.3rem",
                        fontWeight: "bold",
                        color: "#ffffff !important",
                        margin: 0,
                      }}
                    >
                      {box.title}
                    </h3>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <div style={{ width: "48px", flexShrink: 0 }}></div>
                    <hr
                      style={{
                        width: "80%",
                        border: "none",
                        height: "1px",
                        background:
                          "linear-gradient(to right, #f97316 20%, rgba(249, 115, 22, 0.2))",
                        margin: "0 auto",
                      }}
                    />
                  </div>
                </div>
                <p
                  className="influencer-feature-desc"
                  style={{
                    color: "#ccc",
                    margin: 0,
                    fontSize: "1rem",
                    lineHeight: 1.4,
                  }}
                >
                  {box.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div
          className="influencer-right-image"
          style={{ flex: 1, minWidth: "300px", textAlign: "center" }}
        >
          <img
            src="https://media-public.canva.com/DrYgk/MAFNoHDrYgk/1/tl.png"
            alt="Influencer Marketing Illustration"
            style={{
              width: "100%",
              position: "relative",
              maxWidth: "500px",
              filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.5))",
            }}
          />
        </div>
      </div>

      {/* --- INFLUENCER TIERS SECTION --- */}
      <div
        className="influencer-tiers-section"
        style={{
          padding: "4rem 2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          className="influencer-tiers-heading"
          style={{
            fontSize: "2.5rem",
            fontWeight: 800,
            color: "white",
            marginBottom: "0.5rem",
          }}
        >
          <span className="influencer-tier-dash">— </span>Understanding
          Influencer Tiers<span className="influencer-tier-dash"> —</span>
        </h2>
        <p
          className="influencer-tiers-subtext"
          style={{ color: "#ddd", marginBottom: "3rem" }}
        >
          From hyper-local communities to nationwide audiences – we activate
          creators across every tier of influence.
        </p>

        {/* 4-COLUMN GRID */}
        <div
          className="influencer-tiers-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            alignItems: "stretch",
          }}
        >
          {[
            {
              title: "Nano",
              text: "Trusted voices within tight-knit communities, ideal for authentic local engagement.",
              range: "5K - 10K",
              bg: "#fff",
              textColor: "#333 !important",
            },
            {
              title: "Micro",
              text: "Niche experts with loyal followings, perfect for targeted campaigns and product recommendations.",
              range: "10K - 100K",
              bg: "#f97316",
              textColor: "#fff",
            },
            {
              title: "Macro",
              text: "Broad reach with professional content, suitable for national-level brand awareness initiatives.",
              range: "100K - 1M",
              bg: "#fff",
              textColor: "#333 !important",
            },
            {
              title: "Celebrity",
              text: "Massive visibility and aspirational appeal, best for large-scale campaigns and brand prestige.",
              range: "1 Million +",
              bg: "#f97316",
              textColor: "#fff",
            },
          ].map((tier, index) => (
            <div
              key={index}
              className="influencer-tier-card"
              style={{
                background: tier.bg,
                borderRadius: "16px",
                padding: "2rem 1rem",
                boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                transition: "all 0.3s ease",
                transform: "translateZ(0)",
                cursor: "pointer",
                minHeight: "320px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 12px 30px rgba(249, 115, 22, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.4)";
              }}
            >
              <div>
                <h3
                  className="influencer-tier-title"
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: 700,
                    marginBottom: "1rem",
                    color: tier.textColor,
                    textAlign: "center",
                  }}
                >
                  {tier.title}
                </h3>
                <hr
                  style={{
                    color: tier.textColor,
                  }}
                />
                <p
                  className="influencer-tier-text"
                  style={{
                    color: tier.textColor,
                    fontSize: "0.95rem",
                    minHeight: "80px",
                    marginBottom: "1rem",
                    textAlign: "center",
                  }}
                >
                  {tier.text}
                </p>
                <hr
                  style={{
                    marginBottom: "1rem",
                    color: tier.textColor,
                  }}
                />
              </div>

              <div style={{ textAlign: "center" }}>
                <p
                  className="influencer-tier-range"
                  style={{
                    fontWeight: 700,
                    fontSize: "2rem",
                    marginBottom: "0.2rem",
                    color: tier.textColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                >
                  <FaEye className="faeyeicon" /> {tier.range}
                </p>
                <span style={{ fontSize: "0.85rem", color: tier.textColor }}>
                  Influencer Reach Bracket
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .faeyeicon {
          font-size: 1.7rem;
        }
        .brheading {
          display: none;
        }
        @media (max-width: 768px) {
          .faeyeicon {
            font-size: 1.2rem;
          }
          .brheading {
            display: inline;
          }

          /* Hero heading */
          :global(.influencer-hero-heading) {
            font-size: clamp(1.5rem, 4vw, 2rem) !important;
            white-space: normal !important;
          }

          /* Hero subheading */
          :global(.influencer-hero-subheading) {
            font-size: 0.95rem !important;
            margin-bottom: 1.5rem !important;
            line-height: 1.4 !important;
          }

          /* Features section */
          :global(.influencer-features-section) {
            flex-direction: column !important;
            padding: 2rem 1rem !important;
            gap: 1.5rem !important;
          }

          :global(.influencer-features-grid) {
            min-width: 100% !important;
          }

          /* Feature cards - 1 column */
          :global(.influencer-feature-cards) {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
            width: 100% !important;
          }

          :global(.influencer-feature-card) {
            padding: 1.2rem !important;
          }

          :global(.influencer-feature-title) {
            font-size: 1.1rem !important;
          }

          :global(.influencer-feature-desc) {
            font-size: 0.85rem !important;
            line-height: 1.3 !important;
          }

          /* Hide right image */
          :global(.influencer-right-image) {
            display: none !important;
          }

          /* Tiers section */
          :global(.influencer-tiers-section) {
            padding: 2rem 1rem !important;
          }

          :global(.influencer-tiers-heading) {
            font-size: 1.8rem !important;
            margin-bottom: 0.5rem !important;
          }

          :global(.influencer-tier-dash) {
            display: none !important;
          }

          :global(.influencer-tiers-subtext) {
            font-size: 0.9rem !important;
            margin-bottom: 2rem !important;
            line-height: 1.4 !important;
          }

          /* Tiers grid - 2x2 */
          :global(.influencer-tiers-grid) {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }

          :global(.influencer-tier-card) {
            padding: 1.2rem !important;
            min-height: auto !important;
          }

          :global(.influencer-tier-title) {
            font-size: 1.2rem !important;
            margin-bottom: 0.8rem !important;
          }

          :global(.influencer-tier-text) {
            margin-top: 0.5rem !important;
            font-size: 0.6rem !important;
            line-height: 1.3 !important;
            min-height: auto !important;
            margin-bottom: 0.8rem !important;
          }

          :global(.influencer-tier-range) {
            margin-top: -0.6 qrem !important;
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </Layout>
  );
}
