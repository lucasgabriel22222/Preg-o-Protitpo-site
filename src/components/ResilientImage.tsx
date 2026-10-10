import React, { useState } from 'react';
import { Refrigerator, Wrench, Home } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackCategory?: string;
  style?: React.CSSProperties;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  fallbackCategory = 'Comércio e Assistência',
  style,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    const isAssistencia =
      fallbackCategory.toLowerCase().includes('refrigeração') ||
      fallbackCategory.toLowerCase().includes('climatização');
    const isMoveis = fallbackCategory.toLowerCase().includes('móveis');

    return (
      <div
        style={style}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-slate-200 p-6 text-center select-none ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center mb-3 text-emerald-400">
          {isAssistencia ? (
            <Wrench className="w-6 h-6" />
          ) : isMoveis ? (
            <Home className="w-6 h-6" />
          ) : (
            <Refrigerator className="w-6 h-6" />
          )}
        </div>
        <span className="text-xs font-medium text-slate-300 max-w-[22ch] leading-snug">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      style={style}
      className={className}
      loading="lazy"
    />
  );
};
