import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeEach, vi } from "vitest";

afterEach(() => {
  cleanup();
  sessionStorage.clear();
  localStorage.clear();
  document.documentElement.removeAttribute("data-a11y-contrast");
  document.documentElement.removeAttribute("data-a11y-links");
  document.documentElement.removeAttribute("data-a11y-titles");
  document.documentElement.removeAttribute("data-a11y-readable");
  document.documentElement.removeAttribute("data-a11y-noimg");
  document.documentElement.removeAttribute("data-a11y-cursor");
  document.documentElement.removeAttribute("data-a11y-noanim");
  document.documentElement.removeAttribute("data-a11y-kbd");
  document.documentElement.style.removeProperty("--a11y-font-scale");
  document.documentElement.style.removeProperty("--a11y-ws");
  document.documentElement.style.removeProperty("--a11y-ls");
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

class IntersectionObserverMock implements IntersectionObserver {
  readonly root = null;
  readonly rootMargin = "0px";
  readonly thresholds = [0];
  disconnect = vi.fn();
  observe = vi.fn();
  takeRecords = vi.fn(() => []);
  unobserve = vi.fn();
}

beforeEach(() => {
  vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);
});

Object.defineProperty(window, "requestAnimationFrame", {
  configurable: true,
  value: (callback: FrameRequestCallback) => window.setTimeout(() => callback(performance.now()), 0),
});

Object.defineProperty(window, "cancelAnimationFrame", {
  configurable: true,
  value: (id: number) => window.clearTimeout(id),
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

Object.defineProperty(window, "speechSynthesis", {
  configurable: true,
  value: {
    addEventListener: vi.fn(),
    cancel: vi.fn(),
    getVoices: vi.fn(() => []),
    removeEventListener: vi.fn(),
    speak: vi.fn(),
  },
});
