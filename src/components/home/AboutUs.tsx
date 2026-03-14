'use client';

import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';
import styles from '@/styles/Home.module.css';

interface SkillBarProps {
  label: string;
  percent: number;
  isVisible: boolean;
}

interface StatItemProps {
  value: string;
  label: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function SkillBar({ label, percent, isVisible }: SkillBarProps) {
  return (
    <div className={styles.skillBarItem}>
      <div className={styles.skillBarHeader}>
        <span className={styles.skillBarLabel}>{label}</span>
        <span className={styles.skillBarPercent}>{percent}%</span>
      </div>
      <div className={styles.skillBarTrack}>
        <motion.div
          className={styles.skillBarFill}
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${percent}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        >
          <div className={styles.skillBarDot} />
        </motion.div>
      </div>
    </div>
  );
}

function StatItem({ value, label }: StatItemProps) {
  return (
    <div className={styles.aboutStatItem}>
      <span className={styles.aboutStatValue}>{value}</span>
      <span className={styles.aboutStatLabel}>{label}</span>
    </div>
  );
}

function StatDivider() {
  return (
    <div className={styles.aboutStatDivider} aria-hidden="true">
      <div className={styles.badgeIcon}>
        <div className={styles.badgeCircle} />
        <div className={styles.badgeLine} />
      </div>
    </div>
  );
}

const SKILL_BARS = [
  { label: 'Marketing & Business Growth', percent: 85 },
  { label: 'Healthcare Marketing Expertise', percent: 90 },
  { label: 'Media management', percent: 95 },
];

const STATS = [
  { value: '120+', label: 'Successful Projects' },
  { value: '20+', label: 'Expert Team' },
  { value: '250+', label: 'Happy Customers' },
  { value: '10+', label: 'Years of Experience' },
];

export default function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section className={styles.aboutSection} ref={sectionRef}>
      <div className="container">
        <div className={styles.aboutGrid}>

          {/* Left — Stacked Image Collage */}
          <div className={styles.aboutImageStack}>
            <motion.div
              className={styles.aboutImgTop}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img
                src="/assets/generated/female-developer.png"
                alt="Professional team"
              />
            </motion.div>

            <motion.div
              className={styles.aboutImgBottom}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <img
                src="/assets/generated/team-collaboration.png"
                alt="Office collaboration"
              />
            </motion.div>

            {/* Rotating HIRE US Stamp */}
            <motion.div
              className={styles.aboutStampWrapper}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <svg viewBox="0 0 100 100" className={styles.stampSvg}>
                <path
                  id="aboutCirclePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className={styles.stampText}>
                  <textPath xlinkHref="#aboutCirclePath">
                    HIRE US • HIRE US • HIRE US • HIRE US •
                  </textPath>
                </text>
              </svg>
              <div className={styles.stampInner}>
                <ArrowRight size={20} className={styles.stampArrow} />
              </div>
            </motion.div>
          </div>

          {/* Right — Content */}
          <motion.div
            className={styles.aboutContent}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={itemVariants} className={styles.heroBadge}>
              <div className={styles.badgeIcon}>
                <div className={styles.badgeCircle} />
                <div className={styles.badgeLine} />
              </div>
              <span>About Us</span>
            </motion.div>

            <motion.h2 variants={itemVariants} className={styles.aboutHeading}>
              Empowering Your Success with Digital Expertise
            </motion.h2>

            <motion.p variants={itemVariants} className={styles.heroSubText}>
              At Mera Digitals, we treat every client’s business as if it were our own. We specialize in Healthcare Marketing, serving a vast network of hospitals and clinics with deep domain expertise to deliver measurable growth and long-term success.
            </motion.p>

            <motion.div variants={itemVariants} className={styles.skillBarsContainer}>
              {SKILL_BARS.map((bar) => (
                <SkillBar
                  key={bar.label}
                  label={bar.label}
                  percent={bar.percent}
                  isVisible={isInView}
                />
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link href="/about-us" className={styles.primaryBtn}>
                About Us <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          className={styles.aboutStatsBar}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {STATS.map((stat, index) => (
            <div key={stat.label} className={styles.aboutStatGroup}>
              <StatItem value={stat.value} label={stat.label} />
              {index < STATS.length - 1 && <StatDivider />}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
