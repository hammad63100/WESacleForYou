import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Linkedin, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PulsatingButton } from '@/components/ui/pulsating-button';
import { ThemeToggle } from './ThemeToggle';
import { AnimatedLogo } from './AnimatedLogo';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services', hasDropdown: true },
  { name: 'Company', href: '#company' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const servicesList = [
  { name: 'Amazon PPC Management', slug: 'amazon-ppc-management' },
  { name: 'Amazon Listing Optimization', slug: 'amazon-listing-optimization' },
  { name: 'A+ Content & Creatives', slug: 'a-content-creatives' },
  { name: 'A-Z Brand Launch', slug: 'a-z-brand-launch' },
  { name: 'Trade Mark Filing', slug: 'trade-mark-filing' },
  { name: 'LLC / Company Creation', slug: 'llc-company-creation' },
  { name: 'Products Sourcing', slug: 'products-sourcing' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <>
      {/* Top Green Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground py-1.5 px-4">
        <div className="container mx-auto flex items-center justify-between text-xs sm:text-sm font-medium">
          <span className="truncate">WANT A FREE AMAZON PPC AUDIT ?</span>
          <div className="flex items-center gap-2 sm:gap-4">
            <a href="tel:+13147896911" className="hover:underline hidden sm:flex items-center gap-1">
              📞 +1 (314) 789-6911
            </a>
            <div className="flex items-center gap-1 sm:gap-2">
              <a
                href="https://www.instagram.com/wescaleforyou?igsh=bWt5NTF0azVuY2F1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-1 sm:p-1.5 hover:scale-110 transition-transform flex items-center justify-center group"
                aria-label="Instagram"
              >
                <Instagram className="h-3 w-3 sm:h-4 sm:w-4 text-[#E4405F]" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100003372257229"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-1 sm:p-1.5 hover:scale-110 transition-transform flex items-center justify-center group"
                aria-label="Facebook"
              >
                <Facebook className="h-3 w-3 sm:h-4 sm:w-4 text-[#1877F2]" />
              </a>
              <a
                href="https://www.linkedin.com/in/ihtisham-khan-8204412b0/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-1 sm:p-1.5 hover:scale-110 transition-transform flex items-center justify-center group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-3 w-3 sm:h-4 sm:w-4 text-[#0A66C2]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - adjusted for top banner */}
      <header
        className={cn(
          'fixed top-[32px] left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'bg-transparent backdrop-blur-sm'
            : 'bg-transparent'
        )}
      >
        <nav className="container mx-auto px-4 py-1">
          <div className="flex items-center justify-between">
            {/* Animated 3D Logo - Separate container for size control */}
            <div className="flex-shrink-0">
              <AnimatedLogo onClick={() => scrollToSection('#home')} className="scale-100 sm:scale-125 lg:scale-150" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                link.hasDropdown ? (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="relative text-foreground/80 hover:text-primary transition-colors font-medium group flex items-center gap-1"
                    >
                      {link.name}
                      <ChevronDown className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        isServicesOpen ? "rotate-180" : ""
                      )} />
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    </a>

                    {/* Services Dropdown */}
                    <div className={cn(
                      "absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-lg rounded-xl shadow-xl border border-border/50 overflow-hidden transition-all duration-300",
                      isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    )}>
                      <div className="py-2">
                        {servicesList.map((service) => (
                          <Link
                            key={service.slug}
                            to={`/service/${service.slug}`}
                            className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="relative text-foreground/80 hover:text-primary transition-colors font-medium group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                )
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <PulsatingButton
                onClick={() => scrollToSection('#contact')}
                className="hidden sm:flex shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                pulseColor="#22c55e"
                duration="1.5s"
              >
                Book a Free Consultation
              </PulsatingButton>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={cn(
              'lg:hidden overflow-hidden transition-all duration-300',
              isMobileMenuOpen ? 'max-h-[600px] mt-4' : 'max-h-0'
            )}
          >
            <div className="flex flex-col gap-2 p-4 bg-background/95 backdrop-blur-lg rounded-xl shadow-xl border border-border/50">
              {navLinks.map((link) => (
                link.hasDropdown ? (
                  <div key={link.name}>
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className="w-full flex items-center justify-between text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                    >
                      {link.name}
                      <ChevronDown className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        isMobileServicesOpen ? "rotate-180" : ""
                      )} />
                    </button>
                    <div className={cn(
                      "overflow-hidden transition-all duration-300 pl-4",
                      isMobileServicesOpen ? "max-h-[400px]" : "max-h-0"
                    )}>
                      {servicesList.map((service) => (
                        <Link
                          key={service.slug}
                          to={`/service/${service.slug}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 text-sm text-foreground/70 hover:text-primary transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                  >
                    {link.name}
                  </a>
                )
              ))}
              <PulsatingButton
                onClick={() => scrollToSection('#contact')}
                className="w-full mt-2"
                pulseColor="#22c55e"
                duration="1.5s"
              >
                Book a Free Consultation
              </PulsatingButton>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
