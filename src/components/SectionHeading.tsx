export default function SectionHeading({
  eyebrow,
  title,
  description,
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Use on dark navy segment backgrounds for readable, inverted text colors. */
  invert?: boolean;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && (
        <p
          className={`mb-2 text-xs font-semibold uppercase tracking-[0.2em] ${
            invert ? "text-on-navy-accent" : "text-accent"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-2xl font-semibold tracking-tight sm:text-3xl ${
          invert ? "text-on-navy" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-3 text-base leading-relaxed ${invert ? "text-on-navy-muted" : "text-muted"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
