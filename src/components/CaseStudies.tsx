import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { caseStudies } from '@/data/caseStudies';

export const CaseStudies = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const navigate = useNavigate();

  return (
    <section id="case-studies" className="py-12 sm:py-16 lg:py-24 relative overflow-hidden bg-muted/20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            Case Studies
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            Real Results for{' '}
            <span className="text-primary">Real Brands</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            Explore how we've helped Amazon sellers achieve extraordinary growth
            and sustainable success.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              onClick={() => navigate(`/case-study/${study.id}`)}
              className="cursor-pointer outline-none block"
            >
              <CaseStudyCard
                {...study}
                index={index}
                isVisible={isVisible}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudyCard = ({
  title,
  subtitle,
  category,
  image,
  mainStat,
  index,
  isVisible,
}: {
  title: string;
  subtitle: string;
  category: string;
  image: string;
  mainStat: { value: string; label: string };
  index: number;
  isVisible: boolean;
}) => {
  return (
    <Card
      className={`group overflow-hidden border-transparent hover:border-primary/20 bg-card shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 aspect-auto sm:aspect-square flex flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image - Top Section */}
      <div className="relative h-56 sm:h-[72%] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wide border-none px-2.5 py-1">
          {category}
        </Badge>
      </div>

      {/* Content - Bottom Section (Split) */}
      <CardContent className="flex-1 p-4 sm:p-3 flex flex-col sm:grid sm:grid-cols-12 gap-4 sm:gap-2.5 items-center bg-card relative">
        <div className="w-full sm:col-span-7 flex flex-col justify-center sm:border-r border-border/40 sm:pr-3 text-center sm:text-left items-center sm:items-start order-2 sm:order-1">
          <h3 className="text-xl sm:text-lg font-bold text-primary mb-1 line-clamp-1">{title}</h3>
          <p className="text-sm text-foreground/80 font-medium mb-3 sm:mb-2 line-clamp-2 sm:line-clamp-1 leading-tight">
            {subtitle}
          </p>
          <Button className="w-full sm:w-fit mt-auto text-base px-5 py-2.5 h-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md group-hover:shadow-lg transition-all pointer-events-none">
            Read Case Study
          </Button>
        </div>

        <div className="w-full sm:col-span-5 flex flex-col items-center justify-center text-center sm:pl-2 order-1 sm:order-2 border-b sm:border-none border-border/40 pb-4 sm:pb-0">
          <span className="text-5xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-none">{mainStat.value}</span>
          <span className="text-sm text-muted-foreground mt-1 font-medium bg-muted/50 px-2.5 py-1 rounded-md">{mainStat.label}</span>
        </div>
      </CardContent>
    </Card>
  );
};

