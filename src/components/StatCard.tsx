export default function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="card p-5 text-center">
      <p className="text-2xl font-bold text-accent sm:text-3xl">{value}</p>
      <p className="mt-1 text-xs text-muted">{label}</p>
    </div>
  );
}
