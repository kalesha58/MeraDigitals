'use client';

import React from 'react';
import { Zap, Cloud, Database, Rocket, Brain, Code, Layers, Activity } from 'lucide-react';
import styles from '@/styles/Home.module.css';
import { motion } from 'framer-motion';

const brands = [
    { name: 'InnovateLabs', icon: Zap },
    { name: 'DigitalFlow', icon: Cloud },
    { name: 'CloudSync', icon: Database },
    { name: 'DataVault', icon: Rocket },
    { name: 'NextGen', icon: Brain },
    { name: 'SmartCode', icon: Code },
    { name: 'TechStack', icon: Layers },
    { name: 'PulseMedia', icon: Activity },
];

export default function TrustedBy() {
    return (
        <motion.section
            className={styles.trustedSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="container">
                <p className={styles.trustedTitle}>Trusted By Industry Leaders</p>

                <div className={styles.marqueeWrapper}>
                    <div className={styles.marqueeTrack}>
                        {/* First set of logos */}
                        {brands.map((brand, index) => (
                            <div key={`brand-1-${index}`} className={styles.brandCard}>
                                <brand.icon size={20} className={styles.brandIcon} />
                                <span className={styles.brandName}>{brand.name}</span>
                            </div>
                        ))}

                        {/* Second set of logos for seamless loop */}
                        {brands.map((brand, index) => (
                            <div key={`brand-2-${index}`} className={styles.brandCard}>
                                <brand.icon size={20} className={styles.brandIcon} />
                                <span className={styles.brandName}>{brand.name}</span>
                            </div>
                        ))}

                        {/* Third set to ensure no gaps on wide screens */}
                        {brands.map((brand, index) => (
                            <div key={`brand-3-${index}`} className={styles.brandCard}>
                                <brand.icon size={20} className={styles.brandIcon} />
                                <span className={styles.brandName}>{brand.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
