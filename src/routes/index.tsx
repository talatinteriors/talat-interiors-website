import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { SITE, waLink } from "@/lib/site";
import interiorHero from "@/assets/interior-hero.jpg";
import kitchenImg from "@/assets/kitchen.jpg";
import upvcImg from "@/assets/upvc.jpg";
import livingImg from "@/assets/living.jpg";
import renovationImg from "@/assets/renovation.jpg";

const HeroScene = lazy(() =>
  import("@/components/HeroScene").then((m) => ({ default: m.HeroScene })),
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Talat Interiors — Premium UPVC, Interiors & Renovation in Chakwal" },
      {
        name: "description",
        content:
          "Premium UPVC windows & doors, interior design, kitchen cabinets and renovation services. Crafted in Chakwal, Pakistan.",
      },
      { property: "og:title", content: "Talat Interiors — Premium UPVC & Interiors" },
      {
        property: "og:description",
        content: "Premium UPVC windows, interiors, kitchens & renovation in Chakwal.",
      },
    ],
  }),
  component: Index,
});

const stats = [
  { k: "15+", v: "Years of craft" },
  { k: "800+", v: "Projects delivered" },
  { k: "24h", v: "Quote response" },
  { k: "10yr", v: "Workmanship warranty" },
];

const services = [
  {
    title: "UPVC Windows & Doors",
    desc: "German-grade multi-chamber profiles, double glazing, and weather-tight seals — built in our Chakwal factory.",
    img: upvcImg,
    href: "/services",
  },
  {
    title: "Interior Design",
    desc: "Editorial interiors balancing material, light and proportion. From single rooms to full residences.",
    img: livingImg,
    href: "/services",
  },
  {
    title: "Kitchen Cabinets",
    desc: "Made-to-measure cabinetry in matte finishes, marble counters and concealed bronze hardware.",
    img: kitchenImg,
    href: "/services",
  },
  {
    title: "Renovation & Construction",
    desc: "End-to-end renovation: structural updates, finishes, lighting and fit-out — managed by one team.",
    img: renovationImg,
    href: "/services",
  },
];

function Index() {
  useReveal();
  const showHeroScene = useHeroSceneEnabled();

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[88vh] -mt-20 pt-20 bg-obsidian text-bone overflow-hidden">
        <div className="absolute inset-0 opacity-90">
          {showHeroScene ? (
            <Suspense fallback={<HeroFallback />}>
              <HeroScene />
            </Suspense>
          ) : (
            <HeroFallback />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/85 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent pointer-events-none" />

        <div className="container-luxe relative z-10 grid lg:grid-cols-12 gap-10 items-center min-h-[78vh] py-20">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-6">Talat UPVC & Interiors · Chakwal</div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-balance text-bone">
              Crafted spaces.
              <br />
              <span className="italic text-bronze-light">Quietly</span> luxurious.
            </h1>
            <p className="mt-8 max-w-xl text-base md:text-lg text-bone/70 leading-relaxed">
              Premium UPVC windows, interior design, kitchen cabinets and full renovation —
              engineered in our Chakwal factory and finished by hand.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="btn-luxe !bg-bronze !border-bronze hover:!bg-bronze-light"
              >
                Request a quote
              </Link>
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-luxe !text-bone !border-bone/30 hover:!border-bronze"
              >
                WhatsApp us
              </a>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl">
              {stats.map((s) => (
                <div key={s.v}>
                  <div className="font-serif text-3xl md:text-4xl text-bronze-light">{s.k}</div>
                  <div className="text-[0.65rem] uppercase tracking-[0.22em] text-bone/55 mt-2">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-bone/40 text-[0.65rem] tracking-[0.3em] uppercase animate-pulse">
          Scroll
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="container-luxe py-24 md:py-32 reveal">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-5">
            <div className="eyebrow mb-4">Our promise</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
              Materials chosen with care. Details finished by hand.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 text-muted-foreground leading-relaxed">
            <p>
              For over a decade, Talat Interiors has built a reputation across Chakwal for premium
              UPVC fabrication and interior work that lasts. Every window, cabinet and surface is
              engineered in our own factory — so quality and timing stay in our hands.
            </p>
            <div className="divider-bronze mt-10" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-luxe pb-24 md:pb-32">
        <div className="flex items-end justify-between mb-14 reveal">
          <div>
            <div className="eyebrow mb-3">What we do</div>
            <h2 className="font-serif text-4xl md:text-5xl">A complete craft, under one roof.</h2>
          </div>
          <Link
            to="/services"
            className="hidden md:inline-flex text-[0.7rem] tracking-[0.24em] uppercase text-bronze hover:text-foreground transition-colors"
          >
            All services →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <Link
              to={s.href}
              key={s.title}
              className="group relative overflow-hidden bg-card reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1400}
                  height={1000}
                  className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                />
              </div>
              <div className="p-8 md:p-10">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-[0.65rem] tracking-[0.3em] uppercase text-bronze">
                    0{i + 1}
                  </span>
                  <span className="text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground group-hover:text-bronze transition-colors">
                    Discover →
                  </span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-md">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY US — split image / text */}
      <section className="bg-obsidian text-bone py-24 md:py-32">
        <div className="container-luxe grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 reveal">
            <img
              src={interiorHero}
              alt="Interior"
              loading="lazy"
              width={1600}
              height={1200}
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
          <div className="lg:col-span-5 lg:col-start-8 reveal">
            <div className="eyebrow mb-5">Why Talat</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Built in our factory.
              <br />
              Finished in your home.
            </h2>
            <ul className="mt-10 space-y-6">
              {[
                ["Own factory in Chakwal", "Total control over fabrication, timing, and quality."],
                [
                  "Premium materials only",
                  "German-grade UPVC profiles, marble, hardwoods, bronze hardware.",
                ],
                [
                  "Single point of contact",
                  "One team manages design, build and finish — no hand-offs.",
                ],
                [
                  "Trusted across Chakwal",
                  "Hundreds of homes, offices and commercial spaces delivered.",
                ],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-5 border-b border-bone/10 pb-6">
                  <span className="text-bronze-light font-serif text-2xl mt-0.5">·</span>
                  <div>
                    <div className="font-serif text-xl">{t}</div>
                    <div className="text-sm text-bone/60 mt-1">{d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="container-luxe py-24 md:py-32 text-center max-w-4xl reveal">
        <div className="eyebrow mb-6">A note from a client</div>
        <p className="font-serif italic text-2xl md:text-4xl leading-snug text-balance">
          “The Talat team handled our entire renovation — windows, kitchen, flooring. Their factory
          let them deliver fast and the finish quality felt European, not local.”
        </p>
        <div className="mt-10 text-sm tracking-[0.2em] uppercase text-muted-foreground">
          — Private residence, Chakwal
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-luxe pb-24">
        <div className="bg-obsidian text-bone p-12 md:p-20 relative overflow-hidden grain">
          <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <div className="eyebrow mb-5">Begin your project</div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                Visit our factory or request a private consultation.
              </h2>
              <p className="text-bone/65 mt-5 max-w-xl">
                Tell us about your space — we'll respond within 24 hours with materials, approach
                and an honest estimate.
              </p>
            </div>
            <div className="md:col-span-4 flex md:flex-col gap-4 md:items-end">
              <Link
                to="/contact"
                className="btn-luxe !bg-bronze !border-bronze hover:!bg-bronze-light"
              >
                Request quote
              </Link>
              <a
                href={`tel:${SITE.phones[0]}`}
                className="btn-ghost-luxe !text-bone !border-bone/30 hover:!border-bronze"
              >
                {SITE.phones[0]}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function useHeroSceneEnabled() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactViewport = window.matchMedia("(max-width: 767px)");

    const sync = () => setEnabled(!reducedMotion.matches && !compactViewport.matches);
    sync();

    reducedMotion.addEventListener("change", sync);
    compactViewport.addEventListener("change", sync);

    return () => {
      reducedMotion.removeEventListener("change", sync);
      compactViewport.removeEventListener("change", sync);
    };
  }, []);

  return enabled;
}

function HeroFallback() {
  return (
    <img
      src={interiorHero}
      alt=""
      aria-hidden="true"
      className="h-full w-full object-cover opacity-45"
    />
  );
}
