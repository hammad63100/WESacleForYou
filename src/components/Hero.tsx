import { Suspense } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation, useCounter } from '@/hooks/useScrollAnimation';
import { HeroBackground3D } from './HeroBackground3D';

const stats = [
  { value: 42, suffix: '%', label: 'Avg. Conversion Increase' },
  { value: 150, suffix: '+', label: 'Brands Scaled' },
  { value: 10, suffix: 'M+', label: 'Revenue Generated' },
  { value: 24, suffix: '/7', label: 'Dedicated Support' },
];

export const Hero = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* 3D Animated Background */}
      <Suspense fallback={null}>
        <HeroBackground3D />
      </Suspense>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      
      {/* Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Amazon Growth Experts
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Scale Your{' '}
            <span className="text-primary relative">
              Amazon Business
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full" />
            </span>
            <br />
            with Confidence
          </h1>

          {/* Subtext */}
          <p
            className={`text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            We're your dedicated partners in navigating the Amazon marketplace.
            From PPC optimization to brand building, we help sellers maximize their
            potential and achieve sustainable growth.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Book a Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#case-studies')}
              className="group border-border hover:bg-muted transition-all duration-300"
            >
              <Play className="mr-2 h-4 w-4" />
              See Our Work
            </Button>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

const StatCard = ({
  value,
  suffix,
  label,
  isVisible,
}: {
  value: number;
  suffix: string;
  label: string;
  isVisible: boolean;
}) => {
  const count = useCounter(value, 2000, isVisible);

  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-primary/30 bg-card/30 backdrop-blur-sm flex items-center justify-center mb-3 hover:border-primary/60 hover:bg-card/50 transition-all duration-300 hover:scale-105">
        <span className="text-2xl sm:text-3xl font-bold text-primary">
          {count}
          {suffix}
        </span>
      </div>
      <div className="text-sm text-muted-foreground text-center">{label}</div>
    </div>
  );
};
