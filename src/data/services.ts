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
  benefitsImage?: string;
  metrics?: { value: string; label: string }[];
  faq?: { question: string; answer: string }[];
}

export const servicesData: Record<string, IServiceData> = {
  seo: {
    title: 'SEO',
    subtitle: 'Dominate Search Results & Drive Organic Growth',
    heroImage: '/images/branded/seo_isometric_hero.png',
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
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
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
        'Enhanced Brand Authority and Trust',
        'Long-term, Compounding Results'
      ],
    },
    benefitsImage: '/images/branded/elephant_marketing_1774804545290.png',
    metrics: [
      { value: '150%', label: 'Avg. Organic Traffic Increase' },
      { value: 'Page 1', label: 'Rankings Achieved for Clients' },
      { value: '10K+', label: 'Target Keywords Ranked' },
      { value: '3x', label: 'Average ROI on SEO Spend' },
    ],
    faq: [
      {
        question: 'How long does it take to see SEO results?',
        answer: 'Typically, it takes 3 to 6 months taking an organic approach to start seeing significant movement in rankings and traffic. SEO is a long-term strategy that builds compounding value over time, unlike paid advertising which stops as soon as the budget runs out.'
      },
      {
        question: 'Do you guarantee #1 rankings on Google?',
        answer: 'No reputable SEO agency can guarantee specific #1 rankings due to the highly dynamic and proprietary nature of search algorithms. However, we guarantee a proven, data-driven methodology, complete transparency, and relentless effort to achieve top visibility for revenue-driving keywords.'
      },
      {
        question: 'What makes your SEO approach different from other agencies?',
        answer: 'We focus on revenue and conversions, not vanity metrics. While others might celebrate traffic that doesn\'t convert, our strategy tightly integrates deep technical SEO, high-intent content creation, and authoritative link building specifically designed to drive actual business growth and a measurable return on investment.'
      },
      {
        question: 'Do you only do on-page SEO?',
        answer: 'Our SEO approach is 360-degrees. We handle everything from Technical SEO (site speed, architecture, core web vitals) and On-Page optimization (content, meta tags, schema) to aggressive Off-Page link building and local SEO strategies to blanket the search engine results pages.'
      }
    ],
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
    benefitsImage: '/images/branded/elephant_marketing_1774804545290.png',
    metrics: [
      { value: '300%', label: 'Avg. Return on Ad Spend (ROAS)' },
      { value: '40%', label: 'Decrease in Cost Per Acquisition (CPA)' },
      { value: '$10M+', label: 'Ad Spend Managed' },
      { value: '50M+', label: 'Targeted Impressions Delivered' },
    ],
    faq: [
      {
        question: 'What platforms do you advertise on?',
        answer: 'We specialize in Meta Ads (Facebook & Instagram), Google Ads (Search, Display, Performance Max, YouTube), LinkedIn Ads, and TikTok Ads. Our media buying approach is platform-agnostic, meaning we go wherever your ideal audience spends their time and where you get the highest ROAS.'
      },
      {
        question: 'How do you optimize ad budgets?',
        answer: 'We deploy testing phases initially to gather data, focusing on high-performing ad creatives and audiences. Then we aggressively scale the winning segments while eliminating underperforming ones, ensuring every dollar spent goes towards maximum profitability.'
      },
      {
        question: 'Do you create the ad creatives as well?',
        answer: 'Yes! Our team of copywriters and graphic designers create scroll-stopping visual assets and highly persuasive copy tailored to each platform, continuously testing variables to see what converts best.'
      },
      {
        question: 'What is the minimum ad spend required?',
        answer: 'While we work with various budgets, we recommend a minimum ad spend of $1,500 - $3,000 per month so that the algorithms have enough data to learn, optimize, and deliver consistent, measurable results.'
      }
    ],
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
    benefitsImage: '/images/branded/elephant_web_dev_1774804511304.png',
    metrics: [
      { value: '99.9%', label: 'Uptime Guarantee' },
      { value: '2x', label: 'Average Conversion Rate Increase' },
      { value: '<2s', label: 'Average Page Load Time' },
      { value: '100%', label: 'Mobile Responsive Design' },
    ],
    faq: [
      {
        question: 'Do you build custom websites or use templates?',
        answer: 'We build 100% custom, high-performance web applications using modern frameworks like Next.js and React. This ensures your site is unique, scalable, and optimized for speed and SEO, unlike generic templates.'
      },
      {
        question: 'How long does it take to build a new website?',
        answer: 'A standard corporate website typically takes 4-8 weeks to design, develop, and test, while complex e-commerce platforms or custom web apps may take 10-16 weeks. We prioritize quality and rigorous testing before any launch.'
      },
      {
        question: 'Will my website be mobile-friendly and SEO optimized?',
        answer: 'Absolutely. We employ a mobile-first design approach and build technical SEO best practices directly into the architecture (fast load times, proper meta structures, semantic HTML) from day one.'
      },
      {
        question: 'Do you provide maintenance and updates after launch?',
        answer: 'Yes, we offer comprehensive ongoing support, security updates, and performance tuning packages to ensure your digital storefront continues to operate flawlessly and scale with your business.'
      }
    ],
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
    benefitsImage: '/images/branded/elephant_marketing_1774804545290.png',
    metrics: [
      { value: '45%', label: 'Avg. Decrease in CAC' },
      { value: '4x', label: 'Average ROI on Total Spend' },
      { value: '150%', label: 'Increase in Qualified Leads' },
      { value: '24/7', label: 'Continuous Funnel Optimization' },
    ],
    faq: [
      {
        question: 'What is performance marketing vs. traditional marketing?',
        answer: 'Traditional marketing often focuses on brand awareness and reach, whereas performance marketing is strictly focused on measurable actions—like clicks, leads, and sales. You only pay for results, making it highly cost-effective and scalable.'
      },
      {
        question: 'How do you track conversions and attribution?',
        answer: 'We deploy advanced tracking infrastructure across all your digital assets, utilizing server-side tracking, unified analytics dashboards, and multi-touch attribution models to identify exactly which channels drive the highest quality conversions.'
      },
      {
        question: 'Do you help with conversion rate optimization (CRO)?',
        answer: 'Yes, CRO is a core pillar of our strategy. Driving traffic is useless if it doesn\'t convert. We continuously A/B test landing pages, ad copy, and sales funnels to systematically improve your conversion rates and lower your acquisition costs.'
      },
      {
        question: 'How quickly can we see results?',
        answer: 'Unlike SEO, performance marketing can generate measurable results within weeks. Our initial testing phase usually takes 2-4 weeks, after which we aggressively scale the winning campaigns to drive immediate revenue impact.'
      }
    ],
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
        'Consistent Brand Voice Across All platforms',
        'Higher Perceived Value and Market Authority',
        'Memorability in a Crowded Digital Landscape',
      ],
    },
    benefitsImage: '/images/branded/elephant_branding_1774804573466.png',
    metrics: [
      { value: '3x', label: 'Increase in Brand Recall' },
      { value: '200%', label: 'Boost in Customer Trust Metrics' },
      { value: '100+', label: 'Brand Identities Crafted' },
      { value: 'Omni', label: 'Channel Consistency Achieved' },
    ],
    faq: [
      {
        question: 'What is included in a branding package?',
        answer: 'Our comprehensive branding package typically includes deep brand strategy, logo design, visual identity (color palettes, typography), brand messaging & voice guidelines, and digital asset templates. We tailor the scope to fit your exact business needs.'
      },
      {
        question: 'How long does a branding project take?',
        answer: 'A standard brand identity project takes 4-6 weeks from initial discovery to final delivery. This ensures we have ample time for market research, creative exploration, and collaborative feedback loops with your team.'
      },
      {
        question: 'We already have a logo, can you just refresh our brand?',
        answer: 'Absolutely. We offer brand refresh services where we take your existing logo and modernize the surrounding visual identity, messaging, and digital presence without completely losing your established brand equity.'
      },
      {
        question: 'Why does branding matter for performance marketing?',
        answer: 'A strong brand exponentially improves performance marketing results. When people trust and recognize your brand, your click-through rates skyrocket, and your cost-per-acquisition drops significantly. Good design directly impacts your bottom line.'
      }
    ],
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
    benefitsImage: '/images/branded/elephant_social_media_1774804527694.png',
    metrics: [
      { value: '500%', label: 'Average Growth in Engagement' },
      { value: '10M+', label: 'Organic Impressions Managed' },
      { value: '2x', label: 'Increase in Referral Traffic' },
      { value: 'Top 1%', label: 'Content Virality Strategies' },
    ],
    faq: [
      {
        question: 'Which social media platforms should my business be on?',
        answer: 'It depends entirely on where your target audience spends their time. We conduct deep demographic research to identify the most lucrative platforms—whether that’s Instagram and TikTok for trend-focused consumer brands, or LinkedIn and Twitter for B2B authority building.'
      },
      {
        question: 'Do you create the content or do we?',
        answer: 'We provide end-to-end content production. From short-form viral videos (Reels/TikToks) and high-quality graphics to persuasive captions and community management, we handle everything so you can focus on running your business.'
      },
      {
        question: 'What is the main goal of organic social media?',
        answer: 'Organic social media is designed to build community, nurture brand loyalty, and establish unshakeable trust and authority. While it drives traffic over time, its primary superpower is converting skeptical prospects into raving, repeat customers.'
      },
      {
        question: 'How do you measure social media success?',
        answer: 'We look past vanity metrics (like follower count alone) and focus on engagement rate, shareability, profile visits, and ultimately, organic referral traffic and conversions on your website. We provide transparent, monthly reporting on all critical KPIs.'
      }
    ],
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
    benefitsImage: '/images/branded/elephant_complete_marketing_1774804590906.png',
    metrics: [
      { value: '360°', label: 'Holistic Growth Approach' },
      { value: '5x', label: 'Average Revenue Multiplier' },
      { value: '1', label: 'Dedicated Growth Team' },
      { value: '100%', label: 'Goal Alignment & Transparency' },
    ],
    faq: [
      {
        question: 'What exactly is included in "Complete Marketing"?',
        answer: 'It is a fully integrated strategy combining SEO, Media Buying, Social Media Management, Content Marketing, and UI/CRO tuning. Instead of fragmented tactics, we deploy a synchronized ecosystem where every channel feeds into and amplifies the others.'
      },
      {
        question: 'Why should I consolidate all marketing with one agency?',
        answer: 'Consolidation eliminates communication silos, reduces overhead costs, and ensures absolute brand consistency. The data gathered from SEO directly informs ad targeting, and social media content powers off-page SEO signals—creating a compounding growth loop impossible with fragmented vendors.'
      },
      {
        question: 'Will we have a dedicated point of contact?',
        answer: 'Yes, you will be assigned a dedicated Growth Strategist who manages the entire cross-functional team, translates your business goals into tactical execution, and provides you with unified, transparent reporting.'
      },
      {
        question: 'Is this solution suitable for small businesses?',
        answer: 'Our Complete Marketing packages are designed for ambitious businesses ready to aggressively scale. While it represents a significant investment, the synchronized, omni-channel approach invariably yields the highest, fastest, and most sustainable return on investment for scaling enterprises.'
      }
    ],
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
    benefitsImage: '/images/elephant-clouds.png',
    metrics: [
      { value: '4.8+', label: 'Average Target Rating Maintained' },
      { value: '95%', label: 'Negative Result Suppression' },
      { value: '24/7', label: 'Brand Sentiment Monitoring' },
      { value: '10x', label: 'Increase in Positive Brand Content' },
    ],
    faq: [
      {
        question: 'Can you completely delete negative reviews?',
        answer: 'We use technical and legal strategies to challenge and remove fake, defamatory, or policy-violating reviews. For legitimate negative feedback, we deploy suppression tactics—flooding the search results and platforms with high-quality, authentic positive content to push negative mentions off the first page.'
      },
      {
        question: 'How long does reputation management take?',
        answer: 'Depending on the severity of the reputation challenges, noticeable shifts in search engine results and review scores typically take 3 to 6 months. ORM is an ongoing, strategic process of building a resilient digital moat around your brand.'
      },
      {
        question: 'Do you monitor our reputation automatically?',
        answer: 'Yes, we utilize enterprise-grade listening software to monitor standard search platforms, social media networks, forums, and niche directories 24/7. This allows us to intercept and mitigate potential PR crises before they escalate.'
      },
      {
        question: 'How do you generate more positive reviews?',
        answer: 'We implement frictionless, automated review-generation funnels (via email and SMS) that intercept customer feedback—corralling dissatisfied customers into a private resolution loop while guiding satisfied customers directly to public review platforms.'
      }
    ],
  },
};
