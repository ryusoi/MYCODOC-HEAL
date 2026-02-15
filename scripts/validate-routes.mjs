import { dictionaries } from "../src/lib/i18n.ts";
import { pageContent } from "../src/lib/page-content.ts";

const contentKeys = new Set(Object.keys(pageContent.en));
const hardPages = new Set(["", "/anatomy"]);

for (const locale of Object.keys(dictionaries)) {
  const nav = dictionaries[locale].nav;
  for (const item of nav) {
    if (hardPages.has(item.href)) continue;
    const key = item.href.slice(1);
    if (!contentKeys.has(key) && !(key === "case-studies" && contentKeys.has("cases"))) {
      throw new Error(`Missing content key for nav route: ${locale} -> ${item.href}`);
    }
  }
}

const enNav = dictionaries.en.nav.map((n) => n.href).join("|");
const faNav = dictionaries.fa.nav.map((n) => n.href).join("|");
if (enNav !== faNav) {
  throw new Error("EN/FA nav route lists are not identical.");
}

console.log("Route/content validation passed.");
