const segments = [
  "Clínicas",
  "Consultórios",
  "Escritórios",
  "Comércio local",
  "Serviços",
  "Indústrias",
  "Prestadores",
  "Profissionais liberais",
];

export default function Proof() {
  return (
    <section className="border-y border-gray-100 bg-gray-50/70 py-10">
      <div className="container-page">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-4">
            <p className="text-4xl font-semibold tracking-tight text-ink">80+</p>
            <div>
              <p className="text-sm font-semibold text-ink">empresas atendidas</p>
              <p className="text-sm text-amber-500" aria-label="Avaliação cinco estrelas">
                ★★★★★
              </p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-ink-soft">
            Empresas de diferentes segmentos já contam com a Zyra para cuidar do
            crescimento.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2.5 sm:justify-start">
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
