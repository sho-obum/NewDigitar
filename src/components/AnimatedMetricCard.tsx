// components/AnimatedGraphCard.tsx
import React from "react";

type AnimatedGraphCardProps = {
  title: string;
  description?: string;
  className?: string;
};

const AnimatedGraphCard: React.FC<AnimatedGraphCardProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div className={`animated-card ${className || ""}`}>
      {/* Visual */}
      <div className="card-visual">
        <div className="grid-layer" />
        <div className="ellipse">
          <svg width="356" height="180" viewBox="0 0 356 180" fill="none">
            <rect width="356" height="180" fill="url(#paint)" />
            <defs>
              <radialGradient
                id="paint"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(178 98) rotate(90) scale(98 178)"
              >
                <stop stopColor="#ff7a00" stopOpacity="0.25" />
                <stop offset="0.34" stopColor="#ff7a00" stopOpacity="0.15" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* Layer 1 */}
        {/* Layer 1: bars (bottom-aligned, grow on hover) */}
        <div className="layer1">
          <svg className="w712" viewBox="0 0 712 180" fill="none">
            {/* All bars share the same baseline (y grows upward from 180) */}
            {/* Use <rect> so we can animate height with CSS easily */}
            {/* c1 = bright orange, c2 = light orange */}

            {/* x, width are the same; y = 180 - height */}
            <rect
              className="bar c1"
              x="8"
              width="20"
              y={180 - 21}
              height="21"
              rx="2"
            />
            <rect
              className="bar c2"
              x="32"
              width="20"
              y={180 - 31}
              height="31"
              rx="2"
            />
            <rect
              className="bar c1"
              x="67"
              width="20"
              y={180 - 26}
              height="26"
              rx="2"
            />
            <rect
              className="bar c2"
              x="91"
              width="20"
              y={180 - 46}
              height="46"
              rx="2"
            />
            <rect
              className="bar c1"
              x="126"
              width="20"
              y={180 - 57}
              height="57"
              rx="2"
            />
            <rect
              className="bar c2"
              x="150"
              width="20"
              y={180 - 41}
              height="41"
              rx="2"
            />
            <rect
              className="bar c1"
              x="187"
              width="20"
              y={180 - 66}
              height="66"
              rx="2"
            />
            <rect
              className="bar c2"
              x="211"
              width="20"
              y={180 - 38}
              height="38"
              rx="2"
            />
            <rect
              className="bar c1"
              x="248"
              width="20"
              y={180 - 49}
              height="49"
              rx="2"
            />
            <rect
              className="bar c2"
              x="272"
              width="20"
              y={180 - 69}
              height="69"
              rx="2"
            />
            <rect
              className="bar c1"
              x="307"
              width="20"
              y={180 - 66}
              height="66"
              rx="2"
            />
            <rect
              className="bar c2"
              x="331"
              width="20"
              y={180 - 44}
              height="44"
              rx="2"
            />
            <rect
              className="bar c1"
              x="363"
              width="20"
              y={180 - 38}
              height="38"
              rx="2"
            />
            <rect
              className="bar c2"
              x="387"
              width="20"
              y={180 - 55}
              height="55"
              rx="2"
            />
            <rect
              className="bar c1"
              x="423"
              width="20"
              y={180 - 73}
              height="73"
              rx="2"
            />
            <rect
              className="bar c2"
              x="447"
              width="20"
              y={180 - 57}
              height="57"
              rx="2"
            />
            <rect
              className="bar c1"
              x="483"
              width="20"
              y={180 - 75}
              height="75"
              rx="2"
            />
            <rect
              className="bar c2"
              x="507"
              width="20"
              y={180 - 63}
              height="63"
              rx="2"
            />
            <rect
              className="bar c1"
              x="543"
              width="20"
              y={180 - 92}
              height="92"
              rx="2"
            />
            <rect
              className="bar c2"
              x="567"
              width="20"
              y={180 - 84}
              height="84"
              rx="2"
            />
            <rect
              className="bar c1"
              x="603"
              width="20"
              y={180 - 120}
              height="120"
              rx="2"
            />
            <rect
              className="bar c2"
              x="627"
              width="20"
              y={180 - 108}
              height="108"
              rx="2"
            />
            <rect
              className="bar c1"
              x="661"
              width="20"
              y={180 - 113}
              height="113"
              rx="2"
            />
            <rect
              className="bar c2"
              x="685"
              width="20"
              y={180 - 124}
              height="124"
              rx="2"
            />
          </svg>
        </div>

        {/* Layer 2 */}
        <div className="layer2">
          <svg className="w356" viewBox="0 0 356 180" fill="none">
            <path
              d="M1 131.5L33.5 125.5L64 102.5L93.5 118.5L124.5 90L154 100.5L183.5 76L207.5 92L244.5 51L274.5 60.5L307.5 46L334.5 28.5L356.5 1"
              className="stroke"
            />
            <path
              d="M33.5 125.5L1 131.5V180H356.5V1L335 28.5L306.5 46L274.5 60.5L244.5 51L207.5 92L183.5 76L154 100.5L124.5 90L93.5 118.5L64 102.5L33.5 125.5Z"
              className="fill"
            />
          </svg>
          <div className="sweep" />
        </div>

        {/* Layer 3 */}
        <div className="layer3">
          <div className="badge">
            <div className="dot dot1" />
            <span>Alpha</span>
          </div>
          <div className="badge">
            <div className="dot dot2" />
            <span>Beta</span>
          </div>
        </div>

        {/* Layer 4 */}
        <div className="layer4">
          <div className="panel">
            <p className="panel-title">Realtime Metrics</p>
            <p className="panel-sub">Visualized with orange glow</p>
          </div>
        </div>
      </div>

      {/* Body */}
      {/* <div className="card-body">
        <h3 className="card-title">{title}</h3>
        {description && <p className="card-desc">{description}</p>}
      </div> */}

      <style jsx>{`
        .animated-card {
          --c1: #ff7a00; /* bright orange */
          --c2: #ffb066; /* light orange */
          --grid: #ffffff15;
          background: #0b0b0b;
          color: #fff;
          border: 1px solid rgba(255, 122, 0, 0.35);
          border-radius: 12px;
          box-shadow: 0 0 18px rgba(255, 122, 0, 0.25);
          overflow: hidden;
          width: 100%;
          max-width: none;
          transition: transform 320ms ease, box-shadow 320ms ease;
        }
        .animated-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 32px rgba(255, 176, 102, 0.45);
        }

        .card-visual {
          position: relative;
          height: 180px;
          width: 100%;
          overflow: hidden;
        }

        .grid-layer {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
              to right,
              var(--grid) 1px,
              transparent 1px
            ),
            linear-gradient(to bottom, var(--grid) 1px, transparent 1px);
          background-size: 20px 20px;
          background-position: center;
          opacity: 0.6;
        }

        .ellipse stop:first-child {
          stop-color: var(--c1);
        }
        .ellipse stop:nth-child(2) {
          stop-color: var(--c1);
        }

        .layer1 {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 6;
          transform: translateX(0);
          transition: transform 500ms cubic-bezier(0.6, 0.6, 0, 1);
        }
        .animated-card:hover .layer1 {
          transform: translateX(-50%);
        }
        .w712 {
          width: 200%;
        }
        .c1 {
          fill: var(--c1);
        }
        .c2 {
          fill: var(--c2);
        }

        .layer2 {
          position: absolute;
          inset: 0;
        }
        .w356 {
          width: 100%;
          height: 100%;
        }
        .stroke {
          stroke: var(--c1);
        }
        .fill {
          fill: var(--c1);
          fill-opacity: 0.25;
        }
        .sweep {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.85) 15%,
            rgba(0, 0, 0, 0) 35%
          );
          transform: translateX(0);
          transition: transform 500ms cubic-bezier(0.6, 0.6, 0, 1);
          mix-blend-mode: multiply; /* instead of screen */
        }
        .animated-card:hover .sweep {
          transform: translateX(100%);
        }

        .layer3 {
          position: absolute;
          top: 12px;
          right: 12px;
          display: flex;
          gap: 6px;
          transition: opacity 300ms ease;
        }
        .animated-card:hover .layer3 {
          opacity: 0;
        }
        .badge {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 2px 6px;
          border-radius: 999px;
          background: rgba(255, 122, 0, 0.2);
          border: 1px solid rgba(255, 176, 102, 0.45);
        }
        .badge span {
          font-size: 10px;
          color: #fff;
        }
        .dot {
          width: 6px;
          height: 6px;
          border-radius: 999px;
        }
        .dot1 {
          background: var(--c1);
        }
        .dot2 {
          background: var(--c2);
        }

        .layer4 {
          position: absolute;
          inset: 0;
          padding: 12px;
        }
        .panel {
          transform: translateY(-100%);
          opacity: 0;
          transition: transform 500ms cubic-bezier(0.6, 0.6, 0, 1),
            opacity 500ms ease;
          background: rgba(255, 122, 0, 0.15);
          border: 1px solid rgba(255, 176, 102, 0.35);
          border-radius: 8px;
          padding: 6px 10px;
          max-width: 240px;
        }
        .animated-card:hover .panel {
          transform: translateY(0);
          opacity: 1;
        }
        .panel-title {
          font-size: 12px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 2px;
        }
        .panel-sub {
          font-size: 12px;
          color: #ffd7b0;
          margin: 0;
        }

        .card-body {
          padding: 12px 14px 16px;
          border-top: 1px solid rgba(255, 122, 0, 0.25);
        }
        .card-title {
          font-size: 1rem;
          font-weight: 700;
          color: #fff;
        }
        .card-desc {
          font-size: 0.9rem;
          color: #ffd7b0;
          margin-top: 4px;
        }
      `}</style>
    </div>
  );
};

export default AnimatedGraphCard;
