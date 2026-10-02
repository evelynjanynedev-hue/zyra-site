import { whatsappLink } from "@/lib/site";

export default function FinalCta() {
  return (
    <section className="bg-brand-950 py-20 text-white sm:py-28">
      <div className="container-page text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Você cuida do seu negócio. A Zyra cuida do crescimento.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-brand-100/75">
          Estratégia e execução por nossa conta. Você só aprova e vê os resultados.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
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
          <a
            href="#planos"
            className="btn px-6 py-3 text-white ring-1 ring-white/20 hover:bg-white/10"
          >
            Ver os planos
          </a>
        </div>
      </div>
    </section>
  );
}
