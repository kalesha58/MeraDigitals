'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, Newspaper, ExternalLink, Share2, ArrowRight } from 'lucide-react';

export default function MediaPage() {
    const newsItems = [
        {
            title: "Mera Digitals Named 'Agency of the Year' at Digital Excellence Awards",
            source: "Business Standard",
            date: "Sept 12, 2025",
            type: "News",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "How Performance Marketing is Reshaping the Real Estate Sector",
            source: "Financial Times",
            date: "Aug 28, 2025",
            type: "Press Release",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
        },

        {
            title: "Future of Influencer Marketing: Trends for 2026",
            source: "Media Weekly",
            date: "July 15, 2025",
            type: "Thought Leadership",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop"
        }
    ];

    return (
        <main style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
            <div className="container">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ 
                        background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)',
                        padding: '5rem 2rem',
                        borderRadius: '40px',
                        textAlign: 'center',
                        marginBottom: '4rem',
                        border: '1px solid var(--glass-border)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', background: 'var(--accent-glow)', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.3 }}></div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 800, marginBottom: '1rem' }}
                    >
                        Media <span style={{ color: 'var(--brand-orange)' }}>Room</span>
                    </motion.h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
                        Stay updated with the latest news, press releases, and industry insights from Mera Digitals.
                    </p>
                </motion.div>

                <div style={{ marginBottom: '5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '2rem' }}>Latest Headlines</h2>
                        <button style={{ color: 'var(--brand-orange)', background: 'none', border: 'none', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                            View Archive <ExternalLink size={18} />
                        </button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2.5rem' }}>
                        {newsItems.map((news, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{ 
                                    display: 'flex', 
                                    flexDirection: 'column',
                                    gap: '1.5rem',
                                    paddingBottom: '2rem',
                                    borderBottom: '1px solid var(--glass-border)'
                                }}
                            >
                                <div style={{ height: '260px', borderRadius: '24px', overflow: 'hidden', position: 'relative' }}>
                                    <img src={news.image} alt={news.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'var(--bg-primary)', padding: '0.4rem 1rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                                        {news.type}
                                    </div>
                                </div>
                                <div>
                                    <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
                                        <span>{news.source}</span>
                                        <span>•</span>
                                        <span>{news.date}</span>
                                    </div>
                                    <h3 style={{ fontSize: '1.4rem', lineHeight: '1.4', marginBottom: '1.5rem' }}>{news.title}</h3>
                                    <button style={{ background: 'none', border: 'none', color: 'var(--brand-orange)', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        Read More <ArrowRight size={16} />
                                    </button>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>

                {/* Video / Interview Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    style={{ 
                        background: 'var(--bg-secondary)', 
                        borderRadius: '40px', 
                        padding: '4rem', 
                        display: 'grid', 
                        gridTemplateColumns: '1fr 1fr', 
                        gap: '4rem',
                        alignItems: 'center',
                        marginBottom: '5rem',
                        border: '1px solid var(--glass-border)'
                    }}
                >
                    <div>
                        <span style={{ color: 'var(--brand-orange)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.9rem' }}>Featured Interview</span>
                        <h2 style={{ fontSize: '2.5rem', margin: '1rem 0 1.5rem 0' }}>The Future of AI in Advertising</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Our CEO discusses the transformative power of AI and data in modern marketing strategies on the 'Tech Growth' podcast.</p>
                        <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            Read Full Interview
                        </button>

                    </div>
                    <div style={{ height: '350px', borderRadius: '24px', overflow: 'hidden' }}>
                        <img src="https://images.unsplash.com/photo-1593642532400-2682810df593?q=80&w=800&auto=format&fit=crop" alt="AI Interview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>


                </motion.div>
            </div>
        </main>
    );
}
