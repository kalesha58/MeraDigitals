'use client';

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import styles from '@/styles/Contact.module.css';

export default function ContactPage() {
  return (
    <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
      <div className={styles.introSection}>
        <h1 className="text-gradient">Get In Touch</h1>
        <p className={styles.subtitle}>Ready to start your project? Let's talk.</p>
      </div>

      <div className={styles.contactGrid}>
        <div className={styles.formCard}>
          <h2 style={{ marginBottom: '2rem' }}>Send Us a Message</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Name</label>
                <input type="text" placeholder="John Doe" className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Email</label>
                <input type="email" placeholder="john@example.com" className={styles.input} />
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Subject</label>
              <select className={styles.select}>
                <option>Start a Project</option>
                <option>General Inquiry</option>
                <option>Careers</option>
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Message</label>
              <textarea rows={5} placeholder="Tell us about your needs..." className={styles.textarea}></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Send Message <Send size={18} className="ml-2" />
            </button>
          </form>
        </div>

        <div className={styles.contactInfo}>
          <div>
            <h2 style={{ marginBottom: '1.5rem' }}>Contact Information</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                  <MapPin size={24} />
                </div>
                <div className={styles.infoText}>
                  <h4>Visit Us</h4>
                  <p>123 Innovation Drive, Tech City, CA</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                  <Mail size={24} />
                </div>
                <div className={styles.infoText}>
                  <h4>Email Us</h4>
                  <p>hello@agency.com</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                  <Phone size={24} />
                </div>
                <div className={styles.infoText}>
                  <h4>Call Us</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.mapContainer}>
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017946261!3d37.757814996609724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1645564756836!5m2!1sen!2sus" 
               width="100%" 
               height="100%" 
               style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
               allowFullScreen 
               loading="lazy"
             ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
