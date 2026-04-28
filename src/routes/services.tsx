import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/useReveal";
import upvcImg from "@/assets/upvc.jpg";
import livingImg from "@/assets/living.jpg";
import kitchenImg from "@/assets/kitchen.jpg";
import renovationImg from "@/assets/renovation.jpg";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Interior Design & UPVC Services in Chakwal | Talat Interiors" },
      {
        name: "description",
        content:
          "Talat Interiors provides interior design, UPVC windows and doors, kitchen cabinets, renovation and construction services in Chakwal.",
      },
      {
        property: "og:title",
        content: "Interior Design & UPVC Services in Chakwal — Talat Interiors",
      },
      {
        property: "og:description",
        content: "UPVC, interiors, kitchens, renovation — crafted in Chakwal.",
      },
      { property: "og:url", content: `${SITE.url}/services` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/services` }],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    title: "UPVC Windows & Doors",
    img: upvcImg,
    intro:
      "Multi-chamber German-grade UPVC profiles, double glazing, weather-tight seals and bronze hardware. Sliding, casement, tilt-and-turn, and custom shapes — fabricated in our Chakwal factory.",
    bullets: [
      "Heat & sound insulation",
      "10-year workmanship warranty",
      "Custom sizes & finishes",
      "Sliding · Casement · Tilt-and-turn",
    ],
  },
  {
    n: "02",
    title: "Interior Design",
    img: livingImg,
    intro:
      "Editorial interiors balancing material, light and proportion. From mood boards to final styling, we design spaces that feel calm, considered and timeless.",
    bullets: [
      "Concept & material boards",
      "3D visualisation",
      "Lighting & finish specification",
      "Furniture sourcing & styling",
    ],
  },
  {
    n: "03",
    title: "Kitchen Cabinets",
    img: kitchenImg,
    intro:
      "Made-to-measure cabinetry: matte and lacquered finishes, marble and quartz counters, soft-close mechanisms and concealed bronze hardware.",
    bullets: [
      "Modular & made-to-measure",
      "Marble / quartz countertops",
      "Soft-close hinges & runners",
      "Concealed bronze hardware",
    ],
  },
  {
    n: "04",
    title: "Renovation & Construction",
    img: renovationImg,
    intro:
      "End-to-end renovation: structural updates, plumbing and electrical, finishes, lighting and fit-out — managed by a single team, on a single timeline.",
    bullets: [
      "Structural & MEP updates",
      "Flooring, paint, plaster, tiling",
      "Project management",
      "Fixed-cost estimates",
    ],
  },
];

function ServicesPage() {
  useReveal();
  return (
    <div>
      <section className="container-luxe pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="eyebrow mb-6">Services</div>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] max-w-4xl text-balance">
          Four disciplines.
          <br />
          One workshop.
          <br />
          One standard.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Whether you need a single window or a full home build-out, every service is delivered by
          our own team — designed, fabricated and finished without hand-offs.
        </p>
      </section>

      <section className="container-luxe pb-24">
        {services.map((s, i) => (
          <article
            key={s.title}
            className={`grid md:grid-cols-12 gap-10 lg:gap-16 items-center py-16 md:py-24 border-t border-border reveal ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
          >
            <div className="md:col-span-7">
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                width={1400}
                height={1000}
                className="w-full aspect-[5/4] object-cover"
              />
            </div>
            <div className="md:col-span-5">
              <div className="text-bronze font-serif text-2xl mb-3">{s.n}</div>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight">{s.title}</h2>
              <p className="text-muted-foreground mt-6 leading-relaxed">{s.intro}</p>
              <ul className="mt-8 space-y-3">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-3 items-baseline text-sm">
                    <span className="text-bronze">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-luxe mt-10">
                Enquire
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
