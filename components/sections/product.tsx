import Image from "next/image";

const board = [
  { stage: "Novos", count: 12, tone: "text-brand-600", bg: "bg-brand-50" },
  { stage: "Em negociação", count: 7, tone: "text-amber-600", bg: "bg-amber-50" },
  { stage: "Ganhos", count: 5, tone: "text-emerald-600", bg: "bg-emerald-50" },
];

export default function Product() {
  return (
    <section className="bg-gray-50/70 py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">O sistema por trás</span>
          <h2 className="section-title mt-4">Tudo o que acontece fica organizado.</h2>
          <p className="section-lead mx-auto text-center">
            Seu CRM acompanha a operação junto com a Zyra. Você sabe quem entrou,
            quem precisa de retorno e qual é o próximo passo.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[var(--shadow-card)]">
          <div className="flex items-center gap-2 border-b border-gray-100 px-5 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="ml-3 text-xs text-ink-soft">Zyra · Operação</span>
          </div>

          <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <Image
                src="/img/hero-dashboard.webp"
                alt="Painel da operação da Zyra com acompanhamento de resultados"
                width={900}
                height={507}
                className="w-full rounded-2xl border border-gray-100"
              />
            </div>

            <div className="lg:col-span-2">
              <div className="grid grid-cols-3 gap-3">
                {board.map((b) => (
                  <div key={b.stage} className={`rounded-2xl ${b.bg} p-3 text-center`}>
                    <p className={`text-2xl font-semibold ${b.tone}`}>{b.count}</p>
                    <p className="mt-1 text-[11px] font-medium leading-tight text-ink-soft">
                      {b.stage}
                    </p>
                  </div>
                ))}
              </div>

              <ul className="mt-4 space-y-2.5">
                {[
                  "Contato novo aguardando retorno",
                  "Proposta enviada para o cliente",
                  "Follow-up agendado para amanhã",
                  "Oportunidade ganha registrada",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-3 rounded-xl border border-gray-100 px-4 py-3 text-sm text-ink"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-brand-500" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
