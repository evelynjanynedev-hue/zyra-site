import Image from "next/image";
import { whatsappLink } from "@/lib/site";
import SectionHeading from "@/components/section-heading";

export default function About() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-gray-200/70 shadow-[var(--shadow-elevated)]">
              <Image
                src="/img/team.jpg"
                alt="Time da Zyra trabalhando no crescimento de uma empresa"
                width={1200}
                height={900}
                className="h-[26rem] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden overflow-hidden rounded-3xl border-4 border-white shadow-[var(--shadow-elevated)] sm:block">
              <Image
                src="/img/workspace.jpg"
                alt="Ambiente de trabalho da Zyra"
                width={400}
                height={300}
                className="h-36 w-52 object-cover"
              />
            </div>
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Quem somos"
              title="Gente de verdade cuidando do seu crescimento."
              lead="Estratégia, execução e tecnologia trabalhando juntas para que você não precise montar essa estrutura sozinho."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {["Estratégia", "Execução", "Tecnologia"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm font-medium text-ink-soft"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={whatsappLink("Olá, quero conhecer melhor a Zyra.")}
              target="_blank"
              rel="noopener"
              className="btn-dark mt-9"
            >
              Conheça a Zyra
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
