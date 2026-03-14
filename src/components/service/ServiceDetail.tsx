'use client';

import { motion } from 'framer-motion';
import { Play, CheckCircle2 } from 'lucide-react';
import { type IServiceData } from '@/data/services';
import styles from '@/styles/ServicePage.module.css';

interface Props {
  service: IServiceData;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ServiceDetail({ service }: Props) {
  return (
    <div className={styles.servicePage}>

      {/* ── Hero Image ─────────────────────────────────────── */}
      <motion.div
        className={styles.heroImageWrapper}
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src={service.heroImage}
          alt={service.aboutTitle}
          className={styles.heroImg}
        />
        <button className={styles.playBtn} aria-label="Play video">
          <Play size={20} fill="currentColor" />
        </button>
      </motion.div>

      {/* ── About ──────────────────────────────────────────── */}
      <motion.section
        className={styles.contentSection}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <h1 className={styles.aboutTitle}>{service.aboutTitle}</h1>

        <div className={styles.descRow}>
          <div className={styles.authorAvatar} aria-hidden="true">M</div>
          <p className={styles.description1}>{service.description1}</p>
        </div>

        <p className={styles.description2}>{service.description2}</p>
      </motion.section>

      {/* ── Services Include ───────────────────────────────── */}
      <motion.section
        className={styles.contentSection}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <h2 className={styles.sectionHeading}>Services Include:</h2>
        <p className={styles.sectionDesc}>{service.servicesInclude.description}</p>

        <div className={styles.includeGrid}>
          {service.servicesInclude.items.map((item, index) => (
            <div key={`${item}-${index}`} className={styles.includeItem}>
              <CheckCircle2 size={18} className={styles.checkIcon} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Gallery ────────────────────────────────────────── */}
      <motion.div
        className={styles.gallery}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {service.galleryImages.map((src, i) => (
          <div key={i} className={styles.galleryItem}>
            <img src={src} alt={`Gallery image ${i + 1}`} className={styles.galleryImg} />
          </div>
        ))}
      </motion.div>

      {/* ── Expertise ──────────────────────────────────────── */}
      <motion.section
        className={styles.contentSection}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <h2 className={styles.sectionHeading}>
          Our Expertise In {service.title}
        </h2>
        <p className={styles.sectionDesc}>{service.expertise.description}</p>

        <div className={styles.expertiseGrid}>
          {service.expertise.items.map((item) => (
            <motion.div
              key={item.number}
              className={styles.expertiseCard}
              whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(18,42,32,0.1)' }}
              transition={{ duration: 0.22 }}
            >
              <div className={styles.expertiseNum}>{item.number}</div>
              <h3 className={styles.expertiseCardTitle}>{item.title}</h3>
              <p className={styles.expertiseCardDesc}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Benefits ───────────────────────────────────────── */}
      <motion.section
        className={`${styles.contentSection} ${styles.benefitsSection}`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <h2 className={styles.sectionHeading}>Services Benefits:</h2>
        <p className={styles.sectionDesc}>{service.benefits.description}</p>

        <ul className={styles.benefitsList}>
          {service.benefits.items.map((item, index) => (
            <li key={`${item}-${index}`} className={styles.benefitItem}>
              <div className={styles.benefitBadge} aria-hidden="true">
                <div className={styles.benefitCircle} />
                <div className={styles.benefitLine} />
              </div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.section>

    </div>
  );
}
