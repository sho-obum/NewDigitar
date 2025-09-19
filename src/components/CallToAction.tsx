import React from "react";

const containerStyle: React.CSSProperties = {
  marginTop: 48,
  maxWidth: 1200,
  paddingLeft: 16,
  paddingRight: 16,
};

const boxStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.06)",
  backdropFilter: "blur(8px)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 24,
  padding: 32,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 12,
};

const titleStyle: React.CSSProperties = { fontSize: 20, fontWeight: 600, color: "#fff", margin: 0 };
const textStyle: React.CSSProperties = { fontSize: 14, color: "#cbd5e1", marginTop: 6 };

const actionsStyle: React.CSSProperties = { display: "flex", alignItems: "center", gap: 12 };
const primaryBtn: React.CSSProperties = {
  padding: "10px 16px",
  borderRadius: 8,
  background: "linear-gradient(90deg,#fb923c 0%,#f59e0b 100%)",
  color: "#000",
  fontWeight: 700,
  textDecoration: "none",
};
const secondaryBtn: React.CSSProperties = {
  padding: "10px 16px",
  borderRadius: 8,
  border: "1px solid rgba(255,255,255,0.1)",
  color: "#fff",
  textDecoration: "none",
};

const CallToAction: React.FC = () => {
  return (
    <section style={containerStyle}>
      <div style={boxStyle}>
        <div>
          <h3 style={titleStyle}>Want to work with us?</h3>
          <p style={textStyle}>Send your resume or reach out and we'll get back to you about roles that fit.</p>
        </div>

        <div style={actionsStyle}>
          <a style={primaryBtn} href="#">
            Submit CV
          </a>
          <a style={secondaryBtn} href="#">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
