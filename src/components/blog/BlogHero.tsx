'use client';

import { motion } from 'framer-motion';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import styles from '@/styles/BlogListing.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BlogHero() {
  return (
    <section className={styles.heroSection}>
      {/* Background Large Text */}
      <div className={styles.bgText}>Insights</div>

      <div className={`container ${styles.heroContainer}`}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className={styles.heroBadge}>
            <div className={styles.badgeCircle} />
            <span>Mera Digital Thought Leadership</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 variants={itemVariants} className={styles.heroMainTitle}>
            Everything shaping the <br />
            <span className={styles.highlightText}>digital landscape.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p variants={itemVariants} className={styles.heroSubText}>
            Explore expert perspectives on SEO, UI/UX, Performance Marketing, and the future of digital ecosystems.
            We turn data into narratives that matter.
          </motion.p>

          {/* Search Bar */}
          <motion.div variants={itemVariants} className={styles.heroSearch}>
            <div className={styles.searchIconWrapper}>
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Search articles, topics, or authors..."
              className={styles.heroInput}
            />
          </motion.div>

          {/* Featured Article Card */}
          <motion.div
            variants={itemVariants}
            className={styles.featuredSection}
          >
            <div className={styles.featuredCard}>
              <div className={styles.featuredImageWrapper}>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
                  alt="Featured Post"
                  className={styles.featuredImage}
                />
              </div>

              <div className={styles.featuredContent}>
                <span className={styles.featuredTag}>Featured Article</span>
                <h2 className={styles.featuredTitle}>The Future of Search: How AI is Redefining Technical SEO in 2026</h2>
                <p className={styles.featuredExcerpt}>
                  Discover the shift from keyword density to semantic intent and how large language models are changing the way we architect websites for visibility.
                </p>

                <div className={styles.featuredMeta}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100"
                      alt="Arjun Mehta"
                      className={styles.avatar}
                    />
                    <span>Arjun Mehta</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={14} />
                    <span>March 8, 2026</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 700, color: 'var(--accent-secondary)' }}>
                    Read Full <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
