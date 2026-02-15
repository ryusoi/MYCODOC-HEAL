export const locales = ["en", "fa"] as const;
export type Locale = (typeof locales)[number];

export type NavItem = { href: string; label: string; description: string };

export type Dictionary = {
  dir: "ltr" | "rtl";
  brand: string;
  subtitle: string;
  cta: string;
  switchLabel: string;
  nav: NavItem[];
  hero: { title: string; intro: string; points: string[] };
  modulesTitle: string;
  modules: { title: string; body: string; duration: string }[];
  protocolsTitle: string;
  protocols: { name: string; details: string }[];
  stats: { label: string; value: string }[];
  footer: { sitemap: string; rights: string; disclaimer: string };
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    dir: "ltr",
    brand: "LymphFlow OS",
    subtitle: "Ultimate Healing Matrix",
    cta: "Start Interactive Anatomy",
    switchLabel: "فارسی",
    nav: [
      { href: "", label: "Landing", description: "Healing dashboard and quick access" },
      { href: "/anatomy", label: "Anatomy", description: "Transparent layered anatomy explorer" },
      { href: "/protocols", label: "Protocols", description: "MLD, acupressure and breath sequences" },
      { href: "/meditations", label: "Meditations", description: "10 guided chakra-meridian practices" },
      { href: "/case-studies", label: "Case Studies", description: "Outcome-focused healing stories" },
      { href: "/resources", label: "Resources", description: "Worksheets, journals, and labs" },
      { href: "/about", label: "About", description: "Philosophy, safety, and mission" },
      { href: "/contact", label: "Contact", description: "Book sessions and submit questions" }
    ],
    hero: {
      title:
        "LymphFlow: The Ultimate Healing Matrix — MLD, Stretching, Massage, Acupressure, Mindfulness, Chakras, Meridians, Healing Hands & Supernatural Techniques",
      intro:
        "A multilingual teaching-first healing system that unifies body, breath, fascia, lymph, nerve flow, blood dynamics, meridians, and spiritual restoration into one practical operating system.",
      points: [
        "8-step LymphFlow massage + drainage protocol with timing and breath sync.",
        "Transparent anatomy layers: lymphatic, nervous, blood, fascia, plus meridian points and direction of flow.",
        "Pathways for post-surgical, autoimmune, trauma, aging, athletic, and spiritual recovery.",
        "Daily routines, meditations, app-ready journeys, and journaling templates for measurable outcomes."
      ]
    },
    modulesTitle: "Core Teaching Modules",
    modules: [
      { title: "Lymphatic Breath Cycle", body: "Inhale 4, hold 2, exhale 6 while extending the targeted limb to support drainage rhythm.", duration: "3 min" },
      { title: "Pelvic Lymphatic Pulse", body: "Hand at sacrum + iliac crest, gentle pressure for 30 seconds x3 with long exhale pulses.", duration: "4 min" },
      { title: "Vagus Nerve Lymph Pulse", body: "Soft throat stimulation below Adam's apple to amplify neuro-lymphatic feedback loops.", duration: "4 min" },
      { title: "8-Step Full Sequence", body: "Pelvic, thoracic, cervical, abdominal, lumbar, and facial clusters integrated in one flow.", duration: "30 min" }
    ],
    protocolsTitle: "Adaptive Protocol Tracks",
    protocols: [
      { name: "Post-Surgical Recovery", details: "Low-pressure progression, edema tracking, and restorative breath pacing." },
      { name: "Autoimmune + Inflammation", details: "Vagal down-regulation, fascial hydration, and daily anti-stagnation mobility." },
      { name: "Lymphedema Recovery", details: "Cluster-by-cluster activation with compression timing and mindful touch prompts." },
      { name: "Trauma + Burnout", details: "Somatic safety checkpoints, aura-clearing meditations, and grounding routines." }
    ],
    stats: [
      { label: "Guided Meditations", value: "10" },
      { label: "Acupressure Points", value: "100+" },
      { label: "Healing Hand Positions", value: "100+" },
      { label: "Protocol Variations", value: "7 tracks" }
    ],
    footer: {
      sitemap: "Complete Sitemap",
      rights: "© LymphFlow OS. All systems active.",
      disclaimer: "Educational content only; not a substitute for licensed medical diagnosis or emergency care."
    }
  },
  fa: {
    dir: "rtl",
    brand: "سیستم لیمف‌فلو",
    subtitle: "ماتریس نهایی درمان",
    cta: "شروع آناتومی تعاملی",
    switchLabel: "English",
    nav: [
      { href: "", label: "صفحه اصلی", description: "داشبورد آموزشی و دسترسی سریع" },
      { href: "/anatomy", label: "آناتومی", description: "کاوشگر آناتومی شفاف و لایه‌ای" },
      { href: "/protocols", label: "پروتکل‌ها", description: "توالی‌های MLD، طب فشاری و تنفس" },
      { href: "/meditations", label: "مدیتیشن‌ها", description: "۱۰ تمرین هدایت‌شده چاکرا و مریدین" },
      { href: "/case-studies", label: "مطالعات موردی", description: "روایت‌های درمانی مبتنی بر نتیجه" },
      { href: "/resources", label: "منابع", description: "کاربرگ‌ها، ژورنال و آزمایشگاه‌ها" },
      { href: "/about", label: "درباره", description: "فلسفه، ایمنی و مأموریت" },
      { href: "/contact", label: "تماس", description: "رزرو جلسه و ارسال پرسش" }
    ],
    hero: {
      title:
        "لیمف‌فلو: ماتریس نهایی درمان — MLD، کشش، ماساژ، طب فشاری، ذهن‌آگاهی، چاکرا، مریدین، دست‌های درمانگر و تکنیک‌های شهودی",
      intro:
        "یک سامانه آموزشی دو زبانه که بدن، تنفس، فاشیا، جریان لنف، شبکه عصبی، گردش خون، مریدین‌ها و بازسازی معنوی را در یک ساختار عملی یکپارچه می‌کند.",
      points: [
        "پروتکل ۸ مرحله‌ای ماساژ و تخلیه لنفاوی با زمان‌بندی و هم‌زمانی تنفس.",
        "لایه‌های آناتومی شفاف: لنفاوی، عصبی، خونی، فاشیا + نقاط مریدین و جهت جریان.",
        "مسیرهای اختصاصی برای ریکاوری پس از جراحی، خودایمنی، تروما، سالمندی، ورزشکاران و درمان‌گران انرژی.",
        "روتین‌های روزانه، مدیتیشن‌ها، مسیرهای اپلیکیشنی و ژورنال برای سنجش پیشرفت."
      ]
    },
    modulesTitle: "ماژول‌های اصلی آموزش",
    modules: [
      { title: "چرخه تنفسی لنفاوی", body: "دم ۴، مکث ۲، بازدم ۶ همراه با کشش اندام هدف برای تقویت ریتم تخلیه.", duration: "۳ دقیقه" },
      { title: "پالس لنفاوی لگن", body: "قرارگیری دست روی ساکروم و تاج خاصره، فشار نرم ۳۰ ثانیه‌ای در سه تکرار.", duration: "۴ دقیقه" },
      { title: "پالس واگ و لنف", body: "تحریک نرم ناحیه زیر سیب آدم برای تقویت حلقه بازخورد عصب-لنف.", duration: "۴ دقیقه" },
      { title: "توالی کامل ۸ مرحله‌ای", body: "ترکیب خوشه‌های لگن، سینه، گردن، شکم، کمر و صورت در یک جریان کامل.", duration: "۳۰ دقیقه" }
    ],
    protocolsTitle: "مسیرهای سازگار پروتکل",
    protocols: [
      { name: "ریکاوری پس از جراحی", details: "پیشروی فشار کم، پایش ادم و ریتم آرام تنفسی." },
      { name: "خودایمنی و التهاب", details: "تنظیم واگ، آبرسانی فاشیا و تحرک روزانه ضد رکود." },
      { name: "ریکاوری لنف‌ادم", details: "فعال‌سازی خوشه‌به‌خوشه با زمان‌بندی فشرده‌سازی و لمس آگاهانه." },
      { name: "تروما و فرسودگی", details: "چک‌پوینت‌های ایمنی سوماتیک، مدیتیشن پاکسازی هاله و زمین‌سازی." }
    ],
    stats: [
      { label: "مدیتیشن هدایت‌شده", value: "۱۰" },
      { label: "نقاط طب فشاری", value: "+۱۰۰" },
      { label: "جایگاه‌های دست درمانی", value: "+۱۰۰" },
      { label: "تنوع پروتکل", value: "۷ مسیر" }
    ],
    footer: {
      sitemap: "نقشه کامل سایت",
      rights: "© سیستم لیمف‌فلو. همه سامانه‌ها فعال هستند.",
      disclaimer: "این محتوا آموزشی است و جایگزین تشخیص پزشکی یا خدمات اورژانسی نیست."
    }
  }
};

export const getDictionary = (locale: string): Dictionary => {
  return dictionaries[(locale as Locale) || "en"] ?? dictionaries.en;
};
