const areas = [
  { title: "Atrair", text: "Marketing, conteúdo, tráfego pago e prospecção — para gerar demanda." },
  { title: "Converter", text: "Leads, vendas, CRM e atendimento — para transformar contato em cliente." },
  { title: "Operar", text: "Automação, processos e tecnologia — para a operação rodar sem travar." },
  { title: "Melhorar", text: "Dados, acompanhamento e otimização — para o resultado evoluir a cada ciclo." },
];

export default function Areas() {
  return (
    <section id="areas" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">O que a Zyra pode cuidar</span>
          <h2 className="section-title mt-4">Do primeiro contato ao resultado.</h2>
          <p className="section-lead mx-auto text-center">
            Quatro áreas conectadas em uma única operação, em vez de serviços soltos.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a) => (
            <div
              key={a.title}
              className="rounded-3xl border border-gray-100 bg-white p-7 shadow-[var(--shadow-soft)]"
            >
              <h3 className="text-lg font-semibold text-brand-500">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{a.text}</p>
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
