import { Rocket, TrendingUp, Users, Megaphone, DollarSign, ShieldCheck, Search, Award } from 'lucide-react';

export interface IExpertiseItem {
  number: string;
  title: string;
  desc: string;
}

export interface IIndustryData {
  title: string;
  subtitle: string;
  heroImage: string;
  aboutTitle: string;
  description1: string;
  description2: string;
  industryFocus: {
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

export const industriesData: Record<string, IIndustryData> = {
  healthcare: {
    title: 'Medical / Healthcare',
    subtitle: 'Trust-Driven Marketing for the Modern Health Sector',
    heroImage: '/assets/industries/healthcare_hero.png',
    aboutTitle: 'Healthcare Marketing Excellence',
    description1:
      'The healthcare sector demands a delicate balance of authority, empathy, and technical precision. We help medical providers build unshakeable trust with patients through ethical, data-driven digital strategies.',
    description2:
      'From patient acquisition for multi-specialty hospitals to brand building for dedicated clinics, our approach is HIPPA-compliant and growth-oriented.',
    industryFocus: {
      description:
        'We focus on the critical touchpoints where patients make health decisions, ensuring your brand is the obvious choice.',
      items: [
        'Patient Acquisition Funnels',
        'Medical SEO & Authority Building',
        'Healthcare Reputation Management',
        'Patient Engagement Content',
        'Local SEO for Clinics',
        'Telehealth Marketing',
      ],
    },
    galleryImages: [
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
    ],
    expertise: {
      description:
        'Our team understands the unique regulatory and emotional landscape of healthcare marketing.',
      items: [
        {
          number: '01',
          title: 'Trust-Centric SEO',
          desc: 'Optimizing for high-intent medical queries with authoritative, expert content.',
        },
        {
          number: '02',
          title: 'Patient Reputation',
          desc: 'Systematically managing reviews to reflect the actual quality of care provided.',
        },
        {
          number: '03',
          title: 'Educational Content',
          desc: 'Positioning your doctors as thought leaders through high-value medical articles.',
        },
        {
          number: '04',
          title: 'Local Visibility',
          desc: 'Ensuring your clinic dominates the map pack when local patients search for care.',
        },
        {
          number: '05',
          title: 'Conversion CRO',
          desc: 'Simplifying the appointment booking process for a frictionless patient experience.',
        },
        {
          number: '06',
          title: 'Medical Paid Search',
          desc: 'Precision-targeted ads that respect privacy while driving high-quality patient leads.',
        },
      ],
    },
    benefits: {
      description:
        'Build a sustainable engine for patient growth while maintaining the highest ethical standards.',
      items: [
        'Increased Patient Acquisition & Retension',
        'Enhanced Brand Trust and Authority',
        'Optimized Appointment Funnels',
      ],
    },
    metrics: [
      { value: '3x', label: 'Increase in Online Appointments' },
      { value: '4.9', label: 'Average Patient Rating' },
      { value: '40%', label: 'Lower Acquisition Cost' },
      { value: '1M+', label: 'Patients Reached' },
    ],
    faq: [
      {
        question: 'Do you ensure medical privacy compliance?',
        answer: 'Absolutely. All our digital marketing strategies and tracking implementations are architected with HIPPA and patient privacy considerations at the forefront.'
      },
      {
        question: 'How do you measure success in healthcare?',
        answer: 'Specific KPIs include appointment volume, lead-to-patient conversion rates, organic search visibility for medical terms, and overall brand sentiment scores.'
      }
    ],
  },
  'real-estate': {
    title: 'Real Estate',
    subtitle: 'Dominating the Property Market with High-Velocity Leads',
    heroImage: '/assets/industries/real_estate_hero.png',
    aboutTitle: 'Real Estate Growth Engineering',
    description1:
      'Selling property is about selling dreams and delivering data. Our real estate marketing systems are designed to capture high-net-worth (HNI) interest and convert it into site visits.',
    description2:
      'We work with leading developers and luxury consultants to create high-performance digital funnels that outclass the competition in high-stakes markets.',
    industryFocus: {
      description:
        'We focus on high-intent lead generation and premium brand positioning for luxury and residential developments.',
      items: [
        'HNI Target Marketing',
        'Visual Identity for Projects',
        'Automated Site-Visit Funnels',
        'Lead Nurturing Systems',
        '360° VR Ad Social Ads',
        'Performance Attribution',
      ],
    },
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
    ],
    expertise: {
      description:
        'We combine architectural storytelling with precision performance marketing to sell out projects.',
      items: [
        {
          number: '01',
          title: 'Precision Lead Gen',
          desc: 'Targeting specific demographics and high-net-worth individuals with surgical accuracy.',
        },
        {
          number: '02',
          title: 'Visual Storytelling',
          desc: 'Crafting immersive ad creatives that showcase the unique lifestyle of your project.',
        },
        {
          number: '03',
          title: 'Retargeting Mastery',
          desc: 'Staying top-of-mind throughout the long real estate decision-making cycle.',
        },
        {
          number: '04',
          title: 'CRM Integration',
          desc: 'Seamlessly passing leads to your sales team with full behavioral context.',
        },
        {
          number: '05',
          title: 'Local Market Dominance',
          desc: 'Owning the digital conversation in specific geographical areas and luxury hubs.',
        },
        {
          number: '06',
          title: 'Conversion Optimization',
          desc: 'Designing landing pages that maximize the quantity and quality of site-visit requests.',
        },
      ],
    },
    benefits: {
      description:
        'Accelerate your project sell-out times with a predictable, high-quality flow of inquiries.',
      items: [
        'Higher Volume of Qualified Site Visits',
        'Premium Brand Positioning in Niche Markets',
        'Reduced Cost Per Sale and Marketing Spend',
      ],
    },
    metrics: [
      { value: '500+', label: 'Monthly Qualified Inquiries' },
      { value: '25%', label: 'Lower Cost Per Lead' },
      { value: '10x', label: 'Average Project ROI' },
      { value: '$100M+', label: 'Property Inventory Sold' },
    ],
    faq: [
      {
        question: 'How do you target luxury property buyers?',
        answer: 'We use advanced behavioral targeting, interest-based segmentation (luxury travel, high-end finance), and geographical exclusions to ensure your ads reach those with the actual capacity to invest.'
      },
      {
        question: 'Do you handle the creative design for projects?',
        answer: 'Yes. We produce high-converting ad copies, landing pages, and lead-gen forms that match the architectural aesthetic of your project.'
      }
    ],
  },
  entertainment: {
    title: 'Entertainment / Movies',
    subtitle: 'Creating Digital Hype that Translates to Box Office Success',
    heroImage: '/assets/industries/entertainment_hero.png',
    aboutTitle: 'Viral Entertainment Marketing',
    description1:
      'In the entertainment industry, momentum is everything. We create high-energy digital campaigns that build massive anticipation and drive audience action.',
    description2:
      'From movie launches to streaming promotion, our strategies are built on virality, engagement, and the power of digital hype.',
    industryFocus: {
      description:
        'We focus on creating "must-see" moments and explosive social growth for movies and media platforms.',
      items: [
        'Viral Social Hype',
        'Influencer Collaborations',
        'Trailer Launch Strategy',
        'Audience Sentiment Tracking',
        'Interactive Ad Campaigns',
        'Fan Community Building',
      ],
    },
    galleryImages: [
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=800&auto=format&fit=crop',
    ],
    expertise: {
      description:
        'We master the art of digital storytelling to turn audiences into evangelists.',
      items: [
        {
          number: '01',
          title: 'Explosive Social Growth',
          desc: 'Using trend-jacked and viral concepts to dominate the social conversation.',
        },
        {
          number: '02',
          title: 'Hype Engineering',
          desc: 'Strategizing the release of teasers and trailers for maximum algorithmic impact.',
        },
        {
          number: '03',
          title: 'Micro-Targeting Fans',
          desc: 'Reaching core fanbases and lookalike audiences with precision ad placement.',
        },
        {
          number: '04',
          title: 'Interactive Experiences',
          desc: 'Creating AR filters and social challenges that drive user-generated hype.',
        },
        {
          number: '05',
          title: 'Influencer Seeding',
          desc: 'Getting the leading voices in entertainment to talk about your project.',
        },
        {
          number: '06',
          title: 'Real-Time Engagement',
          desc: 'Managing the live conversation during launches and major media events.',
        },
      ],
    },
    benefits: {
      description:
        'Maximize your reach and impact with strategies designed for the attention economy.',
      items: [
        'Mass Awareness and Top-of-Mind Presence',
        'High Engagement with Target Demographics',
        'Efficient Conversion to Viewers/Ticket Buyers',
      ],
    },
    metrics: [
      { value: '50M+', label: 'Organic Trailer Views' },
      { value: '10x', label: 'Average Engagement Multiplier' },
      { value: 'Top 10', label: 'Trending Status Achieved' },
      { value: '98%', label: 'Positive Sentiment Target' },
    ],
    faq: [
      {
        question: 'How do you handle negative fan feedback?',
        answer: 'We deploy rapid-response social management to steer the conversation, address valid concerns, and amplify positive voices while suppressing toxic sentiment through algorithmic mastery.'
      },
      {
        question: 'Can you work with very tight launch windows?',
        answer: 'Yes. Our entertainment team is built for speed, capable of deploying massive campaigns in days to match critical release schedules.'
      }
    ],
  },
  ecommerce: {
    title: 'E-commerce & Retail',
    subtitle: 'Scaling Online Stores with Data-First Marketing',
    heroImage: '/assets/industries/ecommerce_hero.png',
    aboutTitle: 'E-commerce Revenue Scaling',
    description1:
      'E-commerce is a game of margins and attribution. We build high-performance growth engines for retail brands that prioritize ROAS and lifetime customer value.',
    description2:
      'We combine technical store optimization with aggressive performance marketing to turn your online shop into a revenue-generating powerhouse.',
    industryFocus: {
      description:
        'We focus on the metrics that matter most to retailers: cost-per-acquisition and repeat purchases.',
      items: [
        'Scalable Meta & Google Ads',
        'High-Converting Landing Pages',
        'Retention & Email Flows',
        'Conversion Optimisation (CRO)',
        'Inventory-Based Ad Shifts',
        'Full-Funnel Data Analytics',
      ],
    },
    galleryImages: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
    ],
    expertise: {
      description:
        'We turn your store data into actionable marketing strategies that drive profit.',
      items: [
        {
          number: '01',
          title: 'High-ROAS Ad Scaling',
          desc: 'Systematically scaling winning campaigns while maintaining profit margins.',
        },
        {
          number: '02',
          title: 'Retention Engineering',
          desc: 'Building automated email and SMS flows that turn one-time buyers into loyal fans.',
        },
        {
          number: '03',
          title: 'Product-Feed Mastery',
          desc: 'Optimizing your catalog for Google Shopping and Dynamic Product Ads.',
        },
        {
          number: '04',
          title: 'User Experience Design',
          desc: 'Removing friction from the checkout path to maximize conversion rates.',
        },
        {
          number: '05',
          title: 'Global Scale Strategy',
          desc: 'Helping domestic brands expand into international markets with localized marketing.',
        },
        {
          number: '06',
          title: 'Advanced Analytics',
          desc: 'Providing deep insights into your LTV, CAC, and return-on-ad-spend metrics.',
        },
      ],
    },
    benefits: {
      description:
        'Grow your retail brand with a partner who understands the bottom line.',
      items: [
        'Predictable, Scalable Revenue Growth',
        'Lower Customer Acquisition Costs',
        'Significant Increase in Average Order Value',
      ],
    },
    metrics: [
      { value: '4x', label: 'Average Return on Ad Spend' },
      { value: '60%', label: 'Increase in Repeat Purchases' },
      { value: '$50M+', label: 'Client Revenue Generated' },
      { value: '45%', label: 'Average AOV Increase' },
    ],
    faq: [
      {
        question: 'Do you work with Shopify and WooCommerce?',
        answer: 'Yes, we are platform experts. We optimize for high-speed performance and precise tracking regardless of your underlying store technology.'
      },
      {
        question: 'How do you handle holiday and seasonal scaling?',
        answer: 'We plan 3-6 months ahead for major retail windows (BFCM, New Year, Diwali) ensuring your inventory, ads, and landing pages are perfectly synchronized for maximum profit.'
      }
    ],
  },
};
