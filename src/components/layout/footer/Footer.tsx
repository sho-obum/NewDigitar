import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="footer section pb-0"
      role="contentinfo"
      style={{ backgroundImage: "url('/images/footer/footer-bg.png')" }}
    >
      <div className="container">
        <div className="row gy-5">
          {/* Col 1 — Brand + blurb + CTA + Quick Links */}
          <div className="col-12 col-lg-4">
            <div className="d-flex flex-column gap-3">
              <Link href="/" aria-label="Go to home" className="d-inline-block">
                <Image
                  src={logo}
                  alt="DigitAR Media"
                  className="img-fluid"
                  style={{ width: "clamp(120px, 12vw, 200px)", height: "auto" }}
                />
              </Link>

              <p className="mb-0">
                We help brands grow with strategy, design, development and
                performance marketing that actually moves the needle.
              </p>

              <div>
                <Link href="#" className="btn btn--secondary">
                  book a call now
                </Link>
              </div>

              {/* Quick Links */}
              <div className="row mt-4">
                <div className="col-6">
                  <ul className="list-unstyled" style={{ lineHeight: 1.9 }}>
                    <li>
                      <Link href="/services" className="footer-link">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/work" className="footer-link">
                        Work
                      </Link>
                    </li>
                    <li>
                      <Link href="/pricing" className="footer-link">
                        Pricing
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="list-unstyled" style={{ lineHeight: 1.9 }}>
                    <li>
                      <Link href="/about" className="footer-link">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/careers" className="footer-link">
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact-us" className="footer-link">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2 — India Office */}
          <div className="col-12 col-lg-4">
            <div>
              <h5 className="mb-3">India Office</h5>
              <address className="mb-2 "
              style={{
                lineHeight:"normal"
              }}
              >
                1st Floor, C-87-88<br />
                Ramesh Nagar, Delhi-110015, India
              </address>
              <div className="d-flex flex-column gap-1">
                <a href="mailto:info@digitarmedia.com" className="text-decoration-none">
                  <i className="fa-sharp fa-solid fa-envelope me-2" aria-hidden="true"></i>
                  info@digitarmedia.com
                </a>
                <a href="tel:+919811457480" className="text-decoration-none">
                  <i className="fa-sharp fa-solid fa-phone-volume me-2" aria-hidden="true"></i>
                  +91 9811 457 480
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=1st%20Floor%2C%20C-87-88%2C%20Ramesh%20Nagar%2C%20Delhi-110015%2C%20India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <i className="fa-sharp fa-solid fa-location-dot me-2" aria-hidden="true"></i>
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Col 3 — USA Office (+ Newsletter retained) */}
          <div className="col-12 col-lg-4">
            <div className="d-flex flex-column gap-4">
              <div>
                <h5 className="mb-3">USA Office</h5>
                <address
                  className="mb-2"
                  style={{ lineHeight: "normal" }}
                >
                  30 N Gould St Ste R<br />
                  Sheridan, Wyoming 82801, USA
                </address>
                <div className="d-flex flex-column gap-1">
                  <a href="mailto:media@digitarmedia.com" className="text-decoration-none">
                    <i className="fa-sharp fa-solid fa-envelope me-2" aria-hidden="true"></i>
                    media@digitarmedia.com
                  </a>
                  <a href="tel:+17632605221" className="text-decoration-none">
                    <i className="fa-sharp fa-solid fa-phone-volume me-2" aria-hidden="true"></i>
                    +1 763 260 5221
                  </a>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=30%20N%20Gould%20St%20Ste%20R%2C%20Sheridan%2C%20Wyoming%2082801%2C%20USA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <i className="fa-sharp fa-solid fa-location-dot me-2" aria-hidden="true"></i>
                    Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Newsletter (kept) */}
              <div>
                <h5 className="mb-3">Subscribe to our newsletter</h5>
                <p className="mb-3">Join our list for insights, tips, and updates from the team.</p>
                <form action="#" method="post" className="d-flex align-items-stretch">
                  <input
                    type="email"
                    name="subscribe-news"
                    id="subscribeNews"
                    className="form-control"
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                  />
                  <button
                    type="submit"
                    className="btn btn--secondary ms-2"
                    aria-label="Subscribe"
                    title="Subscribe"
                  >
                    <i className="fa-sharp fa-solid fa-paper-plane" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright + Social */}
        <div className="row mt-5 pt-4 border-top">
          <div className="col-12 col-lg-8">
            <div className="text-center text-lg-start">
              <p className="mb-0">
                Copyright &copy; <span>{currentYear}</span> DigitAR Media. All rights reserved.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="d-flex gap-3 justify-content-center justify-content-lg-end">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-decoration-none">
                <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
              </a>
              <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-decoration-none">
                <i className="fa-brands fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-decoration-none">
                <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-decoration-none">
                <i className="fa-brands fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
