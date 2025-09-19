"use client";

import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";

export default function PerformancePage() {
  return (
    <Layout header={2} footer={1} video={0}>
      {/* Background Layer */}
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

      {/* Banner */}
      <CmnBanner title="Performance" navigation="Performance" />

      {/* Content */}
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "4rem 1rem",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 800,
            color: "#f97316",
            textAlign: "center",
            marginBottom: "1rem",
            lineHeight: 1.1,
          }}
        >
          Drive Results with <br />
          Precision Marketing
        </h1>

        <img
          src="	https://media-public.canva.com/QKm3o/MAGI8SQKm3o/1/tl.png"
          alt=""
          style={
            {
              width: "380px",
              position: "absolute",
              top: "320px",
              right: "51%",
              transform: "rotate(-2deg)",
            }
          }
        />
        <img
          src="	https://media-public.canva.com/hlUZY/MAFZIkhlUZY/1/tl.png"
          alt=""
          style={
            {
              width: "80px",
              position: "absolute",
              top: "225px",
              left: "56%",
              transform: "rotate(-2deg)",
            }
          }
        />
        <p
          style={{
            color: "#ddd",
            fontSize: "1.2rem",
            maxWidth: "650px",
            textAlign: "center",
            marginBottom: "2.5rem",
            marginTop: "1.4rem",
          }}
        >
          At{" "}
          <span style={{ color: "#f97316", fontWeight: 600 }}>
            Digitar Media
          </span>
          , our performance marketing strategies are driven by measurable
          results every click, lead, and conversion is tracked for ROI-focused
          growth.
        </p>

        {/* 4 Clash-Style Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "repeat(2, auto)",
            gap: "24px",
            width: "100%",
            maxWidth: "900px",
          }}
        >
          {[
            {
              title: "User Retention",
              image:
                "https://media-public.canva.com/6nliQ/MAGm6-6nliQ/1/tl.png",
              items: [
                {
                  title: "Dynamic Retargeting",
                  description:
                    "Re-engage users with personalized ads based on behavior tracking and analysis.",
                },
                {
                  title: "ROI & LTV",
                  description:
                    "Boost ROI by retaining users and increasing Lifetime Value through strategic engagement.",
                },
                {
                  title: "Engagement Metrics",
                  description:
                    "Track user interactions, session duration, and app/site usage patterns.",
                },
                {
                  title: "Churn Prevention",
                  description:
                    "Identify at-risk users and implement retention strategies proactively.",
                },
                {
                  title: "Custom Audiences",
                  description:
                    "Create tailored audience segments for maximum retention impact.",
                },
              ],
              footer: ["ROI+", "Retargeting", "Growth"],
            },
            {
              title: "Performance Optimization",
              image:
                "http://media-public.canva.com/RrDpk/MAGwVmRrDpk/1/tl.png",
              items: [
                {
                  title: "Creative Optimization",
                  description:
                    "A/B testing and data-driven improvements for ad creative performance.",
                },
                {
                  title: "KPI Tracking",
                  description:
                    "Real-time monitoring of key performance indicators and business metrics.",
                },
                {
                  title: "Budget Allocation",
                  description:
                    "Smart distribution of ad spend based on performance analytics.",
                },
                {
                  title: "Conversion Rate",
                  description:
                    "Optimize user journey touchpoints to maximize conversion rates.",
                },
                {
                  title: "Performance Analytics",
                  description:
                    "Deep dive into campaign metrics for continuous improvement.",
                },
              ],
              footer: ["KPIs", "Creative", "Scale"],
            },
            {
              title: "Audience Segmentation and Targeting",
              image:
                "https://media-public.canva.com/-jUR0/MAGqxS-jUR0/1/tl.png",
              items: [
                {
                  title: "Demographic Targeting",
                  description:
                    "Precise targeting based on age, location, interests, and behavior patterns.",
                },
                {
                  title: "Behavioral Analysis",
                  description:
                    "Understanding user actions and preferences for better targeting.",
                },
                {
                  title: "Custom Segments",
                  description:
                    "Create and manage specialized audience groups for targeted campaigns.",
                },
                {
                  title: "Engagement Tracking",
                  description:
                    "Monitor how different segments interact with your content.",
                },
                {
                  title: "Lookalike Audiences",
                  description:
                    "Expand reach by targeting users similar to your best customers.",
                },
              ],
              footer: ["Demographics", "Messaging", "Engagement"],
            },
            {
              title: "Fraud Detection and Prevention",
              image:
                "https://media-public.canva.com/ONiKM/MAGyT-ONiKM/1/tl.png",
              items: [
                {
                  title: "IP Fraud Detection",
                  description:
                    "Advanced AI system to identify and block suspicious IP addresses and activities.",
                },
                {
                  title: "Click Fraud Prevention",
                  description:
                    "Real-time monitoring and prevention of fraudulent click activities.",
                },
                {
                  title: "Bot Traffic Filtering",
                  description:
                    "Sophisticated algorithms to filter out non-human traffic and interactions.",
                },
                {
                  title: "Fraud Analytics",
                  description:
                    "Detailed reporting on fraud patterns and prevention measures.",
                },
                {
                  title: "Security Compliance",
                  description:
                    "Adherence to industry security standards and best practices.",
                },
              ],
              footer: ["AI", "Security", "Trust"],
            },
          ].map((card, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                borderRadius: "16px",
                boxShadow: "-1px 15px 30px -12px rgba(0,0,0,0.7)",
                color: "#333",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                minHeight: "600px",
              }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg, #f97316, #ffb366)",
                  height: "180px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "visible",
                  position: "relative",
                  zIndex: 1,
                  borderRadius: "16px 16px 0 0",
                }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  style={{
                    width: "220px",
                    position: "absolute",
                    filter: "drop-shadow(0 10px 12px rgba(0,0,0,0.4))",
                    transition: "transform 0.3s ease",
                    transform: "translateY(30px)",
                    marginTop: "-40px",
                    zIndex: 10,
                  }}
                />
              </div>
              <div
                style={{
                  padding: "36px 16px",
                  textAlign: "center",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    marginBottom: "8px",
                    color: "darkorange !important",
                    lineHeight: 1.1,
                  }}
                >
                  {card.title}
                </h3>
                <hr />
                <ul
                  style={{
                    listStyleType: "disc",
                    textAlign: "left",
                    margin: 0,
                    paddingLeft: "1.2em",
                  }}
                >
                  {card.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      style={{
                        fontSize: "1.1rem",
                        color: "black !important",
                        lineHeight: "normal",
                        margin: "8px 0",
                      }}
                    >
                      <strong>{item.title}</strong>
                      {" : "}
                      {item.description}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                style={{
                  display: "flex",
                  background: "#f97316",
                  color: "white",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  borderRadius: "0 0 16px 16px",
                }}
              >
                {card.footer.map((text, footerIndex) => (
                  <div
                    key={footerIndex}
                    style={{
                      flex: 1,
                      padding: "12px",
                      textAlign: "center",
                      fontWeight: "bold",
                      margin: "15px 0px !important",
                      ...(footerIndex !== card.footer.length - 1 && {
                        borderRight: "1px solid rgba(255,255,255,0.3)",
                      }),
                    }}
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
