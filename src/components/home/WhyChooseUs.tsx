'use client';

import { motion, useInView } from 'framer-motion';
import { Users, ClipboardList, Award, BarChart3 } from 'lucide-react';
import { useRef } from 'react';
import styles from '@/styles/WhyChooseUs.module.css';

interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  {
    title: 'Certified Experts',
    description:
      'Our team consists of Google and Meta certified professionals dedicated to staying ahead of industry trends.',
    icon: Users,
  },
  {
    title: 'Proven Results',
    description:
      'We focus on measurable outcomes like ROAS, lead quality, and organic traffic growth that impacts your revenue.',
    icon: ClipboardList,
  },
  {
    title: 'Award Winning',
    description:
      'Recognized for our creative excellence and strategic thinking across multiple digital disciplines.',
    icon: Award,
  },
  {
    title: 'Transparent Reporting',
    description:
      'Real-time dashboards and detailed monthly reports ensure you always know exactly how your campaigns perform.',
    icon: BarChart3,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section className={styles.section} id="why-choose-us" ref={sectionRef}>
      <div className="container">

        {/* Section Header */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.badge}>
            <div className={styles.badgeIcon}>
              <div className={styles.badgeCircle} />
              <div className={styles.badgeLine} />
            </div>
            <span>Why Choose Us</span>
          </div>
          <h2 className={styles.heading}>
            Why Our Clients Believe<br />We&apos;re Different
          </h2>
        </motion.div>

        {/* Main Grid */}
        <div className={styles.mainGrid}>

          {/* Left — Image Collage */}
          <motion.div
            className={styles.imagePanel}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className={styles.imageCollage}>
              <div className={styles.imgLeft}>
                <img
                  src="/assets/generated/team-collaboration.png"
                  alt="Team at work"
                />
              </div>

              <div className={styles.imgRightCol}>
                <div className={styles.imgRight}>
                  <img
                    src="/assets/generated/male-professional.png"
                    alt="Team discussion"
                  />
                </div>

                {/* Orange squiggle decorative card */}
                <div className={styles.squiggleCard}>
                  <svg
                    viewBox="0 0 140 70"
                    fill="none"
                    className={styles.squiggleSvg}
                    aria-hidden="true"
                  >
                    <path
                      d="M10 55 C25 15, 42 15, 55 38 C68 60, 82 60, 95 35 C108 10, 122 10, 135 30"
                      stroke="#332d2b"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>

              {/* Sparkle decorations */}
              <div className={styles.sparkle} aria-hidden="true" />
              <div className={styles.sparkleSm} aria-hidden="true" />
            </div>
          </motion.div>

          {/* Right — 2×2 Feature Cards */}
          <motion.div
            className={styles.cardsGrid}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className={styles.featureCard}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className={styles.iconWrapper}>
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className={styles.cardTitle}>{feature.title}</h3>
                  <p className={styles.cardDesc}>{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
