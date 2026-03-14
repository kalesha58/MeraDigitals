'use client';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useRef } from 'react';
import styles from '@/styles/Testimonials.module.css';

interface Testimonial {
  rating: number;
  text: string;
  name: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    rating: 5.0,
    text: "Mera Digitals transformed our organic presence. Their SEO strategy didn't just boost our rankings; it significantly increased our lead quality and overall revenue within months.",
    name: 'Dianne Russell',
    position: 'Marketing Director, ArchStudio',
  },
  {
    rating: 5.0,
    text: "The team's expertise in performance marketing is unparalleled. They managed our ad spend with surgical precision, lowering our CPA while scaling our ROAS to record heights.",
    name: 'James Carter',
    position: 'CEO, TechVision Co.',
  },
  {
    rating: 4.9,
    text: "From website development to branding, Mera Digitals has been an essential partner in our growth. Their creative designs and technical proficiency have truly given our vision a voice.",
    name: 'Sarah Mitchell',
    position: 'Head of Growth, BrandForce',
  },
];

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={18} fill="#f48120" color="#f48120" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const active = testimonials[current];

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className="container">

        {/* Section Header — two columns */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.headerLeft}>
            <div className={styles.badge}>
              <div className={styles.badgeIcon}>
                <div className={styles.badgeCircle} />
                <div className={styles.badgeLine} />
              </div>
              <span>Testimonials</span>
            </div>
            <h2 className={styles.heading}>
              Testimonials: Trusted<br />by Our Clients
            </h2>
          </div>

          <div className={styles.headerRight}>
            <p className={styles.subText}>
              See how we've helped businesses across various industries achieve
              remarkable growth and dominate their digital space.
            </p>
            <Link href="/about-us" className={styles.allBtn}>
              All Testimonials <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>

        {/* Cards Row */}
        <div className={styles.cardsRow}>

          {/* Left — Rating Summary Card */}
          <motion.div
            className={styles.ratingCard}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <div className={styles.ratingNumber}>4.9</div>
            <StarRow />
            <p className={styles.reviewCount}>(40+ Reviews)</p>
            <p className={styles.ratingTagline}>
              Customer experiences that speak for them selves
            </p>
          </motion.div>

          {/* Right — Testimonial Slider */}
          <motion.div
            className={styles.testimonialCard}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <div className={styles.reviewHeader}>
              <StarRow count={5} />
              <span className={styles.reviewScore}>
                {active.rating.toFixed(1)}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className={styles.reviewBody}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3 }}
              >
                <p className={styles.reviewText}>{active.text}</p>

                <div className={styles.reviewFooter}>
                  <div className={styles.reviewerInfo}>
                    <span className={styles.reviewerName}>{active.name}</span>
                    <span className={styles.reviewerPos}>{active.position}</span>
                  </div>

                  <div className={styles.navBtns}>
                    <button
                      className={styles.navBtnPrev}
                      onClick={prev}
                      aria-label="Previous testimonial"
                    >
                      <ArrowLeft size={18} />
                    </button>
                    <button
                      className={styles.navBtnNext}
                      onClick={next}
                      aria-label="Next testimonial"
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dot indicators */}
            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
