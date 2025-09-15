"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Agency = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["40%", "-185%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const subY = useTransform(scrollYProgress, [0, 1], ["20%", "-140%"]);
  const subOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section className="agency-video-section" ref={sectionRef}>
      <motion.h2
        className="hero-heading"
        style={{ y, opacity, display: "flex" }}
      >
        <span
          style={{
            textAlign: "center",
            fontWeight: "700",
            fontSize: "1.5em",
            marginTop: "-0.8em",
            marginBottom: "0.4em",
          }}
        >
          Shaping Tomorrow’s
          <br />
          <span
            style={{
              color: "#f60",
            }}
          >
            Digitar {" "}
          </span>
          Success Stories
        </span>
      </motion.h2>
      <div
        className="glass"
        style={{
          maxWidth: "1000px",
        }}
      >
        <div className="video-frame">
          <video
            ref={videoRef}
            className="video"
            src="https://dzw12ymyjpbqd.cloudfront.net/videos/digitarmedia-video1.mp4"
            autoPlay
            muted={isMuted}
            playsInline
            loop
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          <div className="controls-overlay">
            <div className="controls">
              <button
                type="button"
                className="control-btn"
                aria-label={isPlaying ? "Pause video" : "Play video"}
                onClick={() => {
                  const el = videoRef.current;
                  if (!el) return;
                  if (el.paused) {
                    el.play().catch(() => {});
                    setIsPlaying(true);
                  } else {
                    el.pause();
                    setIsPlaying(false);
                  }
                }}
              >
                {isPlaying ? "⏸" : "▶"}
              </button>
              <button
                type="button"
                className="control-btn"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                onClick={() => {
                  const el = videoRef.current;
                  if (!el) return;
                  const next = !el.muted;
                  el.muted = next;
                  setIsMuted(next);
                }}
              >
                {isMuted ? "🔇" : "🔊"}
              </button>
            </div>
          </div>
        </div>
        {/* <div
          className="badges"
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
          }}
        >
          
          <div
            className="badge pos-tl"
            style={{
              position: "absolute",
              top: "56px",
              left: "-50px",
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "0.04em",
              color: "#ffffff",
              textTransform: "none",
              textShadow: "0 6px 22px rgba(0,0,0,0.45)",
              padding: "10px 14px",
              borderRadius: "7px",
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
              border: "1px solid rgba(255,255,255,0.22)",
              boxShadow:
                "0 10px 24px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.25)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            Social
            <br />
            Marketing
          </div>

       
          <div
            className="badge pos-tr"
            style={{
              position: "absolute",
              top: "106px",
              right: "-48px",
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "0.04em",
              color: "#ffffff",
              textTransform: "none",
              textShadow: "0 6px 22px rgba(0,0,0,0.45)",
              padding: "10px 14px",
              borderRadius: "7px",
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
              border: "1px solid rgba(255,255,255,0.22)",
              boxShadow:
                "0 10px 24px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.25)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            Performance
            <br />
            Marketing
          </div>


          <div
            className="badge pos-bl"
            style={{
              position: "absolute",
              bottom: "-20px",
              left: "78px",
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "0.04em",
              color: "#ffffff",
              textTransform: "none",
              textShadow: "0 6px 22px rgba(0,0,0,0.45)",
              padding: "10px 14px",
              borderRadius: "7px",
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
              border: "1px solid rgba(255,255,255,0.22)",
              boxShadow:
                "0 10px 24px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.25)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            Influencer
            <br />
            Marketing
          </div>

         
          <div
            className="badge pos-br"
            style={{
              position: "absolute",
              bottom: "6px",
              right: "-8px",
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "0.04em",
              color: "#ffffff",
              textTransform: "none",
              textShadow: "0 6px 22px rgba(0,0,0,0.45)",
              padding: "10px 14px",
              borderRadius: "7px",
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
              border: "1px solid rgba(255,255,255,0.22)",
              boxShadow:
                "0 10px 24px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.25)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            Branding
          </div>
        </div> */}
      </div>

      <style jsx>{`
        .agency-video-section {
          position: relative;
          display: grid;
          place-items: center;
          min-height: 60vh;
          width: 100%;
          padding: 24px;
          margin-top: 100px;
          top: 100px;
          margin-bottom: 100px;
        }

        .hero-heading {
          position: absolute;
          top: 10%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 0;
          margin: 0;
          text-align: center;
          font-size: clamp(22px, 6vw, 72px);
          line-height: 1.05;
          font-weight: 800;
          letter-spacing: 0.3px;
          color: rgba(255, 255, 255, 0.8);
          text-shadow: 0 6px 22px rgba(0, 0, 0, 0.45);
          pointer-events: none;
          white-space: nowrap;
        }

        .sub-title {
          position: absolute;
          top: 2.5%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 0;
          pointer-events: none;
        }

        .hero-heading .small {
          font-size: 0.85em;
        }

        .glass {
          position: relative;
          z-index: 1;
          width: min(95vw, 1100px);
          padding: 28px;
          border-radius: 20px;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.08),
            rgba(255, 255, 255, 0.03)
          );
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .badges {
          pointer-events: none;
        }

        .badge {
          position: absolute;
          pointer-events: none;
          padding: 10px 14px;
          border-radius: 14px;
          font-size: 14px;
          line-height: 1;
          color: #fff;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.14),
            rgba(255, 255, 255, 0.06)
          );
          border: 1px solid rgba(255, 255, 255, 0.22);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          white-space: nowrap;
        }

        .pos-tl {
          top: -14px;
          left: 12px;
        }
        .pos-tr {
          top: -14px;
          right: 12px;
        }
        .pos-bl {
          bottom: -14px;
          left: 12px;
        }
        .pos-br {
          bottom: -14px;
          right: 12px;
        }

        @media (max-width: 768px) {
          .badges {
            display: none !important;
          }
          .badge {
            display: none !important;
          }
        }

        .heading {
          margin: 0 0 18px 0;
          text-align: center;
          font-size: clamp(22px, 3.2vw, 34px);
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: 0.2px;
        }

        .video-frame {
          --radius: 18px;
          --borderSize: 8px;
          --glow: rgba(255, 140, 0, 0.35);
          position: relative;
          border: var(--borderSize) solid transparent;
          border-radius: var(--radius);
          background: linear-gradient(#0b0e14, #0b0e14) padding-box,
            conic-gradient(
                from var(--angle),
                #ff8a00,
                #ff5e00,
                #ff2d00,
                #ffa500,
                #ff8a00
              )
              border-box;
          animation: rotateBorder 6s linear infinite;
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.45),
            0 6px 14px rgba(0, 0, 0, 0.35),
            inset 0 3px 0 rgba(255, 255, 255, 0.18),
            inset 0 -6px 18px rgba(0, 0, 0, 0.45), 0 0 28px var(--glow);
          width: 100%;
          aspect-ratio: 16 / 9;
          display: grid;
          place-items: center;
          overflow: hidden;
          backdrop-filter: blur(0.5px);
        }

        .video {
          width: 100%;
          height: 100%;
          display: block;
          border-radius: calc(var(--radius) - 6px);
          object-fit: cover;
          background: #000;
        }

        @keyframes rotateBorder {
          from {
            --angle: 0deg;
          }
          to {
            --angle: 360deg;
          }
        }

        .controls-overlay {
          position: absolute;
          inset: 0;
          display: grid;
          align-items: end;
          justify-items: end;
          padding: 10px;
          pointer-events: none;
        }

        .controls {
          display: flex;
          gap: 8px;
          background: rgba(0, 0, 0, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 999px;
          padding: 6px 8px;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
          pointer-events: auto;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }

        .control-btn {
          appearance: none;
          border: none;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.14),
            rgba(255, 255, 255, 0.06)
          );
          color: #fff;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          cursor: pointer;
          font-size: 16px;
          line-height: 1;
          transition: transform 0.15s ease, background 0.2s ease;
        }

        .control-btn:hover {
          transform: translateY(-1px);
        }

        .control-btn:active {
          transform: translateY(0);
        }

        /* Scroll-based animation handled by Framer Motion */
      `}</style>
    </section>
  );
};

export default Agency;
