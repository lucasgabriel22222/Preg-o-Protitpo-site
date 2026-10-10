import React from 'react';
import {
  Wrench,
  Refrigerator,
  ShoppingBag,
  MapPin,
  Clock,
  ThumbsUp,
  MessageCircle,
} from 'lucide-react';
import { siteData, getWhatsappUrl, DifferentialItem } from '../data/siteData';

export const DifferentialsSection: React.FC = () => {
  const renderIcon = (name: DifferentialItem['iconName']) => {
    switch (name) {
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-[#059669]" />;
      case 'ThumbsUp':
        return <ThumbsUp className="w-5 h-5 text-[#059669]" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-[#0F172A]" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-[#D97706]" />;
      case 'Refrigerator':
        return <Refrigerator className="w-5 h-5 text-[#0F172A]" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-[#D97706]" />;
    }
  };

  return (
    <section
      id="diferenciais"
      className="py-16 md:py-24 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-[#059669] mb-2">
              <span>Estrutura Comercial e Oficina Própria</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500 font-normal">Bairro Alvorada, Cuiabá</span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0F172A] tracking-tight mb-3">
              Por Que Negociar e Consertar com a Pregão Pais e Filha
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Unimos loja física de móveis e eletrodomésticos usados com assistência técnica própria em refrigeração, oferecendo segurança tanto para quem compra quanto para quem vende ou conserta.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={getWhatsappUrl(
                'Olá! Vim pelo site e gostaria de negociar ou tirar uma dúvida com a Pregão Pais e Filha.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold text-xs sm:text-sm transition-colors whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-[#34D399] shrink-0" />
              <span>Falar Direto com a Loja</span>
            </a>
          </div>
        </div>

        {/* Grid de Cards de Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.differentials.map((item) => (
            <div
              key={item.id}
              className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-150 hover:bg-white hover:shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="w-11 h-11 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
                    {renderIcon(item.iconName)}
                  </div>
                  <span className="font-heading font-bold text-sm text-slate-400 tabular-nums">
                    {item.number}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-[#0F172A] tracking-tight mb-1">
                  {item.number}. {item.title}
                </h3>

                <div className="text-xs font-medium text-[#059669] mb-3">
                  {item.subtitle}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
