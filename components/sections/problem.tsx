import SectionHeading from "@/components/section-heading";

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
    <section className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Isso parece familiar?"
          title="O crescimento não deveria depender de você cuidar de tudo."
          lead="Marketing, leads, atendimento, vendas, ferramentas, estratégia. Quando cada parte fica separada, alguém precisa coordenar tudo — e normalmente esse alguém é você."
        />

        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3">
          {items.map((i) => (
            <span
              key={i}
              className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-ink-soft shadow-sm"
            >
              {i}
            </span>
          ))}
        </div>

        <div className="relative mx-auto mt-16 max-w-3xl overflow-hidden rounded-[2rem] bg-ink px-8 py-14 text-center sm:px-12">
          <div
            className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-r from-brand-500/40 via-accent-500/40 to-cyan-accent/30 blur-3xl"
            aria-hidden="true"
          />
          <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
            É aí que a Zyra entra
          </p>
          <p className="relative mt-5 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
            Você cuida do negócio.
            <br />
            A Zyra cuida do crescimento.
          </p>
        </div>
      </div>
    </section>
  );
}
