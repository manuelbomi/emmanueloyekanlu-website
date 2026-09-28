export default function StatCard({
  value,
  label,
  invert = false,
}: {
  value: string;
  label: string;
  /** Use on dark navy segment backgrounds for readable, inverted styling. */
  invert?: boolean;
}) {
  return (
    <div className={`p-5 text-center ${invert ? "card-on-navy" : "card"}`}>
      <p className={`text-2xl font-bold sm:text-3xl ${invert ? "text-on-navy-accent" : "text-accent"}`}>
        {value}
      </p>
      <p className={`mt-1 text-xs ${invert ? "text-on-navy-muted" : "text-muted"}`}>{label}</p>
    </div>
  );
}
