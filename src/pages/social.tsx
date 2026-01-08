"use client";
import { motion } from "framer-motion";
import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import ChartComponent from "@/components/ChartComponent";

interface ChartDataPoint {
  month: string;
  roas: number;
  conversions: number;
}

const SocialPage = () => {
  return (
    <div style={{ background: "#000", minHeight: "100vh", color: "white" }}>
      {/* Background Grid + Vignette */}
      <div
        style={{
          position: "fixed",
          inset: 0,
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

      <div className="social-wrapper">
        <div className="social-container">
          {/* Left Side Content */}
          <motion.div
            className="social-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="heading-wrapper">
              <img
                src="https://media-public.canva.com/GWABw/MAFvAdGWABw/1/tl.png"
                alt="element"
                className="social-exclam"
              />
              <h1 className="social-heading">Social Media</h1>
            </div>

            <div className="subheading-wrapper">
              <p className="social-subheading">
                We create content that fits the platform, follows the trends,
                and sparks engagement from reels to threads.
              </p>
              {/* <img
                src="http://media-public.canva.com/P5wOs/MAGGhGP5wOs/1/tl.png"
                alt=""
                className="social-arrow"
              /> */}
            </div>

            {/* Stats Section */}
            <div className="stats-grid">
              <motion.div
                className="stat-card stat-orange"
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <span className="stat-title">3x</span>
                <span className="stat-text">Engagement Growth in 60 Days</span>
              </motion.div>

              <motion.div
                className="stat-card stat-dark"
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <span className="stat-title">120+</span>
                <span className="stat-text">Creative Across the Platforms</span>
              </motion.div>

              <motion.div
                className="stat-card stat-orange"
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <span className="stat-title">25%</span>
                <span className="stat-text">
                  Increase in Follower Retention
                </span>
              </motion.div>

              <motion.div
                className="stat-card stat-dark"
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="social-icons">
                  <FaInstagram />
                  <FaFacebookF />
                  <FaTiktok />
                </div>
                <span className="stat-text stat-text-icons">
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
          >
            <div className="image-stack">
              <img
                className="social-image-top"
                src="https://media-public.canva.com/YsvyM/MAGbBRYsvyM/1/tl.png"
                alt="Social Media Phone"
              />
              <img
                className="social-image"
                src="https://panel.digitarmedia.com/admin/uploads/Untitled design1758268767.png"
                alt="Social Media Phone"
              />
            </div>
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.div
          className="tagline-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="tagline-text">
            WE HELP BRANDS STAY RELEVANT –{" "}
            <span className="tagline-highlight">NOT JUST PRESENT</span>
          </p>
          <hr className="tagline-divider" />
        </motion.div>

        {/* Chart Section */}
        <div className="chart-section">
          <div className="chart-header">
            <h2 className="chart-title">
              From content to{" "}
              <span style={{ color: "#ff6a00" }}>conversion</span>
            </h2>
            <p className="chart-subtitle">
              We craft, target, and scale what works.
            </p>
            <img
              src="http://media-public.canva.com/P5wOs/MAGGhGP5wOs/1/tl.png"
              alt=""
              className="chart-arrow"
            />
          </div>

          <div className="chart-content">
            {/* Left Section - Steps */}
            <div className="steps-section">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Ad creative design</h3>
                  <p>Video, carousel, and static ads that convert</p>
                </div>
              </div>
              <hr className="step-divider" />

              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Targeted setup</h3>
                  <p>Precise audience targeting & lookalike modeling</p>
                </div>
              </div>
              <hr className="step-divider" />

              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Campaign optimization</h3>
                  <p>Daily monitoring & performance scaling</p>
                </div>
              </div>
            </div>

            {/* Right Section - Chart */}
            <div className="chart-wrapper">
              <div className="chart-container">
                <div className="chart-header-info">
                  <div>
                    <h3 className="chart-info-title">Performance Overview</h3>
                    <p className="chart-info-subtitle">
                      ROAS and Conversions Growth
                    </p>
                  </div>
                  <div className="chart-legend">
                    <div className="legend-item">
                      <div className="legend-dot legend-dot-blue"></div>
                      <span>ROAS</span>
                    </div>
                    <div className="legend-item">
                      <div className="legend-dot legend-dot-orange"></div>
                      <span>Conversions</span>
                    </div>
                  </div>
                </div>
                <div className="chart-canvas">
                  <ChartComponent
                    data={[
                      { month: "Month 1", roas: 1.2, conversions: 3000 },
                      { month: "Month 2", roas: 2.1, conversions: 6000 },
                      { month: "Month 3", roas: 2.8, conversions: 9000 },
                      { month: "Month 4", roas: 3.5, conversions: 12000 },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .social-wrapper {
          width: 100%;
          overflow-x: hidden;
        }

        .social-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          padding: 4rem 8%;
          gap: 3rem;
          min-height: 100vh;
          max-width: 1600px;
          margin: 0 auto;
        }

        /* Heading Section */
        .heading-wrapper {
          position: relative;
          margin-bottom: 1em;
          font-size: 3rem;
        }

        .social-heading {
        font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: bold;
          margin: 0;
          line-height: 1;
          color: white;
        }

        .social-exclam {
          position: absolute;
          height: clamp(30px, 4vw, 60px);
          width: auto;
          top: -20px;
          right: 70px;
          z-index: 1;
        }

        /* Subheading Section */
        .subheading-wrapper {
          position: relative;
          margin-bottom: 3rem;
        }

        .social-subheading {
          font-size: clamp(1rem, 1.5vw, 1.2rem);
          line-height: 1.6;
          margin: 0;
          color: #999;
          font-weight: 500;
          padding-left: 1rem;
          position: relative;
        }

        .social-subheading::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 4px;
          background-color: #f7a000;
          border-radius: 4px;
        }

        .social-arrow {
          position: absolute;
          height: clamp(40px, 4vw, 60px);
          transform: rotate(225deg);
          top: -30px;
          right: -60px;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-top: 3rem;
        }

        .stat-card {
          border-radius: 15px;
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 160px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .stat-orange {
          background: #ff6a00;
        }

        .stat-dark {
          background: #1a1a1a;
          border: 2px solid #ff6a00;
        }

        .stat-title {
          font-size: clamp(2rem, 3vw, 2.5rem);
          font-weight: 800;
          margin-bottom: 0.75rem;
          display: block;
          text-align: center;
        }

        .stat-orange .stat-title,
        .stat-orange .stat-text {
          color: black;
        }

        .stat-dark .stat-title {
          color: white;
        }

        .stat-text {
          font-size: clamp(0.85rem, 1vw, 0.95rem);
          line-height: 1.4;
          color: #999;
          display: block;
          text-align: center;
          max-width: 150px;
          margin: 0 auto;
        }

        .stat-text-icons {
          max-width: 180px;
        }

        .social-icons {
          display: flex;
          gap: 1rem;
          margin-bottom: 0.75rem;
          font-size: clamp(1.5rem, 2vw, 2rem);
          color: #ff6a00;
          justify-content: center;
        }

        /* Right Side Images */
        .social-right {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .image-stack {
          position: relative;
          width: 80%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .social-image-top {
          position: absolute;
          height: clamp(300px, 40vw, 500px);
          width: auto;
          transform: rotate(-20deg);
          z-index: 2;
          left: 10%;
          top: -50px;
          object-fit: contain;
        }

        .social-image {
          width: 80%;
          max-width: 450px;
          height: auto;
          border-radius: 16px;
          transform: scaleX(-1);
          position: relative;
          z-index: 1;
          object-fit: contain;
        }

        /* Tagline Section */
        .tagline-section {
          text-align: center;
          padding: 2rem 5%;
          margin: 2rem 0;
        }

        .tagline-text {
          font-size: clamp(1.2rem, 2vw, 1.5rem);
          margin: 0;
          color: white;
          text-align: center;
        }

        .tagline-highlight {
          color: #ff6a00;
          font-weight: bold;
        }

        .tagline-divider {
          border: none;
          height: 1px;
          background: linear-gradient(
            to right,
            transparent,
            #ff6a00,
            transparent
          );
          margin: 2rem auto;
          width: 80%;
          opacity: 0.8;
        }

        /* Chart Section */
        .chart-section {
          padding: 4rem 8%;
          max-width: 1600px;
          margin: 0 auto;
        }

        .chart-header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
        }

        .chart-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: bold;
          color: white;
          margin: 0;
          line-height: 1.2;
        }

        .chart-subtitle {
          font-size: clamp(1.1rem, 1.8vw, 1.5rem);
          color: #999;
          line-height: 1.6;
          margin: 20px 0;
        }

        .chart-arrow {
          position: absolute;
          width: clamp(60px, 6vw, 100px);
          transform: rotate(225deg);
          top: -20px;
          right: 20%;
        }

        .chart-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        /* Steps Section */
        .steps-section {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .step-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .step-number {
          width: 50px;
          height: 50px;
          min-width: 50px;
          border-radius: 50%;
          background: #ff6a00;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          color: black;
        }

        .step-content h3 {
          color: white;
          margin: 0 0 0.5rem 0;
          font-size: clamp(1.1rem, 1.5vw, 1.3rem);
        }

        .step-content p {
          color: #999;
          margin: 0;
          font-size: clamp(0.9rem, 1vw, 1rem);
        }

        .step-divider {
          border: none;
          height: 1px;
          background: #333;
          margin: 0;
        }

        /* Chart Wrapper */
        .chart-wrapper {
          width: 100%;
        }

        .chart-container {
          background: #1a1a1a;
          border-radius: 15px;
          padding: 2rem;
          height: 500px;
          display: flex;
          flex-direction: column;
        }

        .chart-header-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .chart-info-title {
          color: white;
          margin: 0;
          font-size: clamp(1.2rem, 1.8vw, 1.5rem);
        }

        .chart-info-subtitle {
          color: #999;
          margin: 0.5rem 0 0 0;
          font-size: clamp(0.9rem, 1vw, 1rem);
        }

        .chart-legend {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .legend-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .legend-dot-blue {
          background: #8884d8;
          box-shadow: 0 0 5px #8884d8;
        }

        .legend-dot-orange {
          background: #ff9933;
          box-shadow: 0 0 5px #ff9933;
        }

        .legend-item span {
          color: #999;
          font-size: clamp(0.85rem, 1vw, 0.95rem);
        }

        .chart-canvas {
          flex: 1;
          min-height: 0;
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .social-container {
            padding: 3rem 5%;
            gap: 2rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .chart-content {
            gap: 3rem;
          }

          .social-arrow,
          .chart-arrow {
            display: none;
          }

          .social-exclam {
            right: -20px;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .chart-info-title {
            font-size: smaller;
          }
          .chart-info-subtitle {
            font-size: smaller;
          }

          .legend-item {
            gap: 0px;
          }
          .legend-dot {
            scale: 0.4;
          }
          .chart-legend {
            font-size: 5px;
          }

          .social-container {
            grid-template-columns: 1fr;
            padding: 2rem 5%;
            min-height: auto;
          }

          .social-left {
            order: 1;
          }
          .image-stack {
            display: none !important;
          }
          .
          /* HIDE IMAGES ON MOBILE */
          .social-right {
            display: none;
          }
          .steps-section {
            gap: 1rem;
          }

          .heading-wrapper {
            text-align: center;
          }

          .social-exclam {
            display: none;
          }

          .subheading-wrapper {
            text-align: center;
          }

          .social-subheading {
            padding-left: 0;
            padding: 1rem;
            border-left: none;
            border-top: 4px solid #f7a000;
            border-radius: 8px;
          }

          .social-subheading::before {
            display: none;
          }

          .social-arrow {
            display: none;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
            margin-top: 2rem;
          }

          .stat-card {
            min-height: 120px;
            padding: 1.5rem 1rem;
          }

          .stat-text {
            max-width: 200px;
          }

          .tagline-section {
            padding: 2rem 5%;
          }

          .tagline-text {
            text-align: center;
          }

          .chart-section {
            padding: 2rem 5%;
          }

          .chart-header {
            margin-bottom: 2rem;
          }

          .chart-arrow {
            display: none;
          }

          .chart-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .chart-container {
            height: 400px;
            padding: 1.5rem;
          }

          .chart-header-info {
            flex-direction: column;
            align-items: flex-start;
          }

          .chart-legend {
            width: 100%;
            justify-content: center;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .social-container {
            padding: 1.5rem 4%;
          }

          .social-heading {
            font-size: 2.5rem;
          }

          .stat-card {
            padding: 1rem;
          }

          .step-number {
            width: 40px;
            height: 40px;
            min-width: 40px;
            font-size: 1.2rem;
          }

          .chart-container {
            height: 350px;
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SocialPage;
