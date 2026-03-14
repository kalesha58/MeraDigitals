'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MoveUpRight } from 'lucide-react';
import styles from '@/styles/CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.ctaCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Abstract Backgrounds */}
          <div className={`${styles.glowOrb} ${styles.orb1}`} />
          <div className={`${styles.glowOrb} ${styles.orb2}`} />
          <div className={`${styles.glowOrb} ${styles.orb3}`} />

          <div className={styles.ctaContent}>
            <h2 className={styles.title}>
              Ready to Scale Your Business?
            </h2>
            <p className={styles.description}>
              Let's build something extraordinary together. Schedule a free consultation with our experts today.
            </p>

            <div className={styles.buttonWrapper}>
              <Link href="/contact-us" className={styles.primaryBtn}>
                Get Started Now <ArrowRight size={20} />
              </Link>
              <Link href="/services" className={styles.secondaryBtn} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                View Our Work <MoveUpRight size={20} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
