import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  ArrowUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const footerLinks = {
  services: [
    { name: 'Amazon PPC Management', href: '#/service/amazon-ppc-management' },
    { name: 'Amazon Listing Optimization', href: '#/service/amazon-listing-optimization' },
    { name: 'A+ Content & Creatives', href: '#/service/a-content-creatives' },
    { name: 'A-Z Brand Launch', href: '#/service/a-z-brand-launch' },
    { name: 'Trade Mark Filing', href: '#/service/trade-mark-filing' },
    { name: 'LLC / Company Creation', href: '#/service/llc-company-creation' },
    { name: 'Products Sourcing', href: '#/service/products-sourcing' },
  ],
  company: [
    { name: 'About Us', href: '#why-us' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
};

const socialLinks = [
  {
    icon: Facebook,
    href: 'https://www.facebook.com/profile.php?id=100003372257229',
    label: 'Facebook',
    color: '#1877F2'
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/wescaleforyou?igsh=bWt5NTF0azVuY2F1',
    label: 'Instagram',
    color: '#E4405F'
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/ihtisham-khan-8204412b0/',
    label: 'LinkedIn',
    color: '#0A66C2'
  },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <a href="#home" className="text-xl sm:text-2xl font-bold text-primary">
              WeScaleForYou
            </a>
            <p className="mt-4 text-muted-foreground max-w-sm">
              Your dedicated partners in Amazon success. We help brands scale
              with data-driven strategies and expert execution.
            </p>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="font-medium mb-3">Stay Updated</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background/50"
                />
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-sm"
                >
                  <social.icon className="w-5 h-5" style={{ color: social.color }} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} WeScaleForYou. All rights reserved.
          </p>
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};
