import Image from "next/image";
import SectionHeading from "@/components/section-heading";

const columns = [
  { stage: "Novos", count: 12, tone: "text-brand-600", bar: "bg-brand-500" },
  { stage: "Em negociação", count: 7, tone: "text-amber-600", bar: "bg-amber-500" },
  { stage: "Ganhos", count: 5, tone: "text-emerald-600", bar: "bg-emerald-500" },
];

export default function Product() {
  return (
    <section className="bg-gray-50/60 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Você acompanha o que importa"
          title="Tudo fica organizado."
          lead="Você não precisa perguntar o que aconteceu. O Zyra360 organiza a operação, os leads, as oportunidades e os próximos passos — para você acompanhar o crescimento sem gerenciar o operacional."
        />

        <div className="relative mt-16">
          <div
            className="pointer-events-none absolute inset-x-16 -top-8 -z-10 h-48 rounded-[3rem] bg-gradient-to-r from-brand-500/20 via-accent-500/20 to-cyan-accent/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-gray-200/80 bg-white shadow-[var(--shadow-elevated)]">
            <span className="absolute right-5 top-5 z-10 rounded-full border border-gray-200 bg-white/90 px-3 py-1 text-[11px] font-medium text-ink-soft shadow-sm backdrop-blur">
              Painel ilustrativo
            </span>
            <div className="grid items-stretch lg:grid-cols-5">
              <div className="relative p-6 sm:p-8 lg:col-span-3">
                <Image
                  src="/img/analytics.jpg"
                  alt="Painel de resultados da operação da Zyra"
                  width={1200}
                  height={800}
                  className="h-64 w-full rounded-2xl object-cover sm:h-[22rem]"
                />
                <div className="absolute bottom-11 left-11 rounded-2xl border border-gray-100 bg-white/95 px-5 py-4 shadow-[var(--shadow-elevated)] backdrop-blur">
                  <p className="text-[11px] font-medium text-ink-soft">
                    Resultado acompanhado
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-ink">
                    +18%
                    <span className="ml-2 align-middle text-xs font-medium text-emerald-600">
                      no período
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col border-t border-gray-100 p-6 sm:p-8 lg:col-span-2 lg:border-l lg:border-t-0">
                <div className="space-y-4">
                  {columns.map((c) => (
                    <div key={c.stage} className="rounded-2xl border border-gray-100 p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-ink">{c.stage}</p>
                        <p className={`text-xl font-semibold ${c.tone}`}>{c.count}</p>
                      </div>
                      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-100">
                        <div
                          className={`h-full rounded-full ${c.bar}`}
                          style={{ width: `${(c.count / 12) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <ul className="mt-5 space-y-2.5">
                  {[
                    "Contato novo aguardando retorno",
                    "Proposta enviada para o cliente",
                    "Follow-up agendado para amanhã",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-3 text-sm text-ink">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-brand-500" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
