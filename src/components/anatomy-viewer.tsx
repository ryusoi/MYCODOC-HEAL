"use client";

import { useMemo, useState } from "react";

const systems = [
  { id: "lymph", color: "#22c55e", labelEn: "Lymphatic", labelFa: "لنفاوی" },
  { id: "nerve", color: "#f59e0b", labelEn: "Nervous", labelFa: "عصبی" },
  { id: "blood", color: "#ef4444", labelEn: "Blood", labelFa: "خونی" },
  { id: "fascia", color: "#8b5cf6", labelEn: "Fascia", labelFa: "فاشیا" },
  { id: "meridian", color: "#06b6d4", labelEn: "Meridians", labelFa: "مریدین" }
] as const;

const meridianPoints = {
  en: ["GV20: Crown lift flow ↓", "CV17: Thoracic heart gate ↓", "ST36: Leg vitality rise ↑", "LV3: Liver channel release ↑"],
  fa: ["GV20: تاج سر، جریان رو به پایین", "CV17: درگاه قلبی سینه، جریان رو به پایین", "ST36: نقطه حیاتی ساق، جریان رو به بالا", "LV3: آزادسازی مسیر کبد، جریان رو به بالا"]
};

export function AnatomyViewer({ locale }: { locale: "en" | "fa" }) {
  const [active, setActive] = useState<string[]>(systems.map((s) => s.id));
  const [focus, setFocus] = useState<string>("all");
  const isRtl = locale === "fa";

  const toggle = (id: string) => {
    setActive((prev) => (prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]));
  };

  const title = isRtl ? "آناتومی شفاف فوق‌تعاملی" : "Hyper-Realistic Transparent Anatomy";
  const subtitle = isRtl
    ? "هر سیستم را جداگانه فعال کنید، روی یک سیستم تمرکز کنید، و جهت جریان + نقاط مریدین را بررسی کنید."
    : "Toggle systems separately, focus one-by-one, and inspect directional flow + meridian points.";

  const activeSystem = useMemo(
    () => Object.fromEntries(systems.map((s) => [s.id, focus === "all" ? active.includes(s.id) : focus === s.id])),
    [active, focus]
  );

  return (
    <section className="space-y-4">
      <div className="card-glass rounded-2xl p-5">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="mb-4 text-sm text-slate-600">{subtitle}</p>

        <div className="mb-3 flex flex-wrap items-center gap-2">
          <button onClick={() => setFocus("all")} className={`rounded-full border px-3 py-1 text-sm ${focus === "all" ? "bg-slate-900 text-white" : "bg-white"}`}>
            {isRtl ? "نمایش همه" : "Show All"}
          </button>
          {systems.map((s) => (
            <button
              key={s.id}
              onClick={() => setFocus(s.id)}
              className="rounded-full border px-3 py-1 text-sm"
              style={{ background: focus === s.id ? `${s.color}22` : "white", borderColor: s.color }}
            >
              {locale === "fa" ? s.labelFa : s.labelEn}
            </button>
          ))}
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {systems.map((s) => (
            <button
              key={`toggle-${s.id}`}
              onClick={() => toggle(s.id)}
              className="rounded-full border px-3 py-1 text-sm"
              style={{ background: active.includes(s.id) ? `${s.color}22` : "white", borderColor: s.color }}
            >
              {active.includes(s.id) ? (isRtl ? "فعال" : "On") : isRtl ? "خاموش" : "Off"} · {locale === "fa" ? s.labelFa : s.labelEn}
            </button>
          ))}
        </div>

        <div className="rounded-2xl bg-slate-950 p-3">
          <svg viewBox="0 0 420 760" className="mx-auto w-full max-w-lg">
            <defs>
              <linearGradient id="body" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.2" />
              </linearGradient>
              <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#06b6d4" />
              </marker>
            </defs>
            <ellipse cx="210" cy="80" rx="54" ry="58" fill="url(#body)" stroke="#e2e8f0" />
            <path d="M145 150 Q210 120 275 150 L300 360 Q280 470 245 660 L175 660 Q140 470 120 360 Z" fill="url(#body)" stroke="#e2e8f0" />

            {activeSystem.lymph && (
              <g stroke="#22c55e" strokeWidth="4" fill="none" opacity="0.95">
                <path d="M210 150 L210 630" />
                <path d="M140 260 L210 300 L280 260" />
                <circle cx="210" cy="300" r="10" fill="#22c55e" />
                <circle cx="210" cy="420" r="8" fill="#22c55e" />
              </g>
            )}
            {activeSystem.nerve && (
              <g stroke="#f59e0b" strokeWidth="2" fill="none" opacity="0.95">
                <path d="M210 140 C170 220 170 350 210 420 C250 350 250 220 210 140" />
                <path d="M210 430 L150 520 M210 430 L270 520" />
                <path d="M210 200 L130 300 M210 200 L290 300" />
              </g>
            )}
            {activeSystem.blood && (
              <g stroke="#ef4444" strokeWidth="3" fill="none" opacity="0.92">
                <path d="M210 160 L170 320 L160 620" />
                <path d="M210 160 L250 320 L260 620" />
                <path d="M170 320 L250 320" />
                <circle cx="210" cy="200" r="6" fill="#ef4444" />
              </g>
            )}
            {activeSystem.fascia && (
              <g stroke="#8b5cf6" strokeWidth="2" fill="none" opacity="0.9">
                <ellipse cx="210" cy="350" rx="120" ry="190" />
                <ellipse cx="210" cy="350" rx="90" ry="150" />
                <ellipse cx="210" cy="350" rx="60" ry="110" />
              </g>
            )}
            {activeSystem.meridian && (
              <g stroke="#06b6d4" strokeWidth="2" fill="none" opacity="0.95" markerEnd="url(#arrow)">
                <path d="M210 120 L210 640" />
                <path d="M130 260 C180 230 240 230 290 260" />
                <path d="M170 520 C200 560 220 560 250 520" />
                <circle cx="210" cy="120" r="5" fill="#06b6d4" />
                <circle cx="210" cy="640" r="5" fill="#06b6d4" />
                <circle cx="170" cy="520" r="4" fill="#06b6d4" />
              </g>
            )}
          </svg>
        </div>
      </div>

      <div className="card-glass rounded-2xl p-5">
        <h2 className="mb-3 text-lg font-bold">{isRtl ? "نقاط مریدین و جهت جریان" : "Meridian Points & Flow Direction"}</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {meridianPoints[locale].map((point) => (
            <div key={point} className="rounded-xl bg-white p-3 text-sm text-slate-700">
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
