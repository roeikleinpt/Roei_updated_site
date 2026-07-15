import { describe, expect, it } from "vitest";
import {
  EMPTY_CONTACT_FORM,
  OR_MSG,
  cleanEmail,
  cleanName,
  formatPhone,
  methodEnabled,
  validateContactForm,
} from "../../app/lib/contactForm";

describe("contact form helpers", () => {
  it("formats Israeli mobile and landline numbers", () => {
    expect(formatPhone("0505449477")).toBe("050-5449-477");
    expect(formatPhone("048710983")).toBe("04-8710-983");
    expect(formatPhone("050-5449-477999")).toBe("050-5449-477");
  });

  it("removes characters that the corresponding fields do not accept", () => {
    expect(cleanName("רועי123 <קליין>!")).toBe("רועי קליין");
    expect(cleanEmail(" Test+בדיקה@example.com ")).toBe("Test+@example.com");
  });

  it("requires a name and at least one contact channel", () => {
    expect(validateContactForm(EMPTY_CONTACT_FORM)).toEqual({
      name: "נא למלא שם",
      phone: OR_MSG,
    });
  });

  it("validates supplied phone and email values", () => {
    const errors = validateContactForm({
      ...EMPTY_CONTACT_FORM,
      name: "רועי",
      phone: "123",
      email: "invalid@",
    });
    expect(errors.phone).toContain("מספר טלפון");
    expect(errors.email).toContain("כתובת מייל");
  });

  it("enables only contact methods backed by a supplied value", () => {
    const byPhone = { ...EMPTY_CONTACT_FORM, phone: "050-5449-477" };
    expect(methodEnabled("טלפון", byPhone)).toBe(true);
    expect(methodEnabled("וואטסאפ", byPhone)).toBe(true);
    expect(methodEnabled("אימייל", byPhone)).toBe(false);
  });
});
