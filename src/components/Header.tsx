'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Rocket, Search, DollarSign, Code, ShieldCheck, Award, TrendingUp, Megaphone, Sun, Moon, Users } from 'lucide-react';
import styles from '@/styles/Header.module.css';
import { useTheme } from '@/components/ThemeProvider';

const serviceItems = [
  {
    title: 'SEO Services',
    subtitle: 'Rank #1 on Google',
    icon: Search,
    href: '/services/seo',
  },
  {
    title: 'Google Ads',
    subtitle: 'High ROI Campaigns',
    icon: DollarSign,
    href: '/services/media-buying',
  },
  {
    title: 'Social Media Marketing',
    subtitle: 'Engage Your Audience',
    icon: Users,
    href: '/services/social-media-marketing',
  },
  {
    title: 'Website Development',
    subtitle: 'Custom Next.js Apps',
    icon: Code,
    href: '/services/website-development',
  },
  {
    title: 'Media Buying',
    subtitle: 'Strategic Ad Placement',
    icon: Megaphone,
    href: '/services/media-buying',
  },
  {
    title: 'Online Reputation Management',
    subtitle: 'Build & Protect Trust',
    icon: ShieldCheck,
    href: '/services/orm',
  },
  {
    title: 'Branding',
    subtitle: 'Establish Your Identity',
    icon: Award,
    href: '/services/branding',
  },
  {
    title: 'Performance Marketing',
    subtitle: 'Data-Driven Growth',
    icon: TrendingUp,
    href: '/services/performance-marketing',
  },
  {
    title: 'Complete Digital Marketing',
    subtitle: '360° Growth Solution',
    icon: Rocket,
    href: '/services/complete-marketing',
  },
];

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#', label: 'Services', hasMega: true },
  { href: '/blogs', label: 'Blogs' },
  { href: '/about-us', label: 'About Us' },
  { href: '#', label: 'Pricing' },
  { href: '/contact-us', label: 'Get A Quote', isCta: true },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Determine if the current page should have a transparent header (e.g., Blog Details)
  const isTransparentPage = pathname?.startsWith('/blogs/') && pathname !== '/blogs';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  if (pathname?.startsWith('/admin')) return null;

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${isTransparentPage && !scrolled ? styles.transparentMode : ''}`}
    >
      <div className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <img
            src="/MER_DIGITALS_LOGO.png"
            alt="Mera Digitals Logo"
            className={styles.logoImage}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.navLinks}>
          {navLinks.map((link) => (
            <div key={link.label} className={styles.navItem}>
              {link.hasMega ? (
                <>
                  <div className={styles.flexCenter}>
                    <span className={styles.navLinkItem}>{link.label}</span>
                    <ChevronDown size={14} className={styles.chevron} />
                  </div>
                  <div className={styles.megaMenu}>
                    <div className={styles.megaGrid}>
                      {serviceItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link key={item.title} href={item.href} className={styles.megaItem}>
                            <div className={styles.megaIconWrapper}>
                              <Icon size={20} />
                            </div>
                            <div className={styles.megaContent}>
                              <h4>{item.title}</h4>
                              <span>{item.subtitle}</span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className={`${link.isCta ? styles.ctaButton : styles.navLinkItem} ${pathname === link.href ? styles.active : ''}`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          {/* Theme Toggle Desktop */}
          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label="Toggle theme"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem',
              borderRadius: '50%',
              transition: 'background 0.3s'
            }}
          >
            {mounted && theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={styles.mobileBtn}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={styles.mobileMenu}
          >
            {navLinks.map((link) => (
              <div key={link.label} className={styles.mobileNavGroup}>
                <Link
                  href={link.href}
                  onClick={() => !link.hasMega && setMobileOpen(false)}
                  className={`${styles.mobileLink} ${link.isCta ? styles.ctaButton : ''}`}
                >
                  {link.label}
                  {link.hasMega && <ChevronDown size={18} />}
                </Link>

                {link.hasMega && (
                  <div className={styles.mobileSubGrid}>
                    {serviceItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={styles.mobileSubLink}
                      >
                        <div className={styles.mobileIconWrapper}>
                          <item.icon size={16} />
                        </div>
                        <span className={styles.mobileSubLabel}>{item.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Theme Toggle */}
            <div style={{ padding: '1rem 0', borderTop: '1px solid var(--glass-border)', marginTop: 'auto' }}>
              <button
                onClick={toggleTheme}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  width: '100%'
                }}
              >
                {mounted && theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                <span>{mounted && theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header >
  );
}
