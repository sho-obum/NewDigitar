// src/data/services.ts
export type Metric = {
  value: string;
  label: string;
};

export type ServiceItem = {
  id: string;
  title: string;
  desc: string[];
  metrics: Metric[];
};

export const services: ServiceItem[] = [
  {
    id: "social",
    title: "Social",
    desc: ["Boost your online presence", "Engage across all platforms"],
    metrics: [
      { value: "95%", label: "Reach" },
      { value: "120k", label: "Followers" },
      { value: "350+", label: "Campaigns" },
      { value: "4.8/5", label: "Ratings" },
    ],
  },
  {
    id: "performance",
    title: "Performance",
    desc: ["Data-driven optimization", "Focus on conversions"],
    metrics: [
      { value: "2.5x", label: "ROI" },
      { value: "80%", label: "Faster Load" },
      { value: "99.9%", label: "Uptime" },
      { value: "60%", label: "Retention" },
    ],
  },
  {
    id: "branding",
    title: "Branding",
    desc: ["Craft unique identity", "Build customer trust"],
    metrics: [
      { value: "150+", label: "Brands" },
      { value: "300%", label: "Recognition" },
      { value: "200+", label: "Logos" },
      { value: "50+", label: "Awards" },
    ],
  },
  {
    id: "influencer",
    title: "Influencer",
    desc: ["Leverage partnerships", "Expand social reach"],
    metrics: [
      { value: "500+", label: "Influencers" },
      { value: "1M+", label: "Views" },
      { value: "750k", label: "Engagements" },
      { value: "95%", label: "Positive Sentiment" },
    ],
  },
];
