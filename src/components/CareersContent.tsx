'use client';

import { motion } from 'framer-motion';
import { 
  Briefcase, ArrowRight, Zap, Globe, 
  Heart, Rocket, Users, Target,
  CheckCircle, LifeBuoy, Monitor, Coffee
} from 'lucide-react';
import styles from '@/styles/Careers.module.css';
import CTA from '@/components/home/CTA';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function CareersContent() {
  const jobs = [
    { title: 'Senior Performance Marketer', location: 'Remote / Hybrid', type: 'Full-time', dept: 'Marketing' },
    { title: 'Full Stack Next.js Engineer', location: 'Remote', type: 'Full-time', dept: 'Engineering' },
    { title: 'Creative Content Director', location: 'Remote / London', type: 'Full-time', dept: 'Creative' },
    { title: 'SEO Strategy Lead', location: 'Remote', type: 'Full-time', dept: 'Strategy' },
  ];

  const benefits = [
    { title: 'Remote-First Culture', icon: Globe, desc: 'Work from anywhere in the world. We value outcomes over hours.' },
    { title: 'Health & Wellness', icon: Heart, desc: 'Comprehensive medical insurance and a monthly wellness stipend.' },
    { title: 'Learning Budget', icon: Rocket, desc: 'Annual budget for courses, conferences, and professional books.' },
    { title: 'Next-Gen Gear', icon: Monitor, desc: 'We provide you with the latest MacBook Pro and essential workspace gear.' },
    { title: 'Paid Time Off', icon: Coffee, desc: 'Unlimited flexible PTO and 10+ annual company-wide holidays.' },
    { title: 'Collaborative Impact', icon: Users, desc: 'Join a tight-knit team where your voice shapes our strategic roadmap.' },
  ];

  return (
    <div className={styles.wrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.abstractBg}>
           <div className={styles.blob} style={{ top: '-10%', left: '-5%' }}></div>
           <div className={styles.blob} style={{ bottom: '-10%', right: '-5%', background: 'rgba(30, 58, 138, 0.2)' }}></div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="inline-block px-4 py-2 border border-[rgba(255,255,255,0.1)] rounded-full bg-[rgba(255,255,255,0.05)] backdrop-blur-md mb-6">
              <span style={{ color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px' }}>
                Join the Mission
              </span>
            </motion.div>
            
            <h1 className={styles.heroTitle}>Build the Future <br /> <span className="text-gradient">of Digital with Mera.</span></h1>
            <p className={styles.heroSubtitle}>
              Mera Digital is looking for the best strategists, designers, and engineers to build high-performance digital ecosystems for the worlds most ambitious brands.
            </p>
            
            <motion.div variants={itemVariants} className="flex justify-center gap-6">
               <a href="#positions" className="btn btn-primary">View Open Roles</a>
               <a href="/about-us" className="btn btn-outline">Our Culture</a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Mera Section */}
      <section className={styles.cultureSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="text-gradient">Why Mera Digital?</h2>
            <p className={styles.heroSubtitle}>We create an environment where high agency and deep creativity thrive.</p>
          </div>

          <div className={styles.grid}>
            {[
              { 
                title: 'High Agency Environment', 
                icon: Zap, 
                desc: 'We hire experts and get out of their way. You have total ownership over your projects and processes.' 
              },
              { 
                title: 'Strategic Innovation', 
                icon: Rocket, 
                desc: 'We don\'t just follow trends; we set them. You will work with cutting-edge tech like Generative AI and Headless architectures.' 
              },
              { 
                title: 'Outcome-Obsessed', 
                icon: Target, 
                desc: 'We measure success by real-world growth. Every line of code and every design pixel is focused on conversion.' 
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className={styles.cultureCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={styles.iconWrapper}>
                  <item.icon size={28} />
                </div>
                <h3>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className={styles.benefitsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="text-gradient">Premium Perks</h2>
            <p className={styles.heroSubtitle}>Designed to help you do your best work and live your best life.</p>
          </div>

          <div className={styles.grid}>
            {benefits.map((benefit, i) => (
              <motion.div 
                key={i} 
                className={styles.benefitItem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div style={{ color: 'var(--accent-primary)', marginTop: '4px' }}>
                  <benefit.icon size={24} />
                </div>
                <div>
                  <h4 style={{ marginBottom: '0.5rem', fontWeight: 700 }}>{benefit.title}</h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Positions */}
      <section id="positions" className={styles.jobsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="text-gradient">Open Positions</h2>
            <p className={styles.heroSubtitle}>Find your next challenge and grow with us.</p>
          </div>

          <div className={styles.jobList}>
            {jobs.map((job, i) => (
              <motion.a 
                key={i} 
                href="/contact-us" 
                className={styles.jobCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div>
                  <h3 className={styles.jobTitle}>{job.title}</h3>
                  <div className={styles.jobMeta}>
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>{job.dept}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <div style={{ color: 'var(--accent-primary)' }}>
                  <ArrowRight size={24} />
                </div>
              </motion.a>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p style={{ color: 'var(--text-muted)' }}>
              Don't see a role that fits? <a href="/contact-us" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Send us an open application.</a>
            </p>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="text-gradient">Our Hiring Process</h2>
            <p className={styles.heroSubtitle}>Transparent, efficient, and human-centric.</p>
          </div>

          <div className={styles.processGrid}>
            {[
              { step: '01', title: 'Application', desc: 'Send us your resume and a link to your portfolio/GitHub.' },
              { step: '02', title: 'Intro Chat', desc: 'A 30-minute call to discuss your experience and our culture.' },
              { step: '03', title: 'Technical Task', desc: 'A short, paid task relevant to your specific department.' },
              { step: '04', title: 'Final Interview', desc: 'A deep dive with our leadership team on strategy and fit.' }
            ].map((item, i) => (
              <div key={i} className={styles.processStep}>
                <div className={styles.stepNumber}>{item.step}</div>
                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
