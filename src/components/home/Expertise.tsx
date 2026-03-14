'use client';

import React from 'react';
import styles from '@/styles/Expertise.module.css';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Search,
    Share2,
    MousePointerClick,
    FileText,
    Monitor,
    Smartphone,
    Rocket,
    LayoutGrid // Default fallback icon
} from 'lucide-react';

// Icon mapping for dynamic rendering
const ICON_MAP: Record<string, React.ElementType> = {
    'Search': Search,
    'Share2': Share2,
    'MousePointerClick': MousePointerClick,
    'FileText': FileText,
    'Monitor': Monitor,
    'Smartphone': Smartphone,
    'Rocket': Rocket,
    'LayoutGrid': LayoutGrid
};

const defaultItems = [
    {
        id: 'performance',
        title: 'PERFORMANCE MARKETING',
        description: 'Drive measurable results with ROI-focused campaigns, utilizing Google Ads, Facebook Ads, and programmatic advertising.',
        icon: 'Rocket',
        image: '/expertise-performance.png',
        link: '/services/ppc',
    },
    {
        id: 'social',
        title: 'SOCIAL MEDIA MARKETING',
        description: 'Build and engage your audience across platforms like Instagram, Facebook, LinkedIn, and Twitter with strategic content.',
        icon: 'Share2',
        image: '/expertise-social.png',
        link: '/services/social-media',
    },
    {
        id: 'seo',
        title: 'SEO & CONTENT MARKETING',
        description: 'Improve search rankings and organic visibility with expert keyword optimization, technical SEO, and high-quality content.',
        icon: 'Search',
        image: '/expertise-seo.png',
        link: '/services/seo',
    },
    {
        id: 'ppc',
        title: 'PAY-PER-CLICK ADVERTISING',
        description: 'Generate immediate traffic and leads with precisely optimized Google Ads, Bing Ads, and display campaigns.',
        icon: 'MousePointerClick',
        image: '/expertise-ppc.png',
        link: '/services/ppc',
    },
    {
        id: 'web',
        title: 'WEB & LANDING PAGE',
        description: 'Create high-converting landing pages and modern websites that turn visitors into loyal customers through expert design.',
        icon: 'Monitor',
        image: '/expertise-web.png',
        link: '/services/web',
    }
];

interface ExpertiseProps {
    data?: {
        title?: string;
        subtitle?: string;
        items?: Array<{
            id: string;
            title: string;
            description: string;
            icon: string;
            image: string;
            link: string;
        }>;
    };
}

export default function Expertise({ data }: ExpertiseProps) {
    const title = data?.title || "Our Expertise";
    const subtitle = data?.subtitle || "Strategic solutions designed to amplify your brand's voice.";
    const items = data?.items || defaultItems;
    const [activeIndex, setActiveIndex] = React.useState(2); // Start with SEO expanded

    return (
        <section className={styles.section}>
            <div className={styles.bgGlow} />
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-gradient">{title}</h2>
                        <p>{subtitle}</p>
                    </motion.div>
                </div>

                <div className={styles.accordionContainer}>
                    {items.map((item, index) => {
                        const IconComponent = ICON_MAP[item.icon] || LayoutGrid;
                        const isActive = activeIndex === index;

                        return (
                            <motion.div
                                key={item.id}
                                className={`${styles.accordionItem} ${isActive ? styles.active : ''}`}
                                onMouseEnter={() => setActiveIndex(index)}
                                onClick={() => setActiveIndex(index)}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* Background Image with Overlay */}
                                <div
                                    className={styles.itemBg}
                                    style={{ backgroundImage: `url(${item.image})` }}
                                >
                                    <div className={styles.overlay} />
                                </div>

                                <div className={styles.itemContent}>
                                    <div className={styles.iconWrapper}>
                                        <IconComponent size={32} strokeWidth={1.5} />
                                    </div>

                                    <div className={styles.textContent}>
                                        <h3 className={styles.itemTitle}>{item.title}</h3>
                                        <div className={styles.descriptionWrapper}>
                                            <p className={styles.itemDescription}>{item.description}</p>
                                            <motion.div
                                                className={styles.viewMore}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: isActive ? 1 : 0 }}
                                            >
                                                <span>Learn More</span>
                                                <ArrowRight size={18} />
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Vertical Title for Collapsed State */}
                                    {!isActive && (
                                        <div className={styles.verticalTitle}>
                                            {item.title}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
