'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users, Target, Lightbulb, Rocket,
  TrendingUp, ShieldCheck, Zap,
  ArrowRight, Check,
  Search, Volume2, Globe,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import Link from 'next/link';
import styles from '@/styles/About.module.css';
import TeamSection from '@/components/common/TeamSection';

// Reuse container variants from Hero
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ABOUT_TITLES = [
  "Give Your Vision a Voice with Mera Digital",
  "Transform Your Brand with Digital Excellence",
  "Grow Your Business with Proven Strategies",
];

const titleContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 as const } },
};

const wordVariants = {
  hidden: { y: '115%' },
  visible: { y: 0, transition: { duration: 0.65, ease: [0.33, 1, 0.68, 1] as const } },
  exit: { y: '-115%', opacity: 0, transition: { duration: 0.22, ease: [0.32, 0, 0.67, 0] as const } },
};

const services = [
  {
    id: 'seo',
    title: 'SEO Mastery',
    desc: "We don't just optimize for keywords; we optimize for revenue. Our holistic SEO approach ensures your brand dominates the SERPs.",
    icon: Search,
    features: ['Technical SEO Audits', 'On-Page Optimization', 'Off-Page Link Building', 'Local SEO Dominance'],
    image: '/assets/generated/tech-setup.png',
  },
  {
    id: 'media',
    title: 'Media Buying',
    desc: "Stop wasting budget on ads that don't convert. We design high-converting ad campaigns across Meta, Google, and LinkedIn.",
    icon: Volume2,
    features: ['Meta & Google Ads', 'Audience Segmentation', 'Retargeting Campaigns', 'Creative A/B Testing'],
    image: '/assets/generated/team-collaboration.png',
  },
  {
    id: 'web',
    title: 'Web Dev',
    desc: 'Built for speed and SEO. We build lightning-fast, visually stunning websites using Next.js and modern technologies.',
    icon: Globe,
    features: ['Custom Next.js Development', 'E-commerce Solutions', 'Performance Optimization', 'Headless CMS Integration'],
    image: '/assets/generated/female-developer.png',
  },
  {
    id: 'performance',
    title: 'Performance',
    desc: "Growth isn't a guessing game. Our performance marketing strategies focus purely on data and measurable results.",
    icon: TrendingUp,
    features: ['Conversion Rate Optimization', 'Funnel Analysis', 'Data Analytics', 'Lead Gen Systems'],
    image: '/assets/generated/male-professional.png',
  },
];

export default function AboutContent() {
  const [activeService, setActiveService] = useState(services[0]);
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % ABOUT_TITLES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <main style={{ backgroundColor: 'var(--bg-primary)' }}>

      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.meshBg} />
        <div className={styles.blob1} />
        <div className={styles.blob2} />

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <motion.div
              className={styles.heroLeft}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className={styles.badge}>
                <div className={styles.badgeIcon}>
                  <div className={styles.badgeCircle} />
                  <div className={styles.badgeLine} />
                </div>
                <span>Established 2018</span>
              </motion.div>

              {/* Cycling animated hero title */}
              <div className={styles.titleCycler}>
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={titleIndex}
                    className={styles.heroTitle}
                    variants={titleContainerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {ABOUT_TITLES[titleIndex].split(' ').map((word, i, arr) => (
                      <span key={i} className={styles.wordWrapper}>
                        <motion.span
                          variants={wordVariants}
                          className={styles.wordInner}
                          style={i >= arr.length - 2 ? { color: 'var(--brand-orange)' } : undefined}
                        >
                          {word}
                        </motion.span>
                      </span>
                    ))}
                  </motion.h1>
                </AnimatePresence>
              </div>

              <motion.p variants={itemVariants} className={styles.heroSubtitle}>
                We are MeraDigital Marketing Agency, dedicated to transforming businesses through innovation, strategy, and data-driven design.
              </motion.p>

              <motion.div variants={itemVariants} className={styles.heroActions}>
                <Link href="/contact-us" className="btn btn-primary">
                  Book a Consultation <ArrowRight size={18} style={{ marginLeft: '10px' }} />
                </Link>
                <Link href="#ecosystem" className="btn btn-outline">
                  Our Capabilities
                </Link>
              </motion.div>

              {/* Stats Strip */}
              <motion.div variants={itemVariants} className={styles.heroStats}>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>10+ Years</span>
                  <span className={styles.statLabel}>Market Presence</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>120+</span>
                  <span className={styles.statLabel}>Projects Delivered</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>250+</span>
                  <span className={styles.statLabel}>Happy Customers</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>20+</span>
                  <span className={styles.statLabel}>Expert Team</span>
                </div>
              </motion.div>
            </motion.div>

            <div className={styles.heroRight}>
              <div className={styles.collageGrid}>
                {/* Back image — small */}
                <motion.div
                  className={`${styles.collageItem} ${styles.itemSmall}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <img src="/assets/generated/team-collaboration.png" alt="Team at work" />
                </motion.div>

                {/* Back image — medium */}
                <motion.div
                  className={`${styles.collageItem} ${styles.itemMedium}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <img src="/assets/generated/female-developer.png" alt="Strategy session" />
                </motion.div>

                {/* Main front image */}
                <motion.div
                  className={`${styles.collageItem} ${styles.itemLarge}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <img src="/524326562_18074041616480823_7518439028329965734_n.jpg" alt="Mera Digitals" style={{ objectPosition: 'center' }} />
                </motion.div>

                {/* HIRE US Stamp */}
                <motion.div
                  className={styles.stampWrapper}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <svg viewBox="0 0 100 100" className={styles.stampSvg}>
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                    <text className={styles.stampText}>
                      <textPath xlinkHref="#circlePath">
                        HIRE US • HIRE US • HIRE US • HIRE US •
                      </textPath>
                    </text>
                  </svg>
                  <div className={styles.stampInner}>
                    <ArrowRight size={24} className={styles.stampArrow} />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Story / Mission Section */}
      <section className={styles.section} id="story">
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.sectionBadge}>Our Origins</div>
              <h2 className={styles.heroTitle} style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                The <span className="text-gradient">Mera Story.</span>
              </h2>
              <p className={styles.heroSubtitle}>
                Founded on the principle of treating every client's business as if it were our own. "Mera" — meaning "Mine" — reflects our philosophy of deep ownership and passion.
              </p>
              <p className={styles.heroSubtitle}>
                What began as a boutique studio has evolved into a full-scale digital powerhouse. We are recognized experts in the healthcare field, partnering with numerous hospitals and clinics to scale their digital presence effectively across 15+ industries.
              </p>

              <div className={styles.checkPills}>
                <div className={styles.checkPill}><Check size={16} color="var(--accent-secondary)" /> <span>Healthcare Specialists</span></div>
                <div className={styles.checkPill}><Check size={16} color="var(--accent-secondary)" /> <span>Hospital & Clinic ROI</span></div>
                <div className={styles.checkPill}><Check size={16} color="var(--accent-secondary)" /> <span>Data-Driven Strategy</span></div>
                <div className={styles.checkPill}><Check size={16} color="var(--accent-secondary)" /> <span>Result Oriented</span></div>
              </div>
            </motion.div>

            <motion.div
              className={styles.storyImageCard}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div style={{ position: 'relative', borderRadius: '32px', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
                <img
                  src="/assets/generated/office-building.png"
                  alt="Mera Digital Story"
                  style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                />
                <div className={styles.captionBadge}>Mera Digital HQ • Innovation Lab</div>

                <div className={styles.squiggleCard}>
                  <svg viewBox="0 0 140 70" fill="none" className={styles.squiggleSvg}>
                    <path
                      d="M10 55 C25 15, 42 15, 55 38 C68 60, 82 60, 95 35 C108 10, 122 10, 135 30"
                      stroke="var(--bg-primary)"
                      strokeWidth="5"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Values Section */}
      <section className={styles.section} style={{ background: 'var(--bg-secondary)' }}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className={styles.sectionBadge}>The Standards</div>
            <h2 className={styles.heroTitle} style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Core <span className="text-gradient">Values</span></h2>
          </div>

          <div className={styles.valuesGrid}>
            {[
              { title: 'Radical Transparency', icon: ShieldCheck, desc: 'Clear reporting, honest communication, and no hidden agendas in everything we do.' },
              { title: 'Data-Backed Creativity', icon: Lightbulb, desc: 'We combine artistic excellence with cold, hard data to ensure every pixel performs.' },
              { title: 'Growth Obsessed', icon: Zap, desc: 'We don\'t just deliver projects; we deliver measurable growth that affects your bottom line.' },
              { title: 'Client Mentality', icon: Users, desc: 'We treat your business with the same care and ownership as if it were our own.' }
            ].map((val, i) => (
              <motion.div
                key={val.title}
                className={styles.valueCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className={styles.valueIconCircle}>
                  <val.icon size={32} />
                </div>
                <h3 className={styles.memberName}>{val.title}</h3>
                <p className={styles.heroSubtitle} style={{ marginBottom: 0 }}>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Service Ecosystem (Tabs) */}
      <section className={styles.section} id="ecosystem">
        <div className={styles.container}>
          <div style={{ maxWidth: '700px' }}>
            <div className={styles.sectionBadge}>Ecosystem</div>
            <h2 className={styles.heroTitle} style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              The <span className="text-gradient">Capability</span> Stack
            </h2>
          </div>

          <div className={styles.tabSystem}>
            <div className={styles.tabList}>
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`${styles.tabItem} ${activeService.id === service.id ? styles.active : ''}`}
                  onClick={() => setActiveService(service)}
                >
                  <div className={styles.tabItemContent}>
                    <div className={styles.tabIconWrapper}>
                      <service.icon size={22} />
                    </div>
                    <span className={styles.tabTitle}>{service.title}</span>
                  </div>
                  <ArrowRight size={20} className={styles.activeArrow} />
                </div>
              ))}
            </div>

            <div className={styles.tabPanel}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className={styles.panelContent}
                >
                  <div className={styles.panelLeft}>
                    <h3 className={styles.memberName} style={{ fontSize: '2rem' }}>{activeService.title}</h3>
                    <p className={styles.panelDesc}>{activeService.desc}</p>
                    <div className={styles.panelFeatures}>
                      {activeService.features.map(f => (
                        <div key={f} className={styles.panelFeatureItem}>
                          <div className={styles.checkWrapper}><Check size={12} strokeWidth={3} /></div>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/services" className="btn btn-primary" style={{ marginTop: '40px' }}>
                      Full Expertise
                    </Link>
                  </div>
                  <div className={styles.panelImageWrapper}>
                    <img src={activeService.image} alt={activeService.title} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process Timeline */}
      <section className={styles.section} style={{ background: 'var(--bg-tertiary)' }}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className={styles.sectionBadge}>Timeline</div>
            <h2 className={styles.heroTitle} style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Our <span className="text-gradient">Proven</span> Process
            </h2>
          </div>

          <div className={styles.timelineGrid}>
            {[
              { n: '01', title: 'Discovery', icon: Search, desc: 'Deep dive into your brand, competitors, and goals.' },
              { n: '02', title: 'Strategy', icon: Target, desc: 'Architecting a roadmap focused on ROI and scale.' },
              { n: '03', title: 'Execution', icon: Rocket, desc: 'Pixel-perfect delivery across all digital touchpoints.' },
              { n: '04', title: 'Optimization', icon: TrendingUp, desc: 'Continuous iteration based on real-world data.' }
            ].map((step, i) => (
              <motion.div
                key={step.n}
                className={styles.processStep}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className={styles.stepIconWrapper}>
                  <step.icon size={36} />
                  <div className={styles.stepNumber}>{step.n}</div>
                </div>
                <h3 className={styles.tabTitle} style={{ fontSize: '1.25rem', marginBottom: '10px' }}>{step.title}</h3>
                <p className={styles.statLabel} style={{ textTransform: 'none', letterSpacing: 'normal' }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Team Section — shared component */}
      <TeamSection />

      {/* 7. Contact & Address Section */}
      <section className={styles.section} style={{ background: 'var(--bg-secondary)' }}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className={styles.sectionBadge}>Find Us</div>
            <h2 className={styles.heroTitle} style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Our <span className="text-gradient">Office</span>
            </h2>
          </div>

          {/* Contact Info Cards */}
          <div className={styles.contactInfoGrid}>
            <motion.div
              className={styles.contactInfoCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className={styles.contactIconCircle}>
                <MapPin size={24} />
              </div>
              <div>
                <p className={styles.contactInfoLabel}>Address</p>
                <p className={styles.contactInfoValue}>
                  1st floor, Laxmi Devi Apartments, D12, opp. Telanga Co Op Bank, near Vellanki Foods, Vamika Arcade, Madhura Nagar, Hyderabad, Telangana 500038
                </p>
              </div>
            </motion.div>

            <motion.div
              className={styles.contactInfoCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className={styles.contactIconCircle}>
                <Phone size={24} />
              </div>
              <div>
                <p className={styles.contactInfoLabel}>Phone</p>
                <a href="tel:+919959965998" className={styles.contactInfoLink}>099599 65998</a>
              </div>
            </motion.div>

            <motion.div
              className={styles.contactInfoCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className={styles.contactIconCircle}>
                <Mail size={24} />
              </div>
              <div>
                <p className={styles.contactInfoLabel}>Email</p>
                <a href="mailto:info@meradigitals.com" className={styles.contactInfoLink}>info@meradigitals.com</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}
