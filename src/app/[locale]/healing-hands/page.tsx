import { ContentPage } from "@/components/content-page";

export default async function Page({ params }: { params: Promise<{ locale: "en" | "fa" }> }) {
  const { locale } = await params;
  return <ContentPage locale={locale} keyName="healing-hands" />;
}
