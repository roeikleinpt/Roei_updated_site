import { existsSync, readFileSync, readdirSync } from "node:fs";
import { extname, join, resolve } from "node:path";

const outputRoot = resolve(process.argv[2] ?? "out");
const basePath =
  process.argv[3] ?? (process.env.GITHUB_PAGES === "true" ? "/roei2" : "");
const expectedSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://idoo25.github.io/roei2";
const failures = [];

for (const required of ["index.html", "professional-info/index.html", "robots.txt", "sitemap.xml"]) {
  if (!existsSync(join(outputRoot, required))) failures.push(`Missing ${required}`);
}

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

for (const htmlFile of walk(outputRoot).filter((file) => file.endsWith(".html"))) {
  const html = readFileSync(htmlFile, "utf8");
  if (html.includes("your-domain.co.il") || html.includes("YOUR_ACCESS_KEY")) {
    failures.push(`Placeholder found in ${htmlFile}`);
  }

  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const reference = match[1];
    if (/^(?:#|https?:|mailto:|tel:|data:)/.test(reference)) continue;

    const withoutQuery = reference.split(/[?#]/, 1)[0];
    if (!withoutQuery) continue;
    if (basePath && withoutQuery.startsWith("/") && !withoutQuery.startsWith(`${basePath}/`)) {
      failures.push(`Missing basePath in ${htmlFile}: ${reference}`);
      continue;
    }

    const localUrl = basePath ? withoutQuery.slice(basePath.length) || "/" : withoutQuery;
    const relative = decodeURIComponent(localUrl.replace(/^\//, ""));
    const candidate =
      !relative || localUrl.endsWith("/") || !extname(relative)
        ? join(outputRoot, relative, "index.html")
        : join(outputRoot, relative);
    if (!existsSync(candidate)) failures.push(`Broken local reference in ${htmlFile}: ${reference}`);
  }
}

const robots = readFileSync(join(outputRoot, "robots.txt"), "utf8");
const sitemap = readFileSync(join(outputRoot, "sitemap.xml"), "utf8");
if (!robots.includes(`${expectedSiteUrl}/sitemap.xml`)) failures.push("robots.txt has the wrong sitemap URL");
if (!sitemap.includes(`${expectedSiteUrl}/`)) failures.push("sitemap.xml has the wrong public URL");

if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Static export verified (${basePath || "/"}).`);
}
