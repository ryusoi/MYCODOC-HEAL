import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import { SiteShell } from "@/components/site-shell";

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  return <SiteShell locale={locale as Locale}>{children}</SiteShell>;
}
