import { whatsappLink } from "@/lib/site";

export default function Partners() {
  return (
    <section id="parceiro" className="scroll-mt-24 bg-gray-50/70 py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-[var(--shadow-soft)] sm:p-12">
          <span className="eyebrow">Seja parceiro</span>
          <h2 className="section-title mt-4">Conhece uma empresa que precisa crescer?</h2>
          <p className="section-lead mx-auto text-center">
            Você indica. A Zyra conversa com ela. Se virar cliente, você recebe seu
            benefício.
          </p>
          <a
            href={whatsappLink("Olá, quero indicar uma empresa para a Zyra.")}
            target="_blank"
            rel="noopener"
            className="btn-primary mt-8"
          >
            Quero ser parceiro
          </a>
        </div>
      </div>
    </section>
  );
}
