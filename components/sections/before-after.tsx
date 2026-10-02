import SectionHeading from "@/components/section-heading";

export default function BeforeAfter() {
  return (
    <section className="bg-gray-50/60 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="A diferença"
          title="Uma operação. Um time. Uma estratégia."
        />

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-2">
          <div className="card flex flex-col p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gray-100 text-gray-400" aria-hidden="true">
                ✕
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-soft">
                Antes
              </p>
            </div>
            <p className="mt-5 text-lg font-medium text-ink">
              Cada parte em um lugar diferente.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Marketing em um lugar.",
                "Leads em outro.",
                "CRM separado.",
                "Vendas tentando acompanhar.",
              ].map((line) => (
                <li
                  key={line}
                  className="flex items-center gap-3 rounded-2xl border border-dashed border-gray-300 px-5 py-4 text-sm text-ink-soft"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" aria-hidden="true" />
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-auto pt-7 text-sm font-semibold text-red-500">
              E ninguém olhando o todo.
            </p>
          </div>

          <div className="relative flex flex-col overflow-hidden rounded-3xl border border-brand-500/30 bg-white p-8 shadow-[var(--shadow-elevated)] sm:p-10">
            <div
              className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-gradient-to-r from-brand-500/20 to-accent-500/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-50 text-brand-500" aria-hidden="true">
                ✓
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-600">
                Com a Zyra
              </p>
            </div>
            <p className="relative mt-5 text-lg font-medium text-ink">
              Uma equipe cuidando do crescimento de ponta a ponta.
            </p>

            <div className="relative mt-8 flex flex-wrap gap-2.5">
              {["Estratégia", "Marketing", "Aquisição", "Leads", "CRM", "Acompanhamento", "Otimização"].map(
                (a) => (
                  <span
                    key={a}
                    className="rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700"
                  >
                    {a}
                  </span>
                )
              )}
            </div>

            <p className="relative mt-6 text-sm text-ink-soft">
              Tudo conectado ao mesmo objetivo.
            </p>

            <p className="relative mt-auto pt-7 text-sm font-semibold text-brand-600">
              Você não precisa coordenar fornecedores. Você aprova — a Zyra conduz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
