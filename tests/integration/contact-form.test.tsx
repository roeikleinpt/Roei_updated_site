import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import ContactForm from "../../app/components/ContactForm";

describe("ContactForm", () => {
  it("connects validation errors to fields and focuses the first invalid field", async () => {
    const user = userEvent.setup();
    render(<ContactForm accessKey="test-key" />);

    await user.click(screen.getByRole("button", { name: "שליחת פרטים" }));

    const name = screen.getByRole("textbox", { name: "שם" });
    expect(name).toHaveFocus();
    expect(name).toHaveAttribute("aria-invalid", "true");
    expect(name).toHaveAccessibleDescription("נא למלא שם");
    expect(screen.getAllByRole("alert")).toHaveLength(2);
  });

  it("formats a phone, enables WhatsApp, and renders a successful response", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();
    render(<ContactForm accessKey="test-key" />);

    await user.type(screen.getByRole("textbox", { name: "שם" }), "ישראל ישראלי");
    const phone = screen.getByRole("textbox", { name: /טלפון/ });
    await user.type(phone, "0505449477");
    expect(phone).toHaveValue("050-5449-477");

    const whatsapp = screen.getByRole("radio", { name: "וואטסאפ" });
    expect(whatsapp).toBeEnabled();
    await user.click(whatsapp);
    await user.click(screen.getByRole("button", { name: "שליחת פרטים" }));

    await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("קיבלתי, תודה!"));
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(JSON.parse(fetchMock.mock.calls[0][1].body as string)).toMatchObject({
      access_key: "test-key",
      טלפון: "050-5449-477",
      "דרך יצירת קשר מועדפת": "וואטסאפ",
    });
  });

  it("does not send when the public form key is missing", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();
    render(<ContactForm accessKey="" />);

    await user.type(screen.getByRole("textbox", { name: "שם" }), "ישראל");
    await user.type(screen.getByRole("textbox", { name: /טלפון/ }), "0505449477");
    await user.click(screen.getByRole("button", { name: "שליחת פרטים" }));

    expect(await screen.findByRole("alert")).toHaveTextContent("הטופס עדיין אינו מחובר");
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
