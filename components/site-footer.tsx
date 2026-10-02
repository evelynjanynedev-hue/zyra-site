import Image from "next/image";
import { site, whatsappLink } from "@/lib/site";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-brand-950 pt-16 pb-24 text-brand-100/70 sm:pb-16">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <Image src="/img/logo-zyra.webp" alt="" width={28} height={28} className="h-7 w-7" />
              <span className="text-lg font-semibold tracking-tight text-white">Zyra</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Seu time de crescimento sob demanda. Estratégia e execução por nossa
              conta — você só aprova e vê os resultados.
            </p>
          </div>

          <nav className="lg:col-span-4" aria-label="Rodapé">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navegação
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-y-3 text-sm">
              <li><a href="#como-funciona" className="transition hover:text-white">Como funciona</a></li>
              <li><a href="#areas" className="transition hover:text-white">O que cuidamos</a></li>
              <li><a href="#planos" className="transition hover:text-white">Planos</a></li>
              <li><a href="#parceiro" className="transition hover:text-white">Seja parceiro</a></li>
              <li><a href="#duvidas" className="transition hover:text-white">Dúvidas</a></li>
              <li><a href="/privacidade/" className="transition hover:text-white">Privacidade</a></li>
              <li><a href="/carreiras/" className="transition hover:text-white">Trabalhe conosco</a></li>
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-white">
              Contato
            </h2>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 transition hover:text-brand-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5-4.5-.2-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.8 1.9c.1.2.1.4 0 .6l-.3.5-.4.4c-.1.1-.3.3-.1.5.2.3.8 1.3 1.7 2.1 1.2 1 2.2 1.4 2.5 1.5.2.1.4.1.6-.1l.7-.9c.2-.2.4-.2.6-.1l1.9.9c.2.1.4.2.4.3.1.2.1.7-.1 1.4z" />
              </svg>
              {site.whatsappLabel}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row">
          <p>© {year} Zyra. Todos os direitos reservados.</p>
          <a href="/privacidade/" className="transition hover:text-white">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
