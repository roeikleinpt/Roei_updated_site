"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { faq } from "../data/content";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {faq.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
          >
            <button
              id={`faq-button-${i}`}
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start"
            >
              <span className="text-lg font-bold text-slate-900">{item.q}</span>
              <Icon
                name="chevronDown"
                className={`h-5 w-5 shrink-0 text-teal-700 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-button-${i}`}
              hidden={!isOpen}
            >
              <div>
                <p className="whitespace-pre-line px-6 pb-5 leading-7 text-slate-600">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
