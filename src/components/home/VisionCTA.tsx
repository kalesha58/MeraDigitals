'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from '@/styles/VisionCTA.module.css';

export default function VisionCTA() {
    return (
        <section className={styles.section}>
            <div className="container">
                <motion.div
                    className={styles.banner}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.content}>
                        <motion.h2
                            className={styles.title}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            Give your vision a voice.
                        </motion.h2>
                        <motion.p
                            className={styles.subtitle}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            Content with context that connects your vision to the right audience, perfectly.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <Link href="/contact-us" className={styles.connectBtn}>
                                <div className={styles.iconCircle}>
                                    <ArrowRight size={20} />
                                </div>
                                <span>Connect Now</span>
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        className={styles.imageWrapper}
                        initial={{ opacity: 0, x: 50, rotate: 5 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
                    >
                        <img
                            src="/elephant-vision.png"
                            alt="Visionary Elephant"
                            className={styles.elephantImage}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
