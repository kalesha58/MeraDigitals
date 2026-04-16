'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronDown, Rocket, TrendingUp, Users, Target, ShieldCheck, Briefcase } from 'lucide-react';
import { type IIndustryData } from '@/data/industries';
import styles from '@/styles/ServicePage.module.css'; // Reusing established premium styles

interface Props {
  industry: IIndustryData;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function IndustryDetail({ industry }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className={styles.servicePage}>

      {/* Hero Section */}
      <div className={styles.heroStickyContainer}>
        <div className={styles.cloudLayerBack}>
            <div className={styles.cloudSvgWrapper}>
                <svg viewBox="0 0 800 200" preserveAspectRatio="none" style={{ width: '100%', height: '100%', fill: 'inherit' }}>
                <path d="M 150,150 Q 150,90 200,90 Q 220,50 280,50 Q 320,50 340,80 Q 380,70 420,100 Q 450,80 500,80 Q 560,80 580,130 Q 640,120 680,150 Z" />
                </svg>
            </div>
        </div>

        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroTextContainer}
          >
            <h1 className={styles.heroTitle}>
              Dominating the <span className={styles.textHighlight}>{industry.title}</span> Market
            </h1>
            <div className={styles.heroSubtitle}>
              <strong>{industry.subtitle}</strong><br />
              Tailored Digital Solutions for High-Growth Brands
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.heroBuildingRight}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img src={industry.heroImage} alt={industry.title} style={{ borderRadius: '40px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }} />
        </motion.div>
      </div>

      <div className={styles.mainContentArea}>

        {/* About Industry Card */}
        <motion.section
          className={styles.glassAboutCard}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className={styles.aboutHeaderFlex}>
            <div className={styles.authorAvatar}>I</div>
            <h2 className={styles.glassAboutTitle}>{industry.aboutTitle}</h2>
          </div>
          <div className={styles.aboutDescLayout}>
            <p className={styles.aboutDescLead}>{industry.description1}</p>
            <p className={styles.aboutDescSecondary}>{industry.description2}</p>
          </div>
        </motion.section>

        {/* Focus & Metrics */}
        <div className={styles.bentoMasterRow}>
          <motion.section
            className={styles.glassIncludesCard}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className={styles.glassHeading}>Strategic Focus</h3>
            <p className={styles.glassSub}>{industry.industryFocus.description}</p>
            <div className={styles.includesPillGrid}>
              {industry.industryFocus.items.map((item, index) => (
                <div key={index} className={styles.includePill}>
                  <Target size={16} className={styles.checkIconModern} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {industry.metrics && (
            <div className={styles.metricsStack}>
              {industry.metrics.slice(0, 2).map((metric, i) => (
                <motion.div key={i} className={styles.glassMetricCard} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <h4 className={styles.metricValLarge}>{metric.value}</h4>
                  <p className={styles.metricLabSmall}>{metric.label}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Expertise Grid */}
        <motion.section
          className={styles.glassExpertiseSection}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className={styles.sectionHeaderFlex}>
            <h3 className={styles.glassHeadingLarge}>Tailored Expertise for {industry.title}</h3>
            <p className={styles.glassSubLarge}>{industry.expertise.description}</p>
          </div>

          <div className={styles.expertiseHoverGrid}>
            {industry.expertise.items.map((item) => (
              <motion.div key={item.number} className={styles.expertiseHoverCard} whileHover={{ y: -10 }}>
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

        {/* Gallery */}
        <motion.section className={styles.glassGallerySection} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className={styles.galleryCollage}>
            {industry.galleryImages.map((src, i) => (
              <div key={i} className={`${styles.galleryItemModern} ${styles['galleryItem' + (i + 1)]}`}>
                <img src={src} alt="Industry in action" className={styles.galleryImgZoom} />
              </div>
            ))}
          </div>
        </motion.section>

        {/* Benefits & FAQ */}
        <div className={styles.bentoMasterRowReflect}>
          <motion.section className={styles.glassBenefitsCard} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className={styles.benefitsContent}>
              <h3 className={styles.glassHeading}>Why Partner with Mera Digitals?</h3>
              <p className={styles.glassSub}>{industry.benefits.description}</p>
              <ul className={styles.benefitsListGrid}>
                {industry.benefits.items.map((item, index) => (
                  <li key={index} className={styles.benefitItemModern}>
                    <div className={styles.modernDot} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.benefitsGraphicWrapper}>
              <img src={industry.heroImage} alt="Industry Benefits" className={styles.benefitsGraphic} style={{ filter: 'brightness(0.7)' }} />
            </div>
          </motion.section>

          {industry.faq && (
            <motion.section className={styles.glassFaqCard} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h3 className={styles.glassHeading}>Industry FAQ</h3>
              <div className={styles.faqListModern}>
                {industry.faq.map((faq, i) => (
                  <div key={i} className={`${styles.faqModernItem} ${openFaq === i ? styles.faqOpenModern : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <div className={styles.faqHeaderModern}>
                      <h4 className={styles.faqQuestionModern}>{faq.question}</h4>
                      <div className={`${styles.faqIconWrapper} ${openFaq === i ? styles.faqIconRotated : ''}`}>
                        <ChevronDown size={18} />
                      </div>
                    </div>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className={styles.faqAnswerWrapperModern}>
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
