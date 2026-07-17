"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";
import {
  CONTACT_METHODS,
  EMPTY_CONTACT_FORM,
  OR_MSG,
  cleanEmail,
  cleanName,
  fieldError,
  formatPhone,
  isSuccessfulResponse,
  methodEnabled,
  validateContactForm,
  type ContactErrors,
  type ContactFormData,
} from "../lib/contactForm";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ?? "";
const STORAGE_KEY = "rk_contact_draft";
const TTL_MS = 10 * 60 * 1000;

type SavedDraft = {
  data: Pick<ContactFormData, "name" | "phone" | "email" | "contactMethod">;
  startedAt: number;
};

function readDraft(raw: string): SavedDraft | null {
  try {
    const parsed = JSON.parse(raw) as Partial<SavedDraft>;
    const data = parsed.data;
    if (!data || typeof parsed.startedAt !== "number") return null;

    return {
      startedAt: parsed.startedAt,
      data: {
        name: typeof data.name === "string" ? data.name.slice(0, 80) : "",
        phone: typeof data.phone === "string" ? formatPhone(data.phone) : "",
        email: typeof data.email === "string" ? cleanEmail(data.email).slice(0, 254) : "",
        contactMethod: CONTACT_METHODS.includes(data.contactMethod as never)
          ? data.contactMethod
          : "טלפון",
      },
    };
  } catch {
    return null;
  }
}

const fieldBase =
  "w-full rounded-xl border bg-white px-4 py-2.5 text-base text-slate-900 outline-none transition-colors placeholder:text-slate-500 focus:ring-2 focus:ring-teal-100";
const fieldClass = (error?: string) =>
  `${fieldBase} ${error ? "border-red-400 focus:border-red-500" : "border-slate-300 focus:border-teal-500"}`;

export default function ContactForm({
  accessKey = WEB3FORMS_ACCESS_KEY,
}: {
  accessKey?: string;
} = {}) {
  const [form, setForm] = useState<ContactFormData>(EMPTY_CONTACT_FORM);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [submissionError, setSubmissionError] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const fieldRefs = { name: nameRef, phone: phoneRef, email: emailRef };

  const clearDraft = useCallback(() => {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // Storage may be blocked by the browser; the form still works without draft recovery.
    }
  }, []);

  useEffect(() => {
    let restoreTimer: number | null = null;
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      const saved = raw ? readDraft(raw) : null;
      if (!saved) {
        if (raw) sessionStorage.removeItem(STORAGE_KEY);
        return;
      }

      const elapsed = Date.now() - saved.startedAt;
      if (elapsed >= TTL_MS || elapsed < 0) {
        sessionStorage.removeItem(STORAGE_KEY);
        return;
      }

      restoreTimer = window.setTimeout(() => {
        setForm({ ...EMPTY_CONTACT_FORM, ...saved.data });
      }, 0);
    } catch {
      // Ignore unavailable or malformed storage.
    }

    return () => {
      if (restoreTimer) clearTimeout(restoreTimer);
    };
  }, [clearDraft]);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  function saveDraft(next: ContactFormData) {
    try {
      const existing = sessionStorage.getItem(STORAGE_KEY);
      const startedAt = existing ? readDraft(existing)?.startedAt ?? Date.now() : Date.now();
      const saved: SavedDraft = {
        startedAt,
        data: {
          name: next.name,
          phone: next.phone,
          email: next.email,
          contactMethod: next.contactMethod,
        },
      };
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    } catch {
      // Draft recovery is optional.
    }
  }

  function update(field: keyof ContactFormData, value: string) {
    const next = { ...form, [field]: value } as ContactFormData;
    if ((field === "phone" || field === "email") && !methodEnabled(next.contactMethod, next)) {
      if (methodEnabled("טלפון", next)) next.contactMethod = "טלפון";
      else if (methodEnabled("אימייל", next)) next.contactMethod = "אימייל";
    }

    setForm(next);
    setSubmissionError("");
    if (status === "error") setStatus("idle");
    setErrors((previous) => {
      const nextErrors = { ...previous };
      if (field === "name" || field === "phone" || field === "email") delete nextErrors[field];
      if ((field === "phone" || field === "email") && nextErrors.phone === OR_MSG) {
        delete nextErrors.phone;
      }
      return nextErrors;
    });
    saveDraft(next);
  }

  function checkField(field: "name" | "phone" | "email") {
    setErrors((previous) => ({ ...previous, [field]: fieldError(field, form) }));
  }

  function handleClear() {
    clearDraft();
    setForm(EMPTY_CONTACT_FORM);
    setErrors({});
    setSubmissionError("");
    setStatus("idle");
    nameRef.current?.focus();
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const botcheck =
      (event.currentTarget.elements.namedItem("botcheck") as HTMLInputElement | null)?.checked ??
      false;
    const normalized: ContactFormData = {
      ...form,
      name: form.name.trim(),
      email: form.email.trim().toLowerCase(),
      message: form.message.trim(),
    };
    setForm(normalized);

    const nextErrors = validateContactForm(normalized);
    setErrors(nextErrors);
    const firstInvalid = (["name", "phone", "email"] as const).find(
      (field) => nextErrors[field],
    );
    if (firstInvalid) {
      fieldRefs[firstInvalid].current?.focus();
      return;
    }

      if (!accessKey) {
      setSubmissionError("הטופס עדיין אינו מחובר לשירות השליחה. אפשר ליצור קשר בטלפון או בוואטסאפ.");
      setStatus("error");
      return;
    }

    setSubmissionError("");
    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "פנייה חדשה מהאתר — רועי קליין פיזיותרפיה",
          from_name: normalized.name,
          "שם": normalized.name,
          "טלפון": normalized.phone || "—",
          "דואר אלקטרוני": normalized.email || "—",
          "דרך יצירת קשר מועדפת": normalized.contactMethod,
          "סיבת הפנייה": normalized.message || "—",
          botcheck,
        }),
      });
      const data: unknown = await response.json();
      if (response.ok && isSuccessfulResponse(data)) {
        setStatus("success");
        clearDraft();
        setForm(EMPTY_CONTACT_FORM);
      } else {
        setSubmissionError("השליחה לא הושלמה. נסו שוב או צרו קשר בטלפון או בוואטסאפ.");
        setStatus("error");
      }
    } catch {
      setSubmissionError("אירעה תקלת רשת. נסו שוב או צרו קשר בטלפון או בוואטסאפ.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        role="status"
        aria-live="polite"
        tabIndex={-1}
        className="flex flex-col items-center justify-center rounded-2xl border border-teal-200 bg-teal-50 p-10 text-center outline-none"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-700 text-white">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h3 className="mt-4 text-xl font-bold text-slate-900">קיבלתי, תודה!</h3>
        <p className="mt-2 text-sm text-slate-600">אחזור אליכם בהקדם לתיאום פגישת אבחון.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 min-h-11 text-sm font-semibold text-teal-700 hover:underline"
        >
          שליחת פנייה נוספת
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-busy={status === "sending"}
      aria-describedby="contact-form-instructions"
      className="space-y-4"
    >
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <p id="contact-form-instructions" className="text-sm leading-6 text-slate-600">
        שדות המסומנים כחובה חייבים במילוי. בנוסף, יש למלא לפחות אחד: טלפון או דואר אלקטרוני.
      </p>

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
          שם <span className="font-normal">(חובה)</span>
        </label>
        <input
          id="name"
          ref={nameRef}
          name="name"
          type="text"
          required
          autoComplete="name"
          maxLength={80}
          aria-required="true"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          value={form.name}
          onChange={(event) => update("name", cleanName(event.target.value))}
          onBlur={() => checkField("name")}
          className={fieldClass(errors.name)}
          placeholder="ישראל ישראלי"
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1 text-xs text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700">
          טלפון
        </label>
        <input
          id="phone"
          ref={phoneRef}
          name="phone"
          type="tel"
          dir="ltr"
          inputMode="tel"
          autoComplete="tel"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={`contact-form-instructions${errors.phone ? " phone-error" : ""}`}
          value={form.phone}
          onChange={(event) => update("phone", formatPhone(event.target.value))}
          onBlur={() => checkField("phone")}
          className={`${fieldClass(errors.phone)} text-right`}
          placeholder="050-000-0000"
        />
        {errors.phone && (
          <p id="phone-error" role="alert" className="mt-1 text-xs text-red-600">
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
          דואר אלקטרוני
        </label>
        <input
          id="email"
          ref={emailRef}
          name="email"
          type="email"
          dir="ltr"
          autoComplete="email"
          inputMode="email"
          maxLength={254}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={`contact-form-instructions${errors.email ? " email-error" : ""}`}
          value={form.email}
          onChange={(event) => update("email", cleanEmail(event.target.value))}
          onBlur={() => checkField("email")}
          className={`${fieldClass(errors.email)} text-right`}
          placeholder="name@example.com"
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1 text-xs text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <fieldset>
        <legend className="mb-1.5 block text-sm font-medium text-slate-700">
          איך נוח לכם שאחזור אליכם?
        </legend>
        <div className="flex flex-wrap gap-2">
          {CONTACT_METHODS.map((method) => {
            const enabled = methodEnabled(method, form);
            return (
              <label
                key={method}
                className={`flex min-h-11 items-center rounded-xl border px-4 py-2 text-sm transition-colors focus-within:outline focus-within:outline-3 focus-within:outline-offset-2 focus-within:outline-amber-600 ${
                  !enabled
                    ? "cursor-not-allowed border-slate-200 text-slate-300"
                    : form.contactMethod === method
                      ? "cursor-pointer border-teal-600 bg-teal-50 font-medium text-teal-700"
                      : "cursor-pointer border-slate-300 text-slate-600 hover:border-slate-400"
                }`}
              >
                <input
                  type="radio"
                  className="sr-only"
                  name="contactMethod"
                  value={method}
                  disabled={!enabled}
                  checked={enabled && form.contactMethod === method}
                  onChange={() => update("contactMethod", method)}
                />
                {method}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
          סיבת הפנייה <span className="font-normal text-slate-500">(לא חובה)</span>
        </label>
        <textarea
          id="message"
          name="reason"
          rows={4}
          maxLength={2000}
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          className={`${fieldClass()} resize-y`}
          placeholder="ספרו לי בקצרה על מה תרצו טיפול..."
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-red-700">
          {submissionError}
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-press min-h-11 flex-1 rounded-xl bg-teal-700 px-6 py-3 font-semibold text-white ring-2 ring-inset ring-teal-700 hover:bg-white hover:text-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "שולח..." : "שליחת פרטים"}
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="min-h-11 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition-colors hover:border-teal-500 hover:text-teal-600"
        >
          נקה
        </button>
      </div>
    </form>
  );
}
