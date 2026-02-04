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
import { Link } from 'react-router-dom';
import { services } from '@/data/services';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';


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
          {services.map((service, index) => {
            const slug = service.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)+/g, '');
            
            return (
              <Link key={index} to={`/service/${slug}`} className="block h-full">
                <ServiceCard
                  {...service}
                  index={index}
                  isVisible={isVisible}
                />
              </Link>
            );
          })}
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
    <div
      className={`group h-52 [perspective:1000px] ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 50}ms`, transition: 'opacity 0.5s, transform 0.5s' }}
    >
      <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side - Icon and Title */}
        <div className="absolute h-full w-full rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm [backface-visibility:hidden] flex flex-col items-center justify-center p-6 text-center">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <Icon className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-lg font-semibold">
            {title}
          </h3>
        </div>

        {/* Back Side - Description */}
        <div className="absolute h-full w-full rounded-xl border border-primary/30 bg-primary/10 backdrop-blur-sm [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center p-6">
          <p className="text-foreground text-sm leading-relaxed text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
