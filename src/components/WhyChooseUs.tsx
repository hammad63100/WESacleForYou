import { CheckCircle2, Users, Zap, TrendingUp, BarChart, Shield } from 'lucide-react';
import { useScrollAnimation, useCounter } from '@/hooks/useScrollAnimation';

const features = [
  {
    icon: BarChart,
    title: 'Data-Driven PPC Strategy',
    description:
      'High-performing keyword selection, competitor analysis, bid optimization for cost efficiency, and seasonal trend-based adjustments.',
  },
  {
    icon: Zap,
    title: 'Full Campaign Management',
    description:
      'Sponsored Product Ads, Sponsored Brand Ads, Sponsored Display Ads, and Video Ads — we manage it all to maximize your reach.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Optimization & A/B Testing',
    description:
      'A/B testing ad copies, creatives, and bids. Negative keyword management and ad scheduling for peak performance.',
  },
  {
    icon: Shield,
    title: 'Cost-Effective Budget Management',
    description:
      'Every dollar counts. We focus on the lowest ACoS (Advertising Cost of Sales) to increase profitability without overspending.',
  },
  {
    icon: BarChart,
    title: 'Advanced Analytics & Reporting',
    description:
      'Sales and conversion tracking, CTR analysis, CPC breakdown, and ROI evaluation to keep you informed.',
  },
  {
    icon: Users,
    title: 'An Extension of Your Team',
    description:
      'WeScaleForYou integrates seamlessly with your business — flexibility, collaboration, and transparency you\'d expect internally.',
  },
];

const stats = [
  { value: 42, suffix: '%', label: 'Avg. Conversion Increase' },
  { value: 150, suffix: '+', label: 'Brands Scaled' },
  { value: 10, suffix: 'M+', label: 'Revenue Generated' },
  { value: 24, suffix: '/7', label: 'Dedicated Support' },
];

export const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Why Choose Us
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Your Success is{' '}
            <span className="text-primary">Our Priority</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            We combine expertise, technology, and dedication to deliver
            exceptional results for Amazon sellers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50"
        >
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} isVisible={statsVisible} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
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
      className={`group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const StatItem = ({
  value,
  suffix,
  label,
  isVisible,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  isVisible: boolean;
  index: number;
}) => {
  const count = useCounter(value, 2000, isVisible);

  return (
    <div
      className={`text-center p-4 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};
