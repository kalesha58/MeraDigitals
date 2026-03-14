'use client';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import styles from '@/styles/LatestBlogs.module.css';

interface BlogPost {
  title: string;
  category: string;
  image: string;
  slug: string;
  desc: string;
}

const blogs: BlogPost[] = [
  {
    title: "A Beginner's Guide to Running Profitable Ad Campaigns",
    category: 'Paid Advertising',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=700&auto=format&fit=crop',
    slug: 'beginners-guide-profitable-ad-campaigns',
    desc: 'Master the art of paid ads with our comprehensive guide to budget management and creative testing.',
  },
  {
    title: 'Top 10 SEO Strategies That Still Work in 2025',
    category: 'SEO',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=700&auto=format&fit=crop',
    slug: 'top-10-seo-strategies-2025',
    desc: 'Analytics-driven SEO tactics that ignore vanity metrics and focus on bottom-line business growth.',
  },
  {
    title: 'Why Long-Form Content Still Dominates in 2025',
    category: 'Content Marketing',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=700&auto=format&fit=crop',
    slug: 'long-form-content-dominates-2025',
    desc: 'Discover why high-value content continues to outperform short-form snippets in search rankings.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function LatestBlogs() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section className={styles.section} id="blogs" ref={sectionRef}>
      <div className="container">

        {/* Section Header */}
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
              <span>News &amp; Blogs</span>
            </div>
            <h2 className={styles.heading}>
              Our Latest<br />News &amp; Blogs
            </h2>
          </div>

          <Link href="/blogs" className={styles.viewAllBtn}>
            View All Blogs <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Blog Cards Grid */}
        <motion.div
          className={styles.cardsGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.slug}
              className={styles.blogCard}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <Link href={`/blogs/${blog.slug}`} className={styles.cardInner}>
                <div className={styles.imageWrapper}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className={styles.cardImage}
                  />
                </div>

                <div className={styles.cardBody}>
                  <span className={styles.categoryPill}>{blog.category}</span>
                  <h3 className={styles.cardTitle}>{blog.title}</h3>
                  <p className={styles.cardDesc}>{blog.desc}</p>
                  <div className={styles.readMore}>
                    Read More <ArrowRight size={15} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
