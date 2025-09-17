export type Product = {
  tag: "DSP" | "SDK";
  number: string;
  title: string;
  domain: string;
  href: string;
  src: string;
  points: string[];
  chipBg: string;
  chipFg: string;
  accent: string;
};
export function MobileProductCard({ product }: { product: Product }) {
  return (
    <div className="gp-card gp-mobile">
      {/* Header Row: Logo + Name */}
      <div className="gp-header-row">
        <div className="gp-header-icon">
          <img src={product.src} alt={product.title} />
        </div>
        <h3 className="gp-header-title">{product.title}</h3>
      </div>

      {/* Divider */}
      <div className="gp-divider" />

      {/* Bullet Points (first 2 only) */}
      <ul className="gp-points">
        {product.points.slice(0, 2).map((pt) => (
          <li key={pt}>{pt}</li>
        ))}
      </ul>

      {/* Metric Row (single row like desktop) */}
      <div className="gp-metric-row">
        <div className="gp-metric">
          <div className="gp-metric__value">
            {product.tag === "DSP" ? "1.2B+" : "10K+"}
          </div>
          <div className="gp-metric__label">
            {product.tag === "DSP" ? "Monthly Active Users" : "Integrated Apps"}
          </div>
          <div className="gp-meter">
            <div
              className="gp-meter__fill"
              style={{
                width: product.tag === "DSP" ? "72%" : "58%",
              }}
            />
          </div>
        </div>
      </div>

      {/* CTA Row */}
      <div className="gp-cta-row">
        <span className="gp-dim">
          {product.tag === "DSP"
            ? "Drive measurable ROI"
            : "Monetize without compromise"}
        </span>
        <a
          href={product.href}
          target="_blank"
          rel="noopener noreferrer"
          className="gp-btn"
          style={{
            color: product.chipFg,
            borderColor: product.accent,
          }}
        >
          Learn More <i className="fa-solid fa-arrow-right-long" />
        </a>
      </div>

      <style jsx>{`
        .gp-mobile {
          background: #0a0a0a;
          border: 1px solid rgba(255, 122, 0, 0.3);
          border-radius: 16px;
          padding: 18px !important;
          margin-bottom: 16px ;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          width: 100% !important; 
          box-sizing: border-box; 
        }
        .gp-header-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 8px;
        }
        .gp-header-icon img {
          width: 64px;
          height: 64px;
          object-fit: contain;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          padding: 6px;
        }
        .gp-header-title {
          font-size: 2rem;
          font-weight: 900;
          letter-spacing: -0.02em;
        }
        .gp-divider {
          margin: 8px 0;
          height: 1px;
          background: linear-gradient(
            to right,
            rgba(255, 122, 0, 0),
            rgba(255, 122, 0, 0.5),
            rgba(255, 122, 0, 0)
          );
        }
        .gp-points {
          margin-top: 8px;
          margin-bottom: 8px;
          padding-left: 16px;
          font-size: 0.95rem;
          line-height: 1.4;
          color: #ccc;
        }
        .gp-metric-row {
          display: flex;
          justify-content: center;
          margin: 10px 0;
        }
        .gp-metric {
          background: linear-gradient(
            180deg,
            rgba(255, 122, 0, 0.08),
            rgba(255, 122, 0, 0.03)
          );
          border: 1px solid rgba(255, 122, 0, 0.25);
          border-radius: 14px;
          padding: 10px 12px;
          text-align: center;
          width: 80%;
        }
        .gp-metric__value {
          font-size: 1.5rem;
          font-weight: 900;
        }
        .gp-metric__label {
          font-size: 0.8rem;
          text-transform: uppercase;
          opacity: 0.9;
          margin-top: 4px;
        }
        .gp-meter {
          margin-top: 6px;
          height: 6px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 999px;
          overflow: hidden;
        }
        .gp-meter__fill {
          height: 100%;
          background: linear-gradient(90deg, #ff7a00, #ffb066);
        }
      `}</style>
    </div>
  );
}
