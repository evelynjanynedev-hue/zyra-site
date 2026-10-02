import { whatsappLink } from "@/lib/site";

export default function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-100 bg-white/90 p-3 backdrop-blur-md md:hidden">
      <a
        href={whatsappLink("Olá, quero meu diagnóstico gratuito com a Zyra.")}
        target="_blank"
        rel="noopener"
        className="btn-primary w-full"
      >
        Quero meu diagnóstico gratuito
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
    </div>
  );
}
