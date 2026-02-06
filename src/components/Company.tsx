import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Building2, Target, Users, Award } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We focus on measurable outcomes that directly impact your bottom line.',
  },
  {
    icon: Users,
    title: 'Dedicated Team',
    description: 'Your success is backed by experts who treat your brand as their own.',
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: 'Years of experience scaling brands across Amazon marketplaces.',
  },
];

export const Company = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="company" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Your Partner in{' '}
            <span className="text-primary">Amazon Success</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are an extension of your team, dedicated to scaling your Amazon business with data-driven strategies and hands-on expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Image */}
          <div
            className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-primary/10 to-background flex items-center justify-center">
                <Building2 className="w-32 h-32 text-primary/40" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                  <p className="text-sm font-medium text-primary">WeScaleForYou</p>
                  <p className="text-xs text-muted-foreground">Premium Amazon Agency</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              We Scale Amazon Brands with{' '}
              <span className="text-primary">Confidence & Precision</span>
            </h3>

            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                At WeScaleForYou, we specialize in helping Amazon sellers unlock their full potential. Our team of experts combines cutting-edge PPC strategies, data-driven optimization, and comprehensive brand management to deliver exceptional results.
              </p>
              <p>
                From product listing optimization to advanced DSP advertising, we handle every aspect of your Amazon presence. We believe in transparency, continuous improvement, and treating your business goals as our own.
              </p>
              <p>
                Whether you're launching a new brand or scaling an established one, our proven methodologies and dedicated support ensure you stay ahead of the competition in the ever-evolving Amazon marketplace.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
