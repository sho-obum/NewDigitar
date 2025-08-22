import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import { servicesIndex } from "@/data/services";
import { servicePages } from "@/data/service-pages";
import HomeTestimonialThree from "@/components/containers/home-three/HomeTestimonialThree";
import CtaTwo from "@/components/containers/service-details/CtaTwo";


type Props = {
  id: string;
};

export default function ServiceDetails({ id }: Props) {
  const cfg = servicePages[id];
  if (!cfg) return <p>Service not found</p>;

  return (
    <Layout header={2} footer={1} video={0}>
      <CmnBanner
        title={cfg.title}
        navigation={cfg.title}
        parent="Our Services"
        parentLink="/our-services"
      />

      {/* Hero */}
      <section className="section container py-5">
        <h1 className="mb-3">{cfg.hero.heading}</h1>
        {cfg.hero.subheading && <p className="lead">{cfg.hero.subheading}</p>}
        {cfg.hero.proof && (
          <ul className="list-inline text-muted small">
            {cfg.hero.proof.map((p, i) => (
              <li key={i} className="list-inline-item me-3">• {p}</li>
            ))}
          </ul>
        )}
      </section>

      {/* Pains */}
      {cfg.pains?.length > 0 && (
        <section className="section container">
          <h3 className="mb-3">Is this you?</h3>
          <ul>
            {cfg.pains.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </section>
      )}

      {/* KPIs */}
      {cfg.kpis?.length > 0 && (
        <section className="section container">
          <div className="row g-3">
            {cfg.kpis.map((k, i) => (
              <div key={i} className="col-6 col-md-4">
                <div className="p-3 border rounded text-center h-100">
                  <div className="fs-2 fw-bold">{k.value}</div>
                  <div className="text-muted">{k.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Deliverables */}
      {cfg.deliverables?.length > 0 && (
        <section className="section container">
          <h3 className="mb-3">What you get</h3>
          <ul className="columns-2">
            {cfg.deliverables.map((d, i) => <li key={i}>{d.label}</li>)}
          </ul>
        </section>
      )}

      {/* Process strip */}
      {cfg.process?.length > 0 && (
        <section className="section container">
          <h3 className="mb-3">Our process</h3>
          <div className="row g-3">
            {cfg.process.map((s, i) => (
              <div key={i} className="col-12 col-md-4 col-xl-3">
                <div className="p-3 border rounded h-100">
                  <div className="fw-semibold mb-1">{i + 1}. {s.title}</div>
                  {s.desc && <div className="text-muted small">{s.desc}</div>}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Case study teasers */}
      {cfg.cases?.length > 0 && (
        <section className="section container">
          <h3 className="mb-3">Selected results</h3>
          <div className="row g-3">
            {cfg.cases.map((c) => (
              <div key={c.id} className="col-12 col-md-6">
                <a href={c.href} className="p-3 border rounded d-block h-100">
                  <div className="small text-success">{c.result}</div>
                  <div className="fw-semibold">{c.title}</div>
                  <ul className="mb-0 small">{c.bullets.map((b,i)=><li key={i}>{b}</li>)}</ul>
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Testimonials (reuse your component, optionally filter inside it using cfg.testimonialsIds) */}
      <HomeTestimonialThree />

      {/* FAQ section (we’ll add right after) */}

      {/* CTA */}
      <CtaTwo />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: servicesIndex.map((s) => ({ params: { id: s.id } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const id = (params?.id as string) || "";
  return { props: { id }, revalidate: 120 };
};
