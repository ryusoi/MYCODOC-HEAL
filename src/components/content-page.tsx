import { pageContent } from "@/lib/page-content";

export function ContentPage({ locale, keyName }: { locale: "en" | "fa"; keyName: keyof (typeof pageContent)["en"] }) {
  const content = pageContent[locale][keyName];
  return (
    <section className="card-glass rounded-2xl p-6">
      <h1 className="mb-4 text-3xl font-black">{content.title}</h1>
      <div className="space-y-3">
        {content.sections.map((s) => (
          <article key={s} className="rounded-xl bg-white p-4 text-slate-700">
            {s}
          </article>
        ))}
      </div>
    </section>
  );
}
