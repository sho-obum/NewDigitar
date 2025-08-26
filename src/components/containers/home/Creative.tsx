"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Fragment, useState } from "react";

interface CardItem {
  src: string;
  alt: string;
  description: string;
  tag: string;
}

const items: CardItem[] = [
  {
    src: "/sprite.png",
    alt: "Sprite",
    description: "Refreshing lemon-lime soda.",
    tag: "Native Ad"
  },
  {
    src: "/cheetos.png",
    alt: "Cheetos",
    description: "Crunchy Flamin' Hot snack.",
    tag: "Interactive"
  },
  {
    src: "/fanta.png",
    alt: "Fanta",
    description: "Orange fruity delight.",
    tag: "Hover Ad"
  },
  {
    src: "/coke.png",
    alt: "Coca-Cola",
    description: "Classic taste of Coke.",
    tag: "Native Ad"
  },
];

function LogoCol({
  integration,
  reverse,
  onTileClick,
}: {
  integration: CardItem[];
  reverse?: boolean;
  onTileClick: (item: CardItem) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        height: "600px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{ y: reverse ? "-50%" : 0 }}
        animate={isHovered ? { y: "current" } : { y: reverse ? "0%" : "-50%" }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {Array.from({ length: 2 }).map((_, i) => (
          <Fragment key={i}>
            {integration.map((item) => (
              <div
                key={`${item.alt}-${i}`}
                style={{
                  background: "rgba(255, 165, 0, 0.15)", // orange glass effect
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "20px",
                  padding: "20px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
                  color: "white",
                  textAlign: "center",
                  position: "relative",
                  cursor: "pointer",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onClick={() => onTileClick(item)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 12px 35px rgba(0,0,0,0.7)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.5)";
                }}
              >
                {/* Neon Tag */}
                <div
                  style={{
                    position: "absolute",
                    top: "15px",
                    left: "15px",
                    zIndex: 10,
                  }}
                >
                  <span
                    style={{
                      background: "rgba(0, 0, 0, 0.8)",
                      color: "#fe6601",
                      padding: "4px 8px",
                      borderRadius: "6px",
                      fontSize: "10px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      border: "1px solid #fe6601",
                      boxShadow: "0 0 10px #fe6601, 0 0 20px #fe6601, 0 0 30px #fe6601",
                      textShadow: "0 0 5px #fe6601",
                      backdropFilter: "blur(5px)",
                    }}
                  >
                    {item.tag}
                  </span>
                </div>
                
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "400px",
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            ))}
          </Fragment>
        ))}
      </motion.div>
    </div>
  );
}

// Modal Component
function ImageModal({ isOpen, onClose, item }: { 
  isOpen: boolean; 
  onClose: () => void; 
  item: CardItem | null;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            backdropFilter: "blur(10px)",
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "90vh",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Orange Glowing Border Background */}
            <div
              style={{
                position: "absolute",
                top: "-20px",
                left: "-20px",
                right: "-20px",
                bottom: "-20px",
                background: "linear-gradient(45deg, #fe6601, #ff8533, #fe6601)",
                borderRadius: "25px",
                filter: "blur(15px)",
                opacity: 0.6,
                zIndex: -1,
                animation: "glow 2s ease-in-out infinite alternate",
              }}
            />
            
            {/* Modal Content */}
            <div
              style={{
                background: "rgba(0, 0, 0, 0.95)",
                border: "2px solid #fe6601",
                borderRadius: "20px",
                padding: "30px",
                boxShadow: "0 0 50px rgba(254, 102, 1, 0.5)",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "20px",
                  background: "none",
                  border: "none",
                  color: "#fe6601",
                  fontSize: "24px",
                  cursor: "pointer",
                  zIndex: 2,
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(254, 102, 1, 0.1)";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "none";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                ×
              </button>
              
              {/* Image Container */}
              <div
                style={{
                  width: "400px",
                  height: "300px",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(254, 102, 1, 0.3)",
                  marginBottom: "20px",
                }}
              >
                <span style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "16px" }}>
                  Image Placeholder (Future GIF)
                </span>
              </div>
              
              {/* Content Info */}
              <div style={{ textAlign: "center" }}>
                <h3 style={{ color: "#fe6601", fontSize: "24px", marginBottom: "10px" }}>
                  {item?.alt}
                </h3>
                <p style={{ color: "white", fontSize: "16px", marginBottom: "15px" }}>
                  {item?.description}
                </p>
                <span
                  style={{
                    background: "rgba(254, 102, 1, 0.2)",
                    color: "#fe6601",
                    padding: "6px 12px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    border: "1px solid #fe6601",
                  }}
                >
                  {item?.tag}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function OrangeTicker() {
  const [selectedItem, setSelectedItem] = useState<CardItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTileClick = (item: CardItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  // Create two arrays with different tags to ensure no duplicates between rows
  const leftColumnItems = items.map((item, index) => ({
    ...item,
    tag: ["Native Ad", "Interactive", "Hover Ad"][index % 3]
  }));
  
  const rightColumnItems = items.map((item, index) => ({
    ...item,
    tag: ["Interactive", "Hover Ad", "Native Ad"][(index + 1) % 3]
  }));

  return (
    <>
      <div
        style={{
          background: "black",
          padding: "20px 20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
            maxWidth: "1400px",
            margin: "0 auto",
            alignItems: "center",
        
          }}
        >
          {/* Left content */}
          <div>
            <p
              style={{
                border: "2px solid #fe6601",
                color: "orange",
                width: "fit-content",
                padding: "6px 12px",
                borderRadius: "12px",
                fontWeight: 600,
              }}
            >
              <span style={{ fontWeight: 900 }}>Big</span> Badge
            </p>
            <h2
              style={{
                fontSize: "68px",
                fontWeight: 800,
                marginTop: "20px",
                color: "white",
                textTransform: "uppercase",
                lineHeight: 0.8,
              }}
            >
              <span
                style={{
                  fontSize: "32px",
                  fontWeight: "300",
                  textTransform: "lowercase",
                }}
              >
                {" "}
                rich media creatives that <br />{" "}
              </span>

              <span
                style={{ color: "#FE6601", position: "relative", bottom: "20px" }}
              >
                Stand Out
              </span>

              {""}
              <span
                style={{
                  color: "#261900",
                  fontSize: "120px",
                  position: "relative",
                  bottom: "20px",
                  right: "20px",
                }}
              >
                {" "}
                big!
              </span>
              <span
                style={{
                  position: "relative",
                  bottom: "150px",
                  left: "340px",
                  fontSize: "80px",
                }}
              >
                <i className="fa-sharp fa-solid fa-arrow-up-right"
                style={{
                  position:"relative",
                  bottom:"30px",
                  left:"30px"
                }}
                ></i>
              </span>
            </h2>
          </div>

          {/* Right animated columns */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              overflow: "hidden",
            }}
          >
            <LogoCol integration={leftColumnItems} onTileClick={handleTileClick} />
            <LogoCol integration={rightColumnItems} reverse onTileClick={handleTileClick} />
          </div>
        </div>
      
      </div>

      {/* Modal */}
      <ImageModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        item={selectedItem} 
      />

      {/* CSS for glow animation */}
      <style jsx>{`
        @keyframes glow {
          from {
            filter: blur(15px) brightness(1);
          }
          to {
            filter: blur(20px) brightness(1.2);
          }
        }
      `}</style>
    </>
  );
}
