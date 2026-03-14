'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Calendar, Mail, Phone, User, MessageSquare } from 'lucide-react';
import styles from '@/styles/Admin.module.css';

interface Inquiry {
    id: string;
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    submittedAt: string;
    status: string;
}

export default function AdminInquiries() {
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const [filteredInquiries, setFilteredInquiries] = useState<Inquiry[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch inquiries (simulating fetching from our JSON file via API)
        // We need an API route to GET the data. 
        // For now, I'll fetch from the contact API if I add a GET method there, 
        // or create a new API route for admin fetching. 
        // Let's assume we'll create /api/admin/inquiries

        const fetchInquiries = async () => {
            try {
                const res = await fetch('/api/admin/inquiries');
                if (res.ok) {
                    const data = await res.json();
                    setInquiries(data);
                    setFilteredInquiries(data);
                }
            } catch (error) {
                console.error('Failed to fetch inquiries', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchInquiries();
    }, []);

    useEffect(() => {
        const results = inquiries.filter(inquiry =>
            inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            inquiry.service.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredInquiries(results);
    }, [searchTerm, inquiries]);

    return (
        <div className={styles.content}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <div>
                        <h1 className={styles.title}>User Inquiries</h1>
                        <p style={{ color: 'var(--text-secondary)' }}>Manage contact form submissions</p>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <Search size={20} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                padding: '0.75rem 1rem 0.75rem 2.5rem',
                                borderRadius: '8px',
                                border: '1px solid var(--glass-border)',
                                background: 'var(--bg-secondary)',
                                color: 'var(--text-primary)',
                                outline: 'none',
                                width: '300px'
                            }}
                        />
                    </div>
                </div>

                {isLoading ? (
                    <p>Loading inquiries...</p>
                ) : (
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {filteredInquiries.length === 0 ? (
                            <div style={{ padding: '2rem', textAlign: 'center', background: 'var(--bg-secondary)', borderRadius: '12px' }}>
                                No inquiries found.
                            </div>
                        ) : (
                            filteredInquiries.map((inquiry) => (
                                <motion.div
                                    key={inquiry.id}
                                    className={styles.glassCard}
                                    style={{ padding: '1.5rem', borderRadius: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)' }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold' }}>
                                                {inquiry.name.charAt(0).toUpperCase()}
                                            </div>
                                            <div>
                                                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{inquiry.name}</h3>
                                                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{inquiry.service ? inquiry.service.toUpperCase() : 'GENERAL'}</p>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                            <Calendar size={14} />
                                            {new Date(inquiry.submittedAt).toLocaleDateString()} at {new Date(inquiry.submittedAt).toLocaleTimeString()}
                                        </div>
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem', fontSize: '0.9rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <Mail size={16} color="var(--accent-primary)" />
                                            <a href={`mailto:${inquiry.email}`} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>{inquiry.email}</a>
                                        </div>
                                        {inquiry.phone && (
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <Phone size={16} color="var(--accent-primary)" />
                                                <a href={`tel:${inquiry.phone}`} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>{inquiry.phone}</a>
                                            </div>
                                        )}
                                    </div>

                                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', fontSize: '0.95rem', lineHeight: '1.5' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                                            <MessageSquare size={14} /> Message
                                        </div>
                                        {inquiry.message}
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </div>
                )}
            </motion.div>
        </div>
    );
}
