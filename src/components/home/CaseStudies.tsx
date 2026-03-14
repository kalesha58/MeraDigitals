'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Zap } from 'lucide-react';
import styles from '@/styles/CaseStudies.module.css';

const projects = [
  {
    title: 'Fintech Revolution',
    category: 'APP DEVELOPMENT',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000',
    gridArea: 'large',
  },
  {
    title: 'Strategy & Growth',
    category: 'WORKFLOW STRATEGY',
    image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=1000',
    gridArea: 'tall',
  },
  {
    title: 'Data Insights',
    category: 'ANALYTICS & BI',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    gridArea: 'wide',
  },
  {
    title: 'Future Tech',
    category: 'INNOVATION',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000',
    gridArea: 'small',
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
              <span>PORTFOLIO</span>
            </div>
            <h2 className={styles.title}>Featured Work</h2>
            <p className={styles.subtitle}>Transforming ideas into digital reality.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/case-studies" className={styles.viewMoreBtn}>
              View All Projects <ArrowUpRight size={20} />
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
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
