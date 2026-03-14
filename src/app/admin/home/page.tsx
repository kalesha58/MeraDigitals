'use client';

import Link from 'next/link';
import { ArrowRight, Database, Image as ImageIcon, Search, Users } from 'lucide-react';
import styles from '@/styles/Admin.module.css';

export default function AdminHomeHub() {
    return (
        <div className={styles.content}>
            <h1 className={styles.title} style={{ marginBottom: '2rem' }}>Home Page Content</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Select a section to modify.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>

                <Link href="/admin/home/hero" className={styles.glassCard} style={{ textDecoration: 'none', display: 'block', padding: '2rem', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <ImageIcon size={24} color="var(--accent-primary)" />
                        <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Hero Section</h2>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                        Edit main banner, title, subtitles, and images.
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 600 }}>
                        Edit Section <ArrowRight size={16} className="ml-2" />
                    </div>
                </Link>

                <Link href="/admin/home/expertise" className={styles.glassCard} style={{ textDecoration: 'none', display: 'block', padding: '2rem', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <Database size={24} color="var(--accent-primary)" />
                        <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Expertise</h2>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                        Manage service cards, icons, and descriptions.
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 600 }}>
                        Edit Section <ArrowRight size={16} className="ml-2" />
                    </div>
                </Link>

                <Link href="/admin/home/seo" className={styles.glassCard} style={{ textDecoration: 'none', display: 'block', padding: '2rem', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <Search size={24} color="var(--accent-primary)" />
                        <h2 style={{ fontSize: '1.25rem', margin: 0 }}>SEO Settings</h2>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                        Update meta titles and descriptions.
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 600 }}>
                        Edit Section <ArrowRight size={16} className="ml-2" />
                    </div>
                </Link>

                <Link href="/admin/home/inquiries" className={styles.glassCard} style={{ textDecoration: 'none', display: 'block', padding: '2rem', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <Users size={24} color="var(--accent-primary)" />
                        <h2 style={{ fontSize: '1.25rem', margin: 0 }}>User Inquiries</h2>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                        View and manage contact form submissions.
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 600 }}>
                        View Inquiries <ArrowRight size={16} className="ml-2" />
                    </div>
                </Link>


            </div>
        </div>
    );
}
