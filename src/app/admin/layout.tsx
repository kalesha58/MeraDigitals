import styles from '@/styles/Admin.module.css';
import AdminSidebar from '@/components/admin/AdminSidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className={styles.mobileRestriction}>
                <div style={{ marginBottom: '1rem' }}>
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                </div>
                <h1>Desktop View Required</h1>
                <p>
                    For the best experience and full functionality, the Admin Panel is restricted to desktop devices.
                    <br /><br />
                    Please open this page on a larger screen.
                </p>
            </div>

            <div className={styles.adminWrapper}>
                <AdminSidebar />
                <main className={styles.content}>
                    {children}
                </main>
            </div>
        </>
    );
}
