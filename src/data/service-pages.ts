import type { ServiceConfig } from "./services";

export const performanceConfig: ServiceConfig = {
  id: "performance",
  slug: "/services/performance",
  title: "Performance Marketing",
  hero: {
    heading: "Lower CAC & scale profitably with performance marketing that iterates fast",
    subheading: "Creative testing, funnel optimization, and ruthless reporting.",
    proof: ["Avg. 2.5x ROAS in 90 days", "Spent across Meta, Google, TikTok"],
  },
  pains: [
    "ROAS plateaued or declining",
    "Creative fatigue & low CTR",
    "Landing pages not converting",
  ],
  kpis: [
    { value: "↓30%", label: "CAC" },
    { value: "2.5x", label: "ROAS" },
    { value: "↑22%", label: "CVR" },
  ],
  deliverables: [
    { label: "Account audit & roadmap" },
    { label: "Offer & creative testing plan" },
    { label: "Landing page optimization" },
    { label: "Weekly reporting & insights" },
  ],
  process: [
    { title: "Discover", desc: "Audit, goals, and tracking health" },
    { title: "Plan", desc: "Hypotheses, offers, and creative sprints" },
    { title: "Execute", desc: "Campaign builds and LP tests" },
    { title: "Optimize", desc: "Scale winners, cut losers" },
    { title: "Report", desc: "Clear insights & next bets" },
  ],
  cases: [
    {
      id: "cs-perf-1",
      title: "DTC apparel",
      result: "↓32% CAC within 60 days",
      bullets: ["Hook-led creatives", "LP split tests", "Budget rebalancing"],
      href: "/case-studies/dtc-apparel",
    },
  ],
  testimonialsIds: ["t1","t3"],
  pricing: [
    { name: "Starter", tagline: "Audit + action plan", price: "From $2.5k", features: ["Full audit", "90-day roadmap"] },
    { name: "Growth", tagline: "Hands-on management", price: "From $5k/mo", features: ["Weekly sprints", "Creative testing"] },
  ],
  faqs: [
    { q: "What budget do I need?", a: "We’re most effective with $5k+/mo ad spend; we’ve managed $10k–$500k+/mo." },
    { q: "How fast to see results?", a: "Most accounts see meaningful movement in 30–60 days; compounding over 90 days." },
  ],
  seo: {
    title: "Performance Marketing Agency | Lower CAC & Scale",
    description: "Data-driven ads, creative testing, and landing page optimization to grow ROAS.",
  },
};

export const socialConfig: ServiceConfig = {
  id: "social",
  slug: "/services/social",
  title: "Social Media Marketing",
  hero: {
    heading: "Turn scrolls into customers with social that sells",
    subheading: "Content pillars, UGC, and consistent distribution.",
    proof: ["120k+ followers grown", "3x avg. engagement lift"],
  },
  pains: ["Inconsistent posting", "Low engagement", "No content strategy"],
  kpis: [
    { value: "3x", label: "Engagement" },
    { value: "95%", label: "Reach" },
    { value: "↑60%", label: "Retention" },
  ],
  deliverables: [
    { label: "Content strategy & pillars" },
    { label: "Monthly calendar & production" },
    { label: "UGC sourcing & briefs" },
    { label: "Community management" },
  ],
  process: [
    { title: "Research", desc: "Audience & competitor mapping" },
    { title: "Plan", desc: "Pillars & formats" },
    { title: "Produce", desc: "Batch content & UGC" },
    { title: "Publish", desc: "Cadence & scheduling" },
    { title: "Optimize", desc: "Iterate on signals" },
  ],
  cases: [
    {
      id: "cs-social-1",
      title: "SaaS tool",
      result: "3x engagement in 8 weeks",
      bullets: ["UGC + tutorials", "Narrative threads", "Creator collabs"],
      href: "/case-studies/saas-social",
    },
  ],
  testimonialsIds: ["t2"],
  faqs: [
    { q: "Which platforms?", a: "We specialize in Instagram, TikTok, LinkedIn, and YouTube Shorts." },
    { q: "Do you also run ads?", a: "Yes—organic + paid work best together. We can coordinate paid social." },
  ],
  seo: {
    title: "Social Media Marketing Agency | Content That Converts",
    description: "Content strategy, UGC, and distribution to grow reach and revenue.",
  },
};

// export a map for quick lookup
export const servicePages: Record<string, ServiceConfig> = {
  performance: performanceConfig,
  social: socialConfig,
  // branding: ...
  // influencer: ...
};
