import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'David Miller',
    role: 'Founder, OrganicGlow Beauty',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: "WeScaleForYou's Amazon PPC Management completely transformed our ad strategy. Before working with them, our ACOS was at 45%. Within 3 months, they brought it down to 18% while increasing our sales by 120%. Their team is incredibly responsive and truly understands the Amazon ecosystem.",
  },
  {
    name: 'Sarah Mitchell',
    role: 'CEO, HomeStyle Living',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: "The A+ Content they created for our products is absolutely stunning. Our conversion rate jumped from 8% to 19% after implementing their designs. They really know how to tell a brand story visually. The A-Z Brand Launch service was exactly what we needed to enter the market confidently.",
  },
  {
    name: 'Robert Thompson',
    role: 'Owner, TechPro Accessories',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: "Their Amazon Listing Optimization service is top-notch. They rewrote all our titles, bullet points, and descriptions with proper keyword research. We went from page 3 to page 1 for our main keywords within 6 weeks. The backend search term optimization was a game-changer for organic traffic.",
  },
  {
    name: 'Jennifer Davis',
    role: 'Director, PureNature Supplements',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: "WeScaleForYou helped us with LLC creation and trademark filing. The process was smooth and they handled everything professionally. Getting our brand registered on Amazon Brand Registry was seamless after that. Now our products are protected and we have access to all premium seller tools.",
  },
  {
    name: 'James Wilson',
    role: 'Founder, ActiveWear Plus',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: "Their Products Sourcing service saved us from a potential disaster. They helped us find reliable suppliers in China, negotiated better pricing, and ensured quality control. We launched 5 products with their full A-Z Brand Launch support and hit $50K monthly revenue in just 4 months!",
  },
  {
    name: 'Emily Johnson',
    role: 'CEO, BabyEssentials Co.',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: "We were struggling with our PPC campaigns for over a year. WeScaleForYou took over and within 60 days, our ROAS improved from 1.5x to 4.2x. Their weekly reporting and transparent communication made us feel confident in every decision. Highly recommend their Amazon PPC Management!",
  },
  {
    name: 'Michael Brown',
    role: 'Founder, FitGear Athletics',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: "The A-Z Brand Launch service is incredible. They handled everything from market research to listing creation, photography guidelines, and PPC setup. We launched our brand from scratch and reached $30K in monthly sales within our first quarter. Best investment we ever made!",
  },
  {
    name: 'Amanda White',
    role: 'Owner, GreenHome Products',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: "Their listing optimization and A+ Content design are world-class. After they optimized our main product listings, our click-through rate increased by 65% and conversion rate doubled. The team really understands what makes customers click 'Add to Cart'. Professional and results-driven!",
  },
  {
    name: 'Christopher Anderson',
    role: 'Director, PetCare Essentials',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: "WeScaleForYou's trademark filing service was quick and hassle-free. They guided us through the entire process and got our brand protected. The LLC creation support was equally impressive. Now we're fully Brand Registered and enjoying all the benefits. Thank you, WeScaleForYou!",
  },
];

export const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 lg:py-24 bg-muted/30"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div ref={ref} className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            Testimonials
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            Don't just take our word for it. Hear from the brands we've helped
            scale on Amazon.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div
          className={`relative max-w-4xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
          {/* Main Card */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                {/* Quote Icon */}
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Quote className="w-8 h-8 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-primary fill-primary"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 max-w-2xl">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full border-border hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full border-border hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
