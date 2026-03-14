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

export default function AdminExpertiseEditor() {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');

    const [formData, setFormData] = useState({
        hero: {},
        seo: {},
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

    const handleExpertiseItemChange = (index: number, field: string, value: string) => {
        setFormData(prev => {
            const newItems = [...(prev.expertise?.items || [])];
            newItems[index] = { ...newItems[index], [field]: value };
            return {
                ...prev,
                expertise: {
                    ...prev.expertise,
                    items: newItems
                }
            };
        });
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
                <h1 className={styles.title}>Edit Expertise Section</h1>
                <button className={styles.btn} onClick={handleSubmit} disabled={saving}>
                    {saving ? 'Saving...' : 'Save Changes'}
                </button>
            </div>

            {message && <div style={{ marginBottom: '1rem', color: message.includes('success') ? '#4ade80' : '#f87171' }}>{message}</div>}

            <form onSubmit={handleSubmit}>
                <div className={styles.card}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Section Title</label>
                        <input
                            className={styles.input}
                            value={formData.expertise?.title || ''}
                            onChange={(e) => handleChange('expertise', 'title', e.target.value)}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Section Subtitle</label>
                        <textarea
                            className={styles.input}
                            rows={2}
                            value={formData.expertise?.subtitle || ''}
                            onChange={(e) => handleChange('expertise', 'subtitle', e.target.value)}
                        />
                    </div>

                    <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', marginTop: '2rem', fontWeight: 600 }}>Cards (6 Fixed)</h3>

                    <div style={{ display: 'grid', gap: '2rem' }}>
                        {formData.expertise?.items?.map((item, index) => (
                            <div key={item.id} style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                    <span style={{ fontWeight: 700, opacity: 0.7 }}>Card #{index + 1}</span>
                                    <span style={{ opacity: 0.5, fontSize: '0.8rem' }}>ID: {item.id}</span>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                                    <div className={styles.formGroup} style={{ marginBottom: 0 }}>
                                        <label className={styles.label}>Title</label>
                                        <input
                                            className={styles.input}
                                            value={item.title}
                                            onChange={(e) => handleExpertiseItemChange(index, 'title', e.target.value)}
                                        />
                                    </div>
                                    <div className={styles.formGroup} style={{ marginBottom: 0 }}>
                                        <label className={styles.label}>Icon Name (Lucide)</label>
                                        <input
                                            className={styles.input}
                                            value={item.icon}
                                            onChange={(e) => handleExpertiseItemChange(index, 'icon', e.target.value)}
                                            placeholder="e.g. Search, Share2, Monitor"
                                        />
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Description</label>
                                    <textarea
                                        className={styles.input}
                                        rows={2}
                                        value={item.description}
                                        onChange={(e) => handleExpertiseItemChange(index, 'description', e.target.value)}
                                    />
                                </div>

                                <div className={styles.formGroup} style={{ marginBottom: 0 }}>
                                    <label className={styles.label}>Link</label>
                                    <input
                                        className={styles.input}
                                        value={item.link}
                                        onChange={(e) => handleExpertiseItemChange(index, 'link', e.target.value)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </form>
        </div>
    );
}
