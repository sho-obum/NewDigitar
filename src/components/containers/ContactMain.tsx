import React from "react";
import Image from "next/image";
import Link from "next/link";
import phone from "public/images/phone.png";
import mail from "public/images/mail.png";
import location from "public/images/location.png";

const ContactMain = () => {
  return (
    <section className="section contact-m fade-wrapper">
      <div className="container">
        <div className="row gaper">
          {/* LEFT: Map */}
          <div className="col-12 col-lg-6 order-1 order-lg-1">
            <div className="contact__map fade-top h-100">
              {/* India first by default (you can swap the src below to USA if needed) */}
              <iframe
                title="DigitAR Media - India Office Map"
                src={
                  "https://www.google.com/maps?q=1st%20Floor,%20C-87-88,%20Ramesh%20Nagar,%20Delhi%20110015,%20India&output=embed"
                }
                width="100%"
                height="600"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* RIGHT: Four boxes (mobile-first; India-first info) */}
          <div className="col-12 col-lg-6 order-2 order-lg-2">
            <div className="row gaper">
              {/* Box 1: India Office */}
              <div className="col-12 col-sm-6">
                <div className="contact-m__single topy-tilt fade-top h-100">
                  <div className="thumb">
                    <Image src={location} alt="India Office" />
                  </div>
                  <div className="content">
                    <h4>India Office</h4>
                    <p>
                      1st Floor, C-87-88
                      <br />
                      Ramesh Nagar, Delhi-110015, India
                    </p>
                    <p className="mb-1">
                      <Image
                        src={mail}
                        alt=""
                        width={18}
                        height={18}
                        aria-hidden
                      />{" "}
                      <Link href="mailto:info@digitarmedia.com">
                        info@digitarmedia.com
                      </Link>
                    </p>
                    <p className="mb-0">
                      <Image
                        src={phone}
                        alt=""
                        width={18}
                        height={18}
                        aria-hidden
                      />{" "}
                      <Link href="tel:+919811457480">+91 9811 457 480</Link>
                    </p>
                  </div>
                </div>
              </div>

              {/* Box 2: USA Office */}
              <div className="col-12 col-sm-6">
                <div className="contact-m__single topy-tilt fade-top h-100">
                  <div className="thumb">
                    <Image src={location} alt="USA Office" />
                  </div>
                  <div className="content">
                    <h4>USA Office</h4>
                    <p>
                      30 N Gould St Ste R
                      <br />
                      Sheridan, Wyoming 82801, USA
                    </p>
                    <p className="mb-1">
                      <Image
                        src={mail}
                        alt=""
                        width={18}
                        height={18}
                        aria-hidden
                      />{" "}
                      <Link href="mailto:media@digitarmedia.com">
                        media@digitarmedia.com
                      </Link>
                    </p>
                    <p className="mb-0">
                      <Image
                        src={phone}
                        alt=""
                        width={18}
                        height={18}
                        aria-hidden
                      />{" "}
                      <Link href="tel:+17632605221">+1 763 260 5221</Link>
                    </p>
                  </div>
                </div>
              </div>

              {/* Box 3: Mail Addresses (as requested) */}
              <div className="col-12 col-sm-6">
                <div className="contact-m__single topy-tilt fade-top h-100">
                  <div className="thumb">
                    <Image src={mail} alt="Mail Address" />
                  </div>
                  <div className="content">
                    <h4>Mail Address</h4>
                    <p className="mb-1">
                      <Link href="mailto:info@digitarmedia.com">
                        info@digitarmedia.com
                      </Link>
                    </p>
                    <p className="mb-0">
                      <Link href="mailto:support@digitarmedia.com">
                        support@digitarmedia.com
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              {/* Box 4: Call Us (India first on mobile, then US) */}
              <div className="col-12 col-sm-6">
                <div className="contact-m__single topy-tilt fade-top h-100">
                  <div className="thumb">
                    <Image src={phone} alt="Phone" />
                  </div>
                  <div className="content">
                    <h4>Call Us</h4>
                    <p className="mb-1">
                      India:{" "}
                      <Link href="tel:+919811457480">+91 9811 457 480</Link>
                    </p>
                    <p className="mb-0">
                      USA: <Link href="tel:+17632605221">+1 763 260 5221</Link>
                    </p>
                  </div>
                </div>
              </div>
              {/* End 4 boxes */}
            </div>
          </div>
        </div>

        {/* OPTIONAL: Second map block for USA (commented). 
            If you want a second map below, uncomment below: */}
        {/*
        <div className="row gaper mt-4">
          <div className="col-12">
            <div className="contact__map fade-top">
              <iframe
                title="DigitAR Media - USA Office Map"
                src={
                  "https://www.google.com/maps?q=30%20N%20Gould%20St%20Ste%20R,%20Sheridan,%20Wyoming%2082801,%20USA&output=embed"
                }
                width="100%"
                height="450"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

export default ContactMain;
