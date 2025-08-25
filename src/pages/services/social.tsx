"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import HomeTestimonialThree from "@/components/containers/home-three/HomeTestimonialThree";
import CtaTwo from "@/components/containers/service-details/CtaTwo";
import { motion } from "framer-motion";

// Recharts can require window -> load client-side only
const ResponsiveContainer = dynamic(
  () => import("recharts").then(m => m.ResponsiveContainer),
  { ssr: false }
);
const BarChart = dynamic(() => import("recharts").then(m => m.BarChart), { ssr: false });
const Bar = dynamic(() => import("recharts").then(m => m.Bar), { ssr: false });
const XAxis = dynamic(() => import("recharts").then(m => m.XAxis), { ssr: false });
const YAxis = dynamic(() => import("recharts").then(m => m.YAxis), { ssr: false });
const CartesianGrid = dynamic(() => import("recharts").then(m => m.CartesianGrid), { ssr: false });
const Tooltip = dynamic(() => import("recharts").then(m => m.Tooltip), { ssr: false });
const Legend = dynamic(() => import("recharts").then(m => m.Legend), { ssr: false });

const kpis = [
  { value: "3x", label: "Engagement Growth in 60 Days" },
  { value: "120+", label: "Creatives Across Platforms" },
  { value: "25%", label: "Increase in Follower Retention" },
  { value: " ", label: "Sustained Audience Growth", icon: true },
];

const chartData = [
  { name: "Month 1", roas: 1.0, conv: 1200 },
  { name: "Month 2", roas: 2.5, conv: 3000 },
  { name: "Month 3", roas: 2.5, conv: 6500 },
  { name: "Month 4", roas: 3.5, conv: 12000 },
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { show: { transition: { staggerChildren: 0.08 } } };

export default function SocialPage() {
  return (
    <Layout header={2} footer={1} video={0}>
      <CmnBanner
        title="Social Media Marketing"
        navigation="Social Media"
        parent="Our Services"
        parentLink="/our-services"
      />

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <motion.h1 className="hero__title" variants={fadeUp}>
              Social Media
            </motion.h1>
            <motion.p className="hero__sub" variants={fadeUp}>
              We create content that fits the platform, follows the trends, and sparks engagement—from reels to threads.
            </motion.p>

            <motion.div className="kpis" variants={fadeUp}>
              {kpis.map((k, i) => (
                <div key={i} className="kpi">
                  {k.icon ? (
                    <div className="kpi__icons">
                      <i className="fa-brands fa-instagram" />
                      <i className="fa-brands fa-facebook" />
                      <i className="fa-brands fa-x-twitter" />
                      <i className="fa-brands fa-tiktok" />
                    </div>
                  ) : (
                    <div className="kpi__value">{k.value}</div>
                  )}
                  <div className="kpi__label">{k.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ADS THAT PERFORM */}
      <section className="perform">
        <div className="container">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <motion.div className="perform__head" variants={fadeUp}>
              <h2>Ads that <span>Perform</span></h2>
              <p>From content to conversion — we craft, target, and scale what works.</p>
              <div className="perform__proof">3.5x ROAS with 12K+ conversions in 4 months</div>
            </motion.div>

            <motion.div className="perform__grid" variants={fadeUp}>
              <div className="chart">
                <h5>ROAS</h5>
                <div className="chart__inner">
                  <ResponsiveContainer width="100%" height={260}>
                    <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.08)" />
                      <XAxis dataKey="name" stroke="#b8b8b8" />
                      <YAxis stroke="#b8b8b8" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="roas" /* color from CSS vars */ fill="var(--c-accent)" radius={[6,6,0,0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="chart">
                <h5>Conversions</h5>
                <div className="chart__inner">
                  <ResponsiveContainer width="100%" height={260}>
                    <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.08)" />
                      <XAxis dataKey="name" stroke="#b8b8b8" />
                      <YAxis stroke="#b8b8b8" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="conv" fill="var(--c-accent)" radius={[6,6,0,0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>

            <motion.div className="whatwedo" variants={fadeUp}>
              <h3>What We Do</h3>
              <ul>
                <li>Ad creative design (video, carousel, static)</li>
                <li>Targeted audience setup & lookalikes</li>
                <li>Daily campaign optimization & scaling</li>
                <li>Lead generation & retargeting workflows</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social proof + CTA (reuse your components) */}
      <HomeTestimonialThree />
      <CtaTwo />

      {/* SCOPED / HIGH-PRIORITY CSS */}
      <style jsx>{`
        :root {
          --c-bg: #0b0b0c;
          --c-bg-2: #0f0f12;
          --c-accent: #ff8a00;
          --c-accent-2: #ffa640;
          --c-text: #ffffff;
          --c-muted: #b8b8b8;
          --radius: 16px;
          --shadow: 0 10px 30px rgba(0,0,0,0.28);
        }

        .container { max-width: 1140px; margin: 0 auto; padding: 0 16px; }

        /* HERO */
        .hero {
          background: radial-gradient(1200px 600px at -10% -30%, rgba(255,138,0,0.25), transparent 60%),
                      radial-gradient(1200px 600px at 110% 130%, rgba(255,138,0,0.18), transparent 60%),
                      var(--c-bg);
          color: var(--c-text);
          padding: 56px 0 24px;
        }
        .hero__title {
          font-size: clamp(36px, 6vw, 64px);
          font-weight: 800;
          letter-spacing: -0.02em;
          margin: 0 0 8px;
        }
        .hero__sub {
          font-size: clamp(16px, 2.2vw, 22px);
          color: #e9e9e9;
          max-width: 820px;
          margin: 0 0 28px;
        }
        .kpis {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: 14px;
        }
        @media (min-width: 640px) {
          .kpis { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 992px) {
          .kpis { grid-template-columns: repeat(4, 1fr); }
        }
        .kpi {
          background: #141416;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 20px;
          box-shadow: var(--shadow);
          min-height: 120px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .kpi__value {
          font-size: 36px;
          font-weight: 800;
          color: var(--c-accent);
          line-height: 1;
          margin-bottom: 8px;
        }
        .kpi__label { color: #e9e9e9; font-size: 14px; }
        .kpi__icons { display: flex; gap: 10px; font-size: 20px; color: var(--c-accent-2); }

        /* PERFORM */
        .perform {
          background: var(--c-bg-2);
          color: var(--c-text);
          padding: 56px 0 28px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .perform__head h2 {
          font-size: clamp(28px, 5.2vw, 48px);
          font-weight: 800;
          margin: 0 0 6px;
        }
        .perform__head h2 span { color: var(--c-accent); }
        .perform__head p { color: #eaeaea; margin: 0 0 12px; }
        .perform__proof { color: var(--c-accent); font-weight: 700; margin-bottom: 18px; }
        .perform__grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-bottom: 12px;
        }
        @media (min-width: 992px) {
          .perform__grid { grid-template-columns: 1fr 1fr; }
        }
        .chart {
          background: #141416;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius);
          padding: 16px;
          box-shadow: var(--shadow);
        }
        .chart h5 {
          margin: 0 0 8px;
          font-weight: 700;
          color: #fff;
        }
        .chart__inner { height: 260px; }

        /* WHAT WE DO */
        .whatwedo {
          margin-top: 22px;
          background: #141416;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius);
          padding: 18px 18px 6px;
        }
        .whatwedo h3 { margin: 0 0 8px; }
        .whatwedo ul { margin: 0; padding-left: 18px; color: #e9e9e9; }
        .whatwedo li { margin: 6px 0; }

        /* Utility */
        :global(.recharts-default-tooltip) {
          background: #161617 !important;
          border: 1px solid rgba(255,255,255,0.08) !important;
          border-radius: 8px !important;
          color: #fff !important;
        }
      `}</style>
    </Layout>
  );
}
