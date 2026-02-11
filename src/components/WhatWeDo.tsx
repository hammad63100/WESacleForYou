import { Search, PenTool, Sparkles, Settings, Image as ImageIcon } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import keywordImage from '@/assets/Keyword search and SEO.jpeg';
import copywritingImage from '@/assets/Compelling copy writing.jpeg';
import ebcImage from '@/assets/Enhanced brand content.jpeg';
import backendImage from '@/assets/Backend optimizations.jpeg';
import imageStrategyImage from '@/assets/Image strategy.jpeg';

const offerings = [
  {
    icon: Search,
    image: keywordImage,
    title: 'Keyword Research & SEO Integration',
    description:
      'We use advanced keyword tools and real-time search data to uncover what your customers are actually looking for — then integrate those insights naturally throughout your titles, bullets, and descriptions to boost ranking and organic traffic.',
    features: [
      'Finding high-performing primary and secondary keywords',
      'Competitor analysis for effective positioning',
      'Implementing backend search terms for hidden optimization',
    ],
  },
  {
    icon: PenTool,
    image: copywritingImage,
    title: 'Compelling Copywriting',
    description:
      'We craft copy that not only informs but converts. From attention-grabbing titles to persuasive bullet points and story-driven descriptions, our listings connect emotionally and logically with your customers.',
    features: [
      'Highlights your product\'s key features and benefits',
      'Enhances readability and persuasion',
      'Follows Amazon\'s best practices for formatting',
    ],
  },
  {
    icon: Sparkles,
    image: ebcImage,
    title: 'Enhanced Brand Content (A+ Content)',
    description:
      'Our creative team designs visually engaging A+ Content that builds trust, elevates your brand image, and increases conversion rates through premium visuals and strategic storytelling.',
    features: [
      'Custom A+ Content design with stunning modules',
      'Infographics & lifestyle imagery',
      'Storefront design that reflects your brand identity',
    ],
  },
  {
    icon: Settings,
    image: backendImage,
    title: 'Backend Optimization',
    description:
      'We take care of the technical side too — including backend search terms, subject matter fields and other hidden metadata that boost your organic visibility behind the scenes.',
    features: [
      'Utilizing misspellings, synonyms, and alternate search terms',
      'Avoiding redundant or keyword-stuffed content',
      'Following Amazon\'s latest guidelines for backend fields',
    ],
  },
  {
    icon: ImageIcon,
    image: imageStrategyImage,
    title: 'Image Strategy & Optimization',
    description:
      'High-quality visuals are key to conversion. We ensure your images meet Amazon\'s strict standards and tell a visual story that sells — from hero shots to lifestyle imagery and infographics.',
    features: [
      'Studio-grade product photography',
      'Lifestyle photography for emotional connection',
      'Premium product videos for engagement',
    ],
  },
  {
    icon: Search, // Fallback icon if needed, though we seem to have only 5 images for 6 items in the list? No, 5 items.
    image: null, // Just in case
    title: 'Wait, did I miss one?',
    description: 'Checking count...',
    features: [],
    isHidden: true
  }
].filter(o => !o.isHidden);

export const WhatWeDo = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-muted/30">
      <div ref={ref} className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            What We Do
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            Comprehensive{' '}
            <span className="text-primary">Listing Optimization</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            We take a holistic approach to product listing optimization,
            ensuring every element works together to maximize your success.
          </p>
        </div>

        {/* Offerings */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-24">
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
  image,
  title,
  description,
  features,
  index,
  isReversed,
  isVisible,
}: {
  icon: React.ComponentType<{ className?: string }>;
  image: string | null;
  title: string;
  description: string;
  features: string[];
  index: number;
  isReversed: boolean;
  isVisible: boolean;
}) => {
  return (
    <div
      className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } gap-6 lg:gap-8 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Visual Side */}
      <div className={`w-full lg:w-1/2 flex justify-center ${isReversed ? 'lg:justify-start' : 'lg:justify-end'}`}>
        <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <Icon className="w-24 h-24 text-muted-foreground/50" />
            </div>
          )}
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold">{title}</h3>
        </div>

        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          {description}
        </p>

        <ul className="space-y-4">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-4 group">
              <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5 group-hover:bg-primary transition-colors duration-300">
                <div className="w-2 h-2 rounded-full bg-primary group-hover:bg-white transition-colors duration-300" />
              </div>
              <span className="text-foreground font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

