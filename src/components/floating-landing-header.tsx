"use client";

import { useEffect, useState } from "react";

export function FloatingLandingHeader({ locale }: { locale: string }) {
  const [scrolled, setScrolled] = useState(false);
  const isFa = locale === "fa";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const title = "Gano Shakh Health";
  const description = isFa
    ? "ما بهترین کیفیت گانودرما لوسیدوم را در کشور ارائه می‌کنیم و همیشه یک گام فراتر می‌رویم تا به هدف اصلی‌مان یعنی سلامت ارزشمند و بهینه شما برسیم."
    : "We provide the best quality Ganoderma Lucidum in the country and always go a step further to achieve our main goal which is your optimum precious health";

  return (
    <div className="sticky top-3 z-30">
      <div
        className={`mx-auto max-w-4xl rounded-2xl border border-emerald-200/80 bg-white/85 px-4 py-3 shadow-lg backdrop-blur transition-all duration-300 ${
          scrolled ? "scale-[0.98] shadow-xl" : "scale-100"
        }`}
      >
        <p className="text-center text-lg font-black tracking-wide text-emerald-800 md:text-xl">{title}</p>
        <p className="mt-1 text-center text-xs text-slate-700 md:text-sm">{description}</p>
      </div>
    </div>
  );
}
