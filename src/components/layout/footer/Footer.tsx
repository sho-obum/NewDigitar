// components/Footer.tsx
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "public/images/logo.png";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <footer
      className="footer"
      role="contentinfo"
      style={{
        backgroundColor: "black",
        padding:"0px"
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
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="gp-btn"
                style={{
                  color: "white",
                  borderColor: "#ff6600",
                  backgroundColor:"#ff6600",
                  padding:"10px 20px",
                  borderRadius:"10px",
                  border: "1px solid #ff6600",
                  cursor: "pointer"
                }}
              >
                Contact Us <i className="fa-solid fa-arrow-right-long" />
              </button>
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
                    Adxity - DSP 
                  </Link>
                </li>
                <li>
                  <Link href="/services/branding">
                    Adpocket {" "}
                  </Link>
                </li>
                <li>
                  <Link href="/services/storytelling">
                    Yogza {" "}
                  </Link>
                </li>
                <li>
                  <Link href="/services/performance">
                    Lending Leaf {" "}
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

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="modal-overlay" onClick={() => setIsContactModalOpen(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setIsContactModalOpen(false)}
              aria-label="Close modal"
            >
              ✕
            </button>
            
            <div className="modal-content">
              {/* Left Side - Contact Info */}
              <div className="contact-info">
                <h2>Get in Touch</h2>
                <div className="contact-details">
                  <div className="contact-item">
                    <i className="fa-solid fa-envelope"></i>
                    <span>hello@digitarmedia.com</span>
                  </div>
                  <div className="contact-item">
                    <i className="fa-solid fa-phone"></i>
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="contact-form">
                {!isSubmitted ? (
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    setIsSubmitted(true);
                    setTimeout(() => {
                      setIsSubmitted(false);
                      setIsContactModalOpen(false);
                    }, 3000);
                  }}>
                    <div className="form-group">
                      <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                      <input type="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                      <input type="text" placeholder="Subject" required />
                    </div>
                    <div className="form-group">
                      <textarea placeholder="Your Message" rows={5} required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">
                      Send Message <i className="fa-solid fa-paper-plane"></i>
                    </button>
                  </form>
                ) : (
                  <div className="success-message">
                    <div className="success-icon">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <h3>Message Sent Successfully!</h3>
                    <p>Thank you for reaching out to us. Our team will get back to you soon.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

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

        @media (max-width: 768px) {
          .footer {
            padding: 40px 0 24px;
            overflow-x: hidden;
          }
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
          white-space: nowrap;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .bg-word {
            font-size: 45vw;
            opacity: 0.08;
          }
        }

        .container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 16px;
            overflow-x: hidden;
          }
        }

        .top {
          display: grid;
          grid-template-columns: 1.1fr 2fr;
          gap: 48px;
        }
        @media (max-width: 1024px) {
          .top {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
        @media (max-width: 768px) {
          .top {
            gap: 24px;
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

        @media (max-width: 768px) {
          .intro {
            font-size: 14px;
            margin: 12px 0 16px;
            max-width: 100%;
          }
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
            margin-left: 0 !important;
            gap: 24px 32px;
          }
        }
        @media (max-width: 560px) {
          .cols {
            grid-template-columns: 1fr;
            margin-left: 0 !important;
            gap: 20px;
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

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
        }

        .modal-container {
          position: relative;
          width: min(75vw, 900px);
          height: 60vh;
          min-height: 500px;
          max-height: 700px;
          border-radius: 20px;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.12),
            rgba(255, 255, 255, 0.06)
          );
          border: 1px solid rgba(255, 122, 0, 0.3);
          box-shadow: 
            0 24px 60px rgba(0, 0, 0, 0.4),
            0 0 40px rgba(255, 122, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          overflow: hidden;
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          border: none;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.15),
            rgba(255, 255, 255, 0.08)
          );
          border: 1px solid rgba(255, 122, 0, 0.4);
          border-radius: 50%;
          color: #fff;
          font-size: 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .modal-close:hover {
          background: linear-gradient(
            145deg,
            rgba(255, 122, 0, 0.3),
            rgba(255, 122, 0, 0.15)
          );
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(255, 122, 0, 0.4);
        }

        .modal-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          height: 100%;
          gap: 0;
        }

        .contact-info {
          padding: 40px;
          background: linear-gradient(
            145deg,
            rgba(59, 130, 246, 0.15),
            rgba(37, 99, 235, 0.08),
            rgba(29, 78, 216, 0.05)
          );
          border-right: 1px solid rgba(59, 130, 246, 0.3);
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
        }

        .contact-info h2 {
          color: #fff;
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 40px 0;
          text-shadow: 0 0 20px rgba(255, 122, 0, 0.3);
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 16px;
          color: #fff;
          font-size: 1.1rem;
        }

        .contact-item i {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            145deg,
            rgba(255, 122, 0, 0.3),
            rgba(255, 122, 0, 0.15)
          );
          border-radius: 50%;
          color: #ff7a1a;
          font-size: 14px;
          border: 1px solid rgba(255, 122, 0, 0.4);
        }

        .contact-form {
          padding: 100px 40px 40px 40px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          overflow-y: auto;
          max-height: 100%;
        }

        /* Custom Orange Scrollbar */
        .contact-form::-webkit-scrollbar {
          width: 8px;
        }

        .contact-form::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50px;
        }

        .contact-form::-webkit-scrollbar-thumb {
          background: linear-gradient(
            180deg,
            rgba(255, 122, 0, 0.8),
            rgba(255, 122, 0, 0.6)
          );
          border-radius: 50px;
          border: 1px solid rgba(255, 122, 0, 0.3);
        }

        .contact-form::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(
            180deg,
            rgba(255, 122, 0, 1),
            rgba(255, 122, 0, 0.8)
          );
        }

        /* Firefox scrollbar */
        .contact-form {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 122, 0, 0.8) rgba(255, 255, 255, 0.1);
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 14px 18px;
          border: 1px solid rgba(255, 122, 0, 0.3);
          border-radius: 12px;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.08),
            rgba(255, 255, 255, 0.04)
          );
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: #fff;
          font-size: 16px;
          outline: none;
          transition: all 0.3s ease;
          box-sizing: border-box;
          resize: vertical;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: rgba(255, 122, 0, 0.6);
          box-shadow: 
            0 0 0 2px rgba(255, 122, 0, 0.2),
            0 0 20px rgba(255, 122, 0, 0.1);
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.12),
            rgba(255, 255, 255, 0.06)
          );
        }

        .submit-btn {
          background: linear-gradient(
            145deg,
            rgba(255, 122, 0, 0.8),
            rgba(255, 122, 0, 0.6)
          );
          border: 1px solid rgba(255, 122, 0, 0.8);
          color: #fff;
          padding: 14px 24px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow: 0 8px 24px rgba(255, 122, 0, 0.3);
        }

        .submit-btn:hover {
          background: linear-gradient(
            145deg,
            rgba(255, 122, 0, 0.9),
            rgba(255, 122, 0, 0.7)
          );
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(255, 122, 0, 0.4);
        }

        .submit-btn:active {
          transform: translateY(0);
        }

        /* Success Message */
        .success-message {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          height: 100%;
          animation: fadeInSuccess 0.5s ease-in;
        }

        .success-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(
            145deg,
            rgba(34, 197, 94, 0.3),
            rgba(34, 197, 94, 0.15)
          );
          border: 2px solid rgba(34, 197, 94, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          animation: pulseSuccess 2s infinite;
        }

        .success-icon i {
          font-size: 32px;
          color: #22c55e;
        }

        .success-message h3 {
          color: #fff;
          font-size: 1.8rem;
          font-weight: 700;
          margin: 0 0 16px 0;
          text-shadow: 0 0 15px rgba(255, 122, 0, 0.3);
        }

        .success-message p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.1rem;
          margin: 0;
          line-height: 1.5;
        }

        @keyframes fadeInSuccess {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulseSuccess {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 0 20px rgba(34, 197, 94, 0);
          }
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .modal-container {
            width: 90vw;
            height: 70vh;
          }

          .modal-content {
            grid-template-columns: 1fr;
          }

          .contact-info {
            display: none;
          }

          .contact-form {
            padding: 80px 20px 30px 20px;
          }

          .modal-close {
            top: 15px;
            right: 15px;
            width: 36px;
            height: 36px;
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .modal-container {
            width: 95vw;
            height: 75vh;
          }

          .contact-form {
            padding: 60px 15px 20px 15px;
          }

          .form-group input,
          .form-group textarea {
            padding: 12px 16px;
            font-size: 14px;
          }

          .submit-btn {
            padding: 12px 20px;
            font-size: 14px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
