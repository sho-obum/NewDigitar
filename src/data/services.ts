// src/data/services.ts

// ---------- Types ----------
export type KPI = { value: string; label: string };
export type Deliverable = { label: string };
export type Step = { title: string; desc?: string };
export type CaseTeaser = {
  id: string;
  title: string;
  result: string;
  bullets: string[];
  href: string;
};
export type FAQ = { q: string; a: string };

export type ServiceConfig = {
  id: string; // "performance"
  slug: string; // "/services/performance"
  title: string; // "Performance Marketing"
  hero: {
    heading: string;
    subheading?: string;
    proof?: string[];
  };
  pains: string[];
  kpis: KPI[];
  deliverables: Deliverable[];
  process: Step[];
  cases: CaseTeaser[];
  testimonialsIds?: string[];
  pricing?: Array<{
    name: string;
    tagline?: string;
    price?: string;
    features: string[];
  }>;
  faqs: FAQ[];
  seo?: { title?: string; description?: string };
};

// Minimal type some old components expect:
export type ServiceItem = {
  id: string;
  title: string;
  desc: string[];
  metrics?: KPI[];
};

// ---------- Index list used by grids/links ----------
export const servicesIndex: ServiceItem[] = [
  {
    id: "performance",
    title: "Performance Marketing",
    desc: ["Data-driven optimization", "Focus on conversions"],
    metrics: [
      { value: "2.5x", label: "ROAS" },
      { value: "80%", label: "Faster Load" },
      { value: "99.9%", label: "Uptime" },
      { value: "60%", label: "Retention" },
    ],
  },
  {
    id: "social",
    title: "Social Media Marketing",
    desc: ["Boost your online presence", "Engage across all platforms"],
    metrics: [
      { value: "95%", label: "Reach" },
      { value: "120k", label: "Followers" },
      { value: "350+", label: "Campaigns" },
      { value: "4.8/5", label: "Ratings" },
    ],
  },
  {
    id: "branding",
    title: "Branding & Creative",
    desc: ["Craft a unique identity", "Build customer trust"],
    metrics: [
      { value: "150+", label: "Brands" },
      { value: "300%", label: "Recognition" },
      { value: "200+", label: "Logos" },
      { value: "50+", label: "Awards" },
    ],
  },
  {
    id: "influencer",
    title: "Influencer Marketing",
    desc: ["Leverage partnerships", "Expand social reach"],
    metrics: [
      { value: "500+", label: "Influencers" },
      { value: "1M+", label: "Views" },
      { value: "750k", label: "Engagements" },
      { value: "95%", label: "Positive Sentiment" },
    ],
  },
];

export const servicePages: Record<string, ServiceConfig> = {
  performance: {
    id: "performance",
    slug: "/services/performance",
    title: "Performance Marketing",
    hero: {
      heading: "Lower CAC & scale profitably with fast iteration",
      subheading: "Creative testing, funnel optimization, and ruthless reporting.",
      proof: ["Avg. 2.5x ROAS in 90 days"],
    },
    pains: ["ROAS plateaued", "Creative fatigue", "LPs not converting"],
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
      { title: "Discover", desc: "Audit, goals, tracking" },
      { title: "Plan", desc: "Hypotheses & creative sprints" },
      { title: "Execute", desc: "Build campaigns & LP tests" },
      { title: "Optimize", desc: "Scale winners, cut losers" },
      { title: "Report", desc: "Insights & next bets" },
    ],
    cases: [
      {
        id: "cs-perf-1",
        title: "DTC apparel",
        result: "↓32% CAC in 60 days",
        bullets: ["Hook-led creatives", "LP split tests", "Budget rebalancing"],
        href: "/case-studies/dtc-apparel",
      },
    ],
    testimonialsIds: ["t1", "t3"],
    faqs: [
      { q: "What budget do I need?", a: "We’re most effective from $5k+/mo ad spend." },
      { q: "How fast to see results?", a: "Meaningful movement in 30–60 days; compounding over 90." },
    ],
    seo: {
      title: "Performance Marketing Agency | Lower CAC & Scale",
      description: "Data-driven ads, creative testing, and LP optimization to grow ROAS.",
    },
  },

  social: {
    id: "social",
    slug: "/services/social",
    title: "Social Media Marketing",
    hero: {
      heading: "Turn scrolls into customers with social that sells",
      subheading: "Content pillars, UGC, and consistent distribution.",
      proof: ["120k+ followers grown"],
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
      { title: "Research", desc: "Audience & competitors" },
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
      { q: "Which platforms?", a: "Instagram, TikTok, LinkedIn, and YouTube Shorts." },
      { q: "Do you also run ads?", a: "Yes—organic + paid works best together." },
    ],
    seo: {
      title: "Social Media Marketing Agency | Content That Converts",
      description: "Content strategy, UGC, and distribution to grow reach and revenue.",
    },
  },

  // ✅ NEW: BRANDING
  branding: {
    id: "branding",
    slug: "/services/branding",
    title: "Branding & Creative",
    hero: {
      heading: "Build a brand that people remember (and buy from)",
      subheading: "Strategy-first identity systems and conversion-friendly design.",
      proof: ["150+ brands launched", "Award-winning creative"],
    },
    pains: ["Inconsistent identity", "Low brand recall", "Design that doesn’t convert"],
    kpis: [
      { value: "300%", label: "Brand recognition" },
      { value: "↑42%", label: "CTR on creatives" },
      { value: "↓18%", label: "Bounce rate" },
    ],
    deliverables: [
      { label: "Brand strategy & positioning" },
      { label: "Logo + visual identity system" },
      { label: "Messaging & tone of voice" },
      { label: "Guidelines & brand kit" },
      { label: "Ad creative & templates" },
    ],
    process: [
      { title: "Discover", desc: "Research, audience, competitors" },
      { title: "Position", desc: "Strategy & narrative" },
      { title: "Design", desc: "Identity system & applications" },
      { title: "Validate", desc: "Feedback & refinements" },
      { title: "Rollout", desc: "Guidelines & handoff" },
    ],
    cases: [
      {
        id: "cs-brand-1",
        title: "Fintech rebrand",
        result: "↑52% aided recall post-launch",
        bullets: ["Unified messaging", "Modular identity", "Guideline-driven rollout"],
        href: "/case-studies/fintech-rebrand",
      },
    ],
    testimonialsIds: ["t3"],
    faqs: [
      { q: "How long does a rebrand take?", a: "Typically 4–8 weeks depending on scope and stakeholders." },
      { q: "Can you design ad creative too?", a: "Yes—static, motion, and templates aligned to the new system." },
    ],
    seo: {
      title: "Branding Agency | Identity, Messaging, and Creative",
      description: "Strategy-first branding that drives recognition and conversions.",
    },
  },

  // ✅ NEW: INFLUENCER
  influencer: {
    id: "influencer",
    slug: "/services/influencer",
    title: "Influencer Marketing",
    hero: {
      heading: "Scale trust at speed with creator partnerships",
      subheading: "From sourcing to briefing to performance tracking.",
      proof: ["500+ creators in network", "1M+ combined views"],
    },
    pains: ["Hard to find the right creators", "Low-quality content", "No performance tracking"],
    kpis: [
      { value: "1M+", label: "Views" },
      { value: "750k", label: "Engagements" },
      { value: "95%", label: "Positive sentiment" },
    ],
    deliverables: [
      { label: "Creator sourcing & vetting" },
      { label: "Briefs, terms & approvals" },
      { label: "Content reviews & edits" },
      { label: "Usage rights & whitelisting" },
      { label: "Performance tracking & reporting" },
    ],
    process: [
      { title: "Map", desc: "Audience + creator fit" },
      { title: "Outreach", desc: "Shortlist & negotiate" },
      { title: "Produce", desc: "Briefs & creative reviews" },
      { title: "Amplify", desc: "Whitelisting & paid lift" },
      { title: "Measure", desc: "UTMs, tracking & insights" },
    ],
    cases: [
      {
        id: "cs-influ-1",
        title: "Beauty DTC",
        result: "↑3.2x branded search in 45 days",
        bullets: ["UGC seeding", "Micro + mid-tier mix", "Spark ads"],
        href: "/case-studies/beauty-influencer",
      },
    ],
    testimonialsIds: ["t1"],
    faqs: [
      { q: "What’s a good starting budget?", a: "From $3k–$10k for micro/mid-tier tests; we scale from there." },
      { q: "Do we own the content?", a: "We secure usage rights based on your plan—ask about whitelisting." },
    ],
    seo: {
      title: "Influencer Marketing Agency | Creator Partnerships That Perform",
      description: "Creator sourcing, briefs, and tracking to drive awareness and conversions.",
    },
  },
};

