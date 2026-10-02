export const site = {
  name: "Zyra",
  tagline: "Seu time de crescimento sob demanda.",
  description:
    "A Zyra assume a estratégia e a execução do crescimento da sua empresa. Você só aprova e vê os resultados. A partir de R$ 550/mês, sem fidelidade, com CRM personalizado incluso.",
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
    audience: "Para empresas que precisam começar a estruturar o crescimento.",
    highlight: false,
    badge: null as string | null,
    cta: "Quero o Essencial",
    includes: [
      "Diagnóstico inicial e estratégia personalizada",
      "Uma prioridade principal de crescimento",
      "Execução pela Zyra",
      "Tráfego pago quando fizer sentido para a estratégia",
      "CRM personalizado incluso",
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
      "Tudo do Essencial",
      "Operação contínua de marketing e aquisição",
      "Acompanhamento de leads e estrutura comercial",
      "CRM operacional e automações",
      "Otimização a cada 15 dias",
      "Relatório mensal e planejamento do próximo ciclo",
    ],
  },
  {
    name: "Performance",
    price: "2.490",
    audience: "Para uma operação de crescimento mais completa.",
    highlight: false,
    badge: "Mais completo",
    cta: "Quero o Performance",
    includes: [
      "Tudo do Crescimento",
      "Operação integrada de marketing e comercial",
      "Prospecção com o Hermes",
      "Automações avançadas",
      "Testes e experimentos",
      "Monitoramento e otimização contínuos",
      "Análise executiva dos resultados",
    ],
  },
];

export const faq = [
  {
    q: "Vocês fazem a execução ou só orientam?",
    a: "A Zyra assume a execução. Nossa proposta é cuidar da estratégia e colocar o plano em prática. Você aprova e acompanha o que for necessário — não precisa contratar nem gerenciar uma equipe para isso.",
  },
  {
    q: "Preciso contratar uma equipe?",
    a: "Não. A Zyra funciona como o seu time de crescimento sob demanda: estratégia, execução e acompanhamento em uma única operação.",
  },
  {
    q: "Preciso aprovar tudo?",
    a: "Você aprova a estratégia e as decisões importantes. A operação do dia a dia fica com a Zyra, sem você precisar acompanhar cada tarefa.",
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
    q: "Vocês garantem vendas?",
    a: "Não prometemos faturamento garantido. Assumimos a operação de crescimento, acompanhamos os indicadores e otimizamos continuamente. O fechamento da venda é feito pelo seu time comercial, e ajudamos a estruturar esse processo.",
  },
  {
    q: "A partir de quanto posso começar?",
    a: "Planos a partir de R$ 550/mês, com um time completo e sem fidelidade.",
  },
];
