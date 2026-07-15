"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import TreatmentCard from "./TreatmentCard";
import { Icon } from "./Icon";
import { asset } from "../basePath";
import { treatments } from "../data/content";
import type { Treatment } from "../data/content";

// צ'יפ תסמין (ירוק מרווה) — לפריטים קצרים.
function Chip({ text }: { text: string }) {
  return (
    <span
      className="inline-flex items-center rounded-full border px-3.5 py-1.5 text-sm"
      style={{ background: "#edf4ef", borderColor: "#c6dccd", color: "#1d4165" }}
    >
      {text}
    </span>
  );
}

// פריט רשימה (וי + טקסט) — לפריטים ארוכים.
function ListItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 py-1 text-sm leading-6 text-slate-700">
      <Icon name="check" className="mt-1 h-4 w-4 shrink-0" style={{ color: "#5b9e7f" }} />
      <span>{text}</span>
    </div>
  );
}

export default function Treatments() {
  const [active, setActive] = useState<Treatment | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  // האם לכרטיס יש תוכן לפופ-אפ (ולכן הוא לחיץ)
  const hasPopup = (t: Treatment) =>
    !!(t.symptomGroups?.length || t.symptoms?.length);

  const closeDialog = useCallback((restoreFocus = true) => {
    setActive(null);
    if (restoreFocus) {
      window.requestAnimationFrame(() => triggerRef.current?.focus());
    }
  }, []);

  // סגירה ב-Esc, מלכודת פוקוס ונעילת גלילת הרקע כשהפופ-אפ פתוח
  useEffect(() => {
    if (!active) return;
    const previousOverflow = document.body.style.overflow;
    const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus());
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeDialog();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href],button:not([disabled]),input:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hasAttribute("hidden"));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [active, closeDialog]);

  return (
    <>
      {/* רשת אחידה — 5 כרטיסים בשורה אחת בדסקטופ, נשברת בנייד */}
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {treatments.map((t, i) => (
          <Reveal key={t.title} delay={i * 90}>
            <TreatmentCard
              t={t}
              onClick={
                hasPopup(t)
                  ? (event) => {
                      triggerRef.current = event.currentTarget;
                      setActive(t);
                    }
                  : undefined
              }
            />
          </Reveal>
        ))}
      </div>

      {/* פופ-אפ התסמינים */}
      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="treatment-dialog-title"
          onClick={() => closeDialog()}
        >
          <div className="absolute inset-0 bg-slate-900/55" />
          <div
            ref={dialogRef}
            className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => closeDialog()}
              aria-label="סגירה"
              className="absolute left-3 top-3 flex h-11 w-11 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-700"
            >
              <Icon name="close" className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-3">
              {active.image ? (
                <Image
                  src={asset(active.image)}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-xl"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <Icon name={active.icon} className="h-5 w-5" />
                </div>
              )}
              <h3 id="treatment-dialog-title" className="text-lg font-bold text-slate-900">
                {active.title}
              </h3>
            </div>

            {active.popupIntro && (
              <p className="mt-5 whitespace-pre-line text-sm leading-6 text-slate-500">
                {active.popupIntro}
              </p>
            )}

            {active.symptomGroups
              ? active.symptomGroups.map((g) => (
                  <div key={g.category}>
                    <p className="mb-2 mt-4 flex items-center gap-2 text-xs font-medium text-teal-500">
                      {g.category}
                      <span className="h-px flex-1 bg-slate-100" />
                    </p>
                    {active.popupStyle === "list" ? (
                      <div>
                        {g.items.map((s) => (
                          <ListItem key={s} text={s} />
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {g.items.map((s) => (
                          <Chip key={s} text={s} />
                        ))}
                      </div>
                    )}
                  </div>
                ))
              : active.symptoms && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {active.symptoms.map((s) => (
                      <Chip key={s} text={s} />
                    ))}
                  </div>
                )}

            <a
              href="#contact"
              onClick={() => closeDialog(false)}
              className="btn-press mt-6 block rounded-full bg-teal-700 px-6 py-3 text-center font-semibold text-white ring-2 ring-inset ring-teal-700 hover:bg-white hover:text-teal-700"
            >
              לקביעת פגישת אבחון
            </a>
          </div>
        </div>
      )}
    </>
  );
}
