import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import AccessibilityWidget from "../../app/components/AccessibilityWidget";
import Faq from "../../app/components/Faq";
import Header from "../../app/components/Header";
import Treatments from "../../app/components/Treatments";

vi.mock("next/navigation", () => ({ usePathname: vi.fn(() => "/") }));

describe("interactive UI components", () => {
  beforeEach(() => {
    document.body.style.overflow = "";
    localStorage.clear();
  });

  it("opens and closes the mobile navigation with Escape", async () => {
    const user = userEvent.setup();
    render(<Header />);
    const menu = screen.getByRole("button", { name: "פתיחת תפריט" });

    await user.click(menu);
    expect(menu).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("navigation", { name: "ניווט למובייל" })).toBeInTheDocument();
    await user.keyboard("{Escape}");
    expect(menu).toHaveFocus();
    expect(menu).toHaveAttribute("aria-expanded", "false");
  });

  it("keeps collapsed FAQ answers hidden", async () => {
    const user = userEvent.setup();
    render(<Faq />);
    const question = screen.getByRole("button", {
      name: "איך אדע אם פיזיותרפיה יכולה לעזור לי?",
    });
    const panel = document.getElementById(question.getAttribute("aria-controls") ?? "");

    expect(panel).toBeInTheDocument();
    expect(panel).not.toBeVisible();
    await user.click(question);
    expect(panel).toBeVisible();
  });

  it("moves focus into a treatment dialog and restores it on Escape", async () => {
    const user = userEvent.setup();
    render(<Treatments />);
    const trigger = screen.getByRole("button", { name: /בריאות הגבר ורצפת אגן/ });

    await user.click(trigger);
    const close = screen.getByRole("button", { name: "סגירה" });
    await waitFor(() => expect(close).toHaveFocus());
    expect(document.body.style.overflow).toBe("hidden");
    await user.keyboard("{Escape}");
    await waitFor(() => expect(trigger).toHaveFocus());
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("applies, persists, and resets accessibility preferences", async () => {
    const user = userEvent.setup();
    render(<AccessibilityWidget />);
    await user.click(screen.getByRole("button", { name: "פתיחת תפריט נגישות" }));
    await waitFor(() => expect(screen.getByRole("button", { name: "סגירה" })).toHaveFocus());

    await user.click(screen.getByRole("button", { name: "ניגודיות גבוהה" }));
    await waitFor(() =>
      expect(document.documentElement).toHaveAttribute("data-a11y-contrast", "high"),
    );
    expect(localStorage.getItem("rk_a11y_v1")).toContain('"contrast":"high"');

    await user.click(screen.getByRole("button", { name: "איפוס כל ההתאמות" }));
    await waitFor(() =>
      expect(document.documentElement).not.toHaveAttribute("data-a11y-contrast"),
    );
  });

  it("restores accessibility preferences without overwriting them with defaults", async () => {
    localStorage.setItem(
      "rk_a11y_v1",
      JSON.stringify({ font: 1.2, contrast: "high", links: true }),
    );

    render(<AccessibilityWidget />);

    await waitFor(() =>
      expect(document.documentElement).toHaveAttribute("data-a11y-contrast", "high"),
    );
    expect(document.documentElement).toHaveAttribute("data-a11y-links", "1");
    expect(localStorage.getItem("rk_a11y_v1")).toContain('"font":1.2');
  });
});
