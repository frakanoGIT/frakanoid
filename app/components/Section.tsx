export default function Section({
  title,
  children,
  className
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`pb-6 px-6 lg:max-w-xl lg:p-6 ${className}`}>
      <h2
        id="about"
        className="py-3 border-y mb-4 text-3xl font-semibold text-center"
      >
        {title}
      </h2>
      <article>{children}</article>
    </section>
  );
}
