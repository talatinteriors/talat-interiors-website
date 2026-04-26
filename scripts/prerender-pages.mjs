import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const siteUrl = process.env.SITE_URL || "https://example.com";
const outputDir = path.resolve("dist/client");
const routes = ["/", "/about", "/services", "/projects", "/contact"];

const server = await import("../dist/server/index.js");

for (const route of routes) {
  const response = await server.default.fetch(new Request(new URL(route, siteUrl)));

  if (!response.ok) {
    throw new Error(`Failed to prerender ${route}: ${response.status}`);
  }

  const html = await response.text();
  const filePath =
    route === "/"
      ? path.join(outputDir, "index.html")
      : path.join(outputDir, route.slice(1), "index.html");

  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, html);
}

await writeFile(
  path.join(outputDir, "404.html"),
  await server.default.fetch(new Request(siteUrl)).then((r) => r.text()),
);
await writeFile(path.join(outputDir, ".nojekyll"), "");

const customDomain = process.env.CUSTOM_DOMAIN?.trim();

if (customDomain) {
  await writeFile(path.join(outputDir, "CNAME"), `${customDomain}\n`);
}

console.log(`Prerendered ${routes.length} routes into ${outputDir}`);
