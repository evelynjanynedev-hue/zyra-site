import Image from "next/image";
import { whatsappLink } from "@/lib/site";

export default function About() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-[var(--shadow-card)]">
            <Image
              src="/img/team-meeting.webp"
              alt="Time da Zyra trabalhando no crescimento de uma empresa"
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="eyebrow">Quem somos</span>
            <h2 className="section-title mt-4">
              Gente de verdade cuidando do seu crescimento.
            </h2>
            <p className="section-lead">
              Somos um time de estratégia, execução e tecnologia trabalhando para
              que sua empresa não precise montar essa estrutura sozinha.
            </p>
            <a
              href={whatsappLink("Olá, quero conhecer melhor a Zyra.")}
              target="_blank"
              rel="noopener"
              className="btn-secondary mt-8"
            >
              Conheça a Zyra
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
