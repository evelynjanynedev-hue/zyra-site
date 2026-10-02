export default function BeforeAfter() {
  return (
    <section className="bg-gray-50/70 py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">A diferença</span>
          <h2 className="section-title mt-4">Uma operação. Um time. Uma estratégia.</h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-soft">
              Sem Zyra
            </p>
            <p className="mt-3 text-lg font-medium text-ink">
              Cada parte com um fornecedor diferente.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                ["Marketing", "Fornecedor A"],
                ["Tráfego", "Fornecedor B"],
                ["CRM", "Ferramenta C"],
                ["Atendimento", "Equipe interna"],
              ].map(([area, who]) => (
                <li
                  key={area}
                  className="flex items-center justify-between rounded-2xl border border-dashed border-gray-300 px-5 py-4 text-sm"
                >
                  <span className="font-medium text-ink">{area}</span>
                  <span className="text-ink-soft">{who}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-semibold text-red-500">
              Resultado: ninguém coordena tudo.
            </p>
          </div>

          <div className="rounded-3xl border-2 border-brand-500 bg-white p-8 shadow-[var(--shadow-card)] sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-500">
              Com Zyra
            </p>
            <p className="mt-3 text-lg font-medium text-ink">
              Um time cuidando da operação inteira.
            </p>

            <div className="mt-8 rounded-2xl bg-brand-950 px-5 py-4 text-center text-white">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">
                Zyra
              </span>
            </div>
            <div className="mx-auto my-3 h-6 w-px bg-gray-200" aria-hidden="true" />

            <ul className="grid grid-cols-3 gap-3">
              {["Marketing", "Comercial", "CRM"].map((area) => (
                <li
                  key={area}
                  className="rounded-2xl bg-brand-50 px-3 py-4 text-center text-sm font-semibold text-brand-700"
                >
                  {area}
                </li>
              ))}
            </ul>
            <div className="mx-auto my-3 h-6 w-px bg-gray-200" aria-hidden="true" />

            <div className="rounded-2xl bg-emerald-50 px-5 py-4 text-center text-sm font-semibold text-emerald-700">
              Resultado acompanhado
            </div>
            <p className="mt-6 text-sm font-semibold text-brand-500">
              Uma operação conectada, de ponta a ponta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
