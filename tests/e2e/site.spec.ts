import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("all public routes render with one main heading and no horizontal overflow", async ({ page }) => {
  const routes = ["/", "/professional-info/"];

  for (const route of routes) {
    await page.goto(route);
    await expect(page.locator("main")).toBeVisible();
    await expect(page.locator("h1")).toHaveCount(1);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
      ),
    ).toBe(true);
  }
});

test("mobile navigation is touch-sized, labelled and closes with Escape", async ({ page, viewport }) => {
  test.skip(!viewport || viewport.width >= 1024, "Mobile navigation is hidden on desktop.");
  await page.goto("/");

  const menu = page.locator('button[aria-controls="mobile-navigation"]');
  const box = await menu.boundingBox();
  expect(box?.width).toBeGreaterThanOrEqual(44);
  expect(box?.height).toBeGreaterThanOrEqual(44);
  await menu.click();

  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("navigation", { name: "ניווט למובייל" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
});

test("treatment dialog traps and restores keyboard focus", async ({ page }) => {
  await page.goto("/");
  const trigger = page.locator("#treatments button").first();
  await trigger.click();

  const dialog = page.getByRole("dialog", { name: "בריאות הגבר ורצפת אגן" });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("button", { name: "סגירה" })).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();
});

test("FAQ exposes only the expanded answer to assistive technology", async ({ page }) => {
  await page.goto("/#faq");
  const question = page.getByRole("button", { name: "איך אדע אם פיזיותרפיה יכולה לעזור לי?" });
  const panelId = await question.getAttribute("aria-controls");
  const answer = page.locator(`#${panelId}`);

  await expect(answer).toBeHidden();
  await question.click();
  await expect(answer).toBeVisible();
  await expect(question).toHaveAttribute("aria-expanded", "true");
});

test("contact validation is announced and prevents an unconfigured submission", async ({ page }) => {
  await page.goto("/#contact");
  await page.getByRole("button", { name: "שליחת פרטים" }).click();

  const name = page.getByRole("textbox", { name: "שם" });
  await expect(name).toBeFocused();
  await expect(name).toHaveAttribute("aria-invalid", "true");
  await expect(name).toHaveAttribute("aria-describedby", "name-error");

  await name.fill("ישראל ישראלי");
  await page.getByRole("textbox", { name: /טלפון/ }).fill("0505449477");
  await expect(page.getByRole("textbox", { name: /טלפון/ })).toHaveValue("050-5449-477");
  await page.getByRole("button", { name: "שליחת פרטים" }).click();
  await expect(page.locator('form p[role="alert"]')).toContainText("הטופס עדיין אינו מחובר");
});

test("accessibility widget uses touch-sized controls and keeps the page within the viewport", async ({
  page,
  viewport,
}) => {
  test.skip(!viewport || viewport.width >= 1024, "Touch control sizing is covered on compact layouts.");
  await page.goto("/");
  await page.getByRole("button", { name: "פתיחת תפריט נגישות" }).click();

  const increment = page.getByRole("button", { name: "הגדלת גודל טקסט" });
  const box = await increment.boundingBox();
  expect(box?.width).toBeGreaterThanOrEqual(44);
  expect(box?.height).toBeGreaterThanOrEqual(44);
  for (let index = 0; index < 5; index += 1) await increment.click();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
    ),
  ).toBe(true);
});

test("home page has no automatically detectable WCAG A/AA violations", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(results.violations).toEqual([]);
});
