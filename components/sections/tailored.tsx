import SectionHeading from "@/components/section-heading";

const blocks = [
  { tag: "Seu negócio", text: "Entendemos sua realidade." },
  { tag: "Sua estratégia", text: "Definimos o que faz sentido." },
  { tag: "Sua operação", text: "Executamos e ajustamos." },
];

export default function Tailored() {
  return (
    <section className="bg-gray-50/60 py-24 sm:py-32">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <SectionHeading
            align="left"
            eyebrow="Sob medida"
            title={
              <>
                Nada genérico.
                <br />
                Tudo começa pelo seu negócio.
              </>
            }
            lead="A tecnologia e os processos da Zyra permitem escala. A estratégia continua sendo adaptada à realidade da sua empresa."
          />

          <ol className="space-y-4">
            {blocks.map((b, i) => (
              <li key={b.tag} className="flex items-center gap-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-sm font-semibold text-brand-600 shadow-[var(--shadow-soft)]">
                  {`0${i + 1}`}
                </span>
                <div className="flex-1 rounded-2xl border border-gray-200/70 bg-white px-6 py-5 shadow-[var(--shadow-soft)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
                    {b.tag}
                  </p>
                  <p className="mt-1.5 text-base font-medium text-ink">{b.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
