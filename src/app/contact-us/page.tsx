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
                  <p>1st floor, Laxmi Devi Apartments, D12, opp. Telanga Co Op Bank, near Vellanki Foods, Vamika Arcade, Madhura Nagar, Hyderabad, Telangana 500038</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                  <Mail size={24} />
                </div>
                <div className={styles.infoText}>
                  <h4>Email Us</h4>
                  <p>meradigitals@gmail.com</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                  <Phone size={24} />
                </div>
                <div className={styles.infoText}>
                  <h4>Call Us</h4>
                  <p>+91 99599 65998</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.mapContainer}>
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6025219597374!2d78.4357773!3d17.4289417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb974759089999%3A0x6b4b4b4b4b4b4b4b!2sLaxmi%20Devi%20Apartments%2C%20Madhura%20Nagar%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1714041234567" 
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
