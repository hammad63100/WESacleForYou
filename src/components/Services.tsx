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
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
  {
    icon: TrendingUp,
    title: 'Growth Planning & Strategy',
    description:
      'Whatever your goals, we\'ll help you achieve them through data-driven planning, precision execution, and forward-thinking growth strategies.',
  },
  {
    icon: Target,
    title: 'PPC Advertising',
    description:
      'Need more sales or stronger profitability? Our Amazon PPC experts use cutting-edge tools and proven methods to optimize campaigns tailored to your brand\'s goals.',
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
      'Extend your brand\'s reach beyond Amazon. Our DSP specialists build programmatic ad campaigns that increase visibility and strengthen brand loyalty across the web.',
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
      'Bring shoppers from the world\'s largest search engine straight to your Amazon listings through targeted, performance-based Google Ads campaigns.',
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

export const Services = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div ref={ref} className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Our Services
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Everything You Need to{' '}
            <span className="text-primary">Grow Your Amazon Business</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Welcome to WeScaleForYou — where your brand's growth happens "On the Same Floor." 
            Every detail is handled with precision by our team of seasoned ecommerce experts who live and breathe Amazon.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  index,
  isVisible,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  index: number;
  isVisible: boolean;
}) => {
  return (
    <Card
      className={`group cursor-pointer border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};
