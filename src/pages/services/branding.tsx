import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

export default function BrandingPage() {
  return (
    <Layout header={2} footer={1} video={0}>
      <CmnBanner
        title="Branding & Creative"
        navigation="Branding & Creative"
        parent="Our Services"
        parentLink="/our-services"
      />

      <section className="section container">
        <h1 className="mb-3">Build a brand people remember</h1>
        <p className="lead">
          Strategy-first identity systems and conversion-friendly creative that scales across channels.
        </p>
      </section>

      <section className="section container">
        <h3>Who this is for</h3>
        <ul>
          <li>Inconsistent identity or low recall</li>
          <li>Design that doesn’t convert</li>
          <li>No brand guidelines or system</li>
        </ul>
      </section>

      <section className="section container">
        <h3>What’s included</h3>
        <ul className="columns-2">
          <li>Brand strategy & positioning</li>
          <li>Logo + visual identity system</li>
          <li>Messaging & tone of voice</li>
          <li>Guidelines & brand kit</li>
          <li>Ad creative & templates</li>
        </ul>
      </section>

      <section className="section container">
        <h3>Our process</h3>
        <ol>
          <li>Discover — research, audience, competitors</li>
          <li>Position — strategy & narrative</li>
          <li>Design — identity system & applications</li>
          <li>Validate — feedback & refinements</li>
          <li>Rollout — guidelines & handoff</li>
        </ol>
      </section>

   
      <CtaTwo />
    </Layout>
  );
}
