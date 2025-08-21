import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import { services, ServiceItem } from "@/data/service";

type Props = {
  service: ServiceItem | null;
};

export default function ServiceDetails({ service }: Props) {
  if (!service) return <p>Service not found</p>;

  return (
    <Layout header={2} footer={1} video={0}>
      <CmnBanner
        title={service.title}
        navigation={service.title}
        parent="Our Services"
        parentLink="/our-services"
      />
      <section className="container py-5">
        <h2 className="mb-3">{service.title}</h2>
        <ul className="mb-4">
          {service.desc.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>

        <div className="row g-3">
          {service.metrics.map((m, i) => (
            <div className="col-6 col-md-3" key={i}>
              <div className="p-3 border rounded h-100 d-flex flex-column align-items-center">
                <div className="fs-3 fw-bold">{m.value}</div>
                <div className="text-muted">{m.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: services.map((s) => ({ params: { id: s.id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const id = params?.id as string;
  const service = services.find((s) => s.id === id) || null;

  return {
    props: { service },
    revalidate: 60,
  };
};
