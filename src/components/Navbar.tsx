import React, { useState } from 'react';
import { Wrench, MessageCircle, Menu, X } from 'lucide-react';
import { siteData, getWhatsappUrl } from '../data/siteData';

interface NavbarProps {
  scrollProgress: number;
}

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços & Ofertas', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'FAQ', href: '#faq' },
];

export const Navbar: React.FC<NavbarProps> = ({ scrollProgress }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-200 transition-colors">
      {/* Barra de progresso de scroll no topo extremo */}
      <div className="w-full h-[3px] bg-slate-200/60 overflow-hidden">
        <div
          className="h-full w-full origin-left bg-gradient-to-r from-[#0F172A] via-[#059669] to-[#D97706] transition-transform duration-75 ease-out"
          style={{ transform: `scaleX(${Math.min(1, Math.max(0, scrollProgress))})` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (single line, no secondary subtitle chips) */}
        <a
          href="#inicio"
          className="flex items-center gap-2.5 text-[#0F172A] font-heading font-bold text-base sm:text-lg tracking-tight whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#059669]"
        >
          <span className="w-9 h-9 rounded-lg bg-[#0F172A] text-white flex items-center justify-center shrink-0">
            <Wrench className="w-4 h-4 text-[#10B981]" />
          </span>
          <span>{siteData.brandUpper}</span>
        </a>

        {/* Zone 2: Central Links */}
        <nav
          aria-label="Navegação principal"
          className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-slate-600"
        >
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 text-slate-600 hover:text-[#0F172A] transition-colors duration-150 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#059669] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-150 after:origin-left"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary CTA Action + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#059669] hover:bg-[#047857] text-white font-semibold text-xs sm:text-sm shadow-xs transition-all duration-150 hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#059669]"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>Falar no WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-slate-200 text-slate-700 hover:text-[#0F172A] hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-[#059669]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md px-4 pt-3 pb-5 shadow-lg">
          <nav className="flex flex-col space-y-1" aria-label="Menu mobile">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:text-[#0F172A] hover:bg-slate-100 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-2.5">
            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#059669] hover:bg-[#047857] text-white font-semibold text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Falar no WhatsApp ({siteData.contact.phoneLocal})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
