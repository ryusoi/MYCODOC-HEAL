import { AnatomyViewer } from "@/components/anatomy-viewer";

export default async function AnatomyPage({ params }: { params: Promise<{ locale: "en" | "fa" }> }) {
  const { locale } = await params;
  return <AnatomyViewer locale={locale} />;
}
