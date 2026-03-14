'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Instagram, Twitter, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import styles from '@/styles/TeamSection.module.css';

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className="container">

        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className={styles.badge}>
              <div className={styles.badgeCircle} />
              <div className={styles.badgeLine} />
              <span>The Team</span>
            </div>
            <h2 className={styles.heading}>
              Meet <span className="text-gradient">Team Mera Digitals.</span>
            </h2>
          </div>

          <Link href="/about-us" className="btn btn-outline">
            Join our scaling team
          </Link>
        </motion.div>

        {/* MD Featured Card */}
        <motion.div
          className={styles.mdCard}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Left — Photo */}
          <div className={styles.imageCol}>
            <img src="/Ingaladal.png" alt="Ingaladal Sunil Kumar" />
          </div>

          {/* Right — Info */}
          <motion.div
            className={styles.contentCol}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className={styles.role}>Managing Director</span>
            <h3 className={styles.name}>Ingaladal Sunil Kumar</h3>
            <p className={styles.bio}>
              Leading Mera Digitals with a clear vision to transform businesses
              through data-driven digital strategies. With deep expertise across
              SEO, media buying, and performance marketing, Sunil has guided 500+
              brands to achieve measurable and sustainable growth.
            </p>

            <div className={styles.socials}>
              <Link href="https://instagram.com" target="_blank" className={styles.socialIcon}>
                <Instagram size={18} />
              </Link>
              <Link href="https://twitter.com" target="_blank" className={styles.socialIcon}>
                <Twitter size={18} />
              </Link>
              <Link href="/about-us" className={styles.viewProfileBtn}>
                View Full Profile <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
