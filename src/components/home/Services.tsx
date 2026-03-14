'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Search, Volume2, Globe, TrendingUp, Sparkles, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import styles from '@/styles/Services.module.css';

const services = [
  {
    id: 'seo',
    title: 'SEO Mastery',
    fullDesc:
      "We don't just optimize for keywords; we optimize for revenue. Our holistic SEO approach combines technical audits, Google business management, and authoritative link building to ensure your brand dominates the SERPs.",
    icon: Search,
    href: '/services/seo',
    features: ['Technical SEO Audits', 'On-Page Optimization', 'Off-Page Link Building', 'Local SEO Dominance'],
    image: '/assets/generated/tech-setup.png',
  },
  {
    id: 'media',
    title: 'Media Buying',
    fullDesc:
      "Stop wasting budget on ads that don't convert. We design high-converting ad campaigns across Meta, Google, and LinkedIn, leveraging precise targeting and A/B testing to lower your CPA and scale your ROAS.",
    icon: Volume2,
    href: '/services/media-buying',
    features: ['Meta & Google Ads', 'Audience Segmentation', 'Retargeting Campaigns', 'Creative A/B Testing'],
    image: '/assets/generated/team-collaboration.png',
  },
  {
    id: 'web',
    title: 'Web Development',
    fullDesc:
      'Your website is your 24/7 salesperson. We build lightning-fast, SEO-friendly, and visually stunning websites using Next.js and modern technologies that provide an exceptional user experience on every device.',
    icon: Globe,
    href: '/services/website-development',
    features: ['Custom Next.js Development', 'E-commerce Solutions', 'Performance Optimization', 'Headless CMS Integration'],
    image: '/assets/generated/female-developer.png',
  },
  {
    id: 'performance',
    title: 'Performance Marketing',
    fullDesc:
      "Growth isn't a guessing game. Our performance marketing strategies focus purely on data and results. We track every click and conversion to ensure every dollar you spend contributes to your bottom line.",
    icon: TrendingUp,
    href: '/services/performance-marketing',
    features: ['Conversion Rate Optimization', 'Funnel Analysis', 'Data Analytics & Reporting', 'Lead Generation Systems'],
    image: '/assets/generated/male-professional.png',
  },
  {
    id: 'branding',
    title: 'Branding & Design',
    fullDesc:
      'A strong brand is your most valuable asset. We help you define your voice, visual identity, and story to create a lasting connection with your audience and stand out in a crowded marketplace.',
    icon: Sparkles,
    href: '/services/branding',
    features: ['Logo & Identity Design', 'Brand Guidelines', 'UI/UX Design', 'Visual Storytelling'],
    image: '/assets/generated/office-building.png',
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(services[0]);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section className={styles.section} id="services" ref={sectionRef}>
      <div className="container">

        {/* Section Header */}
        <motion.div
          style={{ maxWidth: '700px' }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.sectionBadge}>Our Services</div>
          <h2 className={styles.sectionHeading}>
            The <span className="text-gradient">Capability</span> Stack
          </h2>
        </motion.div>

        <div className={styles.servicesContainer}>

          {/* Left — Service Navigation */}
          <div className={styles.servicesList}>
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  className={`${styles.serviceItem} ${activeService.id === service.id ? styles.active : ''}`}
                  onClick={() => setActiveService(service)}
                  onMouseEnter={() => setActiveService(service)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                >
                  <div className={styles.serviceItemContent}>
                    <div className={styles.serviceIconWrapper}>
                      <Icon size={22} />
                    </div>
                    <span className={styles.serviceTitle}>{service.title}</span>
                  </div>
                  <ArrowRight size={18} className={styles.activeArrow} />
                </motion.div>
              );
            })}
          </div>

          {/* Right — Detail Panel */}
          <motion.div
            className={styles.detailsPanel}
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28 }}
                className={styles.detailsContent}
              >
                {/* Text */}
                <div className={styles.textContent}>
                  <div className={styles.detailsHeader}>
                    <div className={styles.detailsIcon}>
                      <activeService.icon size={26} />
                    </div>
                    <h3 className={styles.detailsTitle}>{activeService.title}</h3>
                    <p className={styles.detailsDesc}>{activeService.fullDesc}</p>
                  </div>

                  <div className={styles.featureList}>
                    {activeService.features.map((feature) => (
                      <div key={feature} className={styles.featureItem}>
                        <div className={styles.checkIcon}>
                          <Check size={13} strokeWidth={3} />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={activeService.href} className="btn btn-primary" style={{ width: 'fit-content', marginTop: '0.5rem' }}>
                    Explore {activeService.title} <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                  </Link>
                </div>

                {/* Image */}
                <div className={styles.imageContainer}>
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className={styles.detailsImage}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
