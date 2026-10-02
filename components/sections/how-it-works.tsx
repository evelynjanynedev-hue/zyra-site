import SectionHeading from "@/components/section-heading";

const steps = [
  { n: "01", title: "Entendemos", text: "Conhecemos seu negócio, seus objetivos e os principais gargalos." },
  { n: "02", title: "Planejamos", text: "Definimos prioridades e o plano para o próximo ciclo." },
  { n: "03", title: "Você aprova", text: "Nada relevante começa sem o seu ok." },
  { n: "04", title: "Executamos", text: "A Zyra coloca a estratégia em prática." },
  { n: "05", title: "Otimizamos", text: "Acompanhamos os resultados e ajustamos o que for necessário." },
  { n: "06", title: "Mostramos", text: "Você vê o que aconteceu, o que aprendemos e o próximo passo." },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Como funciona"
          title="Do diagnóstico ao resultado."
          lead="Um ciclo simples. A Zyra conduz a operação e você participa das decisões que realmente precisam de você."
        />

        <ol className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.n}
              className="card group flex gap-5 p-7 transition hover:-translate-y-1"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-sm font-semibold text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white">
                {s.n}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
