"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import { FiCheckCircle } from "react-icons/fi";

import phone from "public/images/phone.png";
import mail from "public/images/mail.png";
import location from "public/images/location.png";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const labelStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "0.3rem",
    fontWeight: 600,
    fontSize: "0.9rem",
    color: "#f97316", // orange label text
    textShadow: "0 0 6px rgba(249,115,22,0.4)",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can integrate API call
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout header={2} footer={1} video={0}>
      {/* Background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "black",
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

      <CmnBanner title="Contact Us" navigation="Contact Us" />

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "4rem 1rem",
          color: "white",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
          }}
        >
          {/* LEFT: Contact Form */}
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px",
              padding: "2rem",
              boxShadow: "0 6px 30px rgba(0,0,0,0.5)",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                color: "#f97316",
                marginBottom: "1rem",
              }}
            >
              Get In Touch
            </h2>

            <form
              onSubmit={handleSubmit}
              style={{ display: "grid", gap: "1rem" }}
            >
              <label style={labelStyle}>
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
              </label>

              <label style={labelStyle}>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
              </label>

              <label style={labelStyle}>
                Subject
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </label>

              <label style={labelStyle}>
                Message
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </label>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "0.5rem",
                }}
              >
                <button type="submit" style={neonButtonStyle}>
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT: Contact Info */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
            }}
          >
            {contactBoxes.map((box, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(249, 115, 22, 0.3)",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 20px rgba(249, 115, 22, 0.15)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(249, 115, 22, 0.25)";
                  e.currentTarget.style.border = "1px solid rgba(249, 115, 22, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(249, 115, 22, 0.15)";
                  e.currentTarget.style.border = "1px solid rgba(249, 115, 22, 0.3)";
                }}
              >
                <div 
                  style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "1rem",
                    marginBottom: "1rem" 
                  }}
                >
                  <div style={{
                    background: "rgba(249, 115, 22, 0.1)",
                    padding: "0.5rem",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 10px rgba(249, 115, 22, 0.2)"
                  }}>
                    <Image
                      src={box.icon}
                    alt={box.title}
                    width={24}
                    height={24}
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                  </div>
                  <h4 style={{ 
                    color: "#f97316", 
                    margin: 0,
                    textShadow: "0 0 10px rgba(249, 115, 22, 0.3)"
                  }}>
                    {box.title}
                  </h4>
                </div>
                <div style={{ 
                  fontSize: "0.95rem", 
                  color: "#ddd",
                  // Align with the title
                }}>
                  {box.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div style={popupOverlayStyle}>
          <div style={popupBoxStyle}>
            <FiCheckCircle
              size={48}
              color="#4ade80"
              style={{ marginBottom: "1rem" }}
            />
            <h3 style={{ color: "#4ade80", marginBottom: "0.5rem" }}>
              Message Sent!
            </h3>
            <p style={{ color: "#ccc", textAlign: "center" }}>
              Thanks for reaching out. We’ll get back to you shortly.
            </p>
          </div>
        </div>
      )}
    </Layout>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "0.8rem",
  borderRadius: "6px",
  border: "1px solid rgba(255,255,255,0.1)",
  background: "rgba(255,255,255,0.05)",
  color: "white",
  outline: "none",
  fontSize: "1rem",
};

const neonButtonStyle: React.CSSProperties = {
  background: "rgba(249,115,22,0.15)",
  color: "white",
  border: "1px solid rgba(249,115,22,0.6)",
  borderRadius: "10px",
  padding: "0.8rem",
  fontWeight: 700,
  fontSize: "1rem",
  cursor: "pointer",
  textAlign: "center",
  marginTop: "0.5rem",
  backdropFilter: "blur(8px)",
  boxShadow: "0 0 15px rgba(249,115,22,0.4)",
  transition: "all 0.3s ease",
};

const popupOverlayStyle: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.7)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 999,
};

const popupBoxStyle: React.CSSProperties = {
  background: "rgba(30,30,30,0.95)",
  borderRadius: "12px",
  padding: "2rem",
  border: "1px solid rgba(255,255,255,0.08)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 0 20px rgba(249,115,22,0.5)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "350px",
  textAlign: "center",
};

// Contact info data
const contactBoxes = [
  {
    title: "India Office",
    content: (
      <>
        <p>
          C-87-88
          <br />
          Ramesh Nagar, Delhi-110015, India
        </p>
        <p>
          <Image src={mail} alt="" width={16} height={16} />{" "}
          <Link href="mailto:info@digitarmedia.com">info@digitarmedia.com</Link>
        </p>
        <p>
          <Image src={phone} alt="" width={16} height={16} />{" "}
          <Link href="tel:01144787244">011-4478 7244</Link>
        </p>
      </>
    ),
    icon: location,
  },
  {
    title: "USA Office",
    content: (
      <>
        <p>
          30 N Gould St Ste R<br />
          Sheridan, Wyoming 82801, USA
        </p>
        <p>
          <Image src={mail} alt="" width={16} height={16} />{" "}
          <Link href="mailto:media@digitarmedia.com">
            media@digitarmedia.com
          </Link>
        </p>
        <p>
          <Image src={phone} alt="" width={16} height={16} />{" "}
          <Link href="tel:+17632605221">+1 763 260 5221</Link>
        </p>
      </>
    ),
    icon: location,
  },
  {
    title: "Mail Address",
    content: (
      <>
        <p>
          <Link href="mailto:info@digitarmedia.com">info@digitarmedia.com</Link>
        </p>
        <p>
          <Link href="mailto:support@digitarmedia.com">
            support@digitarmedia.com
          </Link>
        </p>
      </>
    ),
    icon: mail,
  },
  {
    title: "Call Us",
    content: (
      <>
        <p>
          India: <Link href="tel:01144787244">011-4478 7244</Link>
        </p>
        <p>
          USA: <Link href="tel:+17632605221">+1 763 260 5221</Link>
        </p>
      </>
    ),
    icon: phone,
  },
];
