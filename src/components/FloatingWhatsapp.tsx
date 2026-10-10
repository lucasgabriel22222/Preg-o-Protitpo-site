import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsappUrl } from '../data/siteData';

export const FloatingWhatsapp: React.FC = () => {
  const whatsappLink = getWhatsappUrl(
    'Olá! Vim pelo site e gostaria de fazer um orçamento na Pregão Pais e Filha.'
  );

  return (
    <div className="fixed bottom-5 right-5 z-40 group">
      {/* Tooltip no Hover */}
      <div
        role="tooltip"
        className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-150 bg-[#0F172A] text-white text-xs font-semibold px-3.5 py-2 rounded-lg shadow-md whitespace-nowrap border border-slate-700"
      >
        Tire suas dúvidas no WhatsApp!
      </div>

      {/* Botão Fixo com Pulso Sutil */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Tire suas dúvidas no WhatsApp!"
        className="whatsapp-ring relative w-14 h-14 rounded-full bg-[#059669] hover:bg-[#047857] text-white shadow-lg shadow-[#059669]/30 flex items-center justify-center transition-transform duration-150 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#059669]"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};
