import React, { useState, useEffect } from 'react';
import {
  X,
  MessageCircle,
  Copy,
  Check,
  ShoppingBag,
  Wrench,
  Refrigerator,
} from 'lucide-react';
import { getWhatsappUrl, ServiceItem } from '../data/siteData';

interface QuoteSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceItem | null;
}

type RequestType = 'vender' | 'comprar' | 'assistencia';

export const QuoteSimulatorModal: React.FC<QuoteSimulatorModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [requestType, setRequestType] = useState<RequestType>('comprar');
  const [itemCategory, setItemCategory] = useState<string>('Geladeira / Freezer');
  const [neighborhood, setNeighborhood] = useState<string>('Alvorada');
  const [notes, setNotes] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialService) {
      if (initialService.category === 'Compre seus Usados') {
        setRequestType('vender');
        setItemCategory('Móveis e Eletrodomésticos Usados');
      } else if (
        initialService.category === 'Assistência em Refrigeração' ||
        initialService.category === 'Climatização'
      ) {
        setRequestType('assistencia');
        setItemCategory(
          initialService.category === 'Climatização'
            ? 'Ar-Condicionado Split / Janela'
            : 'Geladeira / Freezer'
        );
      } else {
        setRequestType('comprar');
        setItemCategory(
          initialService.id.includes('moveis')
            ? 'Móveis Usados (Armário, Mesa, Sofá)'
            : 'Geladeira / Fogão / Lavadora Revisada'
        );
      }
    }
  }, [initialService]);

  if (!isOpen) return null;

  const buildCustomMessage = () => {
    const actionLabel =
      requestType === 'vender'
        ? 'vender um item usado para a loja'
        : requestType === 'comprar'
          ? 'consultar disponibilidade para compra de usado revisado'
          : 'solicitar orçamento de assistência técnica';

    const lines = [
      `Olá! Vim pelo site da Pregão Pais e Filha e gostaria de ${actionLabel}.`,
      `• Item / Equipamento: ${itemCategory}`,
      `• Bairro em Cuiabá: ${neighborhood || 'Não informado'}`,
    ];

    if (notes.trim()) {
      lines.push(`• Detalhes: ${notes.trim()}`);
    }

    return lines.join('\n');
  };

  const fullMessage = buildCustomMessage();
  const whatsappUrl = getWhatsappUrl(fullMessage);

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(fullMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const itemOptions =
    requestType === 'assistencia'
      ? [
          'Geladeira / Freezer',
          'Ar-Condicionado Split / Janela',
          'Expositor / Balcão Refrigerado',
          'Outro Equipamento de Refrigeração',
        ]
      : [
          'Geladeira / Freezer',
          'Fogão / Lavadora de Roupas',
          'Móveis Usados (Armário, Mesa, Sofá)',
          'Ar-Condicionado Usado',
          'Lote com Vários Móveis e Eletros',
        ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/75 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="simulator-modal-title"
    >
      <div className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl">
        {/* Cabeçalho */}
        <div className="px-6 py-4 bg-[#0F172A] text-white flex items-center justify-between gap-4">
          <div>
            <h3
              id="simulator-modal-title"
              className="font-heading font-bold text-lg tracking-tight"
            >
              Atendimento Rápido via WhatsApp
            </h3>
            <p className="text-xs text-slate-300">
              Selecione o que você precisa para agilizar seu orçamento
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar janela"
            className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-200 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Corpo do Simulador */}
        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          {/* 1. Escolha da modalidade */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              1. O que você deseja fazer hoje?
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => {
                  setRequestType('comprar');
                  setItemCategory('Geladeira / Freezer');
                }}
                className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                  requestType === 'comprar'
                    ? 'border-[#059669] bg-[#059669]/8 text-[#0F172A]'
                    : 'border-slate-200 hover:border-slate-300 text-slate-600'
                }`}
              >
                <Refrigerator className="w-4 h-4 text-[#059669] mb-1.5" />
                <div className="font-heading font-bold text-xs">Comprar Usado</div>
                <div className="text-[11px] text-slate-500">Revisado na loja</div>
              </button>

              <button
                type="button"
                onClick={() => {
                  setRequestType('vender');
                  setItemCategory('Geladeira / Freezer');
                }}
                className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                  requestType === 'vender'
                    ? 'border-[#059669] bg-[#059669]/8 text-[#0F172A]'
                    : 'border-slate-200 hover:border-slate-300 text-slate-600'
                }`}
              >
                <ShoppingBag className="w-4 h-4 text-[#D97706] mb-1.5" />
                <div className="font-heading font-bold text-xs">Vender Usado</div>
                <div className="text-[11px] text-slate-500">Avaliação rápida</div>
              </button>

              <button
                type="button"
                onClick={() => {
                  setRequestType('assistencia');
                  setItemCategory('Geladeira / Freezer');
                }}
                className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                  requestType === 'assistencia'
                    ? 'border-[#059669] bg-[#059669]/8 text-[#0F172A]'
                    : 'border-slate-200 hover:border-slate-300 text-slate-600'
                }`}
              >
                <Wrench className="w-4 h-4 text-[#0F172A] mb-1.5" />
                <div className="font-heading font-bold text-xs">Assistência</div>
                <div className="text-[11px] text-slate-500">Conserto / Clima</div>
              </button>
            </div>
          </div>

          {/* 2. Seleção do Item */}
          <div>
            <label
              htmlFor="item-category-select"
              className="block text-xs font-semibold text-slate-700 mb-1.5"
            >
              2. Qual o tipo de móvel ou equipamento?
            </label>
            <select
              id="item-category-select"
              value={itemCategory}
              onChange={(e) => setItemCategory(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#0F172A] focus:outline-2 focus:outline-[#059669]"
            >
              {itemOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* 3. Bairro em Cuiabá */}
          <div>
            <label
              htmlFor="neighborhood-input"
              className="block text-xs font-semibold text-slate-700 mb-1.5"
            >
              3. Seu bairro em Cuiabá / Região
            </label>
            <input
              id="neighborhood-input"
              type="text"
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
              placeholder="Ex: Alvorada, CPA, Centro, Despraiado..."
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#0F172A] focus:outline-2 focus:outline-[#059669]"
            />
          </div>

          {/* 4. Observações */}
          <div>
            <label
              htmlFor="notes-textarea"
              className="block text-xs font-semibold text-slate-700 mb-1.5"
            >
              4. Detalhes adicionais (opcional)
            </label>
            <textarea
              id="notes-textarea"
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={
                requestType === 'assistencia'
                  ? 'Ex: Geladeira liga mas não gela na parte de baixo...'
                  : requestType === 'vender'
                    ? 'Ex: Geladeira Brastemp Frost Free em bom estado, posso enviar fotos...'
                    : 'Ex: Procuro geladeira duplex revisada até determinado valor...'
              }
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-[#0F172A] focus:outline-2 focus:outline-[#059669]"
            />
          </div>

          {/* Prévia da Mensagem */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5">
            <div className="text-[11px] font-semibold text-slate-400 mb-1">
              Mensagem pronta para envio:
            </div>
            <pre className="text-xs text-slate-700 whitespace-pre-wrap font-sans leading-relaxed">
              {fullMessage}
            </pre>
          </div>

          {/* Botões de Envio */}
          <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#059669] hover:bg-[#047857] text-white font-semibold text-sm transition-colors whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Enviar no WhatsApp Agora</span>
            </a>

            <button
              type="button"
              onClick={handleCopyMessage}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#059669]" />
                  <span className="text-[#059669]">Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar Texto</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
