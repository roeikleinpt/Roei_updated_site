import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("all public routes render with one main heading and no horizontal overflow", async ({ page }) => {
  const routes = ["/", "/professional-info/", "/accessibility/"];

  for (const route of routes) {
    await page.goto(route);
    await expect(page.locator("main")).toBeVisible();
    await expect(page.locator("h1")).toHaveCount(1);
    const sectionsWithoutHeadings = await page.locator("section").evaluateAll((sections) =>
      sections.filter((section) => !section.querySelector("h1,h2,h3,h4,h5,h6")).length,
    );
    expect(sectionsWithoutHeadings).toBe(0);
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

  const name = page.getByRole("textbox", { name: /שם/ });
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

test("all public routes have no automatically detectable WCAG 2.0 A/AA violations", async ({ page }) => {
  for (const route of ["/", "/professional-info/", "/accessibility/"]) {
    await page.goto(route);
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
    expect(results.violations, `${route}: ${JSON.stringify(results.violations, null, 2)}`).toEqual([]);
  }
});

test("interactive states remain free of detectable WCAG 2.0 A/AA violations", async ({ page }) => {
  await page.goto("/");

  await page.locator("#treatments button").first().click();
  let results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
  expect(results.violations).toEqual([]);
  await page.keyboard.press("Escape");

  await page.getByRole("button", { name: "איך אדע אם פיזיותרפיה יכולה לעזור לי?" }).click();
  await page.getByRole("button", { name: "פתיחת תפריט נגישות" }).click();
  await expect(page.getByRole("dialog", { name: "כלי נגישות" })).toHaveCSS("opacity", "1");
  results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
  expect(results.violations).toEqual([]);
});

test("hidden back-to-top control is removed from keyboard navigation", async ({ page }) => {
  await page.goto("/");
  const backToTop = page.getByRole("button", { name: "חזרה לראש העמוד", includeHidden: true });
  await expect(backToTop).toHaveAttribute("tabindex", "-1");
  await expect(backToTop).toHaveAttribute("aria-hidden", "true");
});

test("content remains usable when text is enlarged to 200 percent", async ({ page }) => {
  for (const route of ["/", "/professional-info/", "/accessibility/"]) {
    await page.goto(route);
    await page.evaluate(() => document.documentElement.style.setProperty("font-size", "200%"));
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.getByRole("contentinfo")).toBeVisible();
    await expect(page.getByRole("button", { name: "פתיחת תפריט נגישות" })).toBeVisible();
  }
});

test("accessibility statement is linked from the persistent footer", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("contentinfo").getByRole("link", { name: "הצהרת נגישות" })).toBeVisible();
});
