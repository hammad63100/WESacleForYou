import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import logoImage from '@/assets/logo.png';
import { cn } from '@/lib/utils';

interface AnimatedLogoProps {
  onClick?: () => void;
  className?: string;
}

export const AnimatedLogo = ({ onClick, className }: AnimatedLogoProps) => {
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
      className={cn(
        'relative block transition-transform duration-300',
        className
      )}
      style={{ perspective: '1000px' }}
    >
      {/* 3D Container */}
      <div
        className="relative transition-transform duration-500 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateY(0deg) rotateX(0deg)',
        }}
      >
        {/* Main logo image */}
        <img
          src={logoImage}
          alt="WeScale ForYou Logo"
          className="h-[80px] sm:h-[100px] md:h-[130px] w-auto object-contain relative z-10 drop-shadow-lg"
          style={{
            filter: `drop-shadow(0 4px 6px rgba(0,0,0,0.1)) ${isLight ? 'invert(1) hue-rotate(180deg)' : ''}`,
          }}
        />
      </div>
    </a>
  );
};
