import { plans, whatsappLink } from "@/lib/site";
import SectionHeading from "@/components/section-heading";

export default function Plans() {
  return (
    <section id="planos" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Planos"
          title="Comece pequeno. Veja acontecer."
          lead="Você não precisa montar uma equipe para começar a cuidar do crescimento. E sem fidelidade."
        />

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const cta = whatsappLink(
              `Olá, quero o plano ${plan.name} da Zyra (R$ ${plan.price}/mês).`
            );
            const dark = plan.highlight;
            return (
              <article
                key={plan.name}
                className={
                  dark
                    ? "relative flex flex-col overflow-hidden rounded-3xl bg-ink p-8 text-white shadow-[var(--shadow-elevated)]"
                    : "card relative flex flex-col p-8"
                }
              >
                {dark && (
                  <div
                    className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-gradient-to-r from-brand-500/40 via-accent-500/40 to-cyan-accent/30 blur-3xl"
                    aria-hidden="true"
                  />
                )}

                <div className="relative flex min-h-[3.5rem] items-center justify-between">
                  <h3 className={`text-lg font-semibold ${dark ? "text-white" : "text-ink"}`}>
                    {plan.name}
                  </h3>
                  {plan.badge && (
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                        dark
                          ? "bg-white/10 text-brand-200 ring-1 ring-white/15"
                          : "bg-brand-50 text-brand-600 ring-1 ring-brand-100"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  )}
                </div>

                <p className={`relative mt-1.5 text-sm ${dark ? "text-brand-100/70" : "text-ink-soft"}`}>
                  {plan.audience}
                </p>

                <p className={`relative mt-7 text-[2.5rem] font-semibold leading-none tracking-tight ${dark ? "text-white" : "text-ink"}`}>
                  R$ {plan.price}
                  <span className={`text-base font-medium ${dark ? "text-brand-100/60" : "text-ink-soft"}`}>
                    /mês
                  </span>
                </p>

                <div className={`relative mt-7 border-t pt-7 ${dark ? "border-white/10" : "border-gray-100"}`}>
                  <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${dark ? "text-brand-300" : "text-ink-soft"}`}>
                    A Zyra assume
                  </p>
                  <ul className={`mt-4 space-y-2.5 text-sm ${dark ? "text-brand-100/90" : "text-ink"}`}>
                    {plan.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className={dark ? "text-brand-300" : "text-brand-500"} aria-hidden="true">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative mt-auto pt-7">
                  <p className={`text-sm ${dark ? "text-brand-100/70" : "text-ink-soft"}`}>
                    Você aprova a estratégia.
                    <br />
                    A Zyra conduz a execução.
                  </p>
                  <a
                    href={cta}
                    target="_blank"
                    rel="noopener"
                    className={`${dark ? "btn-primary" : "btn-secondary"} mt-5 w-full`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-ink-soft">
          A Zyra cuida do marketing, do tráfego e do acompanhamento dos leads. O
          fechamento da venda é feito pelo seu time comercial — e ajudamos a
          estruturar esse processo.
        </p>
        <p className="mt-4 text-center text-sm font-medium text-ink-soft">
          Não sabe qual plano escolher?{" "}
          <a
            href={whatsappLink("Olá, quero ajuda para escolher o plano da Zyra.")}
            target="_blank"
            rel="noopener"
            className="font-semibold text-brand-500 underline decoration-brand-200 underline-offset-4 hover:text-brand-600"
          >
            Fale com nosso time.
          </a>
        </p>
      </div>
    </section>
  );
}
