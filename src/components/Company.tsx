import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import aboutBg from '../assets/about.HEIC';

export const Company = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="company" className="relative py-24 sm:py-32 lg:py-40 min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay for text readability */}
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl lg:max-w-[60%]">
          <div
            ref={ref}
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              I didn’t build <span className="text-primary">WeScaleForYou</span> to run ads. I built it to build brands that scale.
            </h2>
            <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed font-medium">
              Every strategy we deploy is designed for growth that lasts, not quick wins that fade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
