import React from "react";
import Image from "next/image";
import Link from "next/link";

// Logos
import casino from "public/images/logos/888casino.svg";
import acko from "public/images/logos/acko.svg";
import ali from "public/images/logos/aliexpress.svg";
import alliance from "public/images/logos/alliancebank.svg";
import amazon from "public/images/logos/amazon_music.svg";
import banzo from "public/images/logos/banzo_azteca.svg";
import bbva from "public/images/logos/bbva.svg";

const logos = [
  { src: casino, alt: "888 Casino" },
  { src: acko, alt: "Acko" },
  { src: ali, alt: "AliExpress" },
  { src: alliance, alt: "Alliance Bank" },
  { src: amazon, alt: "Amazon Music" },
  { src: banzo, alt: "Banco Azteca" },
  { src: bbva, alt: "BBVA" },
];

type Props = {
  durationSec?: number; // loop speed
  gapPx?: number; // space between logos
  itemWidthPx?: number; // logo tile width
  itemHeightPx?: number; // logo tile height
};

const HomeSponsorMarquee: React.FC<Props> = ({
  durationSec = 20,
  gapPx = 32,
  itemWidthPx = 140,
  itemHeightPx = 60,
}) => {
  // duplicate once for seamless marquee
  const track = [...logos, ...logos];

  return (
    <section
      className="section sponsor"
      style={{ paddingTop: 64, paddingBottom: 64 }}
    >
      {/* Header (mirrors HomeProducts style) */}
      <div className="container text-center">
        <span
          className="sub-title"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 12px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.08)",
            color: "#aaa",
            fontWeight: 700,
            letterSpacing: "0.02em",
            textTransform: "uppercase",
          }}
        >
          Our Network
          <i className="fa-solid fa-link" />
        </span>

        <h2
          className="title title-anim"
          style={{ marginTop: 16, fontWeight: 800, letterSpacing: "-0.02em" }}
        >
          Trusted by Clients Worldwide
        </h2>

        <p
          style={{
            marginTop: 12,
            color: "#aaa",
            maxWidth: 680,
            marginInline: "auto",
          }}
        >
          From fintech to ecommerce and media—brands partner with us to scale
          with confidence.
        </p>
      </div>

      {/* Marquee */}
      <div className="container-fluid" style={{ marginTop: 28 }}>
        <div
          className="marquee"
          style={
            {
              ["--duration" as any]: `${durationSec}s`,
              ["--gap" as any]: `${gapPx}px`,
              ["--item-w" as any]: `${itemWidthPx}px`,
              ["--item-h" as any]: `${itemHeightPx}px`,
            } as React.CSSProperties
          }
        >
          <ul className="track" role="list" aria-label="Partner logos">
            {track.map((logo, i) => (
              <li className="tile" role="listitem" key={`${logo.alt}-${i}`}>
                <div className="logo-box">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="logo-img"
                    style={{
                      objectFit:"contain"
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA (not “Explore our services”) */}
        <div
          className="section__content-cta text-center"
          style={{ marginTop: 28 }}
        >
          <Link href="" className="btn btn--secondary">
            BECOME A PARTNER
          </Link>
        </div>
      </div>

      {/* Optional decorative lines if you use them elsewhere */}
      <div className="lines d-none d-lg-flex" aria-hidden="true">
        <div className="line" />
        <div className="line" />
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>

      <style jsx>{`
        /* spacing below section */
        .sponsor {
          margin-bottom: 8rem;
        }

        .marquee {
          --duration: 20s;
          --gap: 32px;
          --item-w: 140px;
          --item-h: 60px;

          position: relative;
          overflow: hidden;
          width: 100%;
          user-select: none;
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }

        .track {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: var(--item-w);
          column-gap: var(--gap);
          align-items: center;
          list-style: none;
          padding: 0;
          margin: 0;
          animation: scroll var(--duration) linear infinite;
          will-change: transform;
        }

        .tile {
          width: var(--item-w);
          height: var(--item-h);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-box {
          position: relative;
          width: var(--item-w);
          height: var(--item-h);
        }

        .logo-img {
          object-fit: contain;
        }

        /* contain: never crop; scale down within box */
        

        /* pause on hover */
        .marquee:hover .track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .track {
            animation: none;
          }
        }

        /* animate exactly one copy's width (we rendered two copies) */
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(
              calc(-1 * ((var(--item-w) + var(--gap)) * ${logos.length}))
            );
          }
        }

        /* responsive sizes similar to your other section */
        @media (max-width: 992px) {
          .marquee {
            --item-w: ${Math.round(itemWidthPx * 0.85)}px;
            --item-h: ${Math.round(itemHeightPx * 0.85)}px;
          }
        }
        @media (max-width: 576px) {
          .marquee {
            --item-w: ${Math.round(itemWidthPx * 0.7)}px;
            --item-h: ${Math.round(itemHeightPx * 0.7)}px;
            --gap: ${Math.max(16, Math.round(gapPx * 0.6))}px;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeSponsorMarquee;
