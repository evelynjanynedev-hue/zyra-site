"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/site";

const goals = [
  "Atrair mais clientes",
  "Vender mais",
  "Organizar marketing e vendas",
  "Melhorar atendimento",
  "Automatizar processos",
  "Ainda não sei",
];

export default function Contact() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [goal, setGoal] = useState(goals[0]);
  const [sent, setSent] = useState(false);

  const message = `Olá, sou ${name || "..."} do negócio ${business || "..."}. Meu principal objetivo agora é: ${goal}.`;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    window.open(whatsappLink(message), "_blank", "noopener");
  }

  return (
    <section id="contato" className="scroll-mt-24 bg-gray-50/70 py-20 sm:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="eyebrow">Fale com a gente</span>
            <h2 className="section-title mt-4">
              Quer ver o que podemos fazer pelo seu negócio?
            </h2>
            <p className="section-lead">
              Responda 3 perguntas rápidas. A partir daí, começamos a conversa já
              entendendo qual solução faz mais sentido para a sua empresa.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Resposta rápida no WhatsApp",
                "Sem compromisso e sem fidelidade",
                "Diagnóstico inicial gratuito",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm font-medium text-ink">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-500 text-xs text-white" aria-hidden="true">
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div>
            {sent ? (
              <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-[var(--shadow-card)]">
                <h3 className="text-2xl font-semibold tracking-tight text-ink">
                  Vamos começar.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  Recebemos suas informações. Agora vamos entender seu negócio e
                  identificar onde a Zyra pode ajudar.
                </p>
                <a
                  href={whatsappLink(message)}
                  target="_blank"
                  rel="noopener"
                  className="btn-primary mt-7 w-full"
                >
                  Continuar no WhatsApp
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-gray-100 bg-white p-6 shadow-[var(--shadow-card)] sm:p-8"
              >
                <div className="space-y-5">
                  <div>
                    <label htmlFor="c-nome" className="block text-sm font-semibold text-ink">
                      Seu nome
                    </label>
                    <input
                      id="c-nome"
                      type="text"
                      required
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Como podemos te chamar?"
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-base text-ink placeholder:text-ink-soft/50 focus:border-brand-400 focus:bg-white focus:outline-none sm:text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="c-negocio" className="block text-sm font-semibold text-ink">
                      Qual é o seu negócio?
                    </label>
                    <input
                      id="c-negocio"
                      type="text"
                      required
                      value={business}
                      onChange={(e) => setBusiness(e.target.value)}
                      placeholder="Ex.: Clínica de estética"
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-base text-ink placeholder:text-ink-soft/50 focus:border-brand-400 focus:bg-white focus:outline-none sm:text-sm"
                    />
                  </div>

                  <fieldset>
                    <legend className="block text-sm font-semibold text-ink">
                      O que você mais quer melhorar agora?
                    </legend>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      {goals.map((g) => (
                        <label
                          key={g}
                          className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition ${
                            goal === g
                              ? "border-brand-500 bg-brand-50 text-brand-700"
                              : "border-gray-200 text-ink-soft hover:border-gray-300"
                          }`}
                        >
                          <input
                            type="radio"
                            name="objetivo"
                            value={g}
                            checked={goal === g}
                            onChange={() => setGoal(g)}
                            className="sr-only"
                          />
                          <span
                            className={`grid h-4 w-4 shrink-0 place-items-center rounded-full border ${
                              goal === g ? "border-brand-500" : "border-gray-300"
                            }`}
                            aria-hidden="true"
                          >
                            {goal === g && <span className="h-2 w-2 rounded-full bg-brand-500" />}
                          </span>
                          {g}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </div>

                <button type="submit" className="btn-primary mt-6 w-full">
                  Falar com a Zyra
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
                <p className="mt-3 text-center text-xs text-ink-soft/70">
                  Ao enviar, abriremos o WhatsApp com sua mensagem pronta.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
