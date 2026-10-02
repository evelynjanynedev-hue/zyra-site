import { whatsappLink } from "@/lib/site";

const pillars = [
  { label: "Marketing", note: "Atrair" },
  { label: "Vendas", note: "Converter" },
  { label: "CRM", note: "Organizar" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[36rem] w-[52rem] -translate-x-1/2 rounded-full bg-brand-100/60 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          <div className="max-w-xl">
            <span className="eyebrow">Time de crescimento sob demanda</span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
              Estratégia e execução por nossa conta.
              <span className="block text-brand-500">
                Você só aprova e vê os resultados.
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              A Zyra assume o marketing, a aquisição e o acompanhamento dos leads
              da sua empresa. Você cuida do negócio — a gente cuida do crescimento.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink("Olá, quero meu diagnóstico gratuito com a Zyra.")}
                target="_blank"
                rel="noopener"
                className="btn-primary"
              >
                Quero meu diagnóstico gratuito
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a href="#como-funciona" className="btn-secondary">
                Ver como funciona
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-ink-soft">
              <li className="flex items-center gap-2">
                <Check />A partir de R$ 550/mês
              </li>
              <li className="flex items-center gap-2">
                <Check />Sem fidelidade
              </li>
              <li className="flex items-center gap-2">
                <Check />CRM personalizado incluso
              </li>
            </ul>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-50 text-[11px] font-bold text-brand-500" aria-hidden="true">
      ✓
    </span>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-500 text-sm font-bold text-white">
            Z
          </span>
          <span className="text-sm font-semibold text-ink">Zyra</span>
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Operação ativa
          </span>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {pillars.map((p) => (
            <div key={p.label} className="rounded-2xl bg-gray-50 p-3 text-center">
              <p className="text-[11px] font-medium uppercase tracking-wide text-ink-soft">
                {p.note}
              </p>
              <p className="mt-1 text-sm font-semibold text-ink">{p.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-center text-ink-soft" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M6 13l6 6 6-6" />
          </svg>
        </div>

        <div className="mt-3 rounded-2xl bg-brand-950 p-5 text-white">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-300">
            Resultados
          </p>
          <div className="mt-4 grid grid-cols-3 gap-4 text-center">
            <Metric value="12" label="Novos" />
            <Metric value="7" label="Em negociação" />
            <Metric value="5" label="Ganhos" />
          </div>
        </div>
      </div>
      <div
        className="absolute -bottom-5 -right-4 hidden rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-[var(--shadow-soft)] sm:block"
        aria-hidden="true"
      >
        <p className="text-xs font-medium text-ink-soft">Próxima ação</p>
        <p className="text-sm font-semibold text-ink">Follow-up agendado</p>
      </div>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-2xl font-semibold tracking-tight">{value}</p>
      <p className="mt-1 text-[11px] text-brand-100/70">{label}</p>
    </div>
  );
}
