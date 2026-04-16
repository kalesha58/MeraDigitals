'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Calendar, Sparkles, Send, ArrowRight } from 'lucide-react';
import styles from '@/styles/ContactCTA.module.css';

export default function ContactCTA() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        businessType: '',
        budget: '',
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
                setFormData({ name: '', email: '', phone: '', businessType: '', budget: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    const whatsappLink = "https://wa.me/919959965998?text=Hi%20Mera%20Digitals,%20I'm%20interested%20in%20scaling%20my%20business!";

    return (
        <section className={styles.section} id="contact-us">
            <div className="container">
                <div className={styles.contentGrid}>
                    {/* Left Side: CTA Info */}
                    <motion.div
                        className={styles.ctaSide}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.badge}>
                            <div className={styles.badgeIcon}>
                                <div className={styles.badgeCircle} />
                                <div className={styles.badgeLine} />
                            </div>
                            <span>Ready to Grow?</span>
                        </div>
                        <h2 className={styles.title}>Ready to Scale Your Business?</h2>
                        <p className={styles.description}>
                            Talk to our experts today and get a customized marketing plan tailored to your business goals.
                        </p>

                        <div className={styles.ctaButtons}>
                            <a href="tel:+919959965998" className={`${styles.ctaBtn} ${styles.callBtn}`}>
                                <span><Phone size={20} /> Call Now</span>
                                <ArrowRight size={18} />
                            </a>
                            <a href="#booking" className={`${styles.ctaBtn} ${styles.bookingBtn}`}>
                                <span><Calendar size={20} /> Book Free Strategy Call</span>
                                <ArrowRight size={18} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Side: Lead Form */}
                    <motion.div
                        className={styles.formSide}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.inputGrid}>
                                <div className={styles.inputGroup}>
                                    <label>Full Name *</label>
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
                                    <label>Phone Number *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 00000 00000"
                                        required
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>Business Type</label>
                                    <select
                                        name="businessType"
                                        value={formData.businessType}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Category</option>
                                        <option value="ecommerce">E-commerce</option>
                                        <option value="realestate">Real Estate</option>
                                        <option value="education">Education</option>
                                        <option value="healthcare">Healthcare</option>
                                        <option value="other">Other Business</option>
                                    </select>
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>Monthly Budget</label>
                                    <select
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Budget</option>
                                        <option value="small">Below ₹25k</option>
                                        <option value="medium">₹25k - ₹1 Lakh</option>
                                        <option value="large">₹1 Lakh - ₹5 Lakh</option>
                                        <option value="enterprise">Above ₹5 Lakh</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Your Email (Optional)</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="example@domain.com"
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Brief Business Detail</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your goals..."
                                    rows={4}
                                />
                            </div>

                            <button type="submit" className={styles.submitBtn} disabled={status === 'submitting'}>
                                {status === 'submitting' ? 'Processing...' : (
                                    <>
                                        Get Free Marketing Plan <ArrowRight size={20} />
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <motion.p 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{ color: '#22c55e', marginTop: '1rem', textAlign: 'center', fontWeight: 'bold' }}
                                >
                                    Success! Our experts will contact you soon.
                                </motion.p>
                            )}
                            {status === 'error' && (
                                <p style={{ color: '#ef4444', marginTop: '1rem', textAlign: 'center' }}>
                                    Something went wrong. Please try again or call us.
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
