import { whatsappLink } from "@/lib/site";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 h-96 bg-gradient-to-r from-brand-500/40 via-accent-500/40 to-cyan-accent/30 blur-3xl"
        aria-hidden="true"
      />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-[0.15]" aria-hidden="true" />
      <div className="container-page relative text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
          Pronto para tirar o crescimento das suas mãos?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-brand-100/75 sm:text-lg">
          Responda 3 perguntas. A Zyra entende seu momento e mostra por onde começar.
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
          <a href="#planos" className="btn px-6 py-3 text-white ring-1 ring-white/20 hover:bg-white/10">
            Ver os planos
          </a>
        </div>
      </div>
    </section>
  );
}
