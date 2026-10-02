import Image from "next/image";
import SectionHeading from "@/components/section-heading";

const transformations = [
  {
    before: "Negócios chegavam e se perdiam.",
    action: "Organizamos o atendimento e o processo comercial.",
    after: "Cada oportunidade passa a ser acompanhada até a decisão.",
  },
  {
    before: "Marketing e vendas em caminhos separados.",
    action: "Conectamos aquisição, atendimento e acompanhamento.",
    after: "Uma operação única, com o mesmo objetivo.",
  },
  {
    before: "Sem clareza do que está funcionando.",
    action: "Medimos o que acontece e ajustamos a cada ciclo.",
    after: "Você enxerga o resultado e o próximo passo.",
  },
];

export default function Results() {
  return (
    <section className="bg-gray-50/60 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="O que muda"
          title="Da desorganização ao acompanhamento."
          lead="O que a Zyra organiza quando assume a operação de crescimento."
        />

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-5">
          <div className="card flex flex-col overflow-hidden lg:col-span-2">
            <Image
              src="/img/team-work.jpg"
              alt="Time acompanhando os resultados da operação"
              width={1200}
              height={900}
              className="h-56 w-full object-cover"
            />
            <div className="flex flex-1 flex-col p-7">
              <p className="text-lg font-semibold text-ink">
                Acompanhamento próximo, decisões com clareza.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Você sabe o que foi feito, o que funcionou e qual é o próximo
                passo — sem precisar caçar informação.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-3">
            {transformations.map((t, i) => (
              <div key={i} className="card flex flex-1 flex-col justify-center p-6 sm:p-7">
                <div className="grid gap-5 sm:grid-cols-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
                      Antes
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink">{t.before}</p>
                  </div>
                  <div className="sm:border-l sm:border-gray-100 sm:pl-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-600">
                      O que a Zyra fez
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink">{t.action}</p>
                  </div>
                  <div className="sm:border-l sm:border-gray-100 sm:pl-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-600">
                      Depois
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink">{t.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
