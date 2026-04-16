import { notFound } from 'next/navigation';
import { industriesData } from '@/data/industries';
import IndustryDetail from '@/components/industry/IndustryDetail';

export async function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industriesData[slug];
  if (!industry) return { title: 'Industry Not Found' };

  return {
    title: `${industry.title} Marketing | Mera Digitals`,
    description: industry.subtitle,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industriesData[slug];

  if (!industry) notFound();

  return <IndustryDetail industry={industry} />;
}
