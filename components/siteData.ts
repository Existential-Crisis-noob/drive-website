export type ServiceItem = {
  title: string;
  description: string;
  includes: string[];
};

export const navLinks = [
  { label: "Snapshot", href: "#snapshot" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Work", href: "#portfolio" },
  { label: "Strategy", href: "#strategy" },
  { label: "Book Call", href: "#book" }
];

export const heroStats = [
  "100+ Digital Projects",
  "Local Business Focused",
  "Canada-Based Growth Support"
];

export const services: ServiceItem[] = [
  {
    title: "Website Design",
    description: "Websites and landing pages built to make your business look trustworthy and convert visitors.",
    includes: ["Website design", "Landing pages", "Mobile-friendly design", "Conversion-focused layout"]
  },
  {
    title: "SEO & Local Visibility",
    description: "Help customers find you through search, Google visibility, and local discovery.",
    includes: ["SEO", "Google visibility", "Local search", "Search optimization"]
  },
  {
    title: "Social Media Management",
    description: "Content planning and posting support to keep your brand active and consistent.",
    includes: ["Content planning", "Posting support", "Brand consistency", "Social media presence"]
  },
  {
    title: "Creative Content",
    description: "Graphics, thumbnails, videos, flyers, logos, and reels that help your brand stand out.",
    includes: ["Graphic design", "Flyers", "Logos", "Thumbnails", "Video editing", "Reels", "Marketing content"]
  },
  {
    title: "AI Visibility",
    description: "Structure your website and content so search engines and AI tools can understand your business better.",
    includes: ["Content clarity", "Structured pages", "Entity-rich copy", "Discoverability improvements"]
  },
  {
    title: "Strategy Plan",
    description: "We look at what your competitors are doing online and find gaps your business can use.",
    includes: ["Competitor research", "Digital presence review", "Growth planning", "Content and visibility strategy"]
  }
];

export const industries = [
  {
    title: "Restaurants & Food Brands",
    description: "Websites, social content, and local visibility that help people discover your food and choose you first."
  },
  {
    title: "HVAC & Home Services",
    description: "Search visibility, trust-building websites, and service pages that help customers reach out when they need help."
  },
  {
    title: "Tutors & Gyms",
    description: "Clear online presence, strong messaging, and content that helps people understand your value."
  },
  {
    title: "Local Retail Brands",
    description: "Digital storefronts, social visuals, and campaigns that make your products easier to discover."
  }
];

export const routeSteps = [
  { title: "Audit", description: "We review your website, search presence, social media, and competitors." },
  { title: "Strategy", description: "We identify where your business can win attention and trust online." },
  { title: "Build", description: "We design, optimize, create, and launch the pieces your business needs." },
  { title: "Improve", description: "We review what is working and refine the plan so your digital presence keeps growing." }
];

export const portfolioItems = [
  {
    category: "Websites",
    project: "MomoNepal",
    industry: "Food brand",
    services: "Website, social media, brand storytelling",
    solved: "Helped build a stronger digital presence for a growing local food brand."
  },
  {
    category: "Websites",
    project: "Khosla",
    industry: "Local business",
    services: "Website, SEO visibility",
    solved: "Created a cleaner digital presence and improved online discoverability."
  },
  {
    category: "Websites",
    project: "HVAC Company",
    industry: "Home services",
    services: "Website, local visibility, service pages",
    solved: "Built a clearer service-focused website to support local lead generation."
  },
  {
    category: "Graphics",
    project: "Creative Design Projects",
    industry: "Multiple",
    services: "Logos, flyers, graphics, thumbnails",
    solved: "Created brand visuals and content assets for digital campaigns."
  },
  {
    category: "Video Editing",
    project: "Video Editing Projects",
    industry: "Creators/local brands",
    services: "Short-form video editing, reels, marketing content",
    solved: "Edited content designed for attention, clarity, and engagement."
  }
];
