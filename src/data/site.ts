export const site = {
  name: "Zyra",
  tagline: "Seu time de crescimento sob demanda.",
  description:
    "A Zyra assume a estratégia e a execução do crescimento da sua empresa. Você cuida do negócio. A gente cuida do crescimento. A partir de R$ 550/mês, sem fidelidade, com CRM personalizado incluso.",
  whatsapp: "5562920023208",
  whatsappLabel: "+55 62 92002-3208",
  url: "https://zyraeco.com.br",
};

export function wa(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const nav = [
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "O que cuidamos", href: "/#areas" },
  { label: "Planos", href: "/#planos" },
  { label: "Dúvidas", href: "/#duvidas" },
];

export const plans = [
  {
    name: "Essencial",
    price: "550",
    level: "Uma prioridade",
    audience: "Para começar com uma prioridade clara de crescimento.",
    summary:
      "A Zyra assume uma prioridade principal, definida a partir do diagnóstico, e conduz o trabalho necessário para avançá-la.",
    highlight: false,
    badge: null as string | null,
    cta: "Quero começar",
    role: "Aprovar a estratégia e participar das decisões que realmente precisam de você.",
    outcome: "Uma prioridade. Uma operação focada. Um próximo passo claro.",
    includes: [
      "Diagnóstico e estratégia inicial",
      "Definição da prioridade de crescimento",
      "Execução das ações previstas para essa prioridade",
      "Tráfego pago quando fizer sentido",
      "CRM personalizado",
      "Acompanhamento dos resultados",
    ],
  },
  {
    name: "Crescimento",
    price: "1.290",
    level: "Uma operação contínua",
    audience: "Para deixar o crescimento nas mãos de uma operação contínua.",
    summary:
      "Aqui a Zyra deixa de atuar apenas sobre uma prioridade e passa a conduzir continuamente a operação de crescimento, conectando aquisição, leads, processo comercial e acompanhamento.",
    highlight: true,
    badge: "Recomendado",
    cta: "Quero o Crescimento",
    role: "Aprovar as decisões importantes e acompanhar os resultados. A operação fica com a Zyra.",
    outcome:
      "A cada ciclo, a Zyra analisa o que aconteceu, identifica o que precisa mudar, define as prioridades e conduz a execução.",
    includes: [
      "Tudo do Essencial, mais:",
      "Marketing e aquisição contínuos",
      "Acompanhamento dos leads",
      "Estruturação do processo comercial",
      "CRM e automações",
      "Otimização a cada 15 dias",
      "Relatório de resultados e planejamento do próximo ciclo",
    ],
  },
  {
    name: "Performance",
    price: "2.490",
    level: "Uma operação mais ativa",
    audience: "Para uma operação de crescimento mais ativa e próxima.",
    summary:
      "A Zyra assume uma operação mais ampla, conectando marketing, aquisição e processo comercial, com mais capacidade de prospecção, experimentação e otimização.",
    highlight: false,
    badge: null,
    cta: "Quero o Performance",
    role: "Tomar as decisões que exigem conhecimento ou autoridade do seu negócio. A execução prevista no plano fica com a Zyra.",
    outcome:
      "Mais capacidade de execução, experimentação e acompanhamento para uma operação de crescimento mais ativa.",
    includes: [
      "Tudo do Crescimento, mais:",
      "Prospecção com o Hermes",
      "Integração entre marketing, aquisição e processo comercial",
      "Automações avançadas",
      "Testes e experimentos",
      "Monitoramento contínuo",
      "Análise estratégica mais próxima",
    ],
  },
];

export const planChooser = [
  { plan: "Essencial", text: "Você quer começar e resolver uma prioridade de crescimento." },
  { plan: "Crescimento", text: "Você quer deixar sua operação de crescimento nas mãos da Zyra." },
  { plan: "Performance", text: "Você quer uma operação mais ampla, ativa e próxima, com prospecção, experimentação e otimização contínuas." },
];

export const faq = [
  {
    q: "Vocês fazem a execução ou só orientam?",
    a: "A gente executa. Você aprova a estratégia e as decisões que precisam do seu ok; nosso time cuida da operação prevista no seu plano.",
  },
  {
    q: "Preciso contratar uma equipe?",
    a: "Não para as atividades que estiverem dentro do seu plano. A Zyra funciona como uma extensão do seu time.",
  },
  {
    q: "Preciso aprovar tudo?",
    a: "Não. Você participa das decisões importantes. O restante é conduzido pela Zyra.",
  },
  {
    q: "Existe fidelidade?",
    a: "Não. Você começa sem contrato de fidelidade e continua enquanto fizer sentido para o seu negócio.",
  },
  {
    q: "O CRM está incluso?",
    a: "Sim. A contratação inclui um sistema com CRM personalizado, que organiza o atendimento, as oportunidades e as próximas ações.",
  },
  {
    q: "O tráfego pago está incluso?",
    a: "A gestão do tráfego pode estar incluída conforme o plano. A verba de mídia é separada e definida por você.",
  },
  {
    q: "Vocês vendem pelo meu negócio?",
    a: "O fechamento continua com o seu time comercial. A Zyra cuida da geração e do acompanhamento dos leads e ajuda a estruturar o processo comercial.",
  },
  {
    q: "Vocês garantem vendas?",
    a: "Não prometemos vendas que não podemos garantir. Acompanhamos os indicadores, identificamos gargalos e ajustamos a estratégia continuamente.",
  },
  {
    q: "A partir de quanto posso começar?",
    a: "Planos a partir de R$ 550/mês, com um time completo e sem fidelidade.",
  },
];
