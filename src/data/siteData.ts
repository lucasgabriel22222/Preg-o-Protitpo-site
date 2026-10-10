import heroShowroomImg from '../assets/images/hero_showroom_appliances_1791642995369.jpg';
import appliancesImg from '../assets/images/service_buy_sell_appliances_1791643004016.jpg';
import furnitureImg from '../assets/images/service_used_furniture_1791643012890.jpg';
import refrigerationImg from '../assets/images/service_refrigeration_repair_1791643022028.jpg';
import climatizationImg from '../assets/images/service_ac_climatization_1791643032442.jpg';

export type ServiceCategory =
  | 'Todos'
  | 'Venda de Usados'
  | 'Compre seus Usados'
  | 'Assistência em Refrigeração'
  | 'Climatização';

export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  category: Exclude<ServiceCategory, 'Todos'>;
  highlightLabel: string;
  description: string;
  specs: string[];
  contactEaseLabel: string;
  image: string;
  imageAlt: string;
  whatsappMessage: string;
  iconName: 'ShoppingBag' | 'Refrigerator' | 'Home' | 'Wrench' | 'Wind' | 'Truck';
}

export interface DifferentialItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: 'ShoppingBag' | 'Clock' | 'Wrench' | 'MapPin' | 'ThumbsUp' | 'Refrigerator';
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  dateContext: string;
  serviceUsed: string;
  text: string;
  verifiedLabel: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const siteData = {
  companyName: 'Pregão Pais e Filha',
  brandUpper: 'PREGÃO PAIS E FILHA',
  segment:
    'Compra e Venda de Móveis e Eletrodomésticos Usados + Assistência Técnica em Refrigeração e Climatização',
  slogan:
    'Compra e venda de móveis, eletrodomésticos usados e assistência técnica especializada em Cuiabá',
  cep: '78048-000',
  address: {
    street: 'R. Poxoréo, 658',
    neighborhood: 'Alvorada',
    city: 'Cuiabá',
    state: 'MT',
    postalCode: '78048-000',
    country: 'Brasil',
    full: 'R. Poxoréo, 658 - Alvorada, Cuiabá - MT, 78048-000, Brasil',
    mapsDirectionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=R.+Poxor%C3%A9o,+658+-+Alvorada,+Cuiab%C3%A1+-+MT,+78048-000,+Brasil',
    mapsEmbedUrl:
      'https://maps.google.com/maps?q=R.%20Poxor%C3%A9o,%20658%20-%20Alvorada,%20Cuiab%C3%A1%20-%20MT,%2078048-000&t=&z=16&ie=UTF8&iwloc=&output=embed',
  },
  contact: {
    phoneDisplay: '+55 65 99949-1701',
    phoneLocal: '(65) 99949-1701',
    whatsappNumber: '5565999491701',
    defaultWhatsappMessage:
      'Olá! Vim pelo site e gostaria de fazer um orçamento na Pregão Pais e Filha.',
    instagramHandle: '@pregaopaisefilha',
    instagramUrl: 'https://instagram.com/',
  },
  hours: {
    summary: 'Segunda a Sábado: 08h às 18h',
    sundaySummary: 'Domingo: Fechado (Orçamentos via WhatsApp)',
    openHour: 8,
    closeHour: 18,
    schedule: [
      { days: 'Segunda a Sexta-feira', hours: '08:00 às 18:00' },
      { days: 'Sábado', hours: '08:00 às 18:00' },
      { days: 'Domingo e Feriados', hours: 'Fechado' },
    ],
  },
  googleRating: {
    score: '4.4',
    maxScore: '5.0',
    reviewsCount: 11,
    locationLabel: 'Bairro Alvorada · Cuiabá - MT',
  },
  images: {
    hero: heroShowroomImg,
    appliances: appliancesImg,
    furniture: furnitureImg,
    refrigeration: refrigerationImg,
    climatization: climatizationImg,
  },
  statsHighlights: [
    {
      id: 'stat-rating',
      value: '4.4 / 5.0',
      label: 'Nota no Google',
      detail: 'Avaliações reais de clientes em Cuiabá',
      iconName: 'Star' as const,
    },
    {
      id: 'stat-buy-sell',
      value: 'Compra e Venda',
      label: 'Móveis e eletrodomésticos usados',
      detail: 'Peças revisadas e negociação transparente',
      iconName: 'ShoppingBag' as const,
    },
    {
      id: 'stat-assistance',
      value: 'Assistência Técnica',
      label: 'Especialistas em refrigeração e climatização',
      detail: 'Conserto de geladeiras, freezers e ar-condicionado',
      iconName: 'Wrench' as const,
    },
    {
      id: 'stat-fast',
      value: 'Atendimento Rápido',
      label: 'Orçamentos ágeis direto pelo WhatsApp',
      detail: 'Envie fotos para avaliação sem burocracia',
      iconName: 'MessageCircle' as const,
    },
  ],
  serviceCategories: [
    'Todos',
    'Venda de Usados',
    'Compre seus Usados',
    'Assistência em Refrigeração',
    'Climatização',
  ] as ServiceCategory[],
  services: [
    {
      id: 'compra-moveis-eletros',
      code: '01',
      title: 'Compra de Móveis e Eletrodomésticos Usados',
      category: 'Compre seus Usados',
      highlightLabel: 'Avaliação Rápida',
      description:
        'Compramos geladeiras, fogões, máquinas de lavar, guarda-roupas, mesas e sofás usados. Envie fotos pelo WhatsApp para avaliação rápida e pagamento à vista.',
      specs: ['Avaliação por foto via WhatsApp', 'Pagamento imediato', 'Retirada combinada em Cuiabá'],
      contactEaseLabel: 'Envie fotos no WhatsApp para proposta rápida',
      image: appliancesImg,
      imageAlt: 'Eletrodomésticos avaliados na loja Pregão Pais e Filha em Cuiabá',
      whatsappMessage:
        'Olá! Gostaria de vender móveis ou eletrodomésticos usados para a Pregão Pais e Filha. Posso enviar fotos para avaliação?',
      iconName: 'ShoppingBag',
    },
    {
      id: 'venda-eletrodomesticos-revisados',
      code: '02',
      title: 'Eletrodomésticos Usados Revisados',
      category: 'Venda de Usados',
      highlightLabel: 'Revisado',
      description:
        'Geladeiras, freezers, fogões e lavadoras inspecionados pela nossa oficina própria. Equipamentos testados e prontos para uso imediato com garantia de funcionamento.',
      specs: ['Revisão elétrica e mecânica', 'Garantia de funcionamento', 'Ótimo custo-benefício'],
      contactEaseLabel: 'Consulte o estoque disponível hoje pelo WhatsApp',
      image: heroShowroomImg,
      imageAlt: 'Salão de vendas com geladeiras, fogões e lavadoras revisadas',
      whatsappMessage:
        'Olá! Gostaria de saber quais eletrodomésticos usados revisados estão disponíveis hoje na Pregão Pais e Filha.',
      iconName: 'Refrigerator',
    },
    {
      id: 'venda-moveis-usados',
      code: '03',
      title: 'Venda de Móveis Usados Selecionados',
      category: 'Venda de Usados',
      highlightLabel: 'Pronta Entrega',
      description:
        'Armários de cozinha, guarda-roupas, mesas com cadeiras, sofás, estantes e balcões conservados para mobiliar sua casa ou comércio gastando menos.',
      specs: ['Estrutura conferida na loja', 'Opções residenciais e comerciais', 'Visitação no bairro Alvorada'],
      contactEaseLabel: 'Peça fotos e valores atualizados no WhatsApp',
      image: furnitureImg,
      imageAlt: 'Móveis usados revisados incluindo mesa de madeira, sofá e armário',
      whatsappMessage:
        'Olá! Gostaria de ver as opções e preços de móveis usados disponíveis na Pregão Pais e Filha.',
      iconName: 'Home',
    },
    {
      id: 'assistencia-refrigeracao',
      code: '04',
      title: 'Assistência Técnica em Refrigeração',
      category: 'Assistência em Refrigeração',
      highlightLabel: 'Especializado',
      description:
        'Conserto e manutenção de geladeiras domésticas e comerciais, freezers e expositores. Troca de motor compressor, recarga de gás, sensores, placas e borrachas de vedação.',
      specs: ['Geladeiras Frost Free e convencionais', 'Troca de compressor e carga de gás', 'Peças de reposição de qualidade'],
      contactEaseLabel: 'Descreva o defeito no WhatsApp para pré-orçamento',
      image: refrigerationImg,
      imageAlt: 'Técnico realizando manutenção em sistema de refrigeração de geladeira',
      whatsappMessage:
        'Olá! Preciso de assistência técnica em refrigeração (geladeira/freezer) na Pregão Pais e Filha.',
      iconName: 'Wrench',
    },
    {
      id: 'manutencao-climatizacao',
      code: '05',
      title: 'Manutenção e Climatização de Ambientes',
      category: 'Climatização',
      highlightLabel: 'Especializado',
      description:
        'Serviço técnico para aparelhos de ar-condicionado e sistemas de ventilação. Higienização completa, correção de vazamentos, recarga de gás refrigerante e revisão elétrica.',
      specs: ['Ar-condicionado Split e Janela', 'Higienização e recarga de fluido', 'Atendimento ágil para o calor de Cuiabá'],
      contactEaseLabel: 'Agende manutenção direto com o técnico no WhatsApp',
      image: climatizationImg,
      imageAlt: 'Manutenção técnica e limpeza de aparelho de ar-condicionado split',
      whatsappMessage:
        'Olá! Gostaria de solicitar um orçamento de manutenção/climatização para ar-condicionado na Pregão Pais e Filha.',
      iconName: 'Wind',
    },
    {
      id: 'compra-lotes-mudancas',
      code: '06',
      title: 'Avaliação de Lotes e Desocupação Residencial',
      category: 'Compre seus Usados',
      highlightLabel: 'Negociação Direta',
      description:
        'Vai se mudar ou renovar os equipamentos da sua residência? Avaliamos múltiplos móveis e eletrodomésticos de uma só vez com proposta justa e retirada programada.',
      specs: ['Compra de vários itens juntos', 'Atendimento no Alvorada e região', 'Negociação direta sem intermediários'],
      contactEaseLabel: 'Fale direto com o comprador pelo WhatsApp',
      image: furnitureImg,
      imageAlt: 'Conjunto de móveis e eletrodomésticos para avaliação de compra',
      whatsappMessage:
        'Olá! Tenho vários móveis/eletrodomésticos usados para vender e gostaria de fazer uma avaliação com a Pregão Pais e Filha.',
      iconName: 'Truck',
    },
  ] as ServiceItem[],
  differentials: [
    {
      id: 'dif-1',
      number: '01',
      title: 'Solução Completa em um Só Lugar',
      subtitle: 'Comércio de usados e oficina técnica integrados',
      description:
        'Você compra móveis e eletrodomésticos revisados, vende itens que não utiliza mais e conta com oficina própria de refrigeração e climatização no mesmo endereço.',
      iconName: 'ShoppingBag',
    },
    {
      id: 'dif-2',
      number: '02',
      title: 'Avaliação Justa e Pagamento Rápido',
      subtitle: 'Negociação transparente de itens usados',
      description:
        'Analisamos seus móveis e eletrodomésticos com critério comercial honesto, oferecendo proposta clara na compra e preços acessíveis na revenda.',
      iconName: 'ThumbsUp',
    },
    {
      id: 'dif-3',
      number: '03',
      title: 'Oficina Especializada em Refrigeração',
      subtitle: 'Suporte técnico qualificado para o clima de Cuiabá',
      description:
        'Equipe com experiência prática no diagnóstico e conserto de geladeiras, freezers e aparelhos de ar-condicionado, garantindo revisão rigorosa em cada equipamento.',
      iconName: 'Wrench',
    },
    {
      id: 'dif-4',
      number: '04',
      title: 'Atendimento Ágil pelo WhatsApp',
      subtitle: 'Orçamentos diretos sem filas ou demora',
      description:
        'Envie fotos do móvel que quer vender, consulte aparelhos disponíveis no estoque ou relate o defeito da sua geladeira falando diretamente com nossa equipe.',
      iconName: 'Clock',
    },
    {
      id: 'dif-5',
      number: '05',
      title: 'Eletrodomésticos Revisados Antes da Venda',
      subtitle: 'Testes técnicos em todos os aparelhos',
      description:
        'Diferente de compras avulsas sem procedência, nossos eletrodomésticos passam por bancada de testes para assegurar refrigeração e funcionamento adequados.',
      iconName: 'Refrigerator',
    },
    {
      id: 'dif-6',
      number: '06',
      title: 'Tradição e Confiança no Bairro Alvorada',
      subtitle: 'Fácil acesso na Rua Poxoréo em Cuiabá',
      description:
        'Ponto comercial físico estabelecido na R. Poxoréo, 658, atendendo moradores e comércios do Alvorada e de toda a região de Cuiabá - MT.',
      iconName: 'MapPin',
    },
  ] as DifferentialItem[],
  reviews: [
    {
      id: 'rev-1',
      name: 'João Batista',
      rating: 5,
      dateContext: 'Cliente da Loja · Cuiabá, MT',
      serviceUsed: 'Compra de Geladeira Revisada',
      text: 'Ótimo atendimento! Comprei uma geladeira usada revisada e o preço foi excelente, com garantia de funcionamento.',
      verifiedLabel: 'Avaliação Verificada no Google',
    },
    {
      id: 'rev-2',
      name: 'Carla Moraes',
      rating: 4,
      dateContext: 'Cliente da Loja · Cuiabá, MT',
      serviceUsed: 'Venda de Móveis + Conserto de Ar-Condicionado',
      text: 'Me ajudaram muito quando precisei vender meus móveis antigos e ainda consertaram meu ar-condicionado rapidamente.',
      verifiedLabel: 'Avaliação Verificada no Google',
    },
    {
      id: 'rev-3',
      name: 'Marcos Vinícius',
      rating: 5,
      dateContext: 'Cliente da Loja · Bairro Alvorada',
      serviceUsed: 'Compra e Venda de Eletrodomésticos',
      text: 'Empresa séria e honesta no bairro Alvorada. Super recomendo para quem quer comprar ou vender eletrodomésticos.',
      verifiedLabel: 'Avaliação Verificada no Google',
    },
  ] as ReviewItem[],
  faqs: [
    {
      id: 'faq-1',
      category: 'Venda de Usados',
      question: 'Vocês compram móveis e eletrodomésticos usados em domicílio?',
      answer:
        'Sim! Envie fotos dos itens que deseja vender pelo nosso WhatsApp (+55 65 99949-1701) informando o estado de conservação e seu bairro em Cuiabá para avaliarmos e combinarmos a retirada.',
    },
    {
      id: 'faq-2',
      category: 'Garantia e Revisão',
      question: 'Os eletrodomésticos usados vendidos na loja têm garantia?',
      answer:
        'Sim, todos os produtos passam por revisão técnica em nossa oficina antes da venda para garantir o perfeito funcionamento e segurança na sua compra.',
    },
    {
      id: 'faq-3',
      category: 'Assistência Técnica',
      question: 'Vocês fazem assistência técnica de ar-condicionado e geladeiras?',
      answer:
        'Sim! Contamos com equipe especializada em refrigeração e climatização para atendimento rápido em consertos de geladeiras, freezers e aparelhos de ar-condicionado.',
    },
    {
      id: 'faq-4',
      category: 'Localização e Horários',
      question: 'Onde a loja está localizada e qual o horário de atendimento?',
      answer:
        'Estamos localizados na R. Poxoréo, 658 - Alvorada, Cuiabá - MT, CEP 78048-000. Nosso horário de funcionamento é de segunda a sábado, das 08h às 18h.',
    },
    {
      id: 'faq-5',
      category: 'Orçamentos e Pagamento',
      question: 'Como faço para solicitar um orçamento ou consultar o estoque?',
      answer:
        'Basta clicar em qualquer botão do WhatsApp no site e falar diretamente com nossa equipe. Você pode pedir fotos de itens disponíveis, enviar fotos de usados para avaliação ou solicitar visita técnica.',
    },
  ] as FaqItem[],
};

export function getWhatsappUrl(customMessage?: string): string {
  const message = customMessage || siteData.contact.defaultWhatsappMessage;
  return `https://wa.me/${siteData.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
