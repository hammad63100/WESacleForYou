import { useParams, Link } from 'react-router-dom';
import { services } from '@/data/services';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  CheckCircle2, 
  BarChart, 
  Users, 
  Trophy, 
  Target, 
  Lightbulb, 
  TrendingUp,
  Search,
  Settings,
  ShieldCheck,
  Award
} from 'lucide-react';
import { useEffect } from 'react';
import { PulsatingButton } from '@/components/ui/pulsating-button';

const ServiceDetails = () => {
  const { slug } = useParams();

  // Helper function to generate slug from title
  const getSlug = (title: string) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

  const service = services.find((s) => getSlug(s.title) === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <p className="mb-8 text-muted-foreground">
          The service you are looking for does not exist.
        </p>
        <Link to="/">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  const Icon = service.icon;

  // Placeholder data - in a real app this might come from the service object
  const benefits = [
    { title: "Data-Driven Strategy", desc: "High performing keywords selection and competitor analysis." },
    { title: "Full Campaign Management", desc: "Optimization, bid adjustments, and budget management." },
    { title: "Continuous Optimization", desc: "A/B testing, negative keywords, and precise targeting." },
    { title: "Advanced Analytics", desc: "Detailed reporting, ROI tracking, and performance insights." }
  ];

  const stats = [
    { value: "71%", label: "Average ACOS Reduction" },
    { value: "105%", label: "Revenue Increase" },
    { value: "3.91x", label: "ROAS" }
  ];

  const processSteps = [
    { title: "Audit & Analysis", desc: "We detailed analyze your current performance and market position." },
    { title: "Strategy Development", desc: "Customized plan tailored to your specific business goals." },
    { title: "Execution & Optimization", desc: "Implementing the strategy with continuous monitoring and tweaking." },
    { title: "Reporting & Scaling", desc: "Transparent reporting and scaling winning strategies." }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <Link to="/#services" className="inline-flex items-center text-primary hover:underline mb-8 font-medium">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">
                <Icon className="w-4 h-4" />
                <span>Professional Service</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {service.title} <span className="text-primary">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                 <PulsatingButton
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  pulseColor="#22c55e"
                  duration="1.5s"
                >
                  Book a Free Consultation
                </PulsatingButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform rotate-12 scale-75 opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80" 
                alt="Service Representation" 
                className="relative z-10 rounded-2xl shadow-2xl border border-border/50 w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose WeScaleForYou for <br/> <span className="text-primary">{service.title}?</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We deliver measurable results through proven strategies and dedicated support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-background p-8 rounded-xl border border-border/50 hover:border-primary/50 transition-colors shadow-sm">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                   <CheckCircle2 className="text-primary h-5 w-5" />
                   {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed pl-7">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold mb-4">Get Started with WeScale's {service.title} Today</h2>
             <p className="text-muted-foreground max-w-2xl mx-auto">
               See the impact we drive for our clients through dedicated management and optimization.
             </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 justify-center max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center relative">
                 <div className="w-48 h-48 rounded-full border-4 border-primary/20 flex flex-col items-center justify-center bg-background shadow-lg relative z-10">
                    <span className="text-4xl font-bold text-primary">{stat.value}</span>
                    <span className="text-sm text-muted-foreground mt-2 font-medium text-center px-4">{stat.label}</span>
                 </div>
                 {/* Decorative Circle Ring */}
                 <div className="absolute w-52 h-52 rounded-full border border-primary/30 animate-pulse opacity-50"></div>
              </div>
            ))}
          </div>
          
           <div className="mt-16 text-center">
              <PulsatingButton
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  pulseColor="#22c55e"
                  duration="1.5s"
                  className="mx-auto"
                >
                  Request a Proposal
                </PulsatingButton>
           </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-primary/10 relative">
        {/* Slanted dividers could go here */}
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-bold">Our {service.title} Process</h2>
           </div>
           
           <div className="space-y-6 max-w-4xl mx-auto">
             {processSteps.map((step, idx) => (
               <div key={idx} className="flex gap-4 items-start bg-background/60 p-6 rounded-lg backdrop-blur-sm">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{step.title}</h4>
                    <p className="text-muted-foreground text-sm">{step.desc}</p>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-background text-center">
        <div className="container mx-auto px-4">
           <h2 className="text-2xl font-bold mb-10">Amazon Trusted Partner Certificates & Awards</h2>
           <div className="flex flex-wrap justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Placeholders for certificates - using Icons for now */}
              <div className="flex flex-col items-center gap-2">
                 <ShieldCheck className="w-20 h-20 text-primary" />
                 <span className="text-xs font-bold">Amazon DSP</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                 <Award className="w-20 h-20 text-primary" />
                 <span className="text-xs font-bold">Certified Partner</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                 <Trophy className="w-20 h-20 text-primary" />
                 <span className="text-xs font-bold">Top Performer</span>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-24 bg-[#0a2e23] text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-primary/10"></div>
         <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              WeScaleForYou is an Amazon Legacy with a proven <br/> track record that takes off with you to new set-records.
            </h2>
             <div className="flex justify-center items-center gap-2 mb-8">
               <span className="text-2xl font-bold">We are Legacy!</span>
             </div>
             <PulsatingButton
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  pulseColor="#ffffff"
                  duration="1.5s"
                  className="mx-auto bg-primary text-white hover:bg-primary/90"
                >
                  GET FREE CONSULTATION
             </PulsatingButton>
         </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
