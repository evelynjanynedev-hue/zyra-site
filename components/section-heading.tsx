export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  invert = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: string;
  align?: "center" | "left";
  invert?: boolean;
}) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <span
          className={
            invert
              ? "inline-flex items-center text-xs font-semibold uppercase tracking-[0.16em] text-brand-300"
              : "eyebrow"
          }
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`section-title mt-5 ${invert ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            invert ? "text-brand-100/70" : "text-ink-soft"
          } ${isCenter ? "mx-auto" : ""}`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
