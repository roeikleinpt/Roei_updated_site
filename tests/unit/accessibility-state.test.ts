import { describe, expect, it } from "vitest";
import { parseA11yState } from "../../app/components/AccessibilityWidget";

describe("accessibility preference parsing", () => {
  it("rejects malformed persisted data", () => {
    expect(parseA11yState("not-json")).toMatchObject({
      font: 1,
      contrast: "none",
      cursor: "none",
    });
  });

  it("clamps numbers and ignores invalid enum values", () => {
    expect(
      parseA11yState(
        JSON.stringify({ font: 9, ws: -20, ls: 2.26, contrast: "hack", cursor: "black", links: true }),
      ),
    ).toMatchObject({
      font: 1.5,
      ws: -2,
      ls: 2.3,
      contrast: "none",
      cursor: "black",
      links: true,
    });
  });
});
