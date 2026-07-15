import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: { tsconfigPaths: true },
  test: {
    include: ["tests/unit/**/*.test.ts", "tests/integration/**/*.test.tsx"],
    environment: "jsdom",
    environmentOptions: {
      jsdom: { url: "http://localhost:3300/" },
    },
    setupFiles: ["./tests/setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: ["app/lib/**/*.ts", "app/components/**/*.tsx"],
      exclude: ["app/components/Icon.tsx"],
      thresholds: {
        statements: 60,
        branches: 55,
        functions: 50,
        lines: 60,
      },
    },
  },
});
