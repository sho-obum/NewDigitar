"use client";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import Chart from "@/components/charts/Chart";

const SocialPage = () => {
  const stats = [
    { title: "3x", text: "Engagement Growth in 60 Days" },
    { title: "120+", text: "Creative Across the Platforms" },
    { title: "25%", text: "Increase in Follower Retention" },
    { title: "📱", text: "Sustained Audience Growth" },
  ];

  return (
    <Layout header={1} footer={1} video={true}>
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
      
      <div className="social-wrapper"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
       
      }}
      >
        <div className="social-container" 
        style={{
          //  maxWidth: '1500px',
        }}
        >
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
        <div className="chart-section">
          <div className="chart-header">
            <h1
              style={{
                fontSize: "4rem",
                fontWeight: "bold",
                color: "white",
                margin: 0,
                lineHeight: 1.2,
                textAlign: "center",
              }}
            >
              From content to{" "}
              <span style={{ color: "#ff6a00" }}>conversion</span>
            </h1>

            <p
              style={{
                fontSize: "1.5rem",
                color: "#999",
                lineHeight: 1.6,
                margin: "20px 0px",
                  textAlign: "center",
              }}
            >
              {" "}
              We craft, target, and scale what works.
            </p>
            <img
              src="http://media-public.canva.com/P5wOs/MAGGhGP5wOs/1/tl.png"
              alt=""
              className="social-arrow"
              style={{
                position: "relative",
                width: "100px",
                transform: " rotate(225deg)",
                top: "-120px",
                left: "550px",
              }}
            />
          </div>
          <div
            style={{
              background: "black",
              padding: "20px 0px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              color: "white",
            }}
          >
            {/* Left Section */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  marginTop: "2rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "#ff6a00",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    1
                  </div>
                  <div>
                    <h3 style={{ color: "white", margin: 0 }}>
                      Ad creative design
                    </h3>
                    <p style={{ color: "#999", margin: "0.5rem 0 0 0" }}>
                      Video, carousel, and static ads that convert
                    </p>
                  </div>
                </div>

<hr />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "#ff6a00",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    2
                  </div>
                  <div>
                    <h3 style={{ color: "white", margin: 0 }}>
                      Targeted setup
                    </h3>
                    <p style={{ color: "#999", margin: "0.5rem 0 0 0" }}>
                      Precise audience targeting & lookalike modeling
                    </p>
                  </div>
                </div>
<hr />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "#ff6a00",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    3
                  </div>
                  <div>
                    <h3 style={{ color: "white", margin: 0 }}>
                      Campaign optimization
                    </h3>
                    <p style={{ color: "#999", margin: "0.5rem 0 0 0" }}>
                      Daily monitoring & performance scaling
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section with Combined Chart */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  background: "#1a1a1a",
                  borderRadius: "15px",
                  padding: "2rem",
                  height: "500px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    marginBottom: "2rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h3
                      style={{ color: "white", margin: 0, fontSize: "1.5rem" }}
                    >
                      Performance Overview
                    </h3>
                    <p style={{ color: "#999", margin: "0.5rem 0 0 0" }}>
                      ROAS and Conversions Growth
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <div
                        style={{
                          width: "12px",
                          height: "12px",
                          background: "#8884d8",
                          borderRadius: "50%",
                          boxShadow: "0 0 5px #8884d8",
                        }}
                      ></div>
                      <span style={{ color: "#999" }}>ROAS</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <div
                        style={{
                          width: "12px",
                          height: "12px",
                          background: "#ff9933",
                          borderRadius: "50%",
                          boxShadow: "0 0 5px #ff9933",
                        }}
                      ></div>
                      <span style={{ color: "#999" }}>Conversions</span>
                    </div>
                  </div>
                </div>
                <Chart
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
    </Layout>
  );
};

export default SocialPage;
