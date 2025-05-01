export interface CaseStudy {
  title: string;
  slug: string;
  description: string;
  services: string[];
  logo: string;
  image: string;
  results: string[];
  client: string;
}

export const caseStudies: CaseStudy[] = [
  {
    title: "2.5x ROAS Increase for E-commerce Brand",
    slug: "ecommerce-roas-improvement",
    description: "Strategic PPC optimization and CRO improvements led to significant ROAS gains",
    services: ["PPC", "Analytics", "CRO"],
    logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    results: ["150% ROAS increase", "45% lower CPA", "2x conversion rate"],
    client: "E-commerce Giant"
  },
  {
    title: "SEO Traffic Growth for SaaS Platform",
    slug: "saas-seo-growth",
    description: "Implementing comprehensive SEO strategy resulting in organic traffic surge",
    services: ["SEO", "Content Strategy"],
    logo: "https://images.unsplash.com/photo-1487014679447-9f8336841d58",
    image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58",
    results: ["200% organic traffic increase", "45% more leads", "Top 3 rankings"],
    client: "Tech Solutions Co"
  },
  {
    title: "Social Media Engagement Boost",
    slug: "social-media-engagement",
    description: "Revamped social media strategy leading to higher engagement rates",
    services: ["Social Media", "Content Strategy"],
    logo: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a",
    results: ["3x engagement rate", "150% follower growth", "40% more conversions"],
    client: "Lifestyle Brand"
  },
  {
    title: "Full-Funnel Analytics Implementation",
    slug: "analytics-implementation",
    description: "Implemented comprehensive analytics strategy to track and optimize customer journey",
    services: ["Analytics", "CRO"],
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    results: ["98% tracking accuracy", "35% conversion lift", "Clear attribution model"],
    client: "FinTech Leader"
  },
  {
    title: "B2B Lead Generation Campaign",
    slug: "b2b-lead-generation",
    description: "Multichannel campaign targeting enterprise decision-makers",
    services: ["PPC", "Content Strategy", "Social Media"],
    logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    results: ["267% more qualified leads", "42% lower CPL", "£1.2M pipeline value"],
    client: "Enterprise Solutions"
  },
  {
    title: "Local SEO Excellence",
    slug: "local-seo-success",
    description: "Comprehensive local SEO strategy for multi-location business",
    services: ["SEO", "Content Strategy"],
    logo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    results: ["400% more local visits", "Top 3 in 50+ locations", "185% more calls"],
    client: "Retail Chain Inc"
  },
  {
    title: "CRO for SaaS Platform",
    slug: "saas-cro-optimization",
    description: "Data-driven optimization of signup flow and pricing pages",
    services: ["CRO", "Analytics"],
    logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    results: ["89% increase in trial signups", "45% better retention", "2.3x revenue growth"],
    client: "CloudTech SaaS"
  },
  {
    title: "Content Marketing Revolution",
    slug: "content-marketing-success",
    description: "Strategic content marketing campaign driving organic growth",
    services: ["Content Strategy", "SEO"],
    logo: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    results: ["310% more organic traffic", "5x content engagement", "60% lower CAC"],
    client: "Knowledge Hub"
  },
  {
    title: "PPC Campaign Transformation",
    slug: "ppc-transformation",
    description: "Restructured PPC campaigns with advanced audience targeting",
    services: ["PPC", "Analytics"],
    logo: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
    results: ["156% ROAS improvement", "40% lower CPA", "3x conversion volume"],
    client: "Fashion Retailer"
  }
];

export const serviceCategories = [
  "All",
  "PPC",
  "SEO",
  "Analytics",
  "CRO",
  "Social Media",
  "Content Strategy"
];