"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Fragment } from "react";

interface CardItem {
  src: string;
  alt: string;
  description: string;
}

const items: CardItem[] = [
  {
    src: "/sprite.png",
    alt: "Sprite",
    description: "Refreshing lemon-lime soda.",
  },
  {
    src: "/cheetos.png",
    alt: "Cheetos",
    description: "Crunchy Flamin’ Hot snack.",
  },
  {
    src: "/fanta.png",
    alt: "Fanta",
    description: "Orange fruity delight.",
  },
  {
    src: "/coke.png",
    alt: "Coca-Cola",
    description: "Classic taste of Coke.",
  },
];

function LogoCol({
  integration,
  reverse,
}: {
  integration: CardItem[];
  reverse?: boolean;
}) {
  return (
    <div
      style={{
        position: "relative",
        height: "800px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <motion.div
        initial={{ y: reverse ? "-50%" : 0 }}
        animate={{ y: reverse ? "0%" : "-50%" }}
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
                }}
              >
                <div style={{ display: "flex", justifyContent: "center", height:"400px" }}>
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

export default function OrangeTicker() {
  return (
    <div
      style={{
        background: "black",
        padding: "80px 20px",
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
          minHeight: "80vh",
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
              creatives that <br />{" "}
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
            <span style={{
              position:"relative",
              bottom:"150px",
              left:"340px",
              fontSize:"80px"
            }}>
              <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
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
          <LogoCol integration={items} />
          <LogoCol integration={items.slice().reverse()} reverse />
        </div>
      </div>
    </div>
  );
}
