import { plans, whatsappLink } from "@/lib/site";

export default function Plans() {
  return (
    <section id="planos" className="scroll-mt-24 bg-gray-50/70 py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Planos</span>
          <h2 className="section-title mt-4">Comece pequeno. Veja acontecer.</h2>
          <p className="section-lead mx-auto text-center">
            Você não precisa investir alto para começar. E sem fidelidade.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const cta = whatsappLink(
              `Olá, quero o plano ${plan.name} da Zyra (R$ ${plan.price}/mês).`
            );
            return (
              <article
                key={plan.name}
                className={
                  plan.highlight
                    ? "relative rounded-3xl border-2 border-brand-500 bg-brand-950 p-8 text-white shadow-[var(--shadow-card)] lg:-translate-y-4"
                    : "relative rounded-3xl border border-gray-200 bg-white p-8 shadow-[var(--shadow-soft)]"
                }
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-8 rounded-full bg-brand-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                    {plan.badge}
                  </span>
                )}

                <h3 className={`text-lg font-semibold ${plan.highlight ? "text-white" : "text-ink"}`}>
                  {plan.name}
                </h3>
                <p className={`mt-1 text-sm ${plan.highlight ? "text-brand-100/70" : "text-ink-soft"}`}>
                  {plan.audience}
                </p>

                <p className={`mt-6 text-4xl font-semibold tracking-tight ${plan.highlight ? "text-white" : "text-ink"}`}>
                  R$ {plan.price}
                  <span className={`text-base font-medium ${plan.highlight ? "text-brand-100/60" : "text-ink-soft"}`}>
                    /mês
                  </span>
                </p>

                <p className={`mt-6 text-xs font-semibold uppercase tracking-[0.16em] ${plan.highlight ? "text-brand-300" : "text-ink-soft"}`}>
                  A Zyra assume
                </p>
                <ul className={`mt-4 flex-1 space-y-2.5 text-sm ${plan.highlight ? "text-brand-100/90" : "text-ink"}`}>
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className={plan.highlight ? "text-brand-300" : "text-brand-500"} aria-hidden="true">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className={`mt-5 text-sm ${plan.highlight ? "text-brand-100/70" : "text-ink-soft"}`}>
                  Você aprova a estratégia e acompanha os resultados.
                </p>

                <a
                  href={cta}
                  target="_blank"
                  rel="noopener"
                  className={
                    plan.highlight
                      ? "btn-primary mt-7 w-full"
                      : "btn-secondary mt-7 w-full"
                  }
                >
                  {plan.cta}
                </a>
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
