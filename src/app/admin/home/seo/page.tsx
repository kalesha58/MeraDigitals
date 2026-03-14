'use client';

import { useState, useEffect } from 'react';
import styles from '@/styles/Admin.module.css';

export default function AdminSeoEditor() {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');

    const [formData, setFormData] = useState({
        hero: {},
        expertise: {},
        seo: {
            title: '',
            description: '',
            keywords: '',
            canonicalUrl: '',
            robots: '',
            ogImage: '',
            twitterHandle: '',
            schema: {
                organizationName: '',
                logoUrl: '',
                contactPhone: '',
                address: ''
            }
        }
    });

    useEffect(() => {
        fetch('/api/admin/home')
            .then(res => res.json())
            .then(data => {
                if (!data.seo) {
                    data.seo = { schema: {} }; // Default if empty
                }
                if (!data.seo.schema) {
                    data.seo.schema = {};
                }
                setFormData(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
                setMessage('Failed to load data');
            });
    }, []);

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            seo: {
                ...prev.seo,
                [field]: value
            }
        }));
    };

    const handleSchemaChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            seo: {
                ...prev.seo,
                schema: {
                    ...prev.seo?.schema,
                    [field]: value
                }
            }
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setMessage('');

        try {
            const res = await fetch('/api/admin/home', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setMessage('Saved successfully!');
            } else {
                setMessage('Failed to save.');
            }
        } catch (error) {
            setMessage('Error saving data.');
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div className={styles.content}>Loading...</div>;

    return (
        <div className={styles.content}>
            <div className={styles.header}>
                <h1 className={styles.title}>All SEO Settings</h1>
                <button className={styles.btn} onClick={handleSubmit} disabled={saving}>
                    {saving ? 'Saving...' : 'Save Changes'}
                </button>
            </div>

            {message && <div style={{ marginBottom: '1rem', color: message.includes('success') ? '#4ade80' : '#f87171' }}>{message}</div>}

            <form onSubmit={handleSubmit}>
                <div className={styles.card}>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Basic SEO</h2>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Meta Title</label>
                        <input
                            className={styles.input}
                            value={formData.seo?.title || ''}
                            onChange={(e) => handleChange('title', e.target.value)}
                            placeholder="Page Title - 60 chars"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Meta Description</label>
                        <textarea
                            className={styles.input}
                            rows={3}
                            value={formData.seo?.description || ''}
                            onChange={(e) => handleChange('description', e.target.value)}
                            placeholder="Page concise summary - 160 chars"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Keywords</label>
                        <textarea
                            className={styles.input}
                            rows={2}
                            value={formData.seo?.keywords || ''}
                            onChange={(e) => handleChange('keywords', e.target.value)}
                            placeholder="comma, separated, keywords"
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Canonical URL</label>
                            <input
                                className={styles.input}
                                value={formData.seo?.canonicalUrl || ''}
                                onChange={(e) => handleChange('canonicalUrl', e.target.value)}
                                placeholder="https://meradigitals.com"
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Robots Meta Tag</label>
                            <input
                                className={styles.input}
                                value={formData.seo?.robots || 'index, follow'}
                                onChange={(e) => handleChange('robots', e.target.value)}
                                placeholder="index, follow"
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Social Sharing (Open Graph)</h2>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>OG Image URL</label>
                        <input
                            className={styles.input}
                            value={formData.seo?.ogImage || ''}
                            onChange={(e) => handleChange('ogImage', e.target.value)}
                            placeholder="https://... (1200x630 ideal)"
                        />
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>This image appears when sharing on Facebook, LinkedIn, Twitter.</p>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Twitter Handle</label>
                        <input
                            className={styles.input}
                            value={formData.seo?.twitterHandle || ''}
                            onChange={(e) => handleChange('twitterHandle', e.target.value)}
                            placeholder="@companyHandle"
                        />
                    </div>
                </div>

                <div className={styles.card}>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Structured Data (Schema.org)</h2>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                        This helps Google understand your organization entity.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Organization Name</label>
                            <input
                                className={styles.input}
                                value={formData.seo?.schema?.organizationName || ''}
                                onChange={(e) => handleSchemaChange('organizationName', e.target.value)}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Contact Phone</label>
                            <input
                                className={styles.input}
                                value={formData.seo?.schema?.contactPhone || ''}
                                onChange={(e) => handleSchemaChange('contactPhone', e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Logo URL</label>
                        <input
                            className={styles.input}
                            value={formData.seo?.schema?.logoUrl || ''}
                            onChange={(e) => handleSchemaChange('logoUrl', e.target.value)}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Full Address</label>
                        <input
                            className={styles.input}
                            value={formData.seo?.schema?.address || ''}
                            onChange={(e) => handleSchemaChange('address', e.target.value)}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}
