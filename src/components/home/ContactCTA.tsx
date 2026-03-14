'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import styles from '@/styles/ContactCTA.module.css';

export default function ContactCTA() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', service: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    return (
        <section className={styles.section} id="contact-us">
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.badge}>
                        <div className={styles.badgeIcon}>
                            <div className={styles.badgeCircle} />
                            <div className={styles.badgeLine} />
                        </div>
                        <span>Contact Us</span>
                    </div>
                    <h2 className={styles.title}>Get Your Free Quote Today!</h2>
                </motion.div>

                <div className={styles.contentGrid}>
                    {/* Form Side */}
                    <motion.div
                        className={styles.formSide}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.inputGrid}>
                                <div className={styles.inputGroup}>
                                    <label>Your Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Ex. John Doe"
                                        required
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="example@gmail.com"
                                        required
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>Phone *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter Phone Number"
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>Service Interested In *</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="" disabled>Select Service</option>
                                        <option value="seo">SEO Mastery</option>
                                        <option value="ads">Google Ads</option>
                                        <option value="social">Social Media Marketing</option>
                                        <option value="dev">Website Development</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Your Message *</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Enter here.."
                                    rows={8}
                                    required
                                />
                            </div>

                            <button type="submit" className={styles.submitBtn} disabled={status === 'submitting'}>
                                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </motion.div>

                    {/* Image Side */}
                    <div className={styles.imageSide}>
                        <motion.div
                            className={styles.imageWrapper}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                                alt="Team Working"
                                className={styles.mainImage}
                            />
                            <div className={styles.sparkle1} />
                            <div className={styles.sparkle2} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
