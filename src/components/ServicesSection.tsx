import React, { useState } from 'react';
import {
  MessageCircle,
  CheckCircle2,
  SlidersHorizontal,
} from 'lucide-react';
import {
  siteData,
  getWhatsappUrl,
  ServiceCategory,
  ServiceItem,
} from '../data/siteData';
import { ResilientImage } from './ResilientImage';

interface ServicesSectionProps {
  onSelectForSimulator: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectForSimulator,
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('Todos');

  const filteredServices =
    activeCategory === 'Todos'
      ? siteData.services
      : siteData.services.filter((s) => s.category === activeCategory);

  return (
    <section
      id="servicos"
      className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-[#059669] mb-2">
            <span>Comércio de Usados e Oficina Técnica</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-500 font-normal">Atendimento em Cuiabá - MT</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0F172A] tracking-tight mb-3">
            Nossas Soluções e Atividades
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Reunimos compra e venda de móveis e eletrodomésticos usados com assistência técnica própria em refrigeração e climatização, garantindo economia, procedência e suporte rápido.
          </p>
        </div>

        {/* Sistema de Abas / Filtros Funcionais em React */}
        <div className="mb-10 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div
            role="tablist"
            aria-label="Filtrar serviços por categoria"
            className="inline-flex items-center gap-1.5 p-1.5 bg-slate-200/75 rounded-lg border border-slate-200"
          >
            {siteData.serviceCategories.map((category) => {
              const isActive = activeCategory === category;
              const count =
                category === 'Todos'
                  ? siteData.services.length
                  : siteData.services.filter((s) => s.category === category).length;

              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-md text-xs sm:text-sm font-semibold transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#059669] ${
                    isActive
                      ? 'bg-[#0F172A] text-white shadow-xs'
                      : 'text-slate-700 hover:text-[#0F172A] hover:bg-white/60'
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`ml-1.5 text-xs tabular-nums ${
                      isActive ? 'text-emerald-400' : 'text-slate-400'
                    }`}
                  >
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid de Cards de Serviços / Produtos (3 colunas em desktop, 1 em mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {filteredServices.map((service) => (
            <article
              key={service.id}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[#059669]/40"
            >
              <div>
                {/* Imagem Limpa e Profissional no Topo */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                  <ResilientImage
                    src={service.image}
                    alt={service.imageAlt}
                    fallbackCategory={service.category}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-103"
                  />
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6">
                  {/* Metadados e Destaque sem Pill Sandwich */}
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-2">
                    <span className="font-semibold text-[#059669]">
                      {service.highlightLabel}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{service.category}</span>
                  </div>

                  {/* Título com Numeração Editorial */}
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#0F172A] tracking-tight mb-2.5">
                    {service.code}. {service.title}
                  </h3>

                  {/* Descrição Curta dos Benefícios e Praticidade */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Especificações Práticas */}
                  <ul className="space-y-1.5 mb-5 pt-3 border-t border-slate-100">
                    {service.specs.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-center gap-2 text-xs text-slate-700"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Rodapé do Card: Indicador Visual de Facilidade + Botões */}
              <div className="px-6 pb-6 pt-3 border-t border-slate-100 bg-slate-50/60">
                <div className="text-xs text-slate-500 mb-3 flex items-center justify-between gap-2">
                  <span>{service.contactEaseLabel}</span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={getWhatsappUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#059669] hover:bg-[#047857] text-white font-semibold text-xs sm:text-sm transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#059669]"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>Orçar pelo WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onSelectForSimulator(service)}
                    title="Detalhar pedido antes de enviar"
                    className="inline-flex items-center justify-center px-3 py-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                    <span className="sr-only">Detalhar orçamento</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
