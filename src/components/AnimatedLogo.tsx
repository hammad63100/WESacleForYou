import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import logoImage from '@/assets/logo.png';
import { cn } from '@/lib/utils';

interface AnimatedLogoProps {
  onClick?: () => void;
  className?: string;
}

export const AnimatedLogo = ({ onClick, className }: AnimatedLogoProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; 
  }

  const isLight = resolvedTheme === 'light';

  return (
    <a
      href="#home"
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'relative block transition-transform duration-300 hover:scale-105',
        className
      )}
      style={{ perspective: '1000px' }}
    >
      {/* Glow effect behind logo */}
      <div
        className={cn(
          'absolute inset-0 rounded-full bg-primary/30 blur-xl transition-all duration-500',
          isHovered ? 'opacity-100 scale-150' : 'opacity-0 scale-100'
        )}
      />
      
      {/* 3D Container */}
      <div
        className="relative transition-transform duration-500 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: isHovered 
            ? 'rotateY(15deg) rotateX(-5deg)' 
            : 'rotateY(0deg) rotateX(0deg)',
        }}
      >
        {/* Main logo image */}
        <img
          src={logoImage}
          alt="WeScale ForYou Logo"
          className="h-[160px] w-auto object-contain relative z-10 drop-shadow-lg"
          style={{
            filter: isHovered 
              ? `drop-shadow(0 0 20px hsl(var(--primary) / 0.5)) ${isLight ? 'invert(1) hue-rotate(180deg)' : ''}`
              : `drop-shadow(0 4px 6px rgba(0,0,0,0.1)) ${isLight ? 'invert(1) hue-rotate(180deg)' : ''}`,
          }}
        />
      </div>
      
      {/* Animated ring effect on hover */}
      <div
        className={cn(
          'absolute inset-0 rounded-full border-2 border-primary/50 transition-all duration-700',
          isHovered 
            ? 'opacity-100 scale-[2] animate-ping' 
            : 'opacity-0 scale-100'
        )}
        style={{ animationDuration: '1.5s' }}
      />
    </a>
  );
};
