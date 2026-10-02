import type { Metadata } from "next";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Carreiras",
  description:
    "Trabalhe na Zyra. Vagas 100% remotas para profissionais de crescimento, marketing, tráfego, vendas e tecnologia.",
};

const benefits = [
  { title: "Treinamento", text: "Todas as pessoas do time passam por um processo de treinamento e integração." },
  { title: "Processo de trabalho estruturado", text: "Acesso a processos, ferramentas, materiais, orientações e padrões de execução." },
  { title: "Metas e acompanhamento", text: "Clareza sobre responsabilidades, objetivos e indicadores, com acompanhamento próximo." },
  { title: "Plano de crescimento claro", text: "Seu objetivo é saber onde pode chegar. Construímos um caminho de evolução." },
  { title: "Suporte para evoluir", text: "Você não entra apenas para ocupar uma vaga: entra para crescer com a gente." },
  { title: "100% Home Office", text: "Trabalhe de qualquer lugar do Brasil, com processos e acompanhamento." },
];

export default function Carreiras() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Carreiras</span>
          <h1 className="section-title mt-4">
            Liberdade para trabalhar de onde você estiver.
          </h1>
          <p className="section-lead mx-auto text-center">
            Todas as nossas oportunidades são 100% remotas, para você trabalhar de
            qualquer lugar do Brasil.
          </p>
          <a
            href={whatsappLink("Olá, quero enviar meu currículo para a Zyra.")}
            target="_blank"
            rel="noopener"
            className="btn-primary mt-8"
          >
            Enviar meu currículo
          </a>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-3">
          {[
            ["Modelo de contratação", "Prestação de serviços (PJ), para profissionais que atuam com autonomia."],
            ["Remuneração", "A combinar, definida conforme a vaga, a experiência e o nível de atuação."],
            ["Carga horária", "A combinar, conforme a função e as entregas esperadas."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-gray-100 bg-white p-7 shadow-[var(--shadow-soft)]">
              <h2 className="text-base font-semibold text-ink">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-ink">
            O que oferecemos em todas as vagas
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-3xl border border-gray-100 bg-gray-50/60 p-7">
                <h3 className="text-base font-semibold text-ink">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{b.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-3xl bg-brand-950 p-8 text-center text-white sm:p-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Não encontrou uma vaga para você?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-brand-100/75">
            Faça parte do crescimento. Envie seu currículo e conte como você pode
            ajudar a Zyra a entregar resultado para mais empresas.
          </p>
          <a
            href={whatsappLink("Olá, quero fazer parte do time da Zyra. Segue meu currículo.")}
            target="_blank"
            rel="noopener"
            className="btn-primary mt-8"
          >
            Falar com a Zyra
          </a>
        </div>
      </div>
    </section>
  );
}
