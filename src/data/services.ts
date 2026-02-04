import {
  TrendingUp,
  Target,
  FileText,
  Monitor,
  Shield,
  Package,
  Globe,
  Headphones,
  RotateCcw,
  Search,
  Camera,
  BarChart3,
  LucideIcon,
} from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: TrendingUp,
    title: 'Growth Planning & Strategy',
    description:
      "Whatever your goals, we'll help you achieve them through data-driven planning, precision execution, and forward-thinking growth strategies.",
  },
  {
    icon: Target,
    title: 'PPC Advertising',
    description:
      "Need more sales or stronger profitability? Our Amazon PPC experts use cutting-edge tools and proven methods to optimize campaigns tailored to your brand's goals.",
  },
  {
    icon: FileText,
    title: 'Product Listing Optimization',
    description:
      'We craft high-converting listings that boost rankings, lower ad costs, and turn browsers into loyal customers.',
  },
  {
    icon: Monitor,
    title: 'Demand-Side Platform (DSP)',
    description:
      "Extend your brand's reach beyond Amazon. Our DSP specialists build programmatic ad campaigns that increase visibility and strengthen brand loyalty across the web.",
  },
  {
    icon: Shield,
    title: 'Amazon Brand Support',
    description:
      'From account health issues to stranded inventory, our Partner Success team handles it all — so your business runs smoothly, 24/7.',
  },
  {
    icon: Package,
    title: 'Inventory Management',
    description:
      'Rest easy knowing your stock levels, forecasts, and restocking timelines are in expert hands with our proven inventory projection systems.',
  },
  {
    icon: Globe,
    title: 'Google Advertising',
    description:
      "Bring shoppers from the world's largest search engine straight to your Amazon listings through targeted, performance-based Google Ads campaigns.",
  },
  {
    icon: Headphones,
    title: 'Customer Service Management',
    description:
      'Reclaim your time while we manage customer messaging, reviews, and buyer feedback with precision and care.',
  },
  {
    icon: RotateCcw,
    title: 'Lost Inventory Recovery',
    description:
      'Our proprietary process tracks down every dollar Amazon owes you, ensuring you recover funds and protect your bottom line.',
  },
  {
    icon: Search,
    title: 'Amazon SEO',
    description:
      'We elevate your organic ranking with keyword-rich, conversion-focused SEO strategies designed to drive traffic and boost sales velocity.',
  },
  {
    icon: Camera,
    title: 'Product Photography & Video',
    description:
      'Make your products shine. Our professional photo and video team creates stunning visuals that stop scrolls and convert clicks into sales.',
  },
  {
    icon: BarChart3,
    title: 'Customized Reporting',
    description:
      'Stay in control with real-time insights. Our custom dashboards and reports give you a clear view of what matters most to your business.',
  },
];
