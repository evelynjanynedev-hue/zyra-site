import { faq } from "@/lib/site";

export default function Faq() {
  return (
    <section id="duvidas" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Dúvidas frequentes</span>
          <h2 className="section-title mt-4">Tirando o medo de contratar.</h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-gray-100 rounded-3xl border border-gray-100 bg-white px-2 shadow-[var(--shadow-soft)]">
          {faq.map((item) => (
            <details key={item.q} className="group px-4 sm:px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-semibold text-ink marker:hidden">
                {item.q}
                <span
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gray-50 text-lg font-light text-brand-500 transition group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="pb-6 pr-10 text-sm leading-relaxed text-ink-soft">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
