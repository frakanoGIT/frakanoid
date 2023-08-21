export default function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <section className="p-6">
      <h2
        id="about"
        className="py-3 border-y mb-4 text-3xl font-semibold text-center"
      >
        {title}
      </h2>
      <article className="text-lg">{children}</article>
    </section>
  );
}
