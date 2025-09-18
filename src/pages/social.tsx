"use client";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "@/components/charts/RechartsClient";

const SocialPage = () => {
  const roasData = [
    { month: "Month 1", value: 1.2 },
    { month: "Month 2", value: 2.3 },
    { month: "Month 3", value: 2.8 },
    { month: "Month 4", value: 3.5 },
  ];

  const conversionData = [
    { month: "Month 1", value: 2000 },
    { month: "Month 2", value: 5000 },
    { month: "Month 3", value: 8000 },
    { month: "Month 4", value: 12000 },
  ];

  const stats = [
    { title: "3x", text: "Engagement Growth in 60 Days" },
    { title: "120+", text: "Creative Across the Platforms" },
    { title: "25%", text: "Increase in Follower Retention" },
    { title: "📱", text: "Sustained Audience Growth" },
  ];

  return (
    <Layout header={1} footer={1} video={true}>
      <div className="social-container">
        {/* Left Side Content */}
        <motion.div
          className="social-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://media-public.canva.com/GWABw/MAFvAdGWABw/1/tl.png"
            alt="element"
            className="social-exclam"
          />
          <h1 className="social-heading">Social Media</h1>
          <p className="social-subheading">
            We create content that fits the platform, follows the trends, and{" "}
            <br />
            sparks engagement from reels to threads.
          </p>
          <img
            src="http://media-public.canva.com/P5wOs/MAGGhGP5wOs/1/tl.png"
            alt=""
            className="social-arrow"
          />

          {/* Stats Section */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(180px, 1fr))",
              gap: "1.5rem",
              marginTop: "3rem",
              width: "100%",
              maxWidth: "1200px",
            }}
          >
            <motion.div
              style={{
                borderRadius: "15px",
                padding: "2rem 1.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                transition: "all 0.3s ease",
                minHeight: "160px",
                width: "100%",
                cursor: "pointer",
                background: "#ff6a00",
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: "0 15px 30px rgba(255, 106, 0, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <span
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 800,
                  marginBottom: "0.75rem",
                  color: "black",
                }}
              >
                3x
              </span>
              <span
                style={{ fontSize: "1rem", lineHeight: 1.4, color: "black" }}
              >
                Engagement Growth in 60 Days
              </span>
            </motion.div>

            <motion.div
              style={{
                borderRadius: "15px",
                padding: "2rem 1.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                transition: "all 0.3s ease",
                minHeight: "160px",
                background: "#1a1a1a",
                cursor: " pointer",
                border: "2px solid #ff6a00",
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: "0 15px 30px rgba(255, 106, 0, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <span
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 800,
                  marginBottom: "0.75rem",
                  color: "white",
                }}
              >
                120+
              </span>
              <span
                style={{ fontSize: "1rem", lineHeight: 1.4, color: "#999" }}
              >
                Creative Across the Platforms
              </span>
            </motion.div>

            <motion.div
              style={{
                borderRadius: "15px",
                padding: "2rem 1.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                transition: "all 0.3s ease",
                minHeight: "160px",
                background: "#ff6a00",
                cursor: " pointer",
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: "0 15px 30px rgba(255, 106, 0, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <span
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 800,
                  marginBottom: "0.75rem",
                  color: "black",
                }}
              >
                25%
              </span>
              <span
                style={{ fontSize: "1rem", lineHeight: 1.4, color: "black" }}
              >
                Increase in Follower Retention
              </span>
            </motion.div>

            <motion.div
              style={{
                borderRadius: "15px",
                padding: "2rem 1.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                transition: "all 0.3s ease",
                minHeight: "160px",
                background: "#1a1a1a",
                cursor: " pointer",
                border: "2px solid #ff6a00",
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: "0 15px 30px rgba(255, 106, 0, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  marginBottom: "0.75rem",
                  alignItems: "center",
                }}
              >
                <FaInstagram style={{ fontSize: "2rem", color: "#ff6a00" }} />
                <FaFacebookF style={{ fontSize: "2rem", color: "#ff6a00" }} />
                <FaTiktok style={{ fontSize: "2rem", color: "#ff6a00" }} />
              </div>
              <span
                style={{ fontSize: "1rem", lineHeight: 1.4, color: "#999" }}
              >
                Sustained Audience Growth
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="social-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ display: "flex", justifyContent: "end" }}
        >
          <img
            className="social-image-top"
            src="https://media-public.canva.com/YsvyM/MAGbBRYsvyM/1/tl.png"
            alt="Social Media Phone"
          />
          <img
            className="social-image"
            src="https://media.canva.com/v2/image-resize/format:PNG/height:800/quality:100/uri:ifs%3A%2F%2FM%2Ffcce73cd-8ce8-47a0-afaa-91033869cf25/watermark:F/width:386?csig=AAAAAAAAAAAAAAAAAAAAAGazGlNdrPCUAG_H7EWRZaEayRWDKLQxfNF8147wNXFR&exp=1758193924&osig=AAAAAAAAAAAAAAAAAAAAAGmWg9Up_5CGhTFA12lrezLOBhYIq6eehGdJVwbPxuEi&signer=media-rpc&x-canva-quality=screens"
            alt="Social Media Phone"
          />
        </motion.div>

        {/* Lower Bar */}
        <div>
          <div>
            <motion.div
              className="social-lower"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: "1rem",
                marginTop: "3rem",
                fontSize: "1.5rem",
                position: "relative",
                top: "-100px",
              }}
            >
              WE HELP BRANDS STAY RELEVANT –{" "}
              <span
                style={{
                  color: "#ff6a00",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  marginLeft: "0.5rem",
                }}
              >
                NOT JUST PRESENT
              </span>
             
            </motion.div>
          </div>
           <hr
                style={{
                  border: "none",
                  height: "1px",
                  background:
                    "linear-gradient(to right, transparent, #ff6a00, transparent)",
                  margin: "2rem auto",
                  width: "80%",
                  opacity: "0.8",
                  position: "relative",
                  top: "-140px",
                }}
              />
        </div>

        <style jsx>{`
          .social-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            padding: 4rem 8%;
            background: black;
            color: white;
            gap: 2rem;
            min-height: 100vh;
          }
          .social-arrow {
            position: relative;
            height: 60px;
            transform: rotate(225deg);
            top: -50px;
            left: 290px;
          }
          .social-exclam {
            position: relative;
            height: 80px;
            width: auto;
            bottom: -40px;
            left: 590px;
          }
          .social-left {
            max-width: 550px;
          }

          .social-heading {
            position: relative;
            font-size: 6rem;
            font-weight: bold;
            margin: 0;
            line-height: 1;
            color: white !important;
          }

          // .social-heading::after {
          //   content: "";
          //   position: absolute;
          //   left: 0;

          //   bottom: 0;
          //   height: 8px;
          //   width: 95%;
          //   background: #ff6a00;
          //   border-radius: 8px;
          // }
          .social-subheading {
            position: relative;
            font-size: 1.2rem;
            line-height: 1.6;
            margin: 1rem 0 2rem;
            color: grey !important;
            font-weight: 500;
            padding-left: 1rem; /* give space for the line */
          }

          .social-subheading::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 4px; /* line thickness */
            background-color: #f7a000; /* orange line */
            border-radius: 4px;
          }

          .social-stats {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
            margin-top: 3rem;
            width: 100%;
          }

          .social-stat-box {
            border-radius: 15px;
            padding: 2rem 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            transition: all 0.3s ease;
            min-height: 160px;
          }

          .social-stat-box:nth-child(1),
          .social-stat-box:nth-child(4) {
            background: #1a1a1a !important;
          }

          .social-stat-box:nth-child(2),
          .social-stat-box:nth-child(3) {
            background: #ff6a00 !important;
          }

          .social-stat-title {
            font-size: 2.5rem;
            font-weight: 800;
            margin-bottom: 0.75rem;
            color: white;
          }

          .social-stat-text {
            font-size: 1rem;
            line-height: 1.4;
            color: #999;
          }

          .social-stat-box:nth-child(2) .social-stat-title,
          .social-stat-box:nth-child(2) .social-stat-text,
          .social-stat-box:nth-child(3) .social-stat-title,
          .social-stat-box:nth-child(3) .social-stat-text {
            color: #000;
          }

          .social-stat-box:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 30px rgba(255, 106, 0, 0.15);
          }

          .social-right {
            display: flex;
            justify-content: center !important;
            align-items: center;
          }

          .social-image {
            max-width: 90%;
            height: auto;
            border-radius: 16px;
            position: relative;
            z-index: 1;
            bottom: -120px;
            transform: scaleX(-1);
          }

          .social-image-top {
            height: 500px;
            border-radius: 16px;
            position: relative;
            z-index: 2;
            left: 150px;
            transform: rotate(-20deg);
            bottom: 100px;
          }

          .social-lower {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .social-lower span {
            color: #ff6a00;
          }

          @media (max-width: 768px) {
            .social-container {
              grid-template-columns: 1fr;
              text-align: center;
            }
            .social-left {
              max-width: 100%;
            }
            .social-image {
              max-width: 300px;
            }
          }
        `}</style>
      </div>

      <div className="ad-container">
        <div className="ad-header">
          <h1 className="ad-title">
            Ads that <span style={{ color: "#ff6a00" }}>Perform</span>
          </h1>
          <p className="ad-subtitle">
            From content to conversion — we craft, target, and scale what works.
          </p>
        </div>

        <div className="ad-stats">
          <h2 className="stats-highlight">
            <span style={{ color: "#ff6a00" }}>3.5X</span> ROAS with{" "}
            <span style={{ color: "#ff6a00" }}>12k+</span> conversions in{" "}
            <span style={{ color: "#ff6a00" }}>4</span> month
          </h2>
          
          <div className="charts-container">
            <div className="chart-box">
              <h3>ROAS</h3>
              {/* <ResponsiveContainer width="100%" height={300}>
                <BarChart data={roasData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                  <XAxis dataKey="month" stroke="#999" />
                  <YAxis stroke="#999" />
                  <Bar dataKey="value" fill="#ff6a00" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="chart-box">
              <h3>Conversions</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={conversionData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                  <XAxis dataKey="month" stroke="#999" />
                  <YAxis stroke="#999" />
                  <Bar dataKey="value" fill="#ff6a00" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer> */}
            </div>
          </div>
        </div>

        <div className="services-section">
          <h2 className="section-title">What We Do:</h2>
          <ul className="services-list">
            <li>Ad creative design (video, carousel, static)</li>
            <li>Targeted audience setup & lookalikes</li>
            <li>Daily campaign optimization & scaling</li>
            <li>Lead generation & retargeting workflows</li>
          </ul>
        </div>

        <style jsx>{`
          .ad-container {
            background: linear-gradient(145deg, #000000, #1a1a1a);
            padding: 4rem 8%;
            color: white;
          }

          .ad-header {
            text-align: center;
            margin-bottom: 4rem;
          }

          .ad-title {
            font-size: 4.5rem;
            font-weight: 800;
            margin-bottom: 1rem;
          }

          .ad-subtitle {
            font-size: 1.2rem;
            color: #999;
            max-width: 600px;
            margin: 0 auto;
          }

          .ad-stats {
            margin-top: 3rem;
          }

          .stats-highlight {
            text-align: center;
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 3rem;
          }

          .charts-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin-top: 2rem;
          }

          .chart-box {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 15px;
            padding: 2rem;
          }

          .chart-box h3 {
            color: #999;
            margin-bottom: 1.5rem;
          }

          .services-section {
            margin-top: 4rem;
            padding: 2rem;
            background: rgba(255, 255, 255, 0.02);
            border-radius: 15px;
          }

          .section-title {
            font-size: 2rem;
            margin-bottom: 2rem;
            color: white;
          }

          .services-list {
            list-style: none;
            padding: 0;
          }

          .services-list li {
            display: flex;
            align-items: center;
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
            color: #f1f1f1;
          }

          .services-list li::before {
            content: "•";
            color: #ff6a00;
            font-size: 1.5rem;
            margin-right: 1rem;
          }

          @media (max-width: 768px) {
            .ad-title {
              font-size: 3rem;
            }
            .charts-container {
              grid-template-columns: 1fr;
            }
            .stats-highlight {
              font-size: 2rem;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default SocialPage;
