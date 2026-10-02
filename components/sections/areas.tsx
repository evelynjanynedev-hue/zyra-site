import SectionHeading from "@/components/section-heading";

const areas = [
  {
    title: "Atrair",
    text: "Marketing, conteúdo, tráfego pago e prospecção — para gerar demanda.",
    icon: <path d="M3 11l18-8-8 18-2-8-8-2z" />,
  },
  {
    title: "Converter",
    text: "Leads, vendas, CRM e atendimento — para transformar contato em cliente.",
    icon: <path d="M3 3v18h18M7 15l3-3 3 3 5-6" />,
  },
  {
    title: "Operar",
    text: "Automação, processos e tecnologia — para a operação rodar sem travar.",
    icon: <path d="M12 3v3m0 12v3M3 12h3m12 0h3M6 6l2 2m8 8l2 2m0-12l-2 2M8 16l-2 2" />,
  },
  {
    title: "Melhorar",
    text: "Dados, acompanhamento e otimização — para o resultado evoluir a cada ciclo.",
    icon: <path d="M21 12a9 9 0 11-3-6.7M21 4v5h-5" />,
  },
];

export default function Areas() {
  return (
    <section id="areas" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="O que a Zyra pode cuidar"
          title="Tudo o que precisa acontecer para o crescimento acontecer."
          lead="Quatro áreas conectadas em uma única operação, em vez de serviços soltos."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a) => (
            <div key={a.title} className="card flex flex-col p-7 transition hover:-translate-y-1">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {a.icon}
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{a.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm font-medium text-ink-soft">
          Atrair → Converter → Operar → Melhorar
          <span className="mx-2 text-brand-500" aria-hidden="true">↺</span>
          e o ciclo recomeça melhor a cada mês.
        </p>
      </div>
    </section>
  );
}
