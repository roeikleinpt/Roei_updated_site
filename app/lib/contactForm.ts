export const CONTACT_METHODS = ["טלפון", "וואטסאפ", "אימייל"] as const;

export type ContactMethod = (typeof CONTACT_METHODS)[number];

export type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  contactMethod: ContactMethod;
  message: string;
};

export type ContactErrors = Partial<Record<"name" | "phone" | "email", string>>;

export const EMPTY_CONTACT_FORM: ContactFormData = {
  name: "",
  phone: "",
  email: "",
  contactMethod: "טלפון",
  message: "",
};

const PHONE_RE = /^0(5\d{8}|7\d{8}|[23489]\d{7})$/;
const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const PHONE_MSG = "מספר טלפון לא תקין (למשל 050-5449-477 או 04-8710-983)";
export const EMAIL_MSG = "כתובת מייל לא תקינה (למשל name@example.com)";
export const OR_MSG = "נא למלא טלפון או דואר אלקטרוני (לפחות אחד מהם)";

export function formatPhone(raw: string): string {
  const allDigits = raw.replace(/\D/g, "");
  if (allDigits.length <= 1) return allDigits;

  const isMobile = allDigits[1] === "5" || allDigits[1] === "7";
  const digits = allDigits.slice(0, isMobile ? 10 : 9);
  const groups = isMobile ? [3, 4, 3] : [2, 4, 3];
  const parts: string[] = [];
  let offset = 0;

  for (const groupLength of groups) {
    if (offset >= digits.length) break;
    parts.push(digits.slice(offset, offset + groupLength));
    offset += groupLength;
  }

  return parts.join("-");
}

export function methodEnabled(method: ContactMethod, form: ContactFormData): boolean {
  const hasPhone = form.phone.replace(/\D/g, "").length > 0;
  const hasEmail = form.email.trim().length > 0;
  return method === "אימייל" ? hasEmail : hasPhone;
}

export const cleanName = (value: string) => value.replace(/[^A-Za-zא-ת׳״ '-]/g, "");
export const cleanEmail = (value: string) => value.replace(/[^A-Za-z0-9._%+@-]/g, "");

export function fieldError(
  field: "name" | "phone" | "email",
  form: ContactFormData,
): string | undefined {
  switch (field) {
    case "name":
      return form.name.trim() ? undefined : "נא למלא שם";
    case "phone": {
      const phone = form.phone.replace(/[\s-]/g, "");
      if (!phone) return undefined;
      return PHONE_RE.test(phone) ? undefined : PHONE_MSG;
    }
    case "email": {
      const email = form.email.trim();
      if (!email) return undefined;
      return EMAIL_RE.test(email) ? undefined : EMAIL_MSG;
    }
  }
}

export function validateContactForm(form: ContactFormData): ContactErrors {
  const errors: ContactErrors = {};

  (["name", "phone", "email"] as const).forEach((field) => {
    const error = fieldError(field, form);
    if (error) errors[field] = error;
  });

  if (
    !form.phone.replace(/[\s-]/g, "") &&
    !form.email.trim() &&
    !errors.phone &&
    !errors.email
  ) {
    errors.phone = OR_MSG;
  }

  return errors;
}

export function isSuccessfulResponse(value: unknown): value is { success: true } {
  return (
    typeof value === "object" &&
    value !== null &&
    "success" in value &&
    value.success === true
  );
}
