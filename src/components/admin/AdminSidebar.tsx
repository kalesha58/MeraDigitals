'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Home, Settings, LogOut, Sun, Moon, ChevronDown, ChevronRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import styles from '@/styles/Admin.module.css';
import { useState, useEffect } from 'react';

export default function AdminSidebar() {
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const [homeExpanded, setHomeExpanded] = useState(true);

    // Auto-expand if on a sub-route
    useEffect(() => {
        if (pathname?.startsWith('/admin/home')) {
            setHomeExpanded(true);
        }
    }, [pathname]);

    const handleLogout = () => {
        // Simple cookie clear
        document.cookie = 'admin_session=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        window.location.href = '/admin/login';
    };

    const isActive = (path: string) => pathname === path ? styles.navItemActive : '';
    const isSubActive = (path: string) => pathname === path ? styles.subNavItemActive : '';

    return (
        <aside className={styles.sidebar}>
            <div className={styles.brand}>
                <div style={{ width: 32, height: 32, background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '1.2rem' }}>
                    M
                </div>
                Mera Admin
            </div>

            <nav className={styles.nav}>
                <Link href="/admin" className={`${styles.navItem} ${isActive('/admin')}`}>
                    <LayoutDashboard size={20} strokeWidth={1.5} /> Dashboard
                </Link>

                <div className={styles.navGroup}>
                    <button
                        onClick={() => setHomeExpanded(!homeExpanded)}
                        className={`${styles.navItem}`}
                        style={{ width: '100%', justifyContent: 'space-between', background: 'transparent', border: 'none', cursor: 'pointer', color: homeExpanded ? 'var(--text-primary)' : 'var(--text-secondary)' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Home size={20} strokeWidth={1.5} /> Home Page
                        </div>
                        {homeExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    </button>

                    {homeExpanded && (
                        <div className={styles.subMenu}>
                            <Link href="/admin/home/hero" className={`${styles.subNavItem} ${isSubActive('/admin/home/hero')}`}>
                                Hero Section
                            </Link>
                            <Link href="/admin/home/expertise" className={`${styles.subNavItem} ${isSubActive('/admin/home/expertise')}`}>
                                Expertise
                            </Link>
                            <Link href="/admin/home/seo" className={`${styles.subNavItem} ${isSubActive('/admin/home/seo')}`}>
                                SEO Settings
                            </Link>
                        </div>
                    )}
                </div>

                <Link href="/admin/settings" className={`${styles.navItem} ${isActive('/admin/settings')}`}>
                    <Settings size={20} strokeWidth={1.5} /> Settings
                </Link>
            </nav>

            <div className={styles.footer}>
                <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className={`${styles.navItem}`}
                    style={{ width: '100%', cursor: 'pointer', background: 'var(--glass-bg)', justifyContent: 'center', border: '1px solid var(--glass-border)' }}
                >
                    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    <span style={{ fontSize: '0.9rem' }}>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                </button>

                <button
                    onClick={handleLogout}
                    className={`${styles.navItem}`}
                    style={{ width: '100%', cursor: 'pointer', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', justifyContent: 'center', border: '1px solid rgba(239, 68, 68, 0.2)' }}
                >
                    <LogOut size={18} /> <span style={{ fontSize: '0.9rem' }}>Logout</span>
                </button>
            </div>
        </aside>
    );
}
