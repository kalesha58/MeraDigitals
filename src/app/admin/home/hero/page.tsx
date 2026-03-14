'use client';

import { useState, useEffect } from 'react';
import styles from '@/styles/Admin.module.css';

interface ExpertiseItem {
    id: string;
    title: string;
    description: string;
    icon: string;
    link: string;
}

export default function AdminHeroEditor() {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');

    const [formData, setFormData] = useState({
        hero: {
            badge: '',
            titlePart1: '',
            titleGradient: '',
            titlePart2: '',
            subtitle: '',
            ctaText: '',
            ctaLink: '',
            secondaryCtaText: '',
            mainImage: '',
            secondaryImage: ''
        },
        seo: {
            title: '',
            description: ''
        },
        expertise: {
            title: '',
            subtitle: '',
            items: [] as ExpertiseItem[]
        }
    });

    useEffect(() => {
        fetch('/api/admin/home')
            .then(res => res.json())
            .then(data => {
                if (!data.expertise) {
                    data.expertise = { title: '', subtitle: '', items: [] };
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

    const handleChange = (section: string, field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [section]: {
                ...prev[section as keyof typeof prev],
                [field]: value
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
                <h1 className={styles.title}>Edit Hero Section</h1>
                <button className={styles.btn} onClick={handleSubmit} disabled={saving}>
                    {saving ? 'Saving...' : 'Save Changes'}
                </button>
            </div>

            {message && <div style={{ marginBottom: '1rem', color: message.includes('success') ? '#4ade80' : '#f87171' }}>{message}</div>}

            <form onSubmit={handleSubmit}>
                <div className={styles.card}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Badge Text</label>
                        <input
                            className={styles.input}
                            value={formData.hero?.badge || ''}
                            onChange={(e) => handleChange('hero', 'badge', e.target.value)}
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Title Start</label>
                            <input
                                className={styles.input}
                                value={formData.hero?.titlePart1 || ''}
                                onChange={(e) => handleChange('hero', 'titlePart1', e.target.value)}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Title Gradient</label>
                            <input
                                className={styles.input}
                                value={formData.hero?.titleGradient || ''}
                                onChange={(e) => handleChange('hero', 'titleGradient', e.target.value)}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Title End</label>
                            <input
                                className={styles.input}
                                value={formData.hero?.titlePart2 || ''}
                                onChange={(e) => handleChange('hero', 'titlePart2', e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Subtitle</label>
                        <textarea
                            className={styles.input}
                            rows={3}
                            value={formData.hero?.subtitle || ''}
                            onChange={(e) => handleChange('hero', 'subtitle', e.target.value)}
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Primary CTA Text</label>
                            <input
                                className={styles.input}
                                value={formData.hero?.ctaText || ''}
                                onChange={(e) => handleChange('hero', 'ctaText', e.target.value)}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Primary CTA Link</label>
                            <input
                                className={styles.input}
                                value={formData.hero?.ctaLink || ''}
                                onChange={(e) => handleChange('hero', 'ctaLink', e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Secondary CTA Text</label>
                        <input
                            className={styles.input}
                            value={formData.hero?.secondaryCtaText || ''}
                            onChange={(e) => handleChange('hero', 'secondaryCtaText', e.target.value)}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Main Image URL</label>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Paste a valid image URL to update dynamically.</p>
                        <input
                            className={styles.input}
                            value={formData.hero?.mainImage || ''}
                            onChange={(e) => handleChange('hero', 'mainImage', e.target.value)}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Secondary Image URL</label>
                        <input
                            className={styles.input}
                            value={formData.hero?.secondaryImage || ''}
                            onChange={(e) => handleChange('hero', 'secondaryImage', e.target.value)}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}
