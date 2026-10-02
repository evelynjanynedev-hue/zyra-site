export const site = {
  name: "Zyra",
  tagline: "Seu time de crescimento sob demanda.",
  description:
    "A Zyra assume a estratégia e a execução do crescimento da sua empresa. Você cuida do negócio — a gente cuida do crescimento. A partir de R$ 550/mês, sem fidelidade, com CRM personalizado incluso.",
  whatsapp: "5562920023208",
  whatsappLabel: "+55 62 92002-3208",
  url: "https://zyraeco.com.br",
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const nav = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "O que cuidamos", href: "#areas" },
  { label: "Planos", href: "#planos" },
  { label: "Dúvidas", href: "#duvidas" },
];

export const plans = [
  {
    name: "Essencial",
    price: "550",
    audience: "Para começar a estruturar o crescimento.",
    highlight: false,
    badge: null as string | null,
    cta: "Quero começar",
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
    includes: [
      "Tudo do Crescimento, mais:",
      "Operação integrada de marketing e comercial",
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
    a: "Fazemos a execução. A Zyra não entrega apenas um plano: depois que você aprova a estratégia, nosso time executa as ações previstas no escopo contratado e acompanha os resultados.",
  },
  {
    q: "Preciso contratar uma equipe?",
    a: "Não para as atividades que estiverem dentro do seu plano. A ideia da Zyra é justamente assumir parte da estrutura de crescimento que você teria que montar sozinho.",
  },
  {
    q: "Preciso aprovar tudo?",
    a: "Não. Você participa das decisões que realmente precisam da sua aprovação. O restante é conduzido pela Zyra.",
  },
  {
    q: "Existe fidelidade?",
    a: "Não. Você começa sem contrato de fidelidade e continua porque está vendo valor no trabalho.",
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
    a: "O fechamento continua com o seu time comercial. A Zyra cuida da geração e do acompanhamento dos leads e ajuda a estruturar o processo comercial para vender com mais previsibilidade.",
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
