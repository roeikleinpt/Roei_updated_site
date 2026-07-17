"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  CaseSensitive,
  Check,
  Contrast as ContrastIcon,
  Droplet,
  Eclipse,
  Heading,
  ImageOff,
  Keyboard,
  Link as LinkIcon,
  MousePointer2,
  PersonStanding,
  RotateCcw,
  ScanLine,
  SunMoon,
  Volume2,
  X,
  ZapOff,
} from "lucide-react";

/*
 * כלי נגישות עצמאי (ללא ספק חיצוני) בהשראת ווידג'טים מסחריים (Vee וכד').
 * כל האפקטים מוחלים כ-data-attributes ומשתני CSS על <html> — הכללים עצמם
 * יושבים ב-app/a11y.css. ההעדפות נשמרות ב-localStorage וחלות בכל ביקור.
 * הרכיב יושב מחוץ ל-#a11y-root ולכן פילטרים (ניגודיות/אפור) לא משפיעים עליו.
 */

const KEY = "rk_a11y_v1";

type Contrast = "none" | "high" | "invert" | "gray" | "bw";
type Cursor = "none" | "black" | "white";

export type A11yState = {
  font: number; // 0.8–1.5, כפולות של 0.1
  ws: number; // ריווח מילים בפיקסלים, -2–8
  ls: number; // ריווח אותיות בפיקסלים, -1–4 (צעדי 0.5)
  contrast: Contrast;
  links: boolean;
  titles: boolean;
  readable: boolean;
  noimg: boolean;
  cursor: Cursor;
  guide: boolean;
  noanim: boolean;
  kbd: boolean;
  tts: boolean;
};

const DEF: A11yState = {
  font: 1,
  ws: 0,
  ls: 0,
  contrast: "none",
  links: false,
  titles: false,
  readable: false,
  noimg: false,
  cursor: "none",
  guide: false,
  noanim: false,
  kbd: false,
  tts: false,
};

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
const round1 = (v: number) => Math.round(v * 10) / 10;

export function parseA11yState(raw: string): A11yState {
  try {
    const value = JSON.parse(raw) as Partial<A11yState>;
    const contrast: Contrast = ["none", "high", "invert", "gray", "bw"].includes(
      value.contrast ?? "",
    )
      ? (value.contrast as Contrast)
      : DEF.contrast;
    const cursor: Cursor = ["none", "black", "white"].includes(value.cursor ?? "")
      ? (value.cursor as Cursor)
      : DEF.cursor;
    const bool = (candidate: unknown) => candidate === true;

    return {
      font: round1(clamp(typeof value.font === "number" ? value.font : DEF.font, 0.8, 1.5)),
      ws: Math.round(clamp(typeof value.ws === "number" ? value.ws : DEF.ws, -2, 8)),
      ls: round1(clamp(typeof value.ls === "number" ? value.ls : DEF.ls, -1, 4)),
      contrast,
      cursor,
      links: bool(value.links),
      titles: bool(value.titles),
      readable: bool(value.readable),
      noimg: bool(value.noimg),
      guide: bool(value.guide),
      noanim: bool(value.noanim),
      kbd: bool(value.kbd),
      tts: bool(value.tts),
    };
  } catch {
    return DEF;
  }
}

/* אייקוני האריחים — ספריית Lucide (רישיון ISC, חינם לשימוש מסחרי).
   "cursorB" מקבל מילוי מלא כדי להבדיל בין הסמן הכהה לבהיר. */
const ICONS = {
  contrast: ContrastIcon,
  invert: Eclipse,
  gray: Droplet,
  bw: SunMoon,
  link: LinkIcon,
  heading: Heading,
  font: CaseSensitive,
  noimg: ImageOff,
  tts: Volume2,
  cursorB: MousePointer2,
  cursorW: MousePointer2,
  guide: ScanLine,
  noanim: ZapOff,
  kbd: Keyboard,
} as const;
type IconName = keyof typeof ICONS;

function Ic({ name }: { name: IconName }) {
  const C = ICONS[name];
  return (
    <C
      size={20}
      strokeWidth={1.8}
      aria-hidden="true"
      fill={name === "cursorB" ? "currentColor" : "none"}
    />
  );
}

/* אריח פעולה — ברמת המודול כדי ש-React ישמר את ה-DOM (ולא יאבד פוקוס מקלדת) בכל שינוי */
function Tile({
  icon,
  label,
  active,
  onClick,
}: {
  icon: IconName;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`relative flex min-h-[64px] flex-col items-center justify-center gap-1 rounded-xl border bg-white p-1.5 text-[11px] font-medium leading-tight shadow-sm transition-all ${
        active
          ? "border-teal-600 text-teal-600 ring-1 ring-teal-600"
          : "border-slate-200/70 text-slate-600 hover:-translate-y-0.5 hover:border-slate-300"
      }`}
    >
      {active && (
        <span className="absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-teal-600 text-white">
          <Check size={10} strokeWidth={3.5} aria-hidden="true" />
        </span>
      )}
      <Ic name={icon} />
      <span className="text-center">{label}</span>
    </button>
  );
}

/* שורת פלוס/מינוס */
function Stepper({
  label,
  value,
  display,
  onDec,
  onInc,
  onReset,
  atMin,
  atMax,
}: {
  label: string;
  value: number;
  display: string;
  onDec: () => void;
  onInc: () => void;
  onReset: () => void;
  atMin: boolean;
  atMax: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-2 rounded-xl border border-slate-200/70 bg-white px-3 py-2 shadow-sm">
      <span className="text-[13px] font-medium text-slate-700">{label}</span>
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={onDec}
          disabled={atMin}
          aria-label={`הקטנת ${label}`}
          className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50 text-lg font-bold text-teal-700 transition-colors hover:bg-teal-600 hover:text-white disabled:opacity-30 disabled:hover:bg-teal-50 disabled:hover:text-teal-700"
        >
          −
        </button>
        <button
          type="button"
          onClick={onReset}
          aria-label={`${label}: ${display}. איפוס לערך ברירת המחדל`}
          aria-live="polite"
          className={`min-h-11 w-14 rounded-lg px-1 py-1.5 text-center text-[12px] font-semibold tabular-nums ${
            value !== 0 && display !== "100%" ? "bg-teal-600 text-white" : "text-slate-600"
          }`}
        >
          {display}
        </button>
        <button
          type="button"
          onClick={onInc}
          disabled={atMax}
          aria-label={`הגדלת ${label}`}
          className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50 text-lg font-bold text-teal-700 transition-colors hover:bg-teal-600 hover:text-white disabled:opacity-30 disabled:hover:bg-teal-50 disabled:hover:text-teal-700"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [s, setS] = useState<A11yState>(DEF);
  const [guideY, setGuideY] = useState(300);
  const [storageReady, setStorageReady] = useState(false);
  // קול עברי במכשיר: null=עדיין לא ידוע, false=אין, אחרת הקול עצמו
  const [heVoice, setHeVoice] = useState<SpeechSynthesisVoice | false | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  /* איתור קול עברי — הרשימה נטענת אסינכרונית (voiceschanged) */
  useEffect(() => {
    const synth = window.speechSynthesis;
    if (!synth) {
      const timer = window.setTimeout(() => setHeVoice(false), 0);
      return () => clearTimeout(timer);
    }
    const load = () => {
      const voices = synth.getVoices();
      if (voices.length) setHeVoice(voices.find((v) => /^he([-_]|$)/i.test(v.lang)) ?? false);
    };
    const timer = window.setTimeout(load, 0);
    synth.addEventListener("voiceschanged", load);
    return () => {
      clearTimeout(timer);
      synth.removeEventListener("voiceschanged", load);
    };
  }, []);

  /* טעינת העדפות שמורות */
  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const raw = localStorage.getItem(KEY);
        if (raw) setS(parseA11yState(raw));
      } catch {
        // Accessibility preferences are optional when storage is unavailable.
      }
      setGuideY(Math.round(window.innerHeight / 2));
      setStorageReady(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const frame = window.requestAnimationFrame(() => closeRef.current?.focus());
    return () => window.cancelAnimationFrame(frame);
  }, [open]);

  /* החלת המצב על <html> + שמירה */
  useEffect(() => {
    if (!storageReady) return;
    const de = document.documentElement;
    de.style.setProperty("--a11y-font-scale", String(s.font));
    de.style.setProperty("--a11y-ws", s.ws ? `${s.ws}px` : "normal");
    de.style.setProperty("--a11y-ls", s.ls ? `${s.ls}px` : "normal");
    const set = (attr: string, val: string | null) =>
      val === null ? de.removeAttribute(attr) : de.setAttribute(attr, val);
    set("data-a11y-contrast", s.contrast === "none" ? null : s.contrast);
    set("data-a11y-links", s.links ? "1" : null);
    set("data-a11y-titles", s.titles ? "1" : null);
    set("data-a11y-readable", s.readable ? "1" : null);
    set("data-a11y-noimg", s.noimg ? "1" : null);
    set("data-a11y-cursor", s.cursor === "none" ? null : s.cursor);
    set("data-a11y-noanim", s.noanim ? "1" : null);
    set("data-a11y-kbd", s.kbd ? "1" : null);
    try {
      localStorage.setItem(KEY, JSON.stringify(s));
    } catch {}
  }, [s, storageReady]);

  /* מדריך קריאה — הפס עוקב אחרי העכבר/מגע, וניתן להזזה גם במקלדת */
  useEffect(() => {
    if (!s.guide) return;
    const onMove = (e: PointerEvent) => setGuideY(e.clientY);
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches("input, textarea, select, [contenteditable='true']")) return;
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();
        setGuideY((current) =>
          clamp(current + (e.key === "ArrowUp" ? -20 : 20), 24, window.innerHeight - 24),
        );
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("keydown", onKey);
    };
  }, [s.guide]);

  /* הקראת טקסט — הכלי מקריא את התוכן העיקרי בהפעלה, וכל אלמנט בלחיצה עליו */
  useEffect(() => {
    if (!s.tts) return;
    const synth = window.speechSynthesis;
    if (!synth) return;
    const speak = (el: HTMLElement) => {
      if (!el.innerText?.trim()) return;
      synth.cancel();
      document.querySelectorAll(".a11y-speaking").forEach((n) => n.classList.remove("a11y-speaking"));
      const u = new SpeechSynthesisUtterance(el.innerText.trim().slice(0, 5000));
      u.lang = "he-IL";
      u.rate = 0.95;
      if (heVoice) u.voice = heVoice;
      el.classList.add("a11y-speaking");
      u.onend = u.onerror = () => el.classList.remove("a11y-speaking");
      synth.speak(u);
    };
    const main = document.querySelector<HTMLElement>("main");
    if (main) speak(main);
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("[data-a11y-widget]")) return; // לא מקריאים את הווידג'ט עצמו
      const el = t.closest<HTMLElement>(
        "h1,h2,h3,h4,h5,h6,p,li,a,button,blockquote,label,summary,figcaption,td,th,dt,dd,legend,span,strong",
      );
      if (el) speak(el);
    };
    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.speechSynthesis?.cancel();
      document.querySelectorAll(".a11y-speaking").forEach((n) => n.classList.remove("a11y-speaking"));
    };
  }, [s.tts, heVoice]);

  /* סגירה ב-Escape ובלחיצה מחוץ לפאנל */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    const onDown = (e: PointerEvent) => {
      const t = e.target as HTMLElement;
      if (!panelRef.current?.contains(t) && t !== btnRef.current) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  const patch = useCallback((p: Partial<A11yState>) => setS((prev) => ({ ...prev, ...p })), []);
  const activeCount =
    (s.font !== 1 ? 1 : 0) +
    (s.ws !== 0 ? 1 : 0) +
    (s.ls !== 0 ? 1 : 0) +
    (s.contrast !== "none" ? 1 : 0) +
    [s.links, s.titles, s.readable, s.noimg, s.guide, s.noanim, s.kbd, s.tts].filter(Boolean).length +
    (s.cursor !== "none" ? 1 : 0);

  return (
    <>
      {/* מדריך קריאה — פס צהוב שעוקב אחרי הסמן */}
      {s.guide && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed left-0 z-[85] w-full"
          style={{ top: guideY - 24 }}
        >
          <div className="h-1.5 w-full bg-black/55" />
          <div className="h-10 w-full" />
          <div className="h-1.5 w-full bg-black/55" />
        </div>
      )}

      <div data-a11y-widget="" dir="rtl">
        {/* הכפתור הצף — משושה, המוטיב הגרפי של האתר (HexPattern) */}
        <button
          ref={btnRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="accessibility-panel"
          aria-label={open ? "סגירת תפריט נגישות" : "פתיחת תפריט נגישות"}
          className="group fixed bottom-5 right-5 z-[95] h-14 w-14 drop-shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
            {/* משושה מעוגל: stroke עבה עם strokeLinejoin=round מעגל את הפינות */}
            <path
              d="M50 8 86 29v42L50 92 14 71V29Z"
              fill="#1d4165"
              stroke="#1d4165"
              strokeWidth="12"
              strokeLinejoin="round"
              className="transition-colors group-hover:fill-[#2f6196] group-hover:stroke-[#2f6196]"
            />
            <path
              d="M50 8 86 29v42L50 92 14 71V29Z"
              fill="none"
              stroke="rgba(255,255,255,0.55)"
              strokeWidth="3"
              strokeLinejoin="round"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-white">
            <PersonStanding size={30} strokeWidth={2} aria-hidden="true" />
          </span>
          {activeCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-[10px] font-bold text-slate-900 ring-2 ring-white">
              {activeCount}
            </span>
          )}
        </button>

        {/* הפאנל */}
        {open && (
          <div
            ref={panelRef}
            id="accessibility-panel"
            role="dialog"
            aria-label="כלי נגישות"
            className="a11y-panel-in fixed bottom-[84px] right-4 z-[95] flex max-h-[min(calc(100dvh-120px),580px)] w-[min(21.5rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
          >
            <div className="relative flex items-center justify-between overflow-hidden bg-teal-700 px-4 py-3">
              {/* ווטרמרק משושה עדין — המשך המוטיב */}
              <svg
                viewBox="0 0 100 100"
                className="pointer-events-none absolute -left-4 -top-5 h-20 w-20 text-white"
                style={{ opacity: 0.08 }}
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M50 2 92 26v48L50 98 8 74V26Z" />
              </svg>
              <div>
                <h2 className="text-[15px] font-bold text-white">נגישות</h2>
                <p className="text-[11px] text-white/60">ההתאמות נשמרות במכשיר שלך</p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={() => {
                  setOpen(false);
                  btnRef.current?.focus();
                }}
                aria-label="סגירה"
                className="flex h-11 w-11 items-center justify-center rounded-lg text-white/85 hover:bg-white/10 hover:text-white"
              >
                <X size={18} strokeWidth={2.2} aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 space-y-1.5 overflow-y-auto overscroll-contain bg-teal-50 p-3">
              <h3 className="px-1 pb-0.5 text-[11px] font-bold tracking-wide text-teal-600">טקסט</h3>
              <Stepper
                label="גודל טקסט"
                value={s.font - 1}
                display={`${Math.round(s.font * 100)}%`}
                onDec={() => patch({ font: round1(clamp(s.font - 0.1, 0.8, 1.5)) })}
                onInc={() => patch({ font: round1(clamp(s.font + 0.1, 0.8, 1.5)) })}
                onReset={() => patch({ font: 1 })}
                atMin={s.font <= 0.8}
                atMax={s.font >= 1.5}
              />
              <Stepper
                label="ריווח מילים"
                value={s.ws}
                display={s.ws === 0 ? "0" : `${s.ws}px`}
                onDec={() => patch({ ws: clamp(s.ws - 1, -2, 8) })}
                onInc={() => patch({ ws: clamp(s.ws + 1, -2, 8) })}
                onReset={() => patch({ ws: 0 })}
                atMin={s.ws <= -2}
                atMax={s.ws >= 8}
              />
              <Stepper
                label="ריווח אותיות"
                value={s.ls}
                display={s.ls === 0 ? "0" : `${s.ls}px`}
                onDec={() => patch({ ls: round1(clamp(s.ls - 0.5, -1, 4)) })}
                onInc={() => patch({ ls: round1(clamp(s.ls + 0.5, -1, 4)) })}
                onReset={() => patch({ ls: 0 })}
                atMin={s.ls <= -1}
                atMax={s.ls >= 4}
              />

              <div className="grid grid-cols-3 gap-1.5">
                <Tile icon="font" label="גופן קריא" active={s.readable} onClick={() => patch({ readable: !s.readable })} />
                <Tile icon="link" label="הדגשת קישורים" active={s.links} onClick={() => patch({ links: !s.links })} />
                <Tile icon="heading" label="הדגשת כותרות" active={s.titles} onClick={() => patch({ titles: !s.titles })} />
              </div>

              <h3 className="px-1 pt-2 pb-0.5 text-[11px] font-bold tracking-wide text-teal-600">
                צבע ותצוגה
              </h3>
              <div className="grid grid-cols-3 gap-1.5">
                <Tile icon="contrast" label="ניגודיות גבוהה" active={s.contrast === "high"} onClick={() => patch({ contrast: s.contrast === "high" ? "none" : "high" })} />
                <Tile icon="invert" label="ניגודיות הפוכה" active={s.contrast === "invert"} onClick={() => patch({ contrast: s.contrast === "invert" ? "none" : "invert" })} />
                <Tile icon="gray" label="גווני אפור" active={s.contrast === "gray"} onClick={() => patch({ contrast: s.contrast === "gray" ? "none" : "gray" })} />
                <Tile icon="bw" label="שחור־לבן" active={s.contrast === "bw"} onClick={() => patch({ contrast: s.contrast === "bw" ? "none" : "bw" })} />
                <Tile icon="noimg" label="הסתרת תמונות" active={s.noimg} onClick={() => patch({ noimg: !s.noimg })} />
                <Tile icon="noanim" label="ביטול אנימציות" active={s.noanim} onClick={() => patch({ noanim: !s.noanim })} />
              </div>

              <h3 className="px-1 pt-2 pb-0.5 text-[11px] font-bold tracking-wide text-teal-600">
                קריאה וניווט
              </h3>
              <div className="grid grid-cols-3 gap-1.5">
                <Tile icon="tts" label="הקראת טקסט" active={s.tts} onClick={() => patch({ tts: !s.tts })} />
                <Tile icon="guide" label="מדריך קריאה" active={s.guide} onClick={() => patch({ guide: !s.guide })} />
                <Tile icon="kbd" label="ניווט מקלדת" active={s.kbd} onClick={() => patch({ kbd: !s.kbd })} />
                <Tile icon="cursorB" label="סמן גדול כהה" active={s.cursor === "black"} onClick={() => patch({ cursor: s.cursor === "black" ? "none" : "black" })} />
                <Tile icon="cursorW" label="סמן גדול בהיר" active={s.cursor === "white"} onClick={() => patch({ cursor: s.cursor === "white" ? "none" : "white" })} />
              </div>

              {s.guide && (
                <p role="status" className="rounded-lg bg-white px-3 py-2 text-[11px] leading-4 text-slate-700">
                  אפשר להזיז את מדריך הקריאה גם באמצעות מקשי החץ למעלה ולמטה.
                </p>
              )}

              {/* פולבק: אין קול עברי במכשיר — מיידעים במקום לשתוק */}
              {s.tts && heVoice === false && (
                <p role="status" className="rounded-lg bg-amber-50 px-3 py-2 text-[11px] leading-4 text-amber-800">
                  לא נמצא קול עברית במכשיר זה, וייתכן שההקראה לא תפעל. בטלפונים אפשר להתקין קול
                  עברית בהגדרות הנגישות של המכשיר.
                </p>
              )}
            </div>

            <div className="border-t border-slate-200 bg-white p-3">
              <button
                type="button"
                onClick={() => {
                  setS(DEF);
                  window.speechSynthesis?.cancel();
                }}
                className="flex min-h-11 w-full items-center justify-center gap-1.5 rounded-xl border border-teal-700 px-4 py-2 text-[13px] font-semibold text-teal-700 transition-colors hover:bg-teal-700 hover:text-white"
              >
                <RotateCcw size={14} strokeWidth={2} aria-hidden="true" />
                איפוס כל ההתאמות
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
