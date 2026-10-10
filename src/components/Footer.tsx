import React from 'react';
import { Wrench, MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { siteData, getWhatsappUrl } from '../data/siteData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1120] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Coluna 1: Identidade e Slogan */}
          <div className="lg:col-span-5">
            <a
              href="#inicio"
              className="inline-flex items-center gap-2.5 text-white font-heading font-bold text-lg tracking-tight mb-4"
            >
              <span className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                <Wrench className="w-4 h-4 text-[#34D399]" />
              </span>
              <span>{siteData.brandUpper}</span>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md mb-5">
              {siteData.slogan}. Comércio de móveis e eletrodomésticos revisados com oficina técnica própria em refrigeração e climatização.
            </p>

            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#059669] hover:bg-[#047857] text-white font-semibold text-xs transition-colors whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Atendimento via WhatsApp</span>
            </a>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="lg:col-span-3">
            <h3 className="font-heading font-semibold text-sm text-white tracking-wide mb-4">
              Navegação Rápida
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#destaques" className="hover:text-white transition-colors">
                  Destaques e Nota Google
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Serviços & Ofertas
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">
                  Nossos Diferenciais
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-white transition-colors">
                  Avaliações de Clientes
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">
                  Localização & Horários
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Perguntas Frequentes (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Endereço e Contato */}
          <div className="lg:col-span-4">
            <h3 className="font-heading font-semibold text-sm text-white tracking-wide mb-4">
              Dados de Contato e Loja Física
            </h3>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#34D399] shrink-0 mt-1" />
                <span>{siteData.address.full}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#34D399] shrink-0" />
                <a
                  href={getWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors tabular-nums"
                >
                  {siteData.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>{siteData.hours.summary}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Atualizado */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="tabular-nums">
            © {currentYear} {siteData.companyName}. Todos os direitos reservados.
          </p>
          <p>
            {siteData.address.street} · {siteData.address.neighborhood} · {siteData.address.city} - {siteData.address.state} · CEP {siteData.cep}
          </p>
        </div>
      </div>
    </footer>
  );
};
