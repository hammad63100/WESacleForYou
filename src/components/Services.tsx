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
      'Tailored roadmaps to scale your Amazon business with data-backed strategic decisions.',
  },
  {
    icon: Target,
    title: 'PPC Advertising',
    description:
      'Maximize ROI with expert management of Sponsored Products, Brands, and Display campaigns.',
  },
  {
    icon: FileText,
    title: 'Product Listing Optimization',
    description:
      'Compelling titles, bullets, and descriptions optimized for conversions and visibility.',
  },
  {
    icon: Monitor,
    title: 'DSP Advertising',
    description:
      'Reach audiences on and off Amazon with programmatic display and video advertising.',
  },
  {
    icon: Shield,
    title: 'Amazon Brand Support',
    description:
      'Full Brand Registry support, A+ Content, and brand protection strategies.',
  },
  {
    icon: Package,
    title: 'Inventory Management',
    description:
      'Prevent stockouts and overstock with intelligent forecasting and planning.',
  },
  {
    icon: Globe,
    title: 'Google Advertising',
    description:
      'Drive external traffic to your Amazon listings with targeted Google campaigns.',
  },
  {
    icon: Headphones,
    title: 'Customer Service Management',
    description:
      'Professional customer communication to maintain high seller ratings.',
  },
  {
    icon: RotateCcw,
    title: 'Lost Inventory Recovery',
    description:
      'Recover funds for lost, damaged, or mishandled inventory by Amazon.',
  },
  {
    icon: Search,
    title: 'Amazon SEO',
    description:
      'Rank higher in search results with strategic keyword optimization.',
  },
  {
    icon: Camera,
    title: 'Product Photography & Video',
    description:
      'Professional visual content that showcases your products beautifully.',
  },
  {
    icon: BarChart3,
    title: 'Customized Reporting',
    description:
      'Detailed analytics and insights to track performance and growth.',
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
            From launch to scale, we provide comprehensive Amazon services that
            drive real results for your brand.
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
