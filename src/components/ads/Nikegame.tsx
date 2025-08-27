import React, { useEffect, useMemo, useState } from "react";

// Drop-in ad card: headline → shoe → 4 colors; click color to swap image & price.
// Self-contained TSX with inline CSS (no external libs).

export type Variant = {
  name: string;
  colorHex: string;
  price: number;
  imgUrl: string;
};

export type ShoeAdCardProps = {
  headline?: string;
  subcopy?: string;
  ctaText?: string;
  logoUrl?: string;
  variants?: Variant[];
  width?: number | string; // e.g. 380 or "100%"
};

export default function ShoeAdCard({
  headline = "Pick Your Pace",
  subcopy = "Play & earn points on every color.",
  ctaText = "Start & Earn",
  logoUrl = "https://raw.githubusercontent.com/gerrardNwoke/Prdouct-Card/main/Shoe-product-card/imgs/nike-logo.png",
  variants,
  width = 380,
}: ShoeAdCardProps) {
  const fallbackVariants: Variant[] = useMemo(
    () => [
      {
        name: "Crimson Rush",
        colorHex: "#8f1f2c",
        price: 854.75,
        imgUrl:
          "https://raw.githubusercontent.com/gerrardNwoke/Prdouct-Card/main/Shoe-product-card/imgs/red-nike.png",
      },
      {
        name: "Solar Orange",
        colorHex: "#9a3d0d",
        price: 824.15,
        imgUrl:
          "https://raw.githubusercontent.com/gerrardNwoke/Prdouct-Card/main/Shoe-product-card/imgs/orange-nike.png",
      },
      {
        name: "Polar White",
        colorHex: "#2a2e53",
        price: 914.38,
        imgUrl:
          "https://raw.githubusercontent.com/gerrardNwoke/Prdouct-Card/main/Shoe-product-card/imgs/white.png",
      },
      {
        name: "Graphite Black",
        colorHex: "#404040",
        price: 884.12,
        imgUrl:
          "https://raw.githubusercontent.com/gerrardNwoke/Prdouct-Card/main/Shoe-product-card/imgs/black-nike.png",
      },
    ],
    []
  );

  const items = variants && variants.length >= 4 ? variants.slice(0, 4) : fallbackVariants;

  const [index, setIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0); // used to retrigger fade animation
  const [selectedSize, setSelectedSize] = useState<number>(8);
  const availableSizes: number[] = [ 7, 8, 9, 10];

  const active = items[index];

  // Slight scale mapping for sizes (base around size 8)
  const scaleForSize = (size: number) => 0.94 + (size - 8) * 0.03;
  const shoeScale = scaleForSize(selectedSize);

  function select(i: number) {
    setIndex(i);
    setAnimKey((k) => k + 1);
  }

  // keyboard: left/right to cycle colors
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % items.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [items.length]);

  const originalPrice = active.price;
  const discountedPrice = originalPrice * 0.6; // 40% off
  
  const formatPrice = (price: number) => new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(price);
  
  const formattedOriginal = formatPrice(originalPrice);
  const formattedDiscounted = formatPrice(discountedPrice);

  return (
    <div className="shoe-ad-card" role="region" aria-label="Shoe customizer ad" style={{ width: "100%", height: "100%" }}>
      <style>{`
        .shoe-ad-card{
          position:relative; 
          box-sizing:border-box; 
          display:flex; 
          flex-direction:column; 
          gap:16px; 
          padding:24px; 
          border-radius:20px; 
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%);
          color:#1a1a1a; 
          overflow:hidden; 
          box-shadow:0 20px 40px rgba(0,0,0,.15), inset 0 1px 0 rgba(255,255,255,0.8);
          height: 100%;
          min-height: 450px;
        } 
        .shoe-ad-card:before{
          content:""; 
          position:absolute; 
          inset:-2px; 
          padding:2px; 
          border-radius:22px; 
          background:linear-gradient(45deg, #ff0000, #ff7700, #ffdd00, #00ff00, #0099ff, #6600ff, #ff0099, #ff0000); 
          background-size: 400% 400%;
          animation: rainbow-border 4s linear infinite !important;
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); 
          -webkit-mask-composite: xor; 
          mask-composite: exclude;
          z-index: -1;
        }
        .header{display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom: 8px;}
        .logo{height:28px; opacity:.8}
        .headline{
          font-weight:900; 
          line-height:1.1; 
          font-size:28px; 
          margin:0; 
          color:#1a1a1a;
          animation: headlineGlow 2s ease-in-out infinite alternate !important;
        }
        @keyframes headlineGlow {
          0% { text-shadow: 0 0 5px rgba(26,26,26,0.3); }
          100% { text-shadow: 0 0 15px rgba(26,26,26,0.7), 0 0 25px rgba(26,26,26,0.5); }
        }
        .sub{opacity:.7; font-size:14px; margin:0; color:#666;}
        .hero{
        margin-top: -50px;
          position:relative; 
          border-radius:16px; 
          background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
          min-height:280px; 
          display:grid; 
          place-items:center; 
          overflow:hidden;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
          flex: 1;
        }
        .shoe-wrap{ display:grid; place-items:center; transform: scale(var(--shoe-scale, 1)); transition: transform 200ms ease; }
        .brand-mark{position:absolute; top:15px; left:15px; opacity:.06; height:45px}
        .shoe{
          max-width:75%; 
          filter: drop-shadow(0 25px 35px rgba(0,0,0,.3));
        }
        .shoe.fade{
          animation: fadeIn .4s ease both, float 3s ease-in-out infinite 0.4s !important;
        }
        @keyframes fadeIn{
          from{opacity:0; transform:translateY(8px) rotate(-12deg)} 
          to{opacity:1; transform:translateY(0) rotate(-12deg)}
        }
        @keyframes float{
          0%, 100% { transform: translateY(0) rotate(-12deg); }
          50% { transform: translateY(-15px) rotate(-12deg); }
        }
        @keyframes rainbow-border {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .controls{display:flex; align-items:center; justify-content:space-between; gap:16px; margin-top: 12px;}
        .price-section{display:flex; flex-direction:column; align-items:flex-start; gap:4px; line-height:1.15;}
        .original-price{
          font-size:16px; 
          color:#999; 
          text-decoration:line-through; 
          font-weight:500;
          margin-bottom: 0;
          line-height: 1;
        }
        .discount-badge{
          background: linear-gradient(45deg, #ff4757, #ff6b7a);
          color: white;
          font-size: 12px;
          font-weight: 700;
          padding: 4px 8px;
          border-radius: 8px;
          margin-bottom: 0;
          animation: pulse-badge 1.5s ease-in-out infinite !important;
          box-shadow: 0 2px 8px rgba(255, 71, 87, 0.4);
          line-height: 1;
          display: inline-block;
        }
        @keyframes pulse-badge {
          0%, 100% { 
            transform: scale(1); 
            box-shadow: 0 2px 8px rgba(255, 71, 87, 0.4);
          }
          50% { 
            transform: scale(1.1); 
            box-shadow: 0 4px 12px rgba(255, 71, 87, 0.6);
          }
        }
        .price{font-weight:900; font-size:24px; letter-spacing:.3px; color:#1a1a1a; line-height: 1.1;}
        .cta{
          border:0; 
          padding:12px 20px; 
          font-weight:800; 
          border-radius:16px; 
          cursor:pointer; 
          color:#fff; 
          background:linear-gradient(45deg, #ff0000, #ff7700, #ffdd00, #00ff00, #0099ff, #6600ff, #ff0099, #ff0000);
          background-size: 400% 400%;
          animation: cta-rainbow 3s ease infinite !important;
          transition:transform .2s ease;
          font-size: 14px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }
        @keyframes cta-rainbow {
          0% { 
            background-position: 0% 50%; 
            box-shadow: 0 8px 25px rgba(255,0,0,0.4);
          }
          25% { 
            background-position: 25% 50%; 
            box-shadow: 0 8px 25px rgba(255,221,0,0.4);
          }
          50% { 
            background-position: 50% 50%; 
            box-shadow: 0 8px 25px rgba(0,255,0,0.4);
          }
          75% { 
            background-position: 75% 50%; 
            box-shadow: 0 8px 25px rgba(0,153,255,0.4);
          }
          100% { 
            background-position: 100% 50%; 
            box-shadow: 0 8px 25px rgba(255,0,153,0.4);
          }
        }
        .cta:hover{transform: translateY(-2px) scale(1.05);}
        .cta:active{transform:translateY(0) scale(0.98);}
        .swatches{display:flex; gap:12px}
        .swatch{
          width:32px; 
          height:32px; 
          border-radius:999px; 
          border:3px solid transparent; 
          outline-offset:2px; 
          display:inline-flex; 
          align-items:center; 
          justify-content:center; 
          cursor:pointer; 
          position:relative;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
        .swatch[aria-pressed="true"]{
          border-color:#1a1a1a;
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }
        .swatch:hover{transform: scale(1.05);}
        .swatch:focus-visible{outline:2px solid #000}
        .swatch .sr{position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0}
        .foot{display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap: wrap;}
        .name{font-size:14px; opacity:.8; font-weight: 600; color:#333; line-height: 1;}
        .sizes{display:flex; gap:8px; align-items:center;}
        .size-btn{min-width:34px; height:34px; padding:0 8px; border-radius:8px; border:2px solid #e5e7eb; background:#fff; color:#111; font-weight:800; cursor:pointer; transition: all .2s ease; box-shadow: 0 2px 6px rgba(0,0,0,.06);}
        .size-btn:hover{transform: translateY(-1px)}
        .size-btn[aria-pressed="true"]{border-color:#111; background:#111; color:#fff; box-shadow: 0 4px 12px rgba(0,0,0,.15)}
        @media (max-width:420px){ 
          .headline{font-size:24px} 
          .hero{min-height:220px} 
          .foot{flex-direction: column; align-items: flex-start; gap: 12px;}
          .controls{flex-direction: column; align-items: flex-start; gap: 8px;}
        }
      `}</style>

      <div className="header">
      
      </div>

      <div className="hero" aria-live="polite">
        {logoUrl && <img className="brand-mark" src={logoUrl} alt="" aria-hidden />}
        {/* using key to re-trigger fade on change */}
        <div className="shoe-wrap" style={{ ['--shoe-scale' as any]: shoeScale } as any}>
          <img key={animKey} className="shoe fade" src={active.imgUrl} alt={`${active.name} shoe`} />
        </div>
      </div>

      <div className="foot">
        <div className="swatches" role="group" aria-label="Choose color">
          {items.map((v, i) => (
            <button
              key={v.name}
              className="swatch"
              style={{ background: v.colorHex }}
              aria-pressed={i === index}
              aria-label={`${v.name} color`}
              onClick={() => select(i)}
              title={v.name}
            >
              <span className="sr">{v.name}</span>
            </button>
          ))}
        </div>
        <div className="sizes" role="group" aria-label="Choose size">
          {availableSizes.map((s) => (
            <button
              key={s}
              className="size-btn"
              aria-pressed={selectedSize === s}
              onClick={() => setSelectedSize(s)}
              title={`Size ${s}`}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="controls">
          <div className="name">{items[index].name}</div>
          <div className="price-section">
            <div className="discount-badge">40% OFF</div>
            <div className="original-price">{formattedOriginal}</div>
            <div className="price" aria-live="polite">{formattedDiscounted}</div>
          </div>
          <button className="cta" onClick={() => alert(`Added ${active.name} (Size ${selectedSize}) to cart for ${formattedDiscounted}`)}>{ctaText}</button>
        </div>
      </div>
    </div>
  );
}
