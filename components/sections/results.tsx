const transformations = [
  {
    before: "Negócios chegavam e se perdiam.",
    action: "Organizamos o atendimento e o processo comercial.",
    after: "Cada oportunidade passa a ser acompanhada até a decisão.",
  },
  {
    before: "Marketing e vendas em caminhos separados.",
    action: "Conectamos aquisição, atendimento e acompanhamento.",
    after: "Uma operação única, com o mesmo objetivo.",
  },
  {
    before: "Sem clareza do que está funcionando.",
    action: "Medimos o que acontece e ajustamos a cada ciclo.",
    after: "Você enxerga o resultado e o próximo passo.",
  },
];

export default function Results() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">O que muda</span>
          <h2 className="section-title mt-4">Da desorganização ao acompanhamento.</h2>
          <p className="section-lead mx-auto text-center">
            O que a Zyra organiza quando assume a operação de crescimento.
          </p>
        </div>

        <div className="mt-14 space-y-5">
          {transformations.map((t, i) => (
            <div
              key={i}
              className="grid gap-4 rounded-3xl border border-gray-100 bg-white p-6 sm:grid-cols-3 sm:items-center sm:gap-8 sm:p-8"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
                  Antes
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink">{t.before}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-500">
                  O que a Zyra fez
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink">{t.action}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600">
                  Depois
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink">{t.after}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
