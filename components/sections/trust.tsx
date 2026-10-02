const points = [
  {
    title: "Nada importante acontece sem você",
    text: "Você aprova a estratégia e as decisões que precisam da sua participação.",
  },
  {
    title: "Você sabe o que está acontecendo",
    text: "Acompanhe ações, resultados e próximos passos, sem precisar caçar informação.",
  },
  {
    title: "Você pode sair quando quiser",
    text: "Sem fidelidade. Continuamos porque o trabalho está gerando valor.",
  },
];

export default function Trust() {
  return (
    <section className="bg-brand-950 py-20 text-white sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
            Confiança
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Você continua no controle.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-100/70 sm:text-lg">
            Contratar um time externo não significa perder o controle da sua
            empresa.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {points.map((p) => (
            <div key={p.title} className="rounded-3xl border border-white/10 bg-white/[0.05] p-8">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-500/20 text-brand-200" aria-hidden="true">
                ✓
              </span>
              <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-100/75">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
