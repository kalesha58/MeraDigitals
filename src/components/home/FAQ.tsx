
'use client';

import React, { useState } from 'react';
import styles from '@/styles/Home.module.css';
import { ChevronDown, ChevronUp, MessageCircle, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is the average fee for a digital marketing agency?",
            answer: "Our pricing is customized based on your specific business goals and project scope. We offer flexible engagement models including monthly retainers and project-based fees to ensure you get the best value for your investment."
        },
        {
            question: "How do you ensure my campaigns deliver measurable results?",
            answer: "We rely on data-driven strategies and advanced analytics to track every metric. From conversion rates to ROI, we provide transparent reporting so you can see exactly how your campaigns are performing."
        },
        {
            question: "What makes your performance-driven approach different from other agencies?",
            answer: "Unlike traditional agencies that focus on vanity metrics, we prioritize business outcomes. Our agile methodology allows us to continuously optimize campaigns in real-time to maximize efficiency and growth."
        },
        {
            question: "What kind of creative content do you produce?",
            answer: "Our creative team produces high-quality assets ranging from engaging social media graphics and videos to compelling ad copy and in-depth blog articles, all designed to resonate with your target audience."
        },
        {
            question: "Do you work with businesses of all sizes?",
            answer: "Yes, we partner with startups, SMEs, and enterprise-level organizations. Our scalable solutions are designed to adapt to the unique challenges and budgets of businesses at different growth stages."
        },
        {
            question: "Do you lock clients into long-term contracts?",
            answer: "We believe in earning your trust through results. While we recommend long-term strategies for sustainable growth, we offer flexible contract terms that don't lock you in unnecessarily."
        },
        {
            question: "What digital marketing channels should my business use?",
            answer: "The ideal mix depends on your industry and audience. We conduct a thorough market analysis to recommend the most effective channels, whether it's SEO, PPC, Social Media, or Email Marketing."
        }
    ];

    return (
        <section className={styles.faqSection}>
            <div className="container mx-auto px-4">
                <motion.h2
                    className={styles.faqTitle}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Have Questions? We&apos;ve Got Answers.
                </motion.h2>

                <motion.div
                    className={styles.faqContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                >
                    {/* Left Side - Accordion */}
                    <div className={styles.faqLeft}>
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                className={`${styles.faqItem} ${openIndex === index ? styles.active : ''}`}
                                variants={{
                                    hidden: { y: 20, opacity: 0 },
                                    visible: {
                                        y: 0,
                                        opacity: 1,
                                        transition: { type: "spring", stiffness: 50 }
                                    }
                                }}
                            >
                                <button
                                    className={styles.faqQuestion}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    {faq.question}
                                    <span className={styles.faqIcon}>
                                        {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </span>
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className={styles.faqAnswerWrapper}
                                        >
                                            <div className={styles.faqAnswer}>
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Side - Cards */}
                    <div className={styles.faqRight}>
                        {/* Blue Card */}
                        <motion.div
                            className={styles.faqContactCard}
                            variants={{
                                hidden: { x: 20, opacity: 0 },
                                visible: {
                                    x: 0,
                                    opacity: 1,
                                    transition: { duration: 0.5, delay: 0.2 }
                                }
                            }}
                        >
                            <div className={styles.faqCardIconWrapper}>
                                <MessageCircle size={32} className={styles.faqCardIcon} />
                                <div className={styles.iconDots}>
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                            <h3 className={styles.faqCardTitle}>You Have Different Question?</h3>
                            <p className={styles.faqCardText}>
                                Our team will answer all your Questions. We Ensure a quick response
                            </p>
                            <button className={styles.faqContactBtn}>Contact us</button>
                        </motion.div>

                        {/* White Card */}
                        <motion.div
                            className={styles.faqCallCard}
                            variants={{
                                hidden: { x: 20, opacity: 0 },
                                visible: {
                                    x: 0,
                                    opacity: 1,
                                    transition: { duration: 0.5, delay: 0.4 }
                                }
                            }}
                        >
                            <div className={styles.faqCallIconWrapper}>
                                <Phone size={28} />
                            </div>
                            <div className={styles.faqCallContent}>
                                <p className={styles.faqCallLabel}>Your Comfort, Your Priority</p>
                                <h3 className={styles.faqCallTitle}>24/7 Services</h3>
                            </div>
                            <button className={styles.faqCallBtn}>Call Now</button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
