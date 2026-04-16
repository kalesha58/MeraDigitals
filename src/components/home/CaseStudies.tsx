'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Zap } from 'lucide-react';
import styles from '@/styles/CaseStudies.module.css';

const projects = [
  {
    title: 'Healthcare Scaling',
    category: 'PERFORMANCE MARKETING',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000',
    gridArea: 'large',
    metrics: {
      leads: '1,500+ /mo',
      costReduction: '65% Decrease',
      beforeAfter: '150 → 1,500 Leads'
    }
  },
  {
    title: 'Real Estate Growth',
    category: 'LEAD GENERATION',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000',
    gridArea: 'tall',
    metrics: {
      leads: '800+ /mo',
      costReduction: '45% Decrease',
      beforeAfter: '20 → 800 Leads'
    }
  },
  {
    title: 'E-commerce ROI',
    category: 'META & GOOGLE ADS',
    image: '/assets/generated/ecommerce_case_study.png',
    gridArea: 'wide',
    metrics: {
      leads: '3,000+ Sales',
      costReduction: 'ROAS 5.2x',
      beforeAfter: '1.2x → 5.2x ROAS'
    }
  },
  {
    title: 'EdTech Expansion',
    category: 'FULL FUNNEL STRATEGY',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000',
    gridArea: 'small',
    metrics: {
      leads: '5,000+ Enrolled',
      costReduction: '30% CPL Drop',
      beforeAfter: 'New Market Entry'
    }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8
    }
  }
};

export default function CaseStudies() {
  return (
    <section className={styles.section}>
      <div className="container">
        {/* Background Decorators */}
        <div className={styles.bgDecor}>
          <div className={`${styles.orb} ${styles.orb1}`} />
          <div className={`${styles.orb} ${styles.orb2}`} />
        </div>

        <div className={styles.header}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.eyebrow}>
              <Zap size={14} fill="var(--brand-orange)" color="var(--brand-orange)" style={{ marginRight: '8px' }} />
              <span>RESULT-DRIVEN CASE STUDIES</span>
            </div>
            <h2 className={styles.title}>Results That Build Trust</h2>
            <p className={styles.subtitle}>We don&apos;t just deliver reports; we deliver measurable growth that impacts your bottom line.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/case-studies" className={styles.viewMoreBtn}>
              Full Portfolio <ArrowUpRight size={20} />
            </Link>
          </motion.div>
        </div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className={`${styles.card} ${styles[project.gridArea]}`}
              variants={itemVariants}
            >
              <div className={styles.imageContainer}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.image}
                />
                <div className={styles.overlay} />
              </div>

              <div className={styles.content}>
                <div className={styles.cardHeader}>
                  <span className={styles.category}>{project.category}</span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                </div>
                
                <div className={styles.metricsStrip}>
                  <div className={styles.metricItem}>
                    <span className={styles.metricLabel}>Results</span>
                    <span className={styles.metricValue}>{project.metrics.leads}</span>
                  </div>
                  <div className={styles.metricItem}>
                    <span className={styles.metricLabel}>Efficiency</span>
                    <span className={styles.metricValue}>{project.metrics.costReduction}</span>
                  </div>
                  <div className={styles.metricItem}>
                    <span className={styles.metricLabel}>Before / After</span>
                    <span className={styles.metricValue}>{project.metrics.beforeAfter}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
