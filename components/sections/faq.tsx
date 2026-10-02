import { faq } from "@/lib/site";
import SectionHeading from "@/components/section-heading";

export default function Faq() {
  return (
    <section id="duvidas" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="Tirando o medo de contratar."
        />

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-gray-100 rounded-3xl border border-gray-200/70 bg-white px-2 shadow-[var(--shadow-soft)] sm:px-4">
          {faq.map((item) => (
            <details key={item.q} className="group px-4 sm:px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-base font-semibold text-ink marker:hidden">
                {item.q}
                <span
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gray-50 text-lg font-light text-brand-500 transition group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="pb-7 pr-10 text-sm leading-relaxed text-ink-soft">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
