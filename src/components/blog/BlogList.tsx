'use client';

import Link from 'next/link';
import { Search, ArrowRight } from 'lucide-react';
import { blogsData } from '@/data/blogs';
import styles from '@/styles/BlogListing.module.css';

const POPULAR_TAGS = [
  'SEO',
  'Email Marketing',
  'Social Media Marketing',
  'PPC',
  'Affiliate Marketing',
  'Local SEO',
  'Influencer Marketing',
];

export default function BlogList() {
  const recentPosts = blogsData.slice(0, 3);

  return (
    <div id="articles" className={styles.wrapper}>
      <div className={styles.container}>

        <div className={styles.header}>
          <span className={styles.label}>
            <span className={styles.labelDots}>
              <span className={styles.dot} />
              <span className={styles.dotOrange} />
            </span>
            News &amp; Blogs
          </span>
          <h1 className={styles.title}>Our Latest News &amp; Blogs</h1>
        </div>

        <div className={styles.layout}>

          <div className={styles.posts}>
            {blogsData.map((blog) => (
              <Link key={blog.slug} href={`/blogs/${blog.slug}`} className={styles.card}>
                <div className={styles.cardImageWrapper}>
                  <img src={blog.image} alt={blog.title} className={styles.cardImage} />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.badgeRow}>
                    <span className={styles.badge}>{blog.category}</span>
                    <span className={styles.badge}>{blog.date}</span>
                  </div>
                  <h2 className={styles.cardTitle}>{blog.title}</h2>
                  <p className={styles.cardExcerpt}>{blog.excerpt}</p>
                  <div className={styles.readMore}>
                    Read More <ArrowRight size={15} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <aside className={styles.sidebar}>

            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarHeading}>Search</h3>
              <div className={styles.searchBox}>
                <input type="text" placeholder="Search" className={styles.searchInput} />
                <Search size={18} className={styles.searchIcon} />
              </div>
            </div>

            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarHeading}>Popular Tags</h3>
              <div className={styles.tagCloud}>
                {POPULAR_TAGS.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>

            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarHeading}>Recent Post</h3>
              <div className={styles.recentList}>
                {recentPosts.map((post) => (
                  <Link key={post.slug} href={`/blogs/${post.slug}`} className={styles.recentItem}>
                    <img src={post.image} alt={post.title} className={styles.recentThumb} />
                    <div className={styles.recentInfo}>
                      <p className={styles.recentTitle}>{post.title}</p>
                      <span className={styles.recentDate}>{post.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.ctaCard}>
              <span className={styles.ctaLabel}>Hire Us</span>
              <h3 className={styles.ctaTitle}>Looking to Elevate Your Digital Presence?</h3>
              <Link href="/contact" className={styles.ctaButton}>Hire Me Now</Link>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}
