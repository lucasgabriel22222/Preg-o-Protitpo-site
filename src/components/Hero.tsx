import React from 'react';
import {
  MessageCircle,
  ArrowDown,
  MapPin,
  Clock,
  CheckCircle2,
  SlidersHorizontal,
} from 'lucide-react';
import { siteData, getWhatsappUrl } from '../data/siteData';
import { ResilientImage } from './ResilientImage';

interface HeroProps {
  scrollY: number;
  onOpenSimulator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ scrollY, onOpenSimulator }) => {
  const parallaxOffset = Math.min(260, Math.max(0, scrollY * 0.34));

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-20 bg-[#0F172A]"
    >
      {/* Imagem de fundo em tela cheia com efeito PARALLAX real via JS onscroll */}
      <div
        className="absolute inset-0 pointer-events-none will-change-transform"
        style={{
          transform: `translate3d(0, ${parallaxOffset}px, 0) scale(1.08)`,
        }}
      >
        <ResilientImage
          src={siteData.images.hero}
          alt="Salão comercial da Pregão Pais e Filha com eletrodomésticos revisados e móveis usados em Cuiabá"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Overlay gradiente medido para leitura com alto contraste */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/85 to-[#0F172A]/55 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-[#0F172A]/40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Conteúdo Central do Hero */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 w-full">
          <div className="max-w-3xl">
            {/* Kicker / Identificador Superior */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-[#34D399] mb-5">
              <span>Compra, Venda e Assistência Técnica em Cuiabá - MT</span>
              <span aria-hidden="true" className="text-slate-400">
                ·
              </span>
              <span className="text-slate-300 font-normal">
                Bairro Alvorada (CEP {siteData.cep})
              </span>
            </div>

            {/* Título H1 grande e de alto impacto */}
            <h1
              className="font-heading font-bold text-white tracking-tight leading-[1.12] mb-6"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
            >
              Compre, Venda Móveis e Eletrodomésticos Usados e Conte com Assistência Técnica Especializada
            </h1>

            {/* Subtítulo objetivo focado nas soluções comerciais */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mb-8 font-normal">
              Negocie móveis e eletrodomésticos usados com avaliação rápida e pagamento justo, adquira equipamentos revisados com garantia de funcionamento ou solicite conserto especializado em geladeiras, freezers e ar-condicionado no bairro Alvorada.
            </p>

            {/* Botões de Ação (CTA) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <a
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg bg-[#059669] hover:bg-[#047857] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#059669]/20 transition-all duration-150 hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#34D399]"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm sm:text-base backdrop-blur-xs transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Ver Nossos Serviços</span>
              </a>

              <button
                type="button"
                onClick={onOpenSimulator}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-lg bg-transparent hover:bg-white/10 border border-slate-500/50 text-slate-200 hover:text-white font-medium text-sm transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <SlidersHorizontal className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>Simular Avaliação / Conserto</span>
              </button>
            </div>

            {/* Informações Práticas Diretas em Linha */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0" />
                <span>Avaliação por foto via WhatsApp</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>{siteData.address.street} · Alvorada</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-300 shrink-0" />
                <span className="tabular-nums">Seg a Sáb: 08h às 18h</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de Scroll Animado no Rodapé do Hero */}
      <div className="relative z-10 pb-6 flex justify-center">
        <a
          href="#destaques"
          aria-label="Rolar para estatísticas e destaques"
          className="group inline-flex flex-col items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors"
        >
          <span>Conhecer soluções e estrutura</span>
          <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-transform duration-200 group-hover:translate-y-0.5">
            <ArrowDown className="w-4 h-4 text-[#34D399] animate-bounce" />
          </span>
        </a>
      </div>
    </section>
  );
};
