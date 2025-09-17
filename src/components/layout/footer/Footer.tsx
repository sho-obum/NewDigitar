// components/Footer.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import logo from "public/images/logo.png";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <hr className="footer-divider" />

      <div className="bg-word" aria-hidden="true">
        Digitar
      </div>

      <div className="container">
        <div className="top">
          {/* === LEFT COLUMN (Brand + CTA + Newsletter) === */}
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

            <ul className="socials">
              <li>
                <a href="https://facebook.com">
                  <i className="fa-brands fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com">
                  <i className="fa-brands fa-instagram" />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com">
                  <i className="fa-brands fa-linkedin-in" />
                </a>
              </li>
              <li>
                <a href="https://youtube.com">
                  <i className="fa-brands fa-youtube" />
                </a>
              </li>
            </ul>

            {/* ✅ Contact Button */}
            <Link href="/contact-us" className="contact-btn">
              Contact Us <FaArrowRight />
            </Link>

            {/* ✅ Newsletter */}
            <div className="newsletter">
              <h4 className="newsletter-title">Subscribe to our Newsletter</h4>
              <form
                className="newsletter-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for subscribing!");
                }}
              >
                <input type="email" placeholder="Enter your email" required />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>

          {/* === RIGHT COLUMN (Links + Presence) === */}
          <nav className="cols" aria-label="Footer">
            <div className="col">
              <h6 className="heading">Company</h6>
              <ul>
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Life @ Digitar</Link>
                </li>
                <li>
                  <Link href="#">Career</Link>
                </li>
              </ul>
            </div>

            <div className="col">
              <h6 className="heading">Products</h6>
              <ul>
                <li>
                  <Link href="#">Adxity</Link>
                </li>
                <li>
                  <Link href="#">Adpocket</Link>
                </li>
                <li>
                  <Link href="#">Yogza</Link>
                </li>
                <li>
                  <Link href="#">Lending Leaf</Link>
                </li>
              </ul>
            </div>

            <div className="col">
              <h6 className="heading">Services</h6>
              <ul>
                <li>
                  <Link href="#">Performance</Link>
                </li>
                <li>
                  <Link href="#">Social</Link>
                </li>
                <li>
                  <Link href="#">Branding</Link>
                </li>
                <li>
                  <Link href="#">Influencer</Link>
                </li>
                <li>
                  <Link href="#">Creative</Link>
                </li>
              </ul>
            </div>

            {/* ✅ Presence Section (Always Glassmorphic) */}
            <div className="presence">
              <h6 className="heading presence-title">Presence</h6>
              <div className="presence-grid">
                <div className="presence-card">
                  <strong>India Office</strong>
                  <p>Ramesh Nagar</p> 
                  <p>Delhi-110015, India</p>
                  <p>info@digitarmedia.com</p>
                </div>
                <div className="presence-card">
                  <strong>USA Office</strong>
                  <p>Sheridan, Wyoming 82801, USA</p>
                  <p>media@digitarmedia.com</p>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* === Bottom Bar === */}
        <div className="bottom">
          <p className="copy">© {year} Digitar Media. All Rights Reserved.</p>
          <ul className="legal">
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* === Styles === */}
      <style jsx>{`
        .footer {
          position: relative;
          background: #000;
          color: #fff;
          padding: 60px 0 30px;
        }
        .footer-divider {
          opacity: 0.1;
          margin-bottom: 30px;
        }
        .bg-word {
          position: absolute;
          inset: 0;
          font-size: 30vw;
          font-weight: 800;

          color: rgba(255, 255, 255, 0.06);
          display: flex;
          justify-content: center;
          align-items: center;
          user-select: none;
        }
        .container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }
        .top {
          display: grid;
          grid-template-columns: 1.2fr 2fr;
          gap: 48px;
        }
        @media (max-width: 900px) {
          .top {
            grid-template-columns: 1fr;
          }
        }

        .brand .intro {
          margin: 16px 0 20px;
          color: #aaa;
        }
        .socials {
          display: flex;
          gap: 16px;
          margin-bottom: 20px;
        }

        /* ✅ Contact Button */
        .contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border: 2px solid #ff7a00;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(6px);
          font-weight: 700;
          color: #ff7a00;
          transition: all 0.3s ease;
          animation: glowPulse 3s infinite;
        }
        .contact-btn:hover {
          background: rgba(255, 122, 0, 0.2);
          transform: translateY(-2px);
        }
        @keyframes glowPulse {
          0%,
          100% {
            box-shadow: 0 0 8px rgba(255, 122, 0, 0.4);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 122, 0, 0.8);
          }
        }

        /* ✅ Newsletter */
        .newsletter {
          margin-top: 24px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          padding: 16px;
        }
        .newsletter-title {
          color: #ff7a00;
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 12px;
        }
        .newsletter-form {
          display: flex;
          gap: 8px;
        }
        .newsletter-form input {
          flex: 1;
          padding: 10px 14px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
        }
        .newsletter-form button {
          background: #ff7a00;
          border: none;
          color: white;
          padding: 10px 16px;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
        }

        /* ✅ Footer Columns */
        .cols {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 768px) {
          .cols {
            grid-template-columns: 1fr;
          }
        }

        .heading {
          color: #ff7a00;
          font-weight: 700;
          margin-bottom: 12px;
        }

        /* ✅ Presence Section */
        .presence {
          grid-column: 1 / -1;
          text-align: center;
          margin-top: 20px;
        }
        .presence-grid {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-top: 10px;
        }
        .presence-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(6px);
          border-radius: 12px;
          padding: 14px 18px;
          max-width: 340px;
          font-size: 0.9rem;
          text-align: left;
          line-height: normal;
          transition: transform 250ms ease-in, box-shadow 250ms ease-in;
          transform-origin: center center;
        }
        .presence-card strong {
        text-align: center !important;
        font-size: 1.1rem !important;
        }

        /* Hover: subtle orange glow and scale up */
        .presence-card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 30px rgba(255, 122, 0, 0.25), 0 2px 8px rgba(255, 122, 0, 0.12) inset;
          border-color: rgba(255, 122, 0, 0.35);
        }

        /* Bottom bar */
        .bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          margin-top: 30px;
          padding-top: 16px;
          font-size: 0.85rem;
          color: #aaa;
          flex-wrap: wrap;
        }
        .legal {
          display: flex;
          gap: 18px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
