const items = [
  "Marketing",
  "Leads",
  "Atendimento",
  "Vendas",
  "CRM",
  "Ferramentas",
  "Estratégia",
];

export default function Problem() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Isso parece familiar?</span>
          <h2 className="section-title mt-4">Você está tentando cuidar de tudo?</h2>
          <p className="section-lead mx-auto text-center">
            Marketing, leads, atendimento, vendas, ferramentas, estratégia. Quando
            cada parte fica com um fornecedor diferente, ninguém coordena o todo.
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3">
          {items.map((i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-ink-soft"
            >
              <span className="grid h-5 w-5 place-items-center rounded-md border border-gray-300 text-[10px] text-transparent" aria-hidden="true">
                ✓
              </span>
              {i}
            </span>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-2xl rounded-3xl bg-brand-950 p-8 text-center text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">
            É exatamente aí que a Zyra entra
          </p>
          <p className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            Você cuida do negócio.
            <br />
            A Zyra cuida do crescimento.
          </p>
        </div>
      </div>
    </section>
  );
}
