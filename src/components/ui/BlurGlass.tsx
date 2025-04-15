
import React from 'react';
import { cn } from '@/lib/utils';

type Intensity = 'light' | 'medium' | 'heavy';

export interface BlurGlassProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: Intensity;
  children?: React.ReactNode;
  dark?: boolean;
}

const BlurGlass = ({
  className,
  intensity = 'medium',
  dark = false,
  children,
  ...props
}: BlurGlassProps) => {
  const getIntensityClass = (level: Intensity, isDark: boolean) => {
    if (isDark) {
      switch (level) {
        case 'light':
          return 'bg-black/30 backdrop-blur-sm';
        case 'medium':
          return 'bg-black/40 backdrop-blur-md';
        case 'heavy':
          return 'bg-black/50 backdrop-blur-lg';
        default:
          return 'bg-black/40 backdrop-blur-md';
      }
    } else {
      switch (level) {
        case 'light':
          return 'bg-white/70 backdrop-blur-sm';
        case 'medium':
          return 'bg-white/80 backdrop-blur-md';
        case 'heavy':
          return 'bg-white/90 backdrop-blur-lg';
        default:
          return 'bg-white/80 backdrop-blur-md';
      }
    }
  };

  return (
    <div
      className={cn(
        'rounded-xl border shadow-lg',
        dark ? 'border-white/20 text-white' : 'border-white/40',
        getIntensityClass(intensity, dark),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default BlurGlass;
