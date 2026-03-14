import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, ArrowLeft, User, Share2, Twitter, Linkedin, Facebook, Clock, Tag } from 'lucide-react';
import { blogsData } from '@/data/blogs';
import styles from '@/styles/BlogDetail.module.css';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);
  if (!blog) return { title: 'Article Not Found' };

  return {
    title: `${blog.title} | Mera Digital Insights`,
    description: blog.excerpt,
    openGraph: {
      images: [blog.image],
    },
  };
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  // Calculate read time (approximate)
  const wordCount = blog.content.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200);

  return (
    <article className={styles.pageWrapper}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroImageBg}>
          <img
            src={blog.image}
            alt={blog.title}
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <Link href="/blogs" className={styles.backLink}>
            <ArrowLeft size={20} /> Back to Insights
          </Link>

          <div>
            <span className={styles.categoryBadge}>{blog.category}</span>
            <h1 className={styles.title}>{blog.title}</h1>

            <div className={styles.metaWrapper}>
              <div className={styles.metaItem}>
                <User size={18} />
                <span>{blog.author}</span>
              </div>
              <div className={styles.metaItem}>
                <Calendar size={18} />
                <span>{blog.date}</span>
              </div>
              <div className={styles.metaItem}>
                <Clock size={18} />
                <span>{readTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className={styles.container}>
        <div className={styles.contentGrid}>

          {/* Article Body */}
          <div className={styles.articleBody}>
            <p className="lead" style={{ fontSize: '1.25rem', fontWeight: '500', color: 'var(--text-primary)', marginBottom: '2rem' }}>
              {blog.excerpt}
            </p>
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />

            <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)' }}>
              <h3 style={{ marginBottom: '1rem' }}>Tags:</h3>
              <div className={styles.tagCloud}>
                {blog.tags.map(tag => (
                  <span key={tag} className={styles.tag} style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}>#{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>

            {/* Author Widget */}
            <div className={styles.widget}>
              <div className={styles.widgetTitle}>About the Author</div>
              <div className={styles.authorBox}>
                <div className={styles.authorAvatar}>
                  {blog.author.charAt(0)}
                </div>
                <div className={styles.authorInfo}>
                  <h4>{blog.author}</h4>
                  <p>Digital Strategist @ Mera Digital</p>
                </div>
              </div>
            </div>

            {/* Share Widget */}
            <div className={styles.widget}>
              <div className={styles.widgetTitle}>Share Article</div>
              <div className={styles.shareButtons}>
                <button className={styles.shareBtn}>
                  <Twitter size={18} /> Share on Twitter
                </button>
                <button className={styles.shareBtn}>
                  <Linkedin size={18} /> Share on LinkedIn
                </button>
                <button className={styles.shareBtn}>
                  <Facebook size={18} /> Share on Facebook
                </button>
                <button className={styles.shareBtn}>
                  <Share2 size={18} /> Copy Link
                </button>
              </div>
            </div>

            {/* Newsletter Widget (Visual) */}
            <div className={styles.widget} style={{ background: 'var(--accent-primary)', color: 'white' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Subscribe to Insights</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.9, marginBottom: '1rem' }}>Get the latest digital trends delivered to your inbox.</p>
              <input
                type="email"
                placeholder="Your email address"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: 'none',
                  marginBottom: '0.5rem',
                  color: 'black'
                }}
              />
              <button
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: '1px solid white',
                  background: 'transparent',
                  color: 'white',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Subscribe
              </button>
            </div>

          </aside>

        </div>
      </div>
    </article>
  );
}
