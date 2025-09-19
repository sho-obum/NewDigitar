import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";

import Agency from "@/components/containers/home/Agency";
import TeamMembers from "@/components/containers/TeamMembers";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";


const AboutUs = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner title="About Us" navigation="About Us" />
  
      <Agency />
      <TeamMembers />
      <HomeTestimonial />
   
    </Layout>
  );

};

export default AboutUs;

