export interface IExpertiseItem {
  number: string;
  title: string;
  desc: string;
}

export interface IServiceData {
  title: string;
  subtitle: string;
  heroImage: string;
  aboutTitle: string;
  description1: string;
  description2: string;
  servicesInclude: {
    description: string;
    items: string[];
  };
  galleryImages: [string, string];
  expertise: {
    description: string;
    items: IExpertiseItem[];
  };
  benefits: {
    description: string;
    items: string[];
  };
}

export const servicesData: Record<string, IServiceData> = {
  seo: {
    title: 'SEO',
    subtitle: 'Dominate Search Results & Drive Organic Growth',
    heroImage: '/images/branded/seo_hero.png',
    aboutTitle: 'About SEO Services',
    description1:
      'We empower brands to achieve digital dominance through precision-targeted SEO strategies. Our holistic approach ensures that your brand reaches the right audience at the right time.',
    description2:
      'From technical audits to authority building, we transform your search visibility into a consistent engine for high-quality lead generation and business growth.',
    servicesInclude: {
      description:
        'Our comprehensive SEO services are designed to increase your organic visibility and drive high-quality traffic that converts into loyal customers.',
      items: [
        'Technical SEO Audits',
        'On-Page Optimization',
        'Off-Page Link Building',
        'Local SEO Dominance',
        'Google business management',
        'Keyword Research',
      ],
    },
    galleryImages: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=700&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=700&auto=format&fit=crop',
    ],
    expertise: {
      description:
        'We leverage deep technical expertise and industry insights to deliver SEO results that matter for your bottom line.',
      items: [
        {
          number: '01',
          title: 'Technical SEO Audit',
          desc: 'We identify and fix underlying technical issues that hinder your search performance.',
        },
        {
          number: '02',
          title: 'Keyword Research & Strategy',
          desc: 'Targeting the right terms that drive actual business value and customer intent.',
        },
        {
          number: '03',
          title: 'On-Page Optimization',
          desc: 'Refining your content and structure to perfectly align with search engine algorithms.',
        },
        {
          number: '04',
          title: 'Link Building',
          desc: 'Acquiring high-authority backlinks to boost your domain authority and rankings.',
        },
        {
          number: '05',
          title: 'Google business management',
          desc: 'Creating valuable content that resonates with users and satisfies search intent.',
        },
        {
          number: '06',
          title: 'Analytics & Reporting',
          desc: 'Detailed tracking and insights to measure progress and optimize for performance.',
        },
      ],
    },
    benefits: {
      description:
        'Achieve sustainable growth and higher rankings with our proven SEO methodologies.',
      items: [
        'Higher Search Engine Rankings',
        'Increased Organic Traffic',
        'Better ROI on Marketing Spend',
      ],
    },
  },

  'media-buying': {
    title: 'Media Buying',
    subtitle: 'Maximize ROI with Precision Targeting',
    heroImage: '/images/branded/media_buying_hero.png',
    aboutTitle: 'About Media Buying Services',
    description1:
      'Stop wasting ad spend on generic campaigns. Our media buying experts design high-performance ads that target your ideal customers with surgical precision.',
    description2:
      'We leverage advanced data analytics and creative A/B testing to ensure your budget is invested in the most effective channels, maximizing your ROAS.',
    servicesInclude: {
      description:
        'Our media buying strategy focuses on high-intent audiences and high-converting creatives to maximize your return on ad spend.',
      items: [
        'Meta Ads Management',
        'Google Ads Campaigns',
        'Audience Segmentation',
        'Creative A/B Testing',
        'Retargeting Campaigns',
        'Budget Optimization',
        'Performance Reporting',
        'Cross-Channel Strategy',
      ],
    },
    galleryImages: [
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=700&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=700&auto=format&fit=crop',
    ],
    expertise: {
      description:
        'We combine performance data with creative excellence to scale your ad accounts efficiently.',
      items: [
        {
          number: '01',
          title: 'Campaign Strategy',
          desc: 'Developing a roadmap that aligns your ad spend with specific business objectives.',
        },
        {
          number: '02',
          title: 'Ad Creative Design',
          desc: 'Crafting scrolls-stopping visuals and copy that demand attention and drive clicks.',
        },
        {
          number: '03',
          title: 'Audience Targeting',
          desc: 'Using demographic and behavioral data to reach users most likely to convert.',
        },
        {
          number: '04',
          title: 'Bid Management',
          desc: 'Optimizing your bids in real-time to maintain competitive positions at the best price.',
        },
        {
          number: '05',
          title: 'Conversion Tracking',
          desc: 'Implementing robust tracking to measure every action from click to purchase.',
        },
        {
          number: '06',
          title: 'ROI Reporting',
          desc: 'Transparent data on your ad performance, showing exactly where your money goes.',
        },
      ],
    },
    benefits: {
      description:
        'Experience the power of precision-targeted media buying that drives real business results.',
      items: [
        'Higher Conversion Rates for Every Dollar Spent',
        'Access to Premium Ad Inventory and Placements',
        'Data-Driven Insights to Refine Your Marketing Mix',
      ],
    },
  },

  'website-development': {
    title: 'Web Development',
    subtitle: 'High-Performance Next.js Applications',
    heroImage: '/images/branded/web_dev_hero.png',
    aboutTitle: 'About Web Development Services',
    description1:
      'Your website is your digital storefront. We build high-performance, Next.js applications that are visually stunning, lightning-fast, and optimized for conversions.',
    description2:
      'We combine cutting-edge technology with user-centric design to create digital experiences that not only look great but also drive real business results.',
    servicesInclude: {
      description:
        'We combine cutting-edge technology with user-centric design to create digital experiences that not only look great but also drive real business results.',
      items: [
        'Custom Next.js Websites',
        'E-commerce Solutions',
        'CMS Integration',
        'API Development',
        'Performance Optimization',
        'Mobile-First Design',
        'SEO-Friendly Architecture',
        'Ongoing Maintenance',
      ],
    },
    galleryImages: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=700&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=700&auto=format&fit=crop',
    ],
    expertise: {
      description:
        'Our development process prioritizes speed, security, and scalability to ensure your site is built for the future.',
      items: [
        {
          number: '01',
          title: 'Discovery & Planning',
          desc: 'Defining your site requirements, user personas, and core business goals.',
        },
        {
          number: '02',
          title: 'UI/UX Design',
          desc: 'Creating intuitive interfaces and seamless journeys that prioritize user experience.',
        },
        {
          number: '03',
          title: 'Frontend Development',
          desc: 'Building responsive and interactive layouts using modern Next.js and React.',
        },
        {
          number: '04',
          title: 'Backend & APIs',
          desc: 'Developing secure server-side logic and robust integrations for your application.',
        },
        {
          number: '05',
          title: 'Testing & QA',
          desc: 'Rigorous performance and security checks to ensure a flawless user experience.',
        },
        {
          number: '06',
          title: 'Launch & Support',
          desc: 'Executing a smooth deployment and providing ongoing maintenance and updates.',
        },
      ],
    },
    benefits: {
      description:
        'Get a high-performance website that elevates your brand and outclasses your competition.',
      items: [
        'Lightning-Fast Load Times for Better SEO',
        'Mobile-First Design for All Devices',
        'Secure and Scalable Architecture',
      ],
    },
  },

  'performance-marketing': {
    title: 'Performance Marketing',
    subtitle: 'Results-Oriented Campaigns That Scale Revenue',
    heroImage: '/images/branded/performance_marketing_hero.png',
    aboutTitle: 'About Performance Marketing Services',
    description1:
      'Growth is a science. Our performance marketing strategies are built on a foundation of data, focusing purely on measurable results and scaling what works.',
    description2:
      'We analyze every stage of your customer journey to identify bottlenecks and optimize for conversion, ensuring every dollar works harder.',
    servicesInclude: {
      description:
        'We analyze every stage of your customer journey to identify bottlenecks and optimize for conversion, ensuring every dollar works harder.',
      items: [
        'CRO Strategy',
        'Funnel Analysis',
        'Data Analytics',
        'Lead Generation',
        'Email Marketing',
        'Affiliate Marketing',
        'Attribution Modeling',
        'Growth Hacking',
      ],
    },
    galleryImages: [
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=700&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=700&auto=format&fit=crop',
    ],
    expertise: {
      description:
        'Our data-driven approach removes the guesswork from marketing, delivering predictable results and sustainable growth.',
      items: [
        {
          number: '01',
          title: 'Conversion Rate Optimization',
          desc: 'Systematically improving your site to turn more visitors into active customers.',
        },
        {
          number: '02',
          title: 'Funnel Design & Analysis',
          desc: 'Architecting customer journeys that move users efficiently toward a purchase.',
        },
        {
          number: '03',
          title: 'Data Analytics & Insights',
          desc: 'Deep dives into performance data to uncover hidden growth opportunities.',
        },
        {
          number: '04',
          title: 'Lead Generation Systems',
          desc: 'Building automated pipelines that deliver a consistent flow of qualified leads.',
        },
        {
          number: '05',
          title: 'Email Automation',
          desc: 'Nurturing your audience with personalized, triggered email campaigns.',
        },
        {
          number: '06',
          title: 'Performance Reporting',
          desc: 'Real-time dashboards that show exactly how your marketing is performing.',
        },
      ],
    },
    benefits: {
      description:
        'Scale your revenue with performance marketing that prioritizes ROI and customer acquisition.',
      items: [
        'Lower Customer Acquisition Costs (CAC)',
        'Data-Driven Decision Making',
        'Scalable Customer Acquisition Channels',
      ],
    },
  },

  branding: {
    title: 'Branding & Design',
    subtitle: 'Crafting Memorable Brand Identities',
    heroImage: '/images/branded/branding_design_hero.png',
    aboutTitle: 'About Branding & Design Services',
    description1:
      'In a crowded market, your brand identity is your strongest weapon. We help you craft a memorable brand that resonates with your audience and commands authority.',
    description2:
      'From visual design to brand voice, we ensure every touchpoint reflects your values and mission, building trust and loyalty with every interaction.',
    servicesInclude: {
      description:
        'From visual design to brand voice, we ensure every touchpoint reflects your values and mission, building trust and loyalty with every interaction.',
      items: [
        'Logo & Identity Design',
        'Brand Guidelines',
        'Visual Storytelling',
        'UI/UX Design',
        'Packaging Design',
        'Social Media Assets',
        'Brand Audit',
        'Rebranding Strategy',
      ],
    },
    galleryImages: [
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=700&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=700&auto=format&fit=crop',
    ],
    expertise: {
      description:
        'We help you define a unique brand identity that captures the essence of your business and appeals to your target audience.',
      items: [
        {
          number: '01',
          title: 'Brand Discovery',
          desc: 'Uncovering the unique essence and values that define your business.',
        },
        {
          number: '02',
          title: 'Logo & Visual Identity',
          desc: 'Designing iconic visuals that represent your brand across all platforms.',
        },
        {
          number: '03',
          title: 'Brand Guidelines',
          desc: 'Creating rules for consistency, ensuring your brand looks professional everywhere.',
        },
        {
          number: '04',
          title: 'Digital Design Assets',
          desc: 'Crafting high-quality visual content for ads, social media, and your website.',
        },
        {
          number: '05',
          title: 'Brand Voice & Messaging',
          desc: 'Defining how you speak to your audience to build connection and trust.',
        },
        {
          number: '06',
          title: 'Brand Rollout Strategy',
          desc: 'Planning a successful launch or rebrand to make a maximum impact.',
        },
      ],
    },
    benefits: {
      description:
        'Build a powerful, recognizable brand that fosters long-term customer loyalty and market authority.',
      items: [
        'Consistent Brand Voice Across All Platforms',
        'Higher Perceived Value and Market Authority',
        'Memorability in a Crowded Digital Landscape',
      ],
    },
  },

  'social-media-marketing': {
    title: 'Social Media Marketing',
    subtitle: 'Build Your Brand Presence Across Every Platform',
    heroImage: '/images/branded/social_media_hero.png',
    aboutTitle: 'About Social Media Marketing Services',
    description1:
      'Social media is where your community lives. We help you build an active and engaged presence across every platform that matters to your business.',
    description2:
      'We combine creative storytelling with data-driven social strategy to turn followers into fans and fans into loyal customers.',
    servicesInclude: {
      description:
        'We combine creative storytelling with data-driven social strategy to turn followers into fans and fans into loyal customers.',
      items: [
        'Strategic Content Planning',
        'Community Management',
        'Influencer Collaborations',
        'Social Media Ad Campaigns',
        'Platform-Specific Content',
        'Real-Time Engagement',
        'Performance Analytics',
        'Trend-Driven Strategy',
      ],
    },
    galleryImages: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=700&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=700&auto=format&fit=crop',
    ],
    expertise: {
      description:
        'We design and execute social media strategies that foster community engagement and drive traffic to your brand.',
      items: [
        {
          number: '01',
          title: 'Social Media Strategy Development',
          desc: 'Building a roadmap that aligns your social presence with business growth.',
        },
        {
          number: '02',
          title: 'Content Creation & Design',
          desc: 'Crafting scrolls-stopping posts that demand attention and drive engagement.',
        },
        {
          number: '03',
          title: 'Social Media Account Management',
          desc: 'Handling the daily operations of your accounts so you can focus on your business.',
        },
        {
          number: '04',
          title: 'Paid Advertising Campaigns',
          desc: 'Boosting your reach and conversions with precision-targeted social ads.',
        },
        {
          number: '05',
          title: 'Influencer Marketing',
          desc: 'Connecting your brand with the right voices to build authority and trust.',
        },
        {
          number: '06',
          title: 'Analytics & Performance Reporting',
          desc: 'Detailed monthly reports that show you exactly how your social is growing.',
        },
      ],
    },
    benefits: {
      description:
        'Harness the power of social media to build trust, authority, and high-quality traffic for your niche.',
      items: [
        'Build Absolute Trust and Authority in Your Niche',
        'Drive High-Quality Traffic Directly to Your Store',
        'Stay Top-of-Mind with Your Ideal Customer Base',
      ],
    },
  },
  'complete-marketing': {
    title: 'Complete Digital Marketing',
    subtitle: '360° Growth Strategy for Global Success',
    heroImage: '/images/branded/complete_marketing_hero.png',
    aboutTitle: 'About Complete Marketing Solutions',
    description1:
      'Why settle for fragmented results when you can have a unified 360° growth engine? Our Complete Digital Marketing package integrates every essential channel into a single, cohesive strategy.',
    description2:
      'We align SEO, Media Buying, Web Dev, and Social Media into a powerful synergy that maximizes your brand reach and accelerates your revenue growth.',
    servicesInclude: {
      description:
        'Our holistic approach ensures all your digital touchpoints work together to create a seamless customer journey and drive maximum conversions.',
      items: [
        'Omni-Channel Strategy',
        'Full-Funnel Optimization',
        'Consolidated Data Analytics',
        'Cross-Platform Branding',
        'Unified Content Ecosystem',
        'Scalable Growth Systems',
        'Dedicated Project Management',
        'Strategic ROI Consultation',
      ],
    },
    galleryImages: [
      'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=700&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=700&auto=format&fit=crop',
    ],
    expertise: {
      description:
        'We act as your dedicated digital growth partner, managing the complexity of modern marketing so you can focus on scale.',
      items: [
        {
          number: '01',
          title: 'Unified Digital Roadmap',
          desc: 'Creating a master strategy that balances brand awareness with direct response.',
        },
        {
          number: '02',
          title: 'Holistic Funnel Engineering',
          desc: 'Connecting every digital touchpoint to drive users toward a single conversion goal.',
        },
        {
          number: '03',
          title: 'Advanced Attribution Modeling',
          desc: 'Understanding exactly which channels are driving growth across your entire ecosystem.',
        },
        {
          number: '04',
          title: 'Creative Synergy',
          desc: 'Ensuring your brand voice and visual language are consistent across all platforms.',
        },
        {
          number: '05',
          title: 'Budget Fluidity',
          desc: 'Dynamically shifting ad spend to the highest-performing channels in real-time.',
        },
        {
          number: '06',
          title: 'Strategic Mastery',
          desc: 'Combining years of expertise into a single, high-performance growth team for your brand.',
        },
      ],
    },
    benefits: {
      description:
        'Simplify your marketing and amplify your results with our most comprehensive solution.',
      items: [
        'Unprecedented Brand Visibility and Growth',
        'Simplified Management and Reporting',
        'Maximum Efficiency and Return on Investment',
      ],
    },
  },
  orm: {
    title: 'Online Reputation Management',
    subtitle: 'Protect Your Brand, Build Absolute Trust',
    heroImage: '/images/branded/orm_hero.png',
    aboutTitle: 'About ORM Services',
    description1:
      'In the digital age, your reputation is your most valuable currency. We help you build, monitor, and protect your brand identity across the entire web.',
    description2:
      'From managing reviews to suppressing negative sentiment, our ORM experts ensure that the first impression your customers see is one of trust and authority.',
    servicesInclude: {
      description:
        'We proactively shape the conversation around your brand, ensuring your digital footprint reflects your true excellence.',
      items: [
        'Crisis Management',
        'Review Monitoring & Response',
        'Search Result Suppression',
        'Positive Authority Building',
        'Brand sentiment Analysis',
        'Social Media Monitoring',
        'Wikipedia Navigation',
        'Strategic PR Placments',
      ],
    },
    galleryImages: [
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=700&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521791136064-7986c2959d9c?q=80&w=700&auto=format&fit=crop',
    ],
    expertise: {
      description:
        'We use advanced psychological and technical strategies to steer the public perception of your brand in the right direction.',
      items: [
        {
          number: '01',
          title: 'Sentiment Monitoring',
          desc: 'Tracking brand mentions in real-time to address issues before they escalate.',
        },
        {
          number: '02',
          title: 'Authority Google business management',
          desc: 'Flooding search results with high-quality, positive content that you control.',
        },
        {
          number: '03',
          title: 'Review Management Systems',
          desc: 'Implementing workflows to systematically increase your positive feedback loop.',
        },
        {
          number: '04',
          title: 'Technical De-Indexing',
          desc: 'Using legal and technical means to remove unfair or outdated negative content.',
        },
        {
          number: '05',
          title: 'Stakeholder Trust Building',
          desc: 'Engaging with your community to foster a culture of transparency and reliability.',
        },
        {
          number: '06',
          title: 'Impact Assessment',
          desc: 'Regular reporting on sentiment shifts and the strength of your digital authority.',
        },
      ],
    },
    benefits: {
      description:
        'Command respect and dominate your niche with a pristine online reputation.',
      items: [
        'Enhanced Credibility and Customer Trust',
        'Improved Search Result Visibility',
        'Resilience Against Competitive Threats',
      ],
    },
  },
};
