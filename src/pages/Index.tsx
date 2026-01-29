import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { WhatWeDo } from '@/components/WhatWeDo';
import { CaseStudies } from '@/components/CaseStudies';
import { Testimonials } from '@/components/Testimonials';
import { BrandLaunch } from '@/components/BrandLaunch';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <WhatWeDo />
        <CaseStudies />
        <Testimonials />
        <BrandLaunch />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
