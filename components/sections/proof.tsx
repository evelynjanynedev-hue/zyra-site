const segments = [
  "Clínicas",
  "Consultórios",
  "Escritórios",
  "Comércio local",
  "Indústrias",
  "Serviços",
  "Prestadores",
  "Profissionais liberais",
];

export default function Proof() {
  return (
    <section className="hairline bg-gray-50/50 py-14">
      <div className="container-page">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
          <div className="flex items-center gap-5">
            <p className="text-5xl font-semibold tracking-tight text-ink">80+</p>
            <div className="text-left">
              <p className="text-sm font-semibold text-ink">empresas atendidas</p>
              <p className="mt-0.5 text-sm text-amber-500" aria-label="Avaliação cinco estrelas">
                ★★★★★
              </p>
            </div>
          </div>
          <p className="max-w-md text-center text-sm leading-relaxed text-ink-soft lg:text-left">
            Empresas de diferentes segmentos já confiaram à Zyra parte da sua
            operação de crescimento.
          </p>
        </div>

        <div className="mt-9 flex flex-wrap justify-center gap-2.5 lg:justify-start">
          {segments.map((s) => (
            <span
              key={s}
              className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm text-ink-soft"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
