import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBanner } from './components/StatsBanner';
import { ServicesSection } from './components/ServicesSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingWhatsapp } from './components/FloatingWhatsapp';
import { QuoteSimulatorModal } from './components/QuoteSimulatorModal';
import { ServiceItem } from './data/siteData';

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [simulatorOpen, setSimulatorOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY || window.pageYOffset;
          const docHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
          const progress = docHeight > 0 ? currentScrollY / docHeight : 0;

          setScrollY(currentScrollY);
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOpenSimulator = (service?: ServiceItem) => {
    setSelectedService(service ?? null);
    setSimulatorOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] font-sans">
      {/* 1. NAVBAR (Header Fixo + Barra de Progresso de Scroll) */}
      <Navbar scrollProgress={scrollProgress} />

      <main className="flex-1">
        {/* 2. HERO (Seção Principal com Parallax Real via JS onscroll) */}
        <Hero
          scrollY={scrollY}
          onOpenSimulator={() => handleOpenSimulator()}
        />

        {/* 3. SEÇÃO DE ESTATÍSTICAS E DESTAQUES (Banner Parallax) */}
        <StatsBanner scrollY={scrollY} />

        {/* 4. SEÇÃO SERVIÇOS & OFERTAS (Abas Funcionais + Cards) */}
        <ServicesSection
          onSelectForSimulator={(service) => handleOpenSimulator(service)}
        />

        {/* 5. SEÇÃO DIFERENCIAIS */}
        <DifferentialsSection />

        {/* 6. SEÇÃO DE PROVA SOCIAL (Avaliações do Google) */}
        <ReviewsSection />

        {/* 7. SEÇÃO DE LOCALIZAÇÃO & HORÁRIOS */}
        <LocationSection />

        {/* 8. SEÇÃO FAQ (Perguntas Frequentes - Accordion Interativo) */}
        <FaqSection />

        {/* 9. CTA FINAL (Chamada para Ação Direta) */}
        <FinalCta onOpenSimulator={() => handleOpenSimulator()} />
      </main>

      {/* 10. FOOTER (Rodapé Escuro Premium) */}
      <Footer />

      {/* 11. BOTÃO FLUTUANTE DO WHATSAPP */}
      <FloatingWhatsapp />

      {/* Modal Interativo de Simulação de Orçamento / Avaliação */}
      <QuoteSimulatorModal
        isOpen={simulatorOpen}
        onClose={() => setSimulatorOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}
