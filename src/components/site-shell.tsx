"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary, type Locale } from "@/lib/i18n";

export function SiteShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const dict = getDictionary(locale);
  const path = usePathname();
  const altLocale: Locale = locale === "en" ? "fa" : "en";
  const switchedPath = path.startsWith(`/${locale}`)
    ? path.replace(`/${locale}`, `/${altLocale}`)
    : `/${altLocale}`;

  return (
    <div dir={dict.dir} className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-sky-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <DynamicLogo locale={locale} />
          <Link href={switchedPath} className="rounded-full border px-4 py-1.5 text-sm hover:bg-sky-50">
            {dict.switchLabel}
          </Link>
        </div>
      </header>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-4 md:grid-cols-[280px_1fr]">
        <aside className="card-glass mesh-bg h-fit rounded-2xl p-4 md:sticky md:top-20">
          <h2 className="mb-3 text-sm font-semibold uppercase text-sky-700">{dict.footer.sitemap}</h2>
          <nav className="space-y-2">
            {dict.nav.map((item) => {
              const href = `/${locale}${item.href}`;
              const active = path === href;
              return (
                <Link key={item.href || "landing"} href={href} className={`block rounded-xl p-3 ${active ? "bg-sky-600 text-white" : "bg-white/80 hover:bg-sky-50"}`}>
                  <p className="font-semibold">{item.label}</p>
                  <p className={`text-xs ${active ? "text-sky-100" : "text-slate-500"}`}>{item.description}</p>
                </Link>
              );
            })}
          </nav>
        </aside>
        <main>{children}</main>
      </div>
      <footer className="mt-8 border-t bg-slate-950 text-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <p className="text-lg font-semibold">{dict.brand}</p>
          <p className="mb-4 text-sm text-slate-300">{dict.footer.rights}</p>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {dict.nav.map((n) => (
              <Link key={n.href || "home-foot"} href={`/${locale}${n.href}`} className="text-sm text-slate-300 hover:text-white">
                {n.label}
              </Link>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-400">{dict.footer.disclaimer}</p>
        </div>
      </footer>
    </div>
  );
}

function DynamicLogo({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const hour = new Date().getHours();
  const phase = locale === "fa"
    ? hour < 12
      ? "جریان صبح"
      : hour < 18
        ? "جریان روز"
        : "جریان شب"
    : hour < 12
      ? "Morning Flow"
      : hour < 18
        ? "Day Flow"
        : "Night Flow";

  return (
    <Link href={`/${locale}`} className="group flex items-center gap-3">
      <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-600 p-[2px]">
        <div className="h-full w-full rounded-full bg-white" />
        <div className="absolute inset-0 animate-ping rounded-full bg-cyan-300 opacity-30" />
      </div>
      <div>
        <p className="font-black tracking-wide">{dict.brand}</p>
        <p className="text-xs text-slate-500 transition group-hover:text-cyan-700">{phase}</p>
      </div>
    </Link>
  );
}
