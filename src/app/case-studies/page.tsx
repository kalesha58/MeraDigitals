'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Filter } from 'lucide-react';
import styles from '@/styles/Home.module.css'; // Reusing some base styles

export default function CaseStudiesPage() {
    const caseStudies = [
        {
            title: "E-commerce Growth Strategy",
            category: "Digital Marketing",
            result: "+240% Sales Increase",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
            description: "How we helped a leading retail brand dominate the digital marketplace through precision-targeted performance marketing."
        },
        {
            title: "Real Estate Lead Gen",
            category: "Performance Marketing",
            result: "500+ Qualified Leads/Mo",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
            description: "A comprehensive lead generation funnel that transformed a local developer into a regional market leader."
        },
        {
            title: "Healthcare Brand Awareness",
            category: "Social Media",
            result: "2M+ Impressions",
            image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop",
            description: "Strategizing content that builds trust and engagement for a multi-specialty hospital chain."
        }
    ];

    return (
        <main style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
            <div className="container">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>Our <span variant="gradient" style={{ color: 'var(--brand-orange)' }}>Case Studies</span></h1>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem' }}>
                        Discover how we've helped brands across industries achieve extraordinary growth through data-driven strategies and creative excellence.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{ 
                                background: 'var(--bg-secondary)', 
                                borderRadius: '24px', 
                                overflow: 'hidden', 
                                border: '1px solid var(--glass-border)',
                                position: 'relative'
                            }}
                        >
                            <div style={{ height: '240px', overflow: 'hidden' }}>
                                <img src={study.image} alt={study.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '2rem' }}>
                                <span style={{ color: 'var(--brand-orange)', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase' }}>{study.category}</span>
                                <h3 style={{ margin: '0.5rem 0 1rem 0', fontSize: '1.5rem' }}>{study.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>{study.description}</p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ background: 'var(--accent-glow)', padding: '0.5rem 1rem', borderRadius: '100px', color: 'var(--brand-orange)', fontWeight: 'bold' }}>
                                        {study.result}
                                    </div>
                                    <button style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        View Case <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    style={{ 
                        background: 'linear-gradient(90deg, var(--bg-secondary), var(--bg-tertiary))',
                        padding: '4rem',
                        borderRadius: '32px',
                        textAlign: 'center',
                        border: '1px solid var(--glass-border)',
                        marginBottom: '5rem'
                    }}
                >
                    <h2 style={{ marginBottom: '1rem' }}>Want to be our next Success Story?</h2>
                    <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>Let's build a strategy that takes your business to the next level.</p>
                    <button className="btn btn-primary" style={{ padding: '1rem 3rem' }}>Start Your Journey</button>
                </motion.div>
            </div>
        </main>
    );
}
