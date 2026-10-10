import React from 'react';
import { Star, CheckCircle2, Quote } from 'lucide-react';
import { siteData } from '../data/siteData';

export const ReviewsSection: React.FC = () => {
  return (
    <section
      id="avaliacoes"
      className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho + Destaque da Nota no Google */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-[#059669] mb-2">
              <span>Reputação Local Comprovada</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500 font-normal">
                {siteData.googleRating.locationLabel}
              </span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0F172A] tracking-tight mb-3">
              O Que Dizem Nossos Clientes
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Relatos reais de clientes que compraram eletrodomésticos revisados, venderam móveis usados ou utilizaram nossa assistência técnica em Cuiabá.
            </p>
          </div>

          {/* Bloco Resumo da Nota no Google */}
          <div className="bg-white border border-slate-200 rounded-xl px-6 py-4 flex items-center gap-4 shrink-0">
            <div className="text-left">
              <div className="flex items-baseline gap-1.5">
                <span className="font-heading font-bold text-3xl text-[#0F172A] tabular-nums">
                  {siteData.googleRating.score}
                </span>
                <span className="text-sm text-slate-400 font-medium tabular-nums">
                  / {siteData.googleRating.maxScore}
                </span>
              </div>
              <div className="text-xs text-slate-500 tabular-nums">
                Baseado em {siteData.googleRating.reviewsCount} avaliações no Google
              </div>
            </div>

            <div className="h-10 w-[1px] bg-slate-200" aria-hidden="true" />

            <div className="flex flex-col gap-1">
              <div
                className="flex items-center gap-1"
                aria-label="Nota 4.4 de 5 estrelas no Google"
              >
                {[1, 2, 3, 4, 5].map((starIndex) => (
                  <Star
                    key={starIndex}
                    className={`w-4 h-4 ${
                      starIndex <= 4
                        ? 'text-[#F59E0B] fill-[#F59E0B]'
                        : 'text-[#F59E0B] fill-[#F59E0B]/45'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs font-medium text-slate-700">
                Nota Oficial Google Maps
              </span>
            </div>
          </div>
        </div>

        {/* Grid de Cards de Depoimentos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {siteData.reviews.map((review) => (
            <article
              key={review.id}
              className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-150 hover:shadow-xs"
            >
              <div>
                {/* Topo do Card: 5 Estrelas Amarelas + Ícone de Citação */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div
                    className="flex items-center gap-1"
                    aria-label={`Avaliação de ${review.rating} estrelas`}
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= review.rating
                            ? 'text-[#F59E0B] fill-[#F59E0B]'
                            : 'text-[#F59E0B] fill-[#F59E0B]/30'
                        }`}
                      />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-slate-200 shrink-0" />
                </div>

                {/* Citação entre Aspas */}
                <blockquote className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  "{review.text}"
                </blockquote>
              </div>

              {/* Rodapé do Card: Nome do Cliente + Identificador Verificado */}
              <div className="pt-4 border-t border-slate-100">
                <div className="font-heading font-bold text-base text-[#0F172A]">
                  {review.name}
                </div>
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 mt-1">
                  <span>{review.serviceUsed}</span>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1 font-medium text-[#059669]">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{review.verifiedLabel}</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
