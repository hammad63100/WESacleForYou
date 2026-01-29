import { Search, PenTool, Sparkles, Settings, Image } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const offerings = [
  {
    icon: Search,
    title: 'Keyword Research & SEO Integration',
    description:
      'We conduct exhaustive keyword research to identify high-volume, relevant search terms. Our SEO strategies ensure your products rank higher in Amazon search results, driving organic traffic and visibility.',
    features: [
      'Competitor keyword analysis',
      'Long-tail keyword optimization',
      'Search ranking monitoring',
    ],
  },
  {
    icon: PenTool,
    title: 'Compelling Copywriting',
    description:
      'Our expert copywriters craft persuasive product titles, bullet points, and descriptions that highlight benefits, address pain points, and drive conversions.',
    features: [
      'Benefit-focused messaging',
      'A/B tested copy variations',
      'Brand voice consistency',
    ],
  },
  {
    icon: Sparkles,
    title: 'Enhanced A+ Content Design',
    description:
      'Stand out with visually stunning A+ Content that tells your brand story, showcases product features, and builds trust with potential customers.',
    features: [
      'Custom graphic design',
      'Brand storytelling',
      'Comparison charts',
    ],
  },
  {
    icon: Settings,
    title: 'Backend Optimization',
    description:
      'We optimize your backend search terms, subject matter, and hidden keywords to maximize discoverability without cluttering your visible listing.',
    features: [
      'Hidden keyword optimization',
      'Category selection strategy',
      'Indexing verification',
    ],
  },
  {
    icon: Image,
    title: 'Image Strategy & Optimization',
    description:
      'Professional image optimization ensures your products look their best, meet Amazon requirements, and convert browsers into buyers.',
    features: [
      'Image quality enhancement',
      'Lifestyle photography guidance',
      'Infographic creation',
    ],
  },
];

export const WhatWeDo = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-24 bg-muted/30">
      <div ref={ref} className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            What We Do
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Comprehensive{' '}
            <span className="text-primary">Listing Optimization</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            We take a holistic approach to product listing optimization,
            ensuring every element works together to maximize your success.
          </p>
        </div>

        {/* Offerings */}
        <div className="space-y-8">
          {offerings.map((offering, index) => (
            <OfferingCard
              key={index}
              {...offering}
              index={index}
              isReversed={index % 2 !== 0}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const OfferingCard = ({
  icon: Icon,
  title,
  description,
  features,
  index,
  isReversed,
  isVisible,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  index: number;
  isReversed: boolean;
  isVisible: boolean;
}) => {
  return (
    <div
      className={`flex flex-col ${
        isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } gap-8 items-center p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon & Visual */}
      <div className="w-full lg:w-1/3 flex justify-center">
        <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform">
          <Icon className="w-16 h-16 text-primary" />
        </div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-2/3">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <span className="text-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
