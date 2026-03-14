'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';
import styles from '@/styles/Footer.module.css';

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) return null;

  const industries = [
    'AR/VR Based Solutions',
    'CA/Accounting Firms',
    'Community Building Platforms',
    'Digital Twin Platforms',
    'Ecommerce Platforms',
    'Event Management',
    'Industrial Digitization Platforms',
    'Interiors',
    'IoT/AI/ML Based Solutions',
    'IT Services Industry',
    'Manufacturing',
    'Marketplaces (B2B/B2C)',
    'Overseas Visa Consultancy',
    'Packaging',
    'Pharmaceuticals',
    'Real Estate',
    'Self-publishing Platforms',
    'Social Networking Platforms',
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Blog', href: '/blogs' },
    { name: 'Brand Bucket', href: '/brand-bucket' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.glowRight} aria-hidden="true" />

      <div className={styles.container}>
        {/* ── Newsletter CTA Strip ─────────────────────────────── */}
        <div className={styles.ctaStrip}>
          <div className={styles.ctaText}>
            <h3>Stay ahead of the curve.</h3>
            <p>Get the latest growth strategies and digital trends — straight to your inbox.</p>
          </div>
          <div className={styles.ctaForm}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.ctaInput}
              aria-label="Email address"
            />
            <button className={styles.ctaButton} type="button">Subscribe</button>
          </div>
        </div>

        {/* ── Top Section ─────────────────────────────────────── */}
        <div className={styles.topSection}>
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.logo}>
              <img src="/MER_DIGITALS_LOGO.png" alt="Mera Digitals Logo" className={styles.logoImage} />
            </Link>
            <p className={styles.brandDescription}>
              We help brands grow through data-driven marketing strategies, high-performance
              websites, and compelling creative design that converts visitors into customers.
            </p>
            <div className={styles.socials}>
              <Link href="#" className={styles.socialIcon} aria-label="Facebook">
                <Facebook size={18} />
              </Link>
              <Link href="#" className={styles.socialIcon} aria-label="Twitter">
                <Twitter size={18} />
              </Link>
              <Link href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className={styles.socialIcon} aria-label="Instagram">
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          <div className={styles.mascotColumn}>
            <div className={styles.mascotCard}>
              <div className={styles.mascotTitle}>Mera Digitals Mascot</div>
              <div className={styles.mascotImageWrap}>
                <img
                  src="/assets/generated/mascot-elephant.png"
                  alt="Mera Digitals Mascot"
                />
              </div>
              <div>
                <h3 className={styles.mascotText}>
                  Your Vision, Our Expertise.
                  <br />Scaling Brands with Passion.
                </h3>
                <div style={{ marginTop: '0.85rem' }}>
                  <span className={styles.mascotBadge}>
                    <Heart size={12} fill="#f48120" color="#f48120" />
                    Global Reach
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Section ───────────────────────────────────── */}
        <div className={styles.bottomSection}>
          <div className={styles.quickLinks}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <div className={styles.linkList}>
              {quickLinks.map((link) => (
                <Link key={link.name} href={link.href} className={styles.linkItem}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.industries}>
            <h4 className={styles.sectionTitle}>Industries We Serve</h4>
            <div className={styles.industriesGrid}>
              {industries.map((industry) => (
                <Link key={industry} href="#" className={styles.industryTag}>
                  {industry}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── Copyright ────────────────────────────────────────── */}
        <div className={styles.copyright}>
          <span>© {new Date().getFullYear()} Mera Digitals. All rights reserved.</span>
          <div className={styles.copyrightLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
