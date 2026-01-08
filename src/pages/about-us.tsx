"use client";

import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";

type TeamMember = {
  name: string;
  role: string;
  bio?: string;
};

const team: TeamMember[] = [
  {
    name: "Anuj Agarwal",
    role: "Founder",
    bio: "Leading innovation and growth at Digitar Media.",
  },
  {
    name: "Pankaj Gupta",
    role: "AVP",
    bio: "Driving strategic initiatives and business excellence.",
  },

  {
    name: "Rahul Tiwari",
    role: "Tech Manager",
    bio: "Leading technical innovation and engineering excellence.",
  },
  {
    name: "Gayathri Nair",
    role: "Senior BD",
    bio: "Expanding business horizons and client relationships.",
  },
  {
    name: "Rahul Sharma",
    role: "Strategy and Partnerships ",
    bio: "Crafting growth strategies and building key partnerships.",
  },
  {
    name: "Simran Chauhan",
    role: "Strategic and Partnership Alliance",
    bio: "Building valuable partnerships and strategic collaborations.",
  },
  {
    name: "Dheeraj",
    role: "Data Analyst",
    bio: "Transforming data into actionable insights.",
  },
  {
    name: "Shubham Kapoor",
    role: "Software Developer",
    bio: "Creating robust and scalable solutions.",
  },
  {
    name: "Charvi Arora",
    role: "Social Media Strategist",
    bio: "Crafting engaging social media narratives.",
  },
  {
    name: "Dinesh",
    role: "Delivery Head",
    bio: "Ensuring seamless project delivery and client satisfaction.",
  },
];

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "3rem 1rem",
    color: "#f8fafc",
    fontFamily:
      "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
  },
  hero: {
    display: "grid",
    gridTemplateColumns: "1fr 360px",
    gap: "20px",
    alignItems: "start",
    marginBottom: "2rem",
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  } as any,
  card: {
    borderRadius: 16,
    padding: 20,
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,115,0,0.15)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 6px 30px rgba(0,0,0,0.5)",
  },
  valuesList: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    marginTop: 12,
  },
  valuePill: {
    padding: "8px 12px",
    borderRadius: 999,
    background: "rgba(255,115,0,0.08)",
    border: "1px solid rgba(255,115,0,0.18)",
    fontSize: 13,
    fontWeight: 700,
    color: "#ffb07a",
  },
  teamGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 14,
    marginTop: 14,
  } as any,
  teamGridMobile: {
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  } as any,
  memberCard: {
    padding: 14,
    borderRadius: 12,
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.04)",
    backdropFilter: "blur(8px)",
    transition: "transform 0.3s ease",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    gap: 12,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 12,
    background: "linear-gradient(135deg,#ff7b00,#ff9f1c)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 800,
    fontSize: 18,
    color: "white",
    flex: "0 0 auto",
  },
};

export default function AboutPage(): JSX.Element {
  return (
    <Layout header={2} footer={1} video={0}>
      <style>{`
        @media (max-width: 768px) {
          .container-content {
            padding: 0 !important;
          }
          .hero {
            grid-template-columns: 1fr !important;
          }
          .team-grid-mobile {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 14px !important;
            margin-top: 14px !important;
          }
          .by-numbers-card {
            display: none !important;
          }
          .team-member-card {
            display: flex !important;
            flex-direction: column !important;
            flex-wrap: nowrap !important;
            align-items: center !important;
            text-align: center !important;
            padding: 12px !important;
          }
          .team-member-bio {
            display: none !important;
          }
          .team-member-avatar {
            margin-right: 0 !important;
            margin-bottom: 12px !important;
            width: 56px !important;
            height: 56px !important;
            font-size: 16px !important;
            flex: 0 0 auto !important;
          }
          .team-member-info {
            text-align: center !important;
            width: 100%;
            flex: 1 !important;
          }
            .team-section-heading{
            text-align: center !important;
            }
          .values-list {
          margin-top: 24px !important;
          justify-content: center !important;
          }
        }
      `}</style>
      {/* Background grid + vignette */}
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
      <CmnBanner title="About Us" navigation="About Us" />

      {/* Content */}
      <div style={styles.container} className="container-content">
        {/* Hero Section */}
        <div style={styles.hero} className="hero">
          {/* Left Content */}
          <div style={styles.card}>
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: 800,
                color: "#ff9f1c",
                marginBottom: "1rem",
                lineHeight: 1.3,
                textAlign: "center",
              }}
            >
              Who We Are
            </h1>
            <p style={{ lineHeight: 1.6, textAlign: "left" }}>
              At <strong>Digitar Media</strong>, we are growth partners not just
              another agency. Founded to bridge the gap between engineering and
              storytelling, we blend ad-tech, creative strategy, and product
              thinking to deliver measurable growth.
            </p>
            <p style={{ lineHeight: 1.6 }}>
              We build proprietary platforms and reliable pipelines that make
              campaigns repeatable, auditable, and optimizable. Our work spans
              performance marketing, user acquisition, creative testing,
              analytics, and automation.
            </p>
            <p style={{ lineHeight: 1.6 }}>
              Unlike many agencies that treat advertising as a black box, we
              make decisions that are data-informed and human-centered. That
              means transparent reporting, clear KPIs, and experiments designed
              to reduce waste and amplify impact.
            </p>
            <p style={{ lineHeight: 1.6 }}>
              We serve startups scaling globally and enterprise teams that need
              specialised ad-tech. Our differentiators:
            </p>

            <ul style={{ marginTop: 8 }}>
              {[
                {
                  title: "Tech-first approach:",
                  text: "We build tools not just dashboards to automate, test and scale campaigns.",
                },
                {
                  title: "Creative backed by data:",
                  text: "Iterative creative testing combined with attribution-aware optimisation.",
                },
                {
                  title: "Transparent partnership:",
                  text: "Shared KPIs, open reporting and regular syncs so clients always know the 'why'.",
                },
                {
                  title: "Outcome obsession:",
                  text: "We measure impact in revenue, retention and LTV not just clicks.",
                },
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    color: "#ff9f1c",
                    textShadow: "0 0 10px rgba(255,153,51,0.6)",
                    fontWeight: 600,
                    marginBottom: "6px",
                    lineHeight: 1.5,
                  }}
                >
                  <strong>{item.title}</strong>{" "}
                  <span style={{ color: "#f8fafc" }}>{item.text}</span>
                </li>
              ))}
            </ul>

            <div style={styles.valuesList} className="values-list">
              <div style={styles.valuePill}>People first</div>
              <div style={styles.valuePill}>Outcome driven</div>
              <div style={styles.valuePill}>Curious by default</div>
              <div style={styles.valuePill}>Ship & learn</div>
              <div style={styles.valuePill}>Tech + Creativity</div>
              <div style={styles.valuePill}>Global mindset</div>
            </div>
          </div>

          {/* Right Stats Card */}
          <aside style={styles.card} className="by-numbers-card">
            <div
              style={{
                fontWeight: 800,
                fontSize: 20,
                color: "#ff9f1c",
                marginBottom: "0.1rem !important",
              }}
            >
              By the Numbers
            </div>
            <ul style={{}}>
              <li
                style={{
                  marginTop: "20px",
                }}
              >
                10+ years in ad-tech
              </li>
              <li>100+ successful campaigns launched</li>
              <li>Trusted by clients across USA, Canada, APAC & MENA</li>
              <li>Proprietary tools and platforms for smarter marketing</li>
            </ul>
          </aside>
        </div>

        {/* Team Section */}
        <h2
          className="team-section-heading"
          style={{ marginTop: "2rem", marginBottom: "1rem", color: "#ff9f1c" }}
        >
          Meet the Team
        </h2>
        <div style={styles.teamGrid} className="team-grid-mobile">
          {team.map((m) => (
            <div
              key={m.name}
              style={styles.memberCard}
              className="team-member-card"
            >
              <div style={styles.avatar} className="team-member-avatar">
                {m.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div
                style={{
                  lineHeight: 1.2,
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  minWidth: 0,
                }}
                className="team-member-info"
              >
                <div style={{ fontWeight: 800 }}>{m.name}</div>
                <div style={{ fontSize: 13, color: "#e6eef8" }}>{m.role}</div>
              </div>
              <p
                style={{
                  marginTop: 10,
                  color: "#cbd5e1",
                  lineHeight: 1.5,
                  width: "100%",
                  flex: "0 0 100%",
                }}
                className="team-member-bio"
              >
                {m.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
