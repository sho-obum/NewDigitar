"use client";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import { Fragment, useRef, useState, useEffect } from "react";
import PepsiChallengeAd from "../../ads/Pepsigame";
import Nikegame from "../../ads/Nikegame";
import TinderMiniGameAd from "@/components/ads/Tindergame";

interface CardItem {
  src: string;
  alt: string;
  description: string;
  tag: string;
}

const items: CardItem[] = [
  {
    src: "https://panel.digitarmedia.com/admin/uploads/21756358948.png",
    alt: "Ecommerce",
    description: "Shoppable experiences for products.",
    tag: "Ecommerce",
  },
  {
    src: "https://panel.digitarmedia.com/admin/uploads/11756358943.png",
    alt: "Beverages",
    description: "Interactive beverage brand experience.",
    tag: "Beverages",
  },
  {
    src: "https://panel.digitarmedia.com/admin/uploads/31756360830.png",
    alt: "Dating",
    description: "Interactive beverage brand experience.",
    tag: "Dating",
  },

  {
    src: "https://panel.digitarmedia.com/admin/uploads/21756358948.png",
    alt: "Ecommerce",
    description: "Shoppable experiences for products.",
    tag: "Ecommerce",
  },
  {
    src: "https://panel.digitarmedia.com/admin/uploads/31756360830.png",
    alt: "Dating",
    description: "Interactive beverage brand experience.",
    tag: "Dating",
  },
  {
    src: "https://panel.digitarmedia.com/admin/uploads/11756358943.png",
    alt: "Beverages",
    description: "Interactive beverage brand experience.",
    tag: "Beverages",
  },
];

// Mobile Logo Column Component
function MobileLogoCol({
  integration,
  onTileClick,
}: {
  integration: CardItem[];
  onTileClick: (item: CardItem) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageAspectRatios, setImageAspectRatios] = useState<
    Record<string, number>
  >({});
  const repeatedItems = [...integration, ...integration];
  return (
    <div
      style={{
        position: "relative",
        height: "400px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        justifyContent: "center",
        alignItems: "center",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          willChange: "transform",
          animationName: "scrollY",
          animationDuration: "30s",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationPlayState: isHovered ? "paused" : "running",
        }}
      >
        {repeatedItems.map((item, idx) => (
          <div
            key={`${item.alt}-${idx}`}
            style={{
              background: "rgba(255, 165, 0, 0.15)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "16px",
              padding: "16px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
              color: "white",
              textAlign: "center",
              position: "relative",
              cursor: "pointer",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              width: "180px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            onClick={() => onTileClick(item)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
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
                top: "8px",
                left: "8px",
                zIndex: 10,
              }}
            >
              <span
                style={{
                  background: "rgba(0, 0, 0, 0.8)",
                  color: "#fe6601",
                  padding: "4px 6px",
                  borderRadius: "6px",
                  fontSize: "9px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  border: "1px solid #fe6601",
                  boxShadow:
                    "0 0 5px #fe6601, 0 0 10px #fe6601, 0 0 15px #fe6601",
                  textShadow: "0 0 3px #fe6601",
                  backdropFilter: "blur(5px)",
                }}
              >
                {item.tag}
              </span>
            </div>

            {/* Logo in top right */}
            <div
              style={{
                position: "absolute",
                top: "8px",
                right: "8px",
                zIndex: 10,
              }}
            >
              {/* <Image
                src="/logo-placeholder.png"
                alt="Brand Logo"
                width={20}
                height={20}
                style={{
                  width: "20px",
                  height: "20px",
                  objectFit: "contain",
                  opacity: 0.8,
                }}
              /> */}
            </div>

            <div
              style={{
                position: "relative",
                flex: 1,
                width: "100%",
                aspectRatio:
                  imageAspectRatios[item.src] &&
                  isFinite(imageAspectRatios[item.src])
                    ? String(imageAspectRatios[item.src])
                    : "1 / 1",
                margin: "8px",
                borderRadius: "12px",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 180px, 300px"
                style={{
                  objectFit: "contain",
                  filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
                }}
                onLoadingComplete={(img) => {
                  const ratio = img.naturalWidth / img.naturalHeight;
                  if (isFinite(ratio) && ratio > 0) {
                    setImageAspectRatios((prev) => ({
                      ...prev,
                      [item.src]: ratio,
                    }));
                  }
                }}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// Desktop Logo Column Component (Original Design)
function DesktopLogoCol({
  integration,
  reverse,
  onTileClick,
}: {
  integration: CardItem[];
  reverse?: boolean;
  onTileClick: (item: CardItem) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageAspectRatios, setImageAspectRatios] = useState<
    Record<string, number>
  >({});
  return (
    <div
      style={{
        position: "relative",
        height: "600px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          willChange: "transform",
          animationName: "scrollY",
          animationDuration: "40s",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDirection: reverse ? "reverse" : "normal",
          animationPlayState: isHovered ? "paused" : "running",
        }}
      >
        {Array.from({ length: 2 }).map((_, i) => (
          <Fragment key={i}>
            {(reverse ? [...integration].reverse() : integration).map((item) => (
              <div
                key={`${item.alt}-${i}`}
                style={{
                  background: "rgba(255, 165, 0, 0.15)",
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
                  width: "300px",
                }}
                onClick={() => onTileClick(item)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 35px rgba(0,0,0,0.7)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0,0,0,0.5)";
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
                      boxShadow:
                        "0 0 5px #fe6601, 0 0 10px #fe6601, 0 0 15px #fe6601",
                      textShadow: "0 0 3px #fe6601",
                      backdropFilter: "blur(5px)",
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Logo in top right */}
                <div
                  style={{
                    position: "absolute",
                    top: "15px",
                    right: "15px",
                    zIndex: 10,
                  }}
                >
                  {/* <Image
                    src="/logo-placeholder.png"
                    alt="Brand Logo"
                    width={100}
                    height={100}
                    style={{
                      width: "100px",
                      height: "auto",
                      objectFit: "contain",
                      opacity: 1,
                      position: "relative",
                      bottom: "3px",
                      left: "-20px",
                    }}
                  /> */}
                </div>

                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio:
                      imageAspectRatios[item.src] &&
                      isFinite(imageAspectRatios[item.src])
                        ? String(imageAspectRatios[item.src])
                        : "1 / 1",
                    borderRadius: "16px",
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(15px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 300px, 360px"
                    style={{
                      objectFit: "contain",
                      filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.4))",
                    }}
                    onLoadingComplete={(img) => {
                      const ratio = img.naturalWidth / img.naturalHeight;
                      if (isFinite(ratio) && ratio > 0) {
                        setImageAspectRatios((prev) => ({
                          ...prev,
                          [item.src]: ratio,
                        }));
                      }
                    }}
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
function ImageModal({
  isOpen,
  onClose,
  item,
}: {
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
              width: "clamp(300px, 90vw, 500px)",
              maxHeight: "90vh",
              margin: "clamp(1rem, 5vw, 2rem)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Orange Glowing Border Background */}
            <div
              style={{
                position: "absolute",
                top: "-15px",
                left: "-15px",
                right: "-15px",
                bottom: "-15px",
                background: "linear-gradient(45deg, #fe6601, #ff8533, #fe6601)",
                borderRadius: "20px",
                filter: "blur(8px)",
                opacity: 0.4,
                zIndex: -1,
                animation: "glow 2s ease-in-out infinite alternate",
              }}
            />

            {/* Modal Content */}
            <div
              style={{
                background: "rgba(0, 0, 0, 0.95)",
                border: "2px solid #fe6601",
                borderRadius: "clamp(12px, 3vw, 20px)",
                padding: "clamp(1rem, 5vw, 1.875rem)",
                boxShadow: "0 0 25px rgba(254, 102, 1, 0.3)",
                position: "relative",
                zIndex: 1,
                minHeight: "500px",
              }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                style={{
                  position: "absolute",
                  top: "clamp(0.75rem, 3vw, 0.9375rem)",
                  right: "clamp(1rem, 4vw, 1.25rem)",
                  background: "none",
                  border: "none",
                  color: "#fe6601",
                  fontSize: "clamp(1.25rem, 4vw, 1.5rem)",
                  cursor: "pointer",
                  zIndex: 10,
                  width: "clamp(2rem, 6vw, 2.5rem)",
                  height: "clamp(2rem, 6vw, 2.5rem)",
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

              {/* Conditional Ad Rendering */}
              <div
                style={{
                  width: "100%",
                  height: "450px",
                  marginTop: "20px",
                }}
              >
                {item?.tag === "Beverages" ? (
                  <PepsiChallengeAd />
                ) : item?.tag === "Ecommerce" ? (
                  <Nikegame />
                ) : item?.tag === "Dating" ? (
                  <TinderMiniGameAd />
                ) : (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      height: "100%",
                      color: "#fe6601",
                      fontWeight: 800,
                      fontSize: "1.25rem",
                      border: "1px dashed rgba(254, 102, 1, 0.4)",
                      borderRadius: "12px",
                      background: "rgba(254, 102, 1, 0.04)",
                    }}
                  >
                    {item?.tag} ad coming soon
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Mobile Component
function MobileCreative({
  onTileClick,
}: {
  onTileClick: (item: CardItem) => void;
}) {
  return (
    <div
      style={{
        background: "black",
        padding: "2rem 1rem",
        position: "relative",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Content Section */}
        <div style={{ marginBottom: "2rem" }}>
          <p
            style={{
              border: "2px solid #fe6601",
              color: "orange",
              width: "fit-content",
              padding: "0.5rem 1rem",
              borderRadius: "12px",
              fontWeight: 600,
              fontSize: "0.9rem",
              margin: "0 auto 1rem auto",
            }}
          >
            <span style={{ fontWeight: 900 }}>Interactive</span> Ads
          </p>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: 800,
              color: "white",
              textTransform: "uppercase",
              lineHeight: "1.1",
              marginBottom: "1rem",
            }}
          >
            <span
              style={{
                fontSize: "1.2rem",
                fontWeight: "300",
                textTransform: "lowercase",
                display: "block",
                marginBottom: "0.5rem",
              }}
            >
              Rich Media creatives that
            </span>
            <span
              style={{
                color: "#FE6601",
                display: "block",
                marginBottom: "0.5rem",
              }}
            >
              Stand Out
            </span>
            <span
              style={{
                color: "#FE6601",
                fontSize: "3rem",
                display: "block",
                position: "relative",
              }}
             
            >
              big!
              <i
                className="fa-sharp fa-solid fa-arrow-up-right"
                style={{
                  fontSize: "2rem",
                  marginLeft: "0.5rem",
                  verticalAlign: "middle",
                }}
              />
            </span>
          </h2>
        </div>

        {/* Single Column */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <MobileLogoCol integration={items} onTileClick={onTileClick} />
        </div>
      </div>
    </div>
  );
}

// Desktop Component (Original Design)
function DesktopCreative({
  onTileClick,
}: {
  onTileClick: (item: CardItem) => void;
}) {
  const [scrollDir, setScrollDir] = useState<"up" | "down">("down");
  const prevYRef = useRef(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = prevYRef.current;
    if (latest > prev) {
      setScrollDir("down");
    } else if (latest < prev) {
      setScrollDir("up");
    }
    prevYRef.current = latest;
  });

  const leftColumnItems = items;

  const rightColumnItems = items;

  return (
    <div
      style={{
        background: "black",
        padding: "20px 20px",
        position: "relative",
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
        <motion.div
          style={{
            position: "relative",
            zIndex: 1,
          }}
          initial={{ y: 80 }}
          animate={{ y: scrollDir === "down" ? 0 : 80 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
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
            <span style={{ fontWeight: 900 }}>Interactive</span> Ads
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
                fontSize: "100px",
                position: "relative",
                bottom: "-60px",
                right: "430px",
              }}
               className="bigtextclass"
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
              <i
                className="fa-sharp fa-solid fa-arrow-up-right arrowIcon"
                style={{
                  position: "relative",
                  bottom: "30px",
                  left: "30px",
                }}
              ></i>
            </span>
          </h2>
        </motion.div>

        {/* Right animated columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            overflow: "hidden",
            position: "relative",
            zIndex: 2,
          }}
        >
          <DesktopLogoCol
            integration={leftColumnItems}
            onTileClick={onTileClick}
          />
          <DesktopLogoCol
            integration={rightColumnItems}
            reverse
            onTileClick={onTileClick}
          />
        </div>
      </div>
    </div>
  );
}

// Hook for viewport detection
function useViewport() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);

    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  return { isMobile };
}

// Main Component
export default function OrangeTicker() {
  const [selectedItem, setSelectedItem] = useState<CardItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isMobile } = useViewport();

  const handleTileClick = (item: CardItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      {isMobile ? (
        <MobileCreative onTileClick={handleTileClick} />
      ) : (
        <DesktopCreative onTileClick={handleTileClick} />
      )}

      <div className="lines d-none d-lg-flex" style={{ zIndex: 0 }}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <hr />

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
            filter: blur(8px) brightness(1);
          }
          to {
            filter: blur(12px) brightness(1.1);
          }
        }
      `}</style>
      {/* Global keyframes for vertical scroll animation */}
      <style jsx global>{`
        @keyframes scrollY {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </>
  );
}
