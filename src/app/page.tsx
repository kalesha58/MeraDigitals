import { promises as fs } from 'fs';
import path from 'path';
import Hero from '@/components/home/Hero';
import AboutUs from '@/components/home/AboutUs';
import TrustedBy from '@/components/home/TrustedBy';
import Expertise from '@/components/home/Expertise';
import Services from '@/components/home/Services';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TeamSection from '@/components/common/TeamSection';
import Testimonials from '@/components/home/Testimonials';
import CaseStudies from '@/components/home/CaseStudies';
import LatestBlogs from '@/components/home/LatestBlogs';
import FAQ from '@/components/home/FAQ';
import ContactCTA from '@/components/home/ContactCTA';
import VisionCTA from '@/components/home/VisionCTA';
import ElephantMascot from '@/components/common/ElephantMascot';
import styles from '@/styles/Home.module.css';
import Script from 'next/script';

// Ensure fresh data
export const revalidate = 0;

async function getHomeData() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'homeData.json');
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (e) {
    return null;
  }
}

export async function generateMetadata() {
  const data = await getHomeData();
  if (!data) return {};

  const seo = data.seo || {};

  return {
    title: seo.title || 'MeraDigital Marketing Agency',
    description: seo.description || 'Elevate your brand with data-driven strategies and stunning design.',
    keywords: seo.keywords || 'digital marketing, seo, web design',
    alternates: {
      canonical: seo.canonicalUrl || 'https://meradigitals.com',
    },
    robots: {
      index: seo.robots?.includes('index') ?? true,
      follow: seo.robots?.includes('follow') ?? true,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonicalUrl || 'https://meradigitals.com',
      siteName: 'Mera Digitals',
      images: [
        {
          url: seo.ogImage || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200',
          width: 1200,
          height: 630,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200'],
      creator: seo.twitterHandle || '@meradigitals',
    },
  };
}

export default async function Home() {
  const data = await getHomeData();
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": data?.seo?.schema?.organizationName || "Mera Digitals",
    "url": data?.seo?.canonicalUrl || "https://meradigitals.com",
    "logo": data?.seo?.schema?.logoUrl || "https://meradigitals.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": data?.seo?.schema?.contactPhone || "",
      "contactType": "customer service"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": data?.seo?.schema?.address || ""
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": data?.expertise?.title || "Our Services",
      "itemListElement": data?.expertise?.items?.map((item: any) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": item.title,
          "description": item.description,
          "url": `https://meradigitals.com${item.link}`
        }
      })) || []
    }
  };

  return (
    <main className={styles.mainWrapper}>
      {/* Inject Schema.org JSON-LD */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Hero data={data?.hero} />
      <AboutUs />
      {/* <TrustedBy /> */}
      <Expertise data={data?.expertise} />
      <Services />
      <VisionCTA />
      <WhyChooseUs />
      <TeamSection />
      <Testimonials />
      <CaseStudies />
      <LatestBlogs />
      <FAQ />
      <ContactCTA />
      <ElephantMascot />
    </main>
  );
}
