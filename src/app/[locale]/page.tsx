import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import { FloatingLandingHeader } from "@/components/floating-landing-header";

export default async function LandingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <div className="space-y-5">
      <FloatingLandingHeader locale={locale} />
      <section className="card-glass mesh-bg rounded-3xl p-6">
        <p className="mb-2 text-sm text-cyan-700">{dict.subtitle}</p>
        <h1 className="text-3xl font-black leading-tight">{dict.hero.title}</h1>
        <p className="mt-3 text-slate-700">{dict.hero.intro}</p>
        <ul className="mt-4 space-y-2 text-sm">
          {dict.hero.points.map((point) => (
            <li key={point}>• {point}</li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={`/${locale}/anatomy`} className="inline-block rounded-full bg-sky-600 px-5 py-2 text-white hover:bg-sky-700">
            {dict.cta}
          </Link>
          <Link href={`/${locale}/protocols`} className="inline-block rounded-full border border-sky-600 px-5 py-2 text-sky-700 hover:bg-sky-50">
            {locale === "fa" ? "شروع پروتکل ۳۶۰°" : "Start 360° Protocol"}
          </Link>
        </div>
      </section>

      <section className="card-glass rounded-2xl p-5">
        <h2 className="mb-3 text-xl font-bold">{locale === "fa" ? "دسترسی سریع به همه صفحات" : "Quick Access to All Pages"}</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {dict.nav.map((item) => (
            <Link key={item.href || "landing-link"} href={`/${locale}${item.href}`} className="rounded-xl bg-white p-3 hover:bg-sky-50">
              <p className="font-semibold">{item.label}</p>
              <p className="text-xs text-slate-500">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="card-glass rounded-2xl p-5">
          <h2 className="mb-3 text-xl font-bold">{dict.modulesTitle}</h2>
          <div className="space-y-3">
            {dict.modules.map((m) => (
              <article key={m.title} className="rounded-xl bg-white p-3">
                <p className="font-semibold">{m.title}</p>
                <p className="text-sm text-slate-600">{m.body}</p>
                <p className="text-xs text-cyan-700">{m.duration}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="card-glass rounded-2xl p-5">
          <h2 className="mb-3 text-xl font-bold">{dict.protocolsTitle}</h2>
          <div className="space-y-3">
            {dict.protocols.map((p) => (
              <article key={p.name} className="rounded-xl bg-white p-3">
                <p className="font-semibold">{p.name}</p>
                <p className="text-sm text-slate-600">{p.details}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {dict.stats.map((s) => (
          <div key={s.label} className="card-glass rounded-2xl p-4 text-center">
            <p className="text-2xl font-black text-sky-700">{s.value}</p>
            <p className="text-sm text-slate-600">{s.label}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
