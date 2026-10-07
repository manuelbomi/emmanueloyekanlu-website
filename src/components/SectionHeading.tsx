export default function SectionHeading({
  eyebrow,
  title,
  description,
  invert = false,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Use on dark navy segment backgrounds for readable, inverted text colors. */
  invert?: boolean;
  /** Use "h1" for a page's primary heading; defaults to "h2" for in-page sections. */
  as?: "h1" | "h2";
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
      <Heading
        className={`text-2xl font-semibold tracking-tight sm:text-3xl ${
          invert ? "text-on-navy" : "text-foreground"
        }`}
      >
        {title}
      </Heading>
      {description && (
        <p className={`mt-3 text-base leading-relaxed ${invert ? "text-on-navy-muted" : "text-muted"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
