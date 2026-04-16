'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TITLES = [
  "Empowering Your Success with Digital Expertise",
  "Elevating Your Brand with Creative Excellence",
  "Scaling Your Business with Proven Strategies",
];

// Word-by-word reveal: each word slides up from a mask clip
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

interface HeroProps {
  data?: {
    badge?: string;
    titles?: Array<{
      part1: string;
      gradient: string;
      part2: string;
    }>;
    subtitle?: string;
    ctaText?: string;
    ctaLink?: string;
    secondaryCtaText?: string;
    mainImage?: string;
    secondaryImage?: string;
  };
}

export default function Hero({ data }: HeroProps) {
  const [titleIndex, setTitleIndex] = useState(0);

  // Fallback TITLES if data is not provided or incomplete
  const defaultTitles = [
    { part1: "Empowering Your Success with", gradient: "Digital Expertise", part2: "" },
    { part1: "Elevating Your Brand with", gradient: "Creative Excellence", part2: "" },
    { part1: "Scaling Your Business with", gradient: "Proven Strategies", part2: "" },
  ];

  const currentTitles = data?.titles || defaultTitles;

  useEffect(() => {
    if (currentTitles.length <= 1) return;
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % currentTitles.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [currentTitles.length]);

  const content = {
    badge: data?.badge || "Elevate Your Brand With Us",
    subtitle: data?.subtitle || "We blend data-driven strategies with creative excellence to scale your brand and dominate your market.",
    ctaText: data?.ctaText || "Explore More",
    secondaryCtaText: data?.secondaryCtaText || "View All Services",
  };

  return (
    <section className={styles.heroSection}>
      {/* Background Dots */}
      <div className={styles.dotsTop} />
      <div className={styles.dotsBottom} />

      <div className={`container ${styles.heroContainer}`}>
        <motion.div
          className={styles.heroLeft}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className={styles.heroBadge}>
            <div className={styles.badgeIcon}>
              <div className={styles.badgeCircle} />
              <div className={styles.badgeLine} />
            </div>
            <span>{content.badge}</span>
          </motion.div>

          {/* Cycling animated title — independent of parent stagger */}
          <div className={styles.titleCycler}>
            <AnimatePresence mode="wait">
              <motion.h1
                key={titleIndex}
                className={styles.heroMainTitle}
                variants={titleContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* 
                  We reconstruct the full string for mapping, 
                  but we'll check against the specific 'gradient' part for coloring.
                */}
                {`${currentTitles[titleIndex].part1} ${currentTitles[titleIndex].gradient} ${currentTitles[titleIndex].part2}`.trim().split(' ').map((word, i, arr) => {
                  const gradientPart = currentTitles[titleIndex].gradient;
                  const isGradient = gradientPart.includes(word.replace(/,/g, ''));

                  return (
                    <span key={i} className={styles.wordWrapper}>
                      <motion.span
                        variants={wordVariants}
                        className={styles.wordInner}
                        style={isGradient ? { color: 'var(--brand-orange)' } : undefined}
                      >
                        {word}
                      </motion.span>
                    </span>
                  );
                })}
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.p variants={itemVariants} className={styles.heroSubText}>
            {content.subtitle}
          </motion.p>

          <motion.div variants={itemVariants} className={styles.heroActions}>
            <Link href="/contact-us" className={styles.primaryBtn}>
              {content.ctaText} <ArrowRight size={18} />
            </Link>
            <Link href="/services" className={styles.secondaryBtn}>
              {content.secondaryCtaText}
            </Link>
          </motion.div>
        </motion.div>

        <div className={styles.heroRight}>
          <div className={styles.collageGrid}>
            {/* Image Collage Shapes */}
            <motion.div
              className={`${styles.collageItem} ${styles.itemMedium}`}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <img src="/assets/generated/team-collaboration.png" alt="Digital Strategy" />
            </motion.div>

            <motion.div
              className={`${styles.collageItem} ${styles.itemSmall}`}
              initial={{ opacity: 0, x: -30, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
            >
              <img src="/assets/generated/tech-setup.png" alt="Data Analytics" />
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
                <ArrowRight size={20} className={styles.stampArrow} />
              </div>
            </motion.div>

            {/* Sparkles */}
            <div className={styles.sparkle1} />
            <div className={styles.sparkle2} />

            {/* Floating Brand Logo */}
            <motion.div
              className={styles.floatingLogo}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            >
              <img src="/MER_DIGITALS_LOGO.png" alt="Mera Digitals Logo" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
