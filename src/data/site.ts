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
    audience: "Para começar a estruturar o crescimento.",
    highlight: false,
    badge: null as string | null,
    cta: "Quero começar",
    note: "Operação focada em uma prioridade por vez, definida a partir do diagnóstico.",
    includes: [
      "Diagnóstico e estratégia inicial",
      "Uma prioridade principal de crescimento",
      "Execução das ações previstas",
      "Tráfego pago quando fizer sentido",
      "CRM personalizado",
      "Acompanhamento dos resultados",
    ],
  },
  {
    name: "Crescimento",
    price: "1.290",
    audience: "Para ter uma operação contínua de crescimento.",
    highlight: true,
    badge: null as string | null,
    cta: "Quero o Crescimento",
    note: "Para empresas que querem deixar de cuidar do crescimento de forma improvisada.",
    includes: [
      "Tudo do Essencial, mais:",
      "Marketing e aquisição contínuos",
      "Acompanhamento de leads",
      "Estruturação do processo comercial",
      "Automações",
      "Otimização a cada 15 dias",
      "Relatório e planejamento do próximo ciclo",
    ],
  },
  {
    name: "Performance",
    price: "2.490",
    audience: "Para uma operação mais completa e próxima.",
    highlight: false,
    badge: "Mais completo",
    cta: "Quero o Performance",
    note: "Para empresas que querem uma operação mais próxima e contínua.",
    includes: [
      "Tudo do Crescimento, mais:",
      "Integração entre marketing, aquisição e processo comercial",
      "Prospecção com o Hermes",
      "Automações avançadas",
      "Testes e experimentos",
      "Monitoramento contínuo",
      "Análise estratégica",
    ],
  },
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
