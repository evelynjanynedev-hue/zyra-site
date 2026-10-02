import SectionHeading from "@/components/section-heading";

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
    title: "Você sabe pelo que está pagando",
    text: "O escopo, o investimento e o que será acompanhado ficam claros desde o início.",
  },
  {
    title: "Você pode sair quando quiser",
    text: "Sem fidelidade. Continuamos porque o trabalho está gerando valor.",
  },
];

export default function Trust() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-gradient-to-r from-brand-500/30 via-accent-500/30 to-cyan-accent/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative">
        <SectionHeading
          invert
          eyebrow="Confiança"
          title="Você continua no controle."
          lead="Contratar um time externo não significa perder o controle da sua empresa."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur transition hover:bg-white/[0.07]"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-500/20 text-brand-200" aria-hidden="true">
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
