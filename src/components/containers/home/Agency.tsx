import React from "react";

const Agency = () => {
  return (
    <section className="agency-video-section">
      <h2 className="hero-heading">
        <span className="small">
          We build high‑impact
          <br />
          digital experiences
        </span>
      </h2>
      <div className="glass">
        <div className="video-frame">
          <video
            className="video"
            src="/videos/sample.mp4"
            controls
            playsInline
          />
        </div>
        <div className="badges" aria-hidden="true">
          <div className="badge pos-tl">Social Marketing</div>
          <div className="badge pos-tr">Performance Marketing</div>
          <div className="badge pos-bl">Influencer</div>
          <div className="badge pos-br">Branding</div>
        </div>
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
          transform: translate(-50%, -30%);
          z-index: 0;
          margin: 0;
          text-align: center;
          font-size: clamp(42px, 6vw, 72px);
          line-height: 1.05;
          font-weight: 800;
          letter-spacing: 0.3px;
          color: rgba(255, 255, 255, 0.8);
          text-shadow: 0 6px 22px rgba(0, 0, 0, 0.45);
          filter: blur(2px);
          opacity: 0.85;
          pointer-events: none;
          white-space: nowrap;
          animation: riseBehind 1.4s ease-out 0.2s forwards;
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

        @media (max-width: 640px) {
          .badge {
            font-size: 12px;
            padding: 8px 10px;
          }
          .pos-tl,
          .pos-tr,
          .pos-bl,
          .pos-br {
            top: auto;
            bottom: auto;
          }
          .pos-tl {
            top: -12px;
            left: 8px;
          }
          .pos-tr {
            top: -12px;
            right: 8px;
          }
          .pos-bl {
            bottom: -12px;
            left: 8px;
          }
          .pos-br {
            bottom: -12px;
            right: 8px;
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

        @keyframes riseBehind {
          0% {
            transform: translate(-50%, -30%);
            filter: blur(2px);
            opacity: 0.85;
          }
          100% {
            transform: translate(-50%, -165%);
            filter: blur(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Agency;
