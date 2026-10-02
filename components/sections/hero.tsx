import { whatsappLink } from "@/lib/site";
import DashboardMock from "@/components/dashboard-mock";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="aurora pointer-events-none absolute inset-x-0 top-0 -z-10 h-[52rem]" aria-hidden="true" />
      <div className="grid-lines pointer-events-none absolute inset-x-0 top-0 -z-10 h-[40rem]" aria-hidden="true" />

      <div className="container-page pt-14 text-center sm:pt-20">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-brand-500" />
          Seu time de crescimento sob demanda
        </span>

        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-[1.06] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-[4.25rem]">
          Estratégia e execução{" "}
          <span className="gradient-text whitespace-nowrap">por nossa conta</span>.
          <span className="mt-1 block">Você só aprova e acompanha os resultados.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-xl">
          A Zyra cuida do marketing, da aquisição e do acompanhamento dos leads da
          sua empresa — com uma estratégia feita para o seu negócio.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
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

        <p className="mt-7 text-sm font-medium text-ink-soft">
          Sem fidelidade
          <span className="mx-2 text-gray-300" aria-hidden="true">·</span>
          A partir de R$ 550/mês
          <span className="mx-2 text-gray-300" aria-hidden="true">·</span>
          CRM incluso
        </p>
      </div>

      <div className="container-wide relative mt-14 pb-20 sm:mt-16 sm:pb-28">
        <div
          className="pointer-events-none absolute inset-x-10 -top-6 -z-10 h-40 rounded-[3rem] bg-gradient-to-r from-brand-500/25 via-accent-500/25 to-cyan-accent/25 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative">
          <span className="absolute -top-3 right-4 z-10 rounded-full border border-gray-200 bg-white/90 px-3 py-1 text-[11px] font-medium text-ink-soft shadow-sm backdrop-blur sm:right-8">
            Exemplo de acompanhamento
          </span>
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}
