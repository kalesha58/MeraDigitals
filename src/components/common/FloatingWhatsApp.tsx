'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import styles from '@/styles/FloatingWhatsApp.module.css';

export default function FloatingWhatsApp() {
    const whatsappNumber = "919959965998";
    const message = "Hi 👋 Welcome to Mera Digitals! Please share your business details. Our expert will contact you shortly.";
    const link = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.floatingBtn}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <div className={styles.pulse} />
            <MessageCircle size={32} />
            <span className={styles.tooltip}>Chat with us!</span>
        </motion.a>
    );
}
