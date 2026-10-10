import React from 'react';
import { MessageCircle, Phone, MapPin, SlidersHorizontal } from 'lucide-react';
import { siteData, getWhatsappUrl } from '../data/siteData';

interface FinalCtaProps {
  onOpenSimulator: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenSimulator }) => {
  return (
    <section
      aria-label="Chamada para ação direta no WhatsApp"
      className="py-16 md:py-24 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#34D399] mb-4">
          <span>Atendimento Comercial Rápido</span>
          <span aria-hidden="true" className="text-slate-500">
            ·
          </span>
          <span className="text-slate-300 font-normal">
            {siteData.address.neighborhood}, Cuiabá - MT
          </span>
        </div>

        <h2 className="font-heading font-bold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight max-w-3xl mx-auto mb-5">
          Precisa comprar, vender um usado ou consertar seu eletrodoméstico?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-9">
          Fale diretamente com a Pregão Pais e Filha pelo WhatsApp e resolva tudo com rapidez e segurança.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
          <a
            href={getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-heading font-bold text-base sm:text-lg shadow-xl shadow-[#059669]/25 transition-all duration-150 hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#34D399]"
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            <span>Falar no WhatsApp Agora</span>
          </a>

          <button
            type="button"
            onClick={onOpenSimulator}
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm sm:text-base transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#F59E0B] shrink-0" />
            <span>Montar Pedido Personalizado</span>
          </button>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#34D399] shrink-0" />
            <span className="tabular-nums">{siteData.contact.phoneDisplay}</span>
          </div>
          <span aria-hidden="true" className="hidden sm:inline text-slate-600">
            ·
          </span>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0" />
            <span>{siteData.address.full}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
