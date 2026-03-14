import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Premium Digital Marketing Agency",
  description: "Elevate your brand with data-driven strategies and stunning design.",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    images: [
      {
        url: '/MER_DIGITALS_LOGO.png',
        width: 1200,
        height: 630,
        alt: 'Mera Digitals Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/MER_DIGITALS_LOGO.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>
          <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: -1 }}>
            <div className="bg-gradient-glow" style={{ top: -100, left: -100, opacity: 0.5 }}></div>
            <div className="bg-gradient-glow" style={{ bottom: -100, right: -100, opacity: 0.3, background: 'radial-gradient(circle, var(--accent-secondary) 0%, rgba(0,0,0,0) 70%)' }}></div>
          </div>

          <Header />
          <main style={{ minHeight: '100vh', padding: '0 0', position: 'relative', overflow: 'hidden' }}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
