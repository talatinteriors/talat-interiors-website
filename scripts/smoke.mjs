const baseUrl = process.env.BASE_URL ?? "http://127.0.0.1:5173";

const routes = [
  { path: "/", mustInclude: ["Talat Interiors", "Request a quote"] },
  { path: "/about", mustInclude: ["About", "Our mission"] },
  { path: "/services", mustInclude: ["Services", "Four disciplines"] },
  { path: "/projects", mustInclude: ["Projects", "Selected work"] },
  { path: "/contact", mustInclude: ["Contact", "Send via WhatsApp"] },
];

for (const route of routes) {
  const url = new URL(route.path, baseUrl);
  const response = await fetchWithTimeout(url);

  if (!response.ok) {
    throw new Error(`${route.path} returned ${response.status}`);
  }

  const html = await response.text();

  for (const text of route.mustInclude) {
    if (!html.includes(text)) {
      throw new Error(`${route.path} is missing expected text: ${text}`);
    }
  }

  if (html.includes("@Lovable")) {
    throw new Error(`${route.path} still contains stale Lovable metadata`);
  }
}

console.log(`Smoke checks passed for ${routes.length} routes at ${baseUrl}`);

async function fetchWithTimeout(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);

  try {
    return await fetch(url, { signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}
