import { whatsappLink } from "@/lib/site";
import SectionHeading from "@/components/section-heading";

export default function Partners() {
  return (
    <section id="parceiro" className="scroll-mt-24 bg-gray-50/60 py-24 sm:py-32">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] border border-gray-200/70 bg-white px-8 py-14 shadow-[var(--shadow-soft)] sm:px-16 sm:py-20">
          <div
            className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-r from-brand-500/15 via-accent-500/15 to-cyan-accent/15 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative">
            <SectionHeading
              eyebrow="Seja parceiro"
              title="Conhece uma empresa que precisa crescer?"
              lead="Você indica. A Zyra conversa com ela. Se virar cliente, você recebe seu benefício."
            />
            <div className="mt-9 flex justify-center">
              <a
                href={whatsappLink("Olá, quero indicar uma empresa para a Zyra.")}
                target="_blank"
                rel="noopener"
                className="btn-primary"
              >
                Quero ser parceiro
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
