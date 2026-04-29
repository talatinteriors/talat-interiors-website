import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { SITE } from "@/lib/site";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Talat Interior Chakwal | UPVC, Interiors, Kitchens & Renovation" },
      {
        name: "description",
        content:
          "Talat Interior Chakwal provides premium UPVC windows and doors, interior design, kitchen cabinets, renovation and construction services in Chakwal, Pakistan.",
      },
      { name: "author", content: "Talat Interiors" },
      {
        name: "keywords",
        content:
          "Talat Interior Chakwal, Talat Interiors, interior design Chakwal, UPVC windows Chakwal, kitchen cabinets Chakwal, renovation Chakwal",
      },
      { property: "og:title", content: "Talat Interior Chakwal — Premium UPVC & Interiors" },
      {
        property: "og:description",
        content: "Crafted UPVC, interiors, kitchens and renovation services in Chakwal.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE.url },
      { name: "twitter:card", content: "summary" },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "@id": `${SITE.url}/#business`,
          name: SITE.fullName,
          alternateName: ["Talat Interiors", "Talat Interior Chakwal"],
          url: SITE.url,
          telephone: SITE.phones,
          address: [
            {
              "@type": "PostalAddress",
              streetAddress: "Ara Bazar",
              addressLocality: "Chakwal",
              addressCountry: "PK",
            },
            {
              "@type": "PostalAddress",
              streetAddress: "Pinwal Road, Gujar Chowk",
              addressLocality: "Chakwal",
              addressCountry: "PK",
            },
          ],
          geo: {
            "@type": "GeoCoordinates",
            latitude: SITE.factoryCoords.lat,
            longitude: SITE.factoryCoords.lng,
          },
          areaServed: {
            "@type": "City",
            name: "Chakwal",
          },
          makesOffer: SITE.services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service,
              areaServed: "Chakwal",
            },
          })),
        },
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        href: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        rel: "shortcut icon",
        href: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <Outlet />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
