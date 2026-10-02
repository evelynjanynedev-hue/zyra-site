import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a Zyra coleta, usa e protege seus dados, em conformidade com a LGPD.",
};

const sections = [
  {
    title: "1. Quem somos",
    body: "A Zyra é uma operação de crescimento sob demanda que oferece estratégia, marketing, tráfego pago, atendimento, tecnologia e CRM para empresas. Nesta política, \u201cnós\u201d ou \u201cZyra\u201d refere-se ao responsável pelo tratamento dos dados descritos abaixo.",
  },
  {
    title: "2. Quais dados coletamos",
    body: "Coletamos apenas os dados necessários para responder ao seu contato e prestar nossos serviços: dados de contato fornecidos por você (nome, nome do negócio, WhatsApp e objetivo informado no formulário); conteúdo das mensagens trocadas por WhatsApp, e-mail ou outros canais; e dados de navegação anônimos, como páginas visitadas e informações técnicas do dispositivo, quando aplicável.",
  },
  {
    title: "3. Como usamos seus dados",
    body: "Entrar em contato e responder à sua solicitação de diagnóstico ou orçamento; apresentar a solução mais adequada ao seu negócio; executar os serviços contratados e melhorar nosso atendimento; e cumprir obrigações legais e regulatórias. Não utilizamos seus dados de contato para finalidades diferentes das informadas sem o seu consentimento.",
  },
  {
    title: "4. Compartilhamento",
    body: "Não vendemos seus dados. Podemos compartilhar informações apenas com fornecedores que nos apoiam operacionalmente (por exemplo, ferramentas de mensagem e CRM), sempre com confidencialidade, e quando exigido por lei.",
  },
  {
    title: "5. Cookies",
    body: "Este site pode utilizar cookies e tecnologias semelhantes para funcionamento e análise. Você pode gerenciar ou desativar cookies nas configurações do seu navegador.",
  },
  {
    title: "6. Seus direitos (LGPD)",
    body: "Nos termos da LGPD, você pode solicitar a confirmação do tratamento, o acesso, a correção, a anonimização, a portabilidade ou a exclusão dos seus dados, além de revogar o consentimento.",
  },
  {
    title: "7. Segurança",
    body: "Adotamos medidas técnicas e organizacionais para proteger seus dados contra acessos não autorizados, perdas e alterações indevidas.",
  },
];

export default function Privacidade() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl">
          <span className="eyebrow">Institucional</span>
          <h1 className="section-title mt-4">Política de Privacidade</h1>
          <p className="mt-4 text-sm text-ink-soft">
            Última atualização: setembro de 2026.
          </p>

          <div className="mt-10 space-y-8">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-lg font-semibold text-ink">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-gray-100 bg-gray-50/70 p-6">
            <p className="text-sm text-ink-soft">
              Dúvidas sobre seus dados? Fale com a gente pelo WhatsApp{" "}
              <a
                href="https://wa.me/5562920023208"
                target="_blank"
                rel="noopener"
                className="font-semibold text-brand-500"
              >
                +55 62 92002-3208
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
