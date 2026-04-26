import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import interiorHero from "@/assets/interior-hero.jpg";
import livingImg from "@/assets/living.jpg";
import kitchenImg from "@/assets/kitchen.jpg";
import bedroomImg from "@/assets/bedroom.jpg";
import upvcImg from "@/assets/upvc.jpg";
import renovationImg from "@/assets/renovation.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Talat Interiors Portfolio, Chakwal" },
      {
        name: "description",
        content:
          "A selection of UPVC, interior design, kitchen and renovation projects delivered by Talat Interiors in Chakwal.",
      },
      { property: "og:title", content: "Projects — Talat Interiors" },
      { property: "og:description", content: "Selected residential and commercial work." },
    ],
  }),
  component: ProjectsPage,
});

type Project = {
  title: string;
  cat: "Interiors" | "UPVC" | "Kitchens" | "Renovation";
  loc: string;
  img: string;
};

const projects: Project[] = [
  { title: "Marble Court Residence", cat: "Interiors", loc: "Chakwal", img: interiorHero },
  { title: "Bone & Bronze Kitchen", cat: "Kitchens", loc: "Chakwal", img: kitchenImg },
  { title: "Pinwal Road Villa", cat: "Renovation", loc: "Chakwal", img: renovationImg },
  { title: "Atrium Living Hall", cat: "Interiors", loc: "Chakwal", img: livingImg },
  { title: "Sliding UPVC Suite", cat: "UPVC", loc: "Chakwal", img: upvcImg },
  { title: "Master Bedroom Wing", cat: "Interiors", loc: "Chakwal", img: bedroomImg },
];

const filters = ["All", "Interiors", "UPVC", "Kitchens", "Renovation"] as const;

function ProjectsPage() {
  useReveal();
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const list = filter === "All" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <div>
      <section className="container-luxe pt-20 pb-12 md:pt-32 md:pb-16">
        <div className="eyebrow mb-6">Projects</div>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] max-w-4xl text-balance">
          Selected work.
          <br />
          Quietly considered.
        </h1>
      </section>

      <section className="container-luxe pb-8 flex flex-wrap gap-3">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-5 py-2.5 text-[0.7rem] tracking-[0.22em] uppercase border transition-all ${
              filter === f
                ? "bg-obsidian text-bone border-obsidian"
                : "border-border hover:border-bronze hover:text-bronze"
            }`}
          >
            {f}
          </button>
        ))}
      </section>

      <section className="container-luxe pb-24 md:pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p, i) => (
            <figure
              key={p.title + i}
              className="group relative overflow-hidden bg-card reveal"
              style={{ transitionDelay: `${(i % 6) * 60}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1400}
                  height={1000}
                  className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-6 text-bone translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="text-[0.6rem] tracking-[0.3em] uppercase text-bronze-light mb-2">
                  {p.cat} · {p.loc}
                </div>
                <div className="font-serif text-2xl">{p.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="container-luxe pb-24">
        <div className="bg-obsidian text-bone p-12 md:p-16 text-center">
          <div className="eyebrow mb-4">Have a project in mind?</div>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight max-w-2xl mx-auto">
            We'd love to hear about it.
          </h2>
          <Link
            to="/contact"
            className="btn-luxe mt-10 !bg-bronze !border-bronze hover:!bg-bronze-light"
          >
            Start a project
          </Link>
        </div>
      </section>
    </div>
  );
}
