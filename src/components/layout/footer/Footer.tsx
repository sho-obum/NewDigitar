// components/Footer.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "public/images/logo.png";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="footer"
      role="contentinfo"
      style={{
        backgroundColor: "black",
      }}
    >
      <hr
        style={{
          paddingBottom: "30px",
        }}
      />
      <div className="bg-word" aria-hidden="true">
        Digitar
      </div>

      <div className="container">
        {/* === Top Section === */}
        <div className="top">
          {/* Brand + Intro + Socials */}
          <div className="brand">
            <Link href="/" aria-label="Go to home" className="logo">
              <Image src={logo} alt="Digitar Media" width={160} height={40} />
            </Link>

            <p className="intro">
              Digitar empowers brands and marketers to connect with their
              audiences through advanced targeting, data intelligence, and
              seamless experiences. Join us as we shape the future of digital
              growth.
            </p>

            <ul className="socials" aria-label="Social media">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <i className="fa-brands fa-facebook-f" aria-hidden="true" />
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <i className="fa-brands fa-youtube" aria-hidden="true" />
                </a>
              </li>
            </ul>
            <ul>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="gp-btn"
                style={{
                  color: "white",
                  borderColor: "red",
                  backgroundColor:"#ff6600",
                  padding:"10px 20px",
                  borderRadius:"10px"
                }}
              >
                Contact Us <i className="fa-solid fa-arrow-right-long" />
              </Link>
            </ul>
          </div>

          {/* Link Columns */}
          <nav className="cols" aria-label="Footer"
          style={{
            marginLeft:"-70px"
          }}
          >
            <div
              className="col"
              style={{
                opacity: 0,
              }}
            >
              <h6 className="heading">Resources</h6>
              <ul>
                <li>
                  <Link href="/case-studies">Case Studies</Link>
                </li>
                <li>
                  <Link href="/blog">Blogs &amp; Insights</Link>
                </li>
                <li>
                  <Link href="/events">Events</Link>
                </li>
              
              </ul>
            </div>
            <div className="col">
              <h6 className="heading" 
              style={{
                color:"#ff6600"
              }}
              >Company</h6>
              <ul>
                <li>
                  <Link href="">About Us </Link>
                </li>
                <li>
                  <Link href="">Life @ Digitar </Link>
                </li>
                <li>
                  <Link href="">Career</Link>
                </li>
              </ul>
            </div>

            <div className="col">
              <h6 className="heading">Products</h6>
              <ul>
                <li>
                  <Link href="/services/programmatic">
                    Adxity - DSP <span className="ext">↗</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/branding">
                    Adpocket <span className="ext">↗</span>{" "}
                  </Link>
                </li>
                <li>
                  <Link href="/services/storytelling">
                    Yogza <span className="ext">↗</span>{" "}
                  </Link>
                </li>
                <li>
                  <Link href="/services/performance">
                    Lending Leaf <span className="ext">↗</span>{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col">
              <h6 className="heading">Services</h6>
              <ul>
                <li>
                  <Link href="/about">Performance </Link>
                </li>
                <li>
                  <Link href="/culture">Social</Link>
                </li>
                <li>
                  <Link href="/creative-hub">Branding</Link>
                </li>
                <li>
                  <Link href="/careers">Influencer</Link>
                </li>
                <li>
                  <Link href="/careers">Creative</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* === (Optional) Associations strip — replace src with your logos or remove === */}

        {/* === Bottom Bar === */}
        <div
          className="bottom"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <p className="copy">© {year} Digitar Media. All Rights Reserved.</p>
          </div>
        </div>
      </div>

      {/* ===== CSS (plain, in-file) ===== */}
      <style jsx>{`
        /* Theme */
        :root {
          --bg: #0b0c14; /* deep night */
          --bg-2: #111224; /* subtle panel tint */
          --text: #d5d7df; /* main text */
          --muted: #9aa0a6; /* secondary text */
          --orange: #ff7a1a; /* accent */
          --link: #e6e8ef;
        }

        .footer {
          position: relative;
          overflow: hidden;
          background: radial-gradient(
              1200px 600px at 20% -10%,
              #1a1b2a 0%,
              transparent 60%
            ),
            var(--bg);
          color: var(--text);
          padding: 64px 0 32px;
        }

        .bg-word {
          position: absolute;
          inset: 0;
          pointer-events: none;
          font-weight: 800;
          letter-spacing: -0.04em;
          font-size: 38vw;
          line-height: 1;
          text-transform: lowercase;
          color: transparent;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.08),
            rgba(0, 0, 0, 0.05)
          );
          -webkit-background-clip: text;
          background-clip: text;
          opacity: 0.14;
          display: flex;
          align-items: center;
          justify-content: center;
          user-select: none;
        }

        .container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }

        .top {
          display: grid;
          grid-template-columns: 1.1fr 2fr;
          gap: 48px;
        }
        @media (max-width: 1024px) {
          .top {
            grid-template-columns: 1fr;
          }
        }

        .gp-btn {
          padding: 10px 14px;
          border-radius: 12px;
          border: 1px solid;
          font-weight: 800;
          display: inline-flex;
          gap: 8px;
          align-items: center;
          background: linear-gradient(
            90deg,
            rgba(255, 122, 0, 0.18),
            rgba(255, 176, 102, 0.28),
            rgba(255, 122, 0, 0.18)
          );
          background-size: 200% 100%;
          color: #ffd7b0;
          transition: background-position 400ms ease, transform 160ms ease;
        }
        .gp-btn:hover {
          background-position: 100% 0;
        }
        .gp-btn:hover i {
          transform: translateX(6px);
        }
        .gp-btn i {
          transition: transform 200ms ease;
        }
        .gp-btn__label {
          font-weight: 900;
        }

        /* Brand */
        .logo {
          display: inline-flex;
          align-items: center;
        }
        .intro {
          margin: 16px 0 20px;
          color: var(--muted);
          max-width: 520px;
        }
        .socials {
          display: flex;
          gap: 16px;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .socials a {
          color: var(--muted);
          font-size: 18px;
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .socials a:hover {
          color: var(--orange);
          transform: translateY(-1px);
        }
        .socials a:focus-visible {
          outline: 2px solid var(--orange);
          outline-offset: 3px;
          border-radius: 8px;
        }

        /* Columns */
        .cols {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 32px 48px;
        }
        @media (max-width: 900px) {
          .cols {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 560px) {
          .cols {
            grid-template-columns: 1fr;
          }
        }

        .heading {
          color: #ff6600 !important;
          font-weight: 700;
          margin: 0 0 14px;
          letter-spacing: 0.2px;
        }
        .col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .col li + li {
          margin-top: 10px;
        }
        .col a {
          color: var(--text);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .col a:hover {
          color: var(--orange);
        }
        .col a:focus-visible {
          outline: 2px solid var(--orange);
          outline-offset: 2px;
          border-radius: 6px;
        }
        .ext {
          font-size: 0.85em;
          margin-left: 6px;
          color: var(--muted);
        }

        /* Associations */
        .assoc {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 16px;
          align-items: center;
          margin-top: 56px;
        }
        .assoc p {
          margin: 0;
          color: var(--muted);
        }
        .badges {
          display: flex;
          gap: 28px;
          align-items: center;
          flex-wrap: wrap;
        }
        .badges img {
          height: 34px;
          opacity: 0.9;
          filter: grayscale(100%);
        }
        .badges img:hover {
          opacity: 1;
          filter: none;
        }
        @media (max-width: 640px) {
          .assoc {
            grid-template-columns: 1fr;
          }
        }

        /* Bottom bar */
        .bottom {
          display: flex;
          gap: 12px;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          margin-top: 28px;
          padding-top: 18px;
          color: var(--muted);
          flex-wrap: wrap;
        }

        .legal {
          display: flex;
          gap: 18px;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .legal a {
          color: var(--muted);
        }
        .legal a:hover {
          color: var(--orange);
        }
        .legal a:focus-visible {
          outline: 2px solid var(--orange);
          outline-offset: 3px;
          border-radius: 6px;
        }

        .copy {
          margin: 0;
          white-space: nowrap;
        }
        @media (max-width: 560px) {
          .copy {
            white-space: normal;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
