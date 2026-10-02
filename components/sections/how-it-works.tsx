const steps = [
  { n: "01", title: "Entendemos", text: "Analisamos seu negócio, seus objetivos e suas oportunidades." },
  { n: "02", title: "Planejamos", text: "Definimos a estratégia e as prioridades do ciclo." },
  { n: "03", title: "Você aprova", text: "Nada relevante é executado sem o seu ok." },
  { n: "04", title: "Executamos", text: "A Zyra coloca o plano em prática." },
  { n: "05", title: "Otimizamos", text: "Acompanhamos o que está funcionando e ajustamos." },
  { n: "06", title: "Resultado", text: "Você vê o que aconteceu e o próximo passo." },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Como funciona</span>
          <h2 className="section-title mt-4">Do diagnóstico ao resultado.</h2>
          <p className="section-lead mx-auto text-center">
            Um ciclo simples, conduzido pela Zyra. Você participa apenas das
            decisões que importam.
          </p>
        </div>

        <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="border-t border-gray-200 pt-6">
              <span className="text-sm font-semibold text-brand-500">{s.n}</span>
              <h3 className="mt-3 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
