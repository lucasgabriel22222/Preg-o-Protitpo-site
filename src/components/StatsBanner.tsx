import React from 'react';
import { Star, ShoppingBag, Wrench, MessageCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

interface StatsBannerProps {
  scrollY: number;
}

export const StatsBanner: React.FC<StatsBannerProps> = ({ scrollY }) => {
  const parallaxShift = Math.max(-90, Math.min(90, (scrollY - 600) * 0.14));

  const renderIcon = (name: 'Star' | 'ShoppingBag' | 'Wrench' | 'MessageCircle') => {
    switch (name) {
      case 'Star':
        return <Star className="w-5 h-5 text-[#D97706] fill-[#D97706]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-[#059669]" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-[#0F172A]" />;
      case 'MessageCircle':
        return <MessageCircle className="w-5 h-5 text-[#059669]" />;
    }
  };

  return (
    <section
      id="destaques"
      aria-label="Estatísticas e Destaques da Empresa"
      className="relative py-12 md:py-16 overflow-hidden bg-slate-100 border-b border-slate-200"
    >
      {/* Camada corporativa com movimento Parallax em JS onscroll */}
      <div
        className="absolute inset-0 pointer-events-none will-change-transform opacity-65"
        style={{
          transform: `translate3d(0, ${parallaxShift}px, 0)`,
          backgroundImage:
            'radial-gradient(circle at 18% 30%, rgba(5, 150, 105, 0.09) 0%, transparent 50%), radial-gradient(circle at 82% 70%, rgba(15, 23, 42, 0.08) 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {siteData.statsHighlights.map((item) => (
            <div
              key={item.id}
              className="backdrop-blur-md bg-white/90 border border-slate-200 shadow-sm rounded-xl p-6 flex flex-col justify-between transition-transform duration-150 hover:-translate-y-0.5"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                  {renderIcon(item.iconName)}
                </div>
                <div className="font-heading font-bold text-xl sm:text-2xl text-[#0F172A] tracking-tight tabular-nums mb-1">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-slate-800 mb-1.5">
                  {item.label}
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed pt-3 border-t border-slate-100">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
