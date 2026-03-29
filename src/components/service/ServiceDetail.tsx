'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, CheckCircle2, ChevronDown } from 'lucide-react';
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
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className={styles.servicePage}>

      {/* ── Animated Sky Hero ───────────────────────────────── */}
      <div className={styles.heroStickyContainer}>

        {/* Background Clouds */}
        <div className={styles.cloudLayerBack}>
          <div className={styles.cloudSvgWrapper}>
            <svg viewBox="0 0 800 200" preserveAspectRatio="none" style={{ width: '100%', height: '100%', fill: 'inherit' }}>
              <path d="M 150,150 Q 150,90 200,90 Q 220,50 280,50 Q 320,50 340,80 Q 380,70 420,100 Q 450,80 500,80 Q 560,80 580,130 Q 640,120 680,150 Z" />
              <path d="M 680,180 Q 720,130 760,150 Q 800,140 850,180 Z" />
              <path d="M 20,80 Q 50,40 80,70 Q 110,60 140,80" style={{ transform: 'scale(0.5)' }} />
            </svg>
          </div>
          <div className={styles.cloudSvgWrapper}>
            <svg viewBox="0 0 800 200" preserveAspectRatio="none" style={{ width: '100%', height: '100%', fill: 'inherit' }}>
              <path d="M 150,150 Q 150,90 200,90 Q 220,50 280,50 Q 320,50 340,80 Q 380,70 420,100 Q 450,80 500,80 Q 560,80 580,130 Q 640,120 680,150 Z" />
              <path d="M 680,180 Q 720,130 760,150 Q 800,140 850,180 Z" />
              <path d="M 20,80 Q 50,40 80,70 Q 110,60 140,80" style={{ transform: 'scale(0.5)' }} />
            </svg>
          </div>
        </div>

        {/* Foreground Fluffy Clouds */}
        <div className={styles.cloudLayerFront}>
          <div className={styles.cloudSvgWrapper}>
            <svg viewBox="0 0 800 200" preserveAspectRatio="none" style={{ width: '100%', height: '100%', fill: 'inherit' }}>
              <path d="M 50,250 Q 50,150 150,150 Q 180,100 260,100 Q 320,100 350,140 Q 400,120 480,160 Q 550,140 600,180 Q 650,140 700,180 Q 750,150 820,200 Z" />
            </svg>
          </div>
          <div className={styles.cloudSvgWrapper}>
            <svg viewBox="0 0 800 200" preserveAspectRatio="none" style={{ width: '100%', height: '100%', fill: 'inherit' }}>
              <path d="M 50,250 Q 50,150 150,150 Q 180,100 260,100 Q 320,100 350,140 Q 400,120 480,160 Q 550,140 600,180 Q 650,140 700,180 Q 750,150 820,200 Z" />
            </svg>
          </div>
        </div>

        {/* Left Typography */}
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.heroTextContainer}
          >
            <h1 className={styles.heroTitle}>
              Get Your Brand Heard with <span className={styles.textHighlight}>DIGITAL SHOUT</span>
            </h1>
            <div className={styles.heroSubtitle}>
              <strong>Ranked #1 in Google Search</strong><br />
              Hyderabad's Top Digital Marketing Agency
            </div>
          </motion.div>
        </div>

        {/* Right Asset Anchor */}
        <motion.div
          className={styles.heroBuildingRight}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <img src={service.heroImage} alt={service.aboutTitle} />
        </motion.div>

        {/* Bottom Cloud Edge */}
        <div className={styles.bottomFluffContainer}>
          <svg className={styles.bottomFluffSvg} viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path d="M0,100 L0,50 Q100,0 200,40 Q300,0 400,50 Q500,10 600,60 Q700,20 800,50 Q900,10 1000,50 Q1100,20 1200,60 L1200,100 Z" />
          </svg>
        </div>
      </div>

      {/* ── Main Content Flow (Glass Aesthetic) ─────────────── */}
      <div className={styles.mainContentArea}>

        {/* ── About Overlapping Card ── */}
        <motion.section
          className={styles.glassAboutCard}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <div className={styles.aboutHeaderFlex}>
            <div className={styles.authorAvatar} aria-hidden="true">M</div>
            <h2 className={styles.glassAboutTitle}>{service.aboutTitle}</h2>
          </div>
          <div className={styles.aboutDescLayout}>
            <p className={styles.aboutDescLead}>{service.description1}</p>
            <p className={styles.aboutDescSecondary}>{service.description2}</p>
          </div>
        </motion.section>

        {/* ── Includes & Metrics Row ── */}
        <div className={styles.bentoMasterRow}>

          <motion.section
            className={styles.glassIncludesCard}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h3 className={styles.glassHeading}>Services Include</h3>
            <p className={styles.glassSub}>{service.servicesInclude.description}</p>
            <div className={styles.includesPillGrid}>
              {service.servicesInclude.items.map((item, index) => (
                <div key={`${item}-${index}`} className={styles.includePill}>
                  <CheckCircle2 size={16} className={styles.checkIconModern} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {service.metrics && (
            <div className={styles.metricsStack}>
              {service.metrics.slice(0, 2).map((metric, i) => (
                <motion.div
                  key={i}
                  className={styles.glassMetricCard}
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <h4 className={styles.metricValLarge}>{metric.value}</h4>
                  <p className={styles.metricLabSmall}>{metric.label}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* ── Floating Expertise Grid ── */}
        <motion.section
          className={styles.glassExpertiseSection}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <div className={styles.sectionHeaderFlex}>
            <div>
              <h3 className={styles.glassHeadingLarge}>Our Expertise In {service.title}</h3>
              <p className={styles.glassSubLarge}>{service.expertise.description}</p>
            </div>
          </div>

          <div className={styles.expertiseHoverGrid}>
            {service.expertise.items.map((item) => (
              <motion.div
                key={item.number}
                className={styles.expertiseHoverCard}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.expHeader}>
                  <span className={styles.expNum}>{item.number}</span>
                  <div className={styles.expLine} />
                </div>
                <h4 className={styles.expTitle}>{item.title}</h4>
                <p className={styles.expDesc}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Gallery Collage ── */}
        <motion.section
          className={styles.glassGallerySection}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <div className={styles.galleryCollage}>
            {service.galleryImages.map((src, i) => (
              <div key={i} className={`${styles.galleryItemModern} ${styles['galleryItem' + (i + 1)]}`}>
                <img src={src} alt="Gallery view" className={styles.galleryImgZoom} />
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── Benefits & FAQ Split ── */}
        <div className={styles.bentoMasterRowReflect}>

          <motion.section
            className={styles.glassBenefitsCard}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className={styles.benefitsContent}>
              <h3 className={styles.glassHeading}>Key Benefits</h3>
              <p className={styles.glassSub}>{service.benefits.description}</p>
              <ul className={styles.benefitsListGrid}>
                {service.benefits.items.map((item, index) => (
                  <li key={`${item}-${index}`} className={styles.benefitItemModern}>
                    <div className={styles.modernDot} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contextual Benefits Image or Default Floating Elephant */}
            <div className={styles.benefitsGraphicWrapper}>
              <img
                src={service.benefitsImage || '/images/elephant-clouds.png'}
                alt={service.benefitsImage ? "Key Benefits" : "Elephant on Clouds Aesthetic"}
                className={styles.benefitsGraphic}
              />
            </div>
          </motion.section>

          {service.faq && (
            <motion.section
              className={styles.glassFaqCard}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className={styles.glassHeading}>Got questions?</h3>
              <div className={styles.faqListModern}>
                {service.faq.map((faq, i) => (
                  <div
                    key={i}
                    className={`${styles.faqModernItem} ${openFaq === i ? styles.faqOpenModern : ''}`}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <div className={styles.faqHeaderModern}>
                      <h4 className={styles.faqQuestionModern}>{faq.question}</h4>
                      <div className={`${styles.faqIconWrapper} ${openFaq === i ? styles.faqIconRotated : ''}`}>
                        <ChevronDown size={18} />
                      </div>
                    </div>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className={styles.faqAnswerWrapperModern}
                      >
                        <p className={styles.faqAnswerModern}>{faq.answer}</p>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.section>
          )}

        </div>

      </div>

    </div>
  );
}
