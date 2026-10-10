import React, { useState, useMemo } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  MessageCircle,
  CheckCircle2,
  Copy,
  Check,
} from 'lucide-react';
import { siteData, getWhatsappUrl } from '../data/siteData';

export const LocationSection: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);

  // Calcula se a loja está aberta no horário local de Cuiabá (America/Cuiaba, UTC-4)
  const storeStatus = useMemo(() => {
    try {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Cuiaba',
        weekday: 'short',
        hour: 'numeric',
        hour12: false,
      });
      const parts = formatter.formatToParts(now);
      const weekday = parts.find((p) => p.type === 'weekday')?.value || 'Mon';
      const hourStr = parts.find((p) => p.type === 'hour')?.value || '10';
      const hour = parseInt(hourStr, 10);

      const isSunday = weekday === 'Sun';
      const isOpen =
        !isSunday &&
        hour >= siteData.hours.openHour &&
        hour < siteData.hours.closeHour;

      return {
        isOpen,
        statusText: isOpen
          ? 'Loja aberta agora · Atendimento até às 18h'
          : 'Fora do expediente presencial · Deixe mensagem no WhatsApp',
      };
    } catch {
      return {
        isOpen: true,
        statusText: 'Atendimento de Segunda a Sábado · 08h às 18h',
      };
    }
  }, []);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(siteData.address.full);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2500);
    } catch {
      setCopiedAddress(false);
    }
  };

  return (
    <section
      id="localizacao"
      className="py-16 md:py-24 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-[#059669] mb-2">
            <span>Ponto Físico no Bairro Alvorada</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-500 font-normal">CEP {siteData.cep}</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0F172A] tracking-tight mb-3">
            Nossa Loja em Cuiabá
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Visite nosso espaço na Rua Poxoréo para conferir pessoalmente os móveis e eletrodomésticos revisados ou trazer seu equipamento para avaliação técnica.
          </p>
        </div>

        {/* Layout em 2 Colunas no Desktop com items-stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Coluna 1: Dados Práticos */}
          <div className="lg:col-span-5 bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Endereço Exato */}
              <div className="pb-5 border-b border-slate-200/80">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#059669]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-base text-[#0F172A] mb-1">
                      Endereço Comercial
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed mb-2">
                      {siteData.address.full}
                    </p>
                    <button
                      type="button"
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F172A] hover:text-[#059669] transition-colors cursor-pointer"
                    >
                      {copiedAddress ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#059669]" />
                          <span className="text-[#059669]">Endereço copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-500" />
                          <span>Copiar endereço completo</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Telefone / WhatsApp */}
              <div className="pb-5 border-b border-slate-200/80">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-[#0F172A]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-[#0F172A] mb-1">
                      Telefone e WhatsApp
                    </h3>
                    <a
                      href={getWhatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-[#059669] hover:underline tabular-nums block mb-0.5"
                    >
                      {siteData.contact.phoneDisplay}
                    </a>
                    <span className="text-xs text-slate-500">
                      Atendimento direto para compras, avaliações e assistência técnica
                    </span>
                  </div>
                </div>
              </div>

              {/* Horário de Funcionamento com Indicador Visual de Status */}
              <div>
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-[#D97706]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-base text-[#0F172A] mb-1">
                      Horário de Funcionamento
                    </h3>

                    {/* Indicador visual de status com ícone e texto explícito */}
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#059669] mb-3">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{storeStatus.statusText}</span>
                    </div>

                    <div className="space-y-1.5 text-xs sm:text-sm">
                      {siteData.hours.schedule.map((row) => (
                        <div
                          key={row.days}
                          className="flex items-center justify-between gap-4 text-slate-600"
                        >
                          <span>{row.days}</span>
                          <span className="font-semibold text-[#0F172A] tabular-nums">
                            {row.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Botões de Ação Prática */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
              <a
                href={siteData.address.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold text-xs sm:text-sm transition-colors whitespace-nowrap shrink-0"
              >
                <Navigation className="w-4 h-4 text-[#34D399] shrink-0" />
                <span>Como Chegar via Google Maps</span>
              </a>

              <a
                href={getWhatsappUrl(
                  'Olá! Gostaria de confirmar a localização da Pregão Pais e Filha na Rua Poxoréo.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-[#0F172A] font-semibold text-xs sm:text-sm transition-colors whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4 text-[#059669] shrink-0" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Mapa Interativo (Google Maps Embed) */}
          <div className="lg:col-span-7 min-h-[380px] lg:min-h-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100 flex flex-col">
            <iframe
              title="Mapa de localização da Pregão Pais e Filha em Cuiabá - MT"
              src={siteData.address.mapsEmbedUrl}
              className="w-full h-full min-h-[380px] lg:min-h-[460px] flex-1 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};
