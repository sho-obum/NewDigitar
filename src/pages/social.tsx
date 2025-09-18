import ContactMain from "@/components/containers/ContactMain";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import Layout from "@/components/layout/Layout";
import React, { useEffect } from "react";
   


export default function SocialPage() {
  useEffect(() => {
    // Parallax scroll effect
    const handleScroll = () => {
      const elements = document.querySelectorAll<HTMLElement>(".parallax");
      const scrollTop = window.scrollY;
      elements.forEach((el) => {
        const depth = parseFloat(el.dataset.depth || "0");
        const translateY = scrollTop * depth;
        el.style.transform = `translate3d(0, ${translateY}px, 0)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    
     <Layout header={2} footer={5} video={0}>
      <CmnBanner title="Social" navigation="Social" />
      
      
    </Layout>
  );
}
