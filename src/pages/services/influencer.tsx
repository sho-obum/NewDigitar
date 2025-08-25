import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import HomeTestimonialThree from "@/components/containers/home-three/HomeTestimonialThree";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

export default function InfluencerPage() {
  return (
    <Layout header={2} footer={1} video={0}>
      <CmnBanner
        title="Influencer Marketing"
        navigation="Influencer Marketing"
        parent="Our Services"
        parentLink="/our-services"
      />

      <section className="section container">
        <h1 className="mb-3">Scale trust with creator partnerships</h1>
        <p className="lead">
          From sourcing to briefing to performance tracking, we turn creator content into growth.
        </p>
      </section>

      <section className="section container">
        <h3>Who this is for</h3>
        <ul>
          <li>Hard to find the right creators</li>
          <li>Low-quality or off-brand content</li>
          <li>No performance visibility</li>
        </ul>
      </section>

      <section className="section container">
        <h3>What’s included</h3>
        <ul className="columns-2">
          <li>Creator sourcing & vetting</li>
          <li>Briefs, terms & approvals</li>
          <li>Content reviews & edits</li>
          <li>Usage rights & whitelisting</li>
          <li>Performance tracking & reporting</li>
        </ul>
      </section>

      <section className="section container">
        <h3>Our process</h3>
        <ol>
          <li>Map — audience & creator fit</li>
          <li>Outreach — shortlist & negotiate</li>
          <li>Produce — briefs & creative reviews</li>
          <li>Amplify — whitelisting & paid lift</li>
          <li>Measure — UTMs, tracking & insights</li>
        </ol>
      </section>

      <HomeTestimonialThree />
      <CtaTwo />
    </Layout>
  );
}
