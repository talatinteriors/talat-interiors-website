import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/useReveal";
import interiorHero from "@/assets/interior-hero.jpg";
import livingImg from "@/assets/living.jpg";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Talat UPVC & Interiors, Chakwal" },
      {
        name: "description",
        content:
          "Our story, mission and process. A craft-led UPVC and interior design studio rooted in Chakwal, Pakistan.",
      },
      { property: "og:title", content: "About Talat Interiors" },
      { property: "og:description", content: "Craft-led UPVC and interiors from Chakwal." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  useReveal();
  return (
    <div>
      <section className="container-luxe pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="eyebrow mb-6">About</div>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] max-w-4xl text-balance">
          A factory, a studio, and a quiet obsession with detail.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          {SITE.fullName} began on Pinwal Road in Chakwal — a small UPVC workshop with one
          principle: build it like it's for our own home. Today we run a full factory and an
          interiors team serving residences, offices and commercial projects across the region.
        </p>
      </section>

      <section className="container-luxe pb-24 md:pb-32">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <img
            src={interiorHero}
            alt="Interior"
            loading="lazy"
            width={1600}
            height={1200}
            className="w-full aspect-[4/5] object-cover reveal"
          />
          <div className="md:pt-16 reveal">
            <div className="eyebrow mb-4">Our mission</div>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">
              Bring world-class UPVC, cabinetry and interiors to Chakwal — without compromise.
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              Most homes settle for what's locally available. We bring in premium profiles, hardware
              and finishes, fabricate in-house, and install with the same care we'd give our own
              family's home.
            </p>
            <div className="divider-bronze mt-10" />
            <div className="eyebrow mt-10 mb-3">Our vision</div>
            <p className="text-muted-foreground leading-relaxed">
              To be the most trusted name in premium UPVC and interiors in northern Punjab — known
              for honest pricing, finished work, and quiet luxury.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-obsidian text-bone py-24 md:py-32">
        <div className="container-luxe">
          <div className="eyebrow mb-4 reveal">Our process</div>
          <h2 className="font-serif text-4xl md:text-5xl mb-16 reveal max-w-2xl">
            From first conversation to final walkthrough.
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              ["Discover", "We visit your space, listen, measure and understand how you live."],
              ["Design", "Material boards, layouts and clear pricing. No surprises."],
              ["Fabricate", "Built in our Chakwal factory with premium UPVC and finishes."],
              ["Finish", "Installed by our team. Walked through with you. Warrantied."],
            ].map(([t, d], i) => (
              <div
                key={t}
                className="reveal border-t border-bone/15 pt-6"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-bronze-light font-serif text-3xl mb-4">0{i + 1}</div>
                <div className="font-serif text-2xl mb-2">{t}</div>
                <p className="text-sm text-bone/60 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-luxe py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6 reveal">
            <div className="eyebrow mb-4">Credibility</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              15+ years.
              <br />
              800+ spaces.
              <br />
              One factory.
            </h2>
            <p className="text-muted-foreground mt-6 max-w-md">
              Our work spans private homes, offices, retail and commercial projects across Chakwal
              and beyond.
            </p>
            <Link to="/projects" className="btn-luxe mt-10">
              View projects
            </Link>
          </div>
          <div className="md:col-span-6 reveal">
            <img
              src={livingImg}
              alt="Living"
              loading="lazy"
              width={1400}
              height={1000}
              className="w-full aspect-[5/4] object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
