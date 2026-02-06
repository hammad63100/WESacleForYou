import { Rocket, Target, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  {
    number: '01',
    title: 'Strategy & Research',
    description:
      'Deep market analysis, competitor research, and positioning strategy to set you up for success.',
  },
  {
    number: '02',
    title: 'Brand Development',
    description:
      'Create compelling brand identity, messaging, and visual assets that resonate with your audience.',
  },
  {
    number: '03',
    title: 'Listing Creation',
    description:
      'Craft optimized product listings with SEO-rich content, A+ pages, and professional imagery.',
  },
  {
    number: '04',
    title: 'Launch & Scale',
    description:
      'Execute strategic launch campaigns and continuously optimize for sustainable growth.',
  },
];

const benefits = [
  'Complete end-to-end Amazon Launch Accelerator',
  'Market analysis and supplier coordination',
  'Listing development and creative assets',
  'PPC setup and brand protection',
  'Structured framework for brand presence',
  'Eliminate mixed messaging and weak positioning',
];

export const BrandLaunch = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <Rocket className="w-4 h-4" />
            Brand A-Z Launch
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            Let's Build & Scale Your{' '}
            <span className="text-primary">Amazon Brand</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            Launching on Amazon isn't just about putting a product online — it's about building a strong, scalable brand foundation.
            From market analysis and supplier coordination to listing development, creative assets, PPC setup, and brand protection — we take care of every step.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Step Number */}
              <div className="text-5xl font-bold text-primary/20 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>

              {/* Connector Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />
              )}
            </div>
          ))}
        </div>

        {/* Benefits & CTA */}
        <div
          className={`flex flex-col lg:flex-row gap-12 items-center p-8 lg:p-12 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {/* Benefits List */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold mb-6">
              What's Included in Our Launch Program
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Launch Your Brand?
              </h3>
              <p className="text-muted-foreground mb-6">
                Schedule a free consultation to discuss your brand vision and
                learn how we can help you succeed on Amazon.
              </p>
              <Button
                size="lg"
                onClick={scrollToContact}
                className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Book Your Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
