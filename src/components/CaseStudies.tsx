import { ArrowUpRight, TrendingUp, DollarSign, ShoppingCart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const caseStudies = [
  {
    title: 'Health & Wellness Brand',
    category: 'PPC & SEO',
    image: '/placeholder.svg',
    stats: [
      { label: 'Revenue Increase', value: '156%', icon: DollarSign },
      { label: 'ACOS Reduction', value: '42%', icon: TrendingUp },
    ],
    description:
      'Transformed a struggling supplement brand into a category leader through strategic PPC optimization and listing enhancement.',
  },
  {
    title: 'Home & Kitchen',
    category: 'Brand Launch',
    image: '/placeholder.svg',
    stats: [
      { label: 'Monthly Revenue', value: '$150K', icon: DollarSign },
      { label: 'Ranking Improvement', value: 'Top 10', icon: TrendingUp },
    ],
    description:
      'Launched a new kitchenware brand from zero to six-figure monthly revenue within 8 months.',
  },
  {
    title: 'Beauty & Personal Care',
    category: 'Full Service',
    image: '/placeholder.svg',
    stats: [
      { label: 'Conversion Rate', value: '+85%', icon: ShoppingCart },
      { label: 'Organic Traffic', value: '3x', icon: TrendingUp },
    ],
    description:
      'Complete brand overhaul including A+ Content, photography, and PPC management for a premium skincare line.',
  },
  {
    title: 'Electronics & Accessories',
    category: 'DSP & PPC',
    image: '/placeholder.svg',
    stats: [
      { label: 'ROAS', value: '4.2x', icon: DollarSign },
      { label: 'Brand Awareness', value: '+200%', icon: TrendingUp },
    ],
    description:
      'Implemented advanced DSP campaigns alongside PPC to dominate the portable electronics category.',
  },
];

export const CaseStudies = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="case-studies" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Case Studies
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Real Results for{' '}
            <span className="text-primary">Real Brands</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Explore how we've helped Amazon sellers achieve extraordinary growth
            and sustainable success.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              {...study}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Button
            size="lg"
            variant="outline"
            className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Case Studies
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const CaseStudyCard = ({
  title,
  category,
  image,
  stats,
  description,
  index,
  isVisible,
}: {
  title: string;
  category: string;
  image: string;
  stats: { label: string; value: string; icon: React.ComponentType<{ className?: string }> }[];
  description: string;
  index: number;
  isVisible: boolean;
}) => {
  return (
    <Card
      className={`group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
          {category}
        </Badge>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Stats */}
        <div className="flex gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="text-lg font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
