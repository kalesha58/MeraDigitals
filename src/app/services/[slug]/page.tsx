import { notFound } from 'next/navigation';
import { servicesData } from '@/data/services';
import ServiceDetail from '@/components/service/ServiceDetail';

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} Services | Mera Digitals`,
    description: service.subtitle,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) notFound();

  return <ServiceDetail service={service} />;
}
