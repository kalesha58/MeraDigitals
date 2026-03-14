export const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About Us' },
    {
        href: '/services', label: 'Services', isMega: true, subItems: [
            { href: '/services/seo', label: 'SEO Services', icon: 'Search' },
            { href: '/services/google-ads', label: 'Google Ads', icon: 'DollarSign' },
            { href: '/services/website-development', label: 'Web Development', icon: 'Code' },
            { href: '/services/online-reputation-management', label: 'Reputation Management', icon: 'ShieldCheck' },
            { href: '/services/branding', label: 'Branding', icon: 'Award' },
            { href: '/services/performance-marketing', label: 'Performance Marketing', icon: 'TrendingUp' },
            { href: '/services/media-buying', label: 'Media Buying', icon: 'Megaphone' },
        ]
    },
    { href: '/blogs', label: 'Blogs' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact-us', label: 'Contact Us' },
];

export const SOCIAL_LINKS = [
    { href: 'https://twitter.com', icon: 'Twitter' },
    { href: 'https://linkedin.com', icon: 'Linkedin' },
    { href: 'https://instagram.com', icon: 'Instagram' },
];

export const CONTACT_INFO = {
    address: '123 Innovation Drive, Silicon Valley, CA',
    email: 'hello@agency.com',
    phone: '+1 (555) 123-4567',
};
