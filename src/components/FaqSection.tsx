import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { siteData, getWhatsappUrl } from '../data/siteData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(siteData.faqs[0]?.id ?? null);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#059669] mb-2">
            <span>Dúvidas Frequentes</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-500 font-normal">Atendimento Transparente</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0F172A] tracking-tight mb-3">
            Perguntas Frequentes Sobre Compra, Venda e Assistência
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Confira como funciona a avaliação de móveis e eletrodomésticos usados, a garantia dos produtos revisados e o atendimento técnico em Cuiabá.
          </p>
        </div>

        {/* Lista de Accordions Interativos */}
        <div className="space-y-3.5">
          {siteData.faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            const num = String(index + 1).padStart(2, '0');

            return (
              <div
                key={faq.id}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-colors"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#059669]"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-heading font-bold text-xs text-[#059669] tabular-nums shrink-0">
                        {num}.
                      </span>
                      <span className="font-heading font-semibold text-base sm:text-lg text-[#0F172A]">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#059669]' : ''
                      }`}
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 border-t border-slate-100">
                    <div className="text-xs font-medium text-slate-400 mb-1.5">
                      {faq.category}
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Apoio para outras dúvidas */}
        <div className="mt-10 bg-white border border-slate-200 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="font-heading font-bold text-base text-[#0F172A]">
              Tem outra dúvida ou quer enviar fotos de um item?
            </div>
            <p className="text-xs sm:text-sm text-slate-500">
              Nossa equipe responde diretamente pelo WhatsApp em horário comercial.
            </p>
          </div>
          <a
            href={getWhatsappUrl(
              'Olá! Tenho uma dúvida sobre os serviços da Pregão Pais e Filha.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#059669] hover:bg-[#047857] text-white font-semibold text-xs sm:text-sm transition-colors whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>Perguntar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
