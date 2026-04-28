import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { SITE, telLink, waLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Talat Interiors, Chakwal" },
      {
        name: "description",
        content:
          "Visit our office in Ara Bazar or our factory on Pinwal Road, Chakwal. Call, WhatsApp or request a quote.",
      },
      { property: "og:title", content: "Contact Talat Interiors" },
      {
        property: "og:description",
        content: "Office in Ara Bazar. Factory on Pinwal Road, Chakwal.",
      },
      { property: "og:url", content: `${SITE.url}/contact` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/contact` }],
  }),
  component: ContactPage,
});

function ContactPage() {
  useReveal();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "UPVC Windows & Doors",
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      "Hello Talat Interiors,",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      "",
      form.message,
    ].join("\n");

    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div>
      <section className="container-luxe pt-20 pb-12 md:pt-32 md:pb-16">
        <div className="eyebrow mb-6">Contact</div>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] max-w-4xl text-balance">
          Let's begin.
          <br />
          Call, message, or visit.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          We respond within 24 hours. For faster service, WhatsApp or call us directly.
        </p>
      </section>

      <section className="container-luxe pb-24 grid lg:grid-cols-12 gap-12">
        {/* Form */}
        <form onSubmit={onSubmit} className="lg:col-span-7 space-y-6 reveal">
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="Your name">
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-border focus:border-bronze py-3 outline-none transition-colors"
              />
            </Field>
            <Field label="Phone">
              <input
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-transparent border-b border-border focus:border-bronze py-3 outline-none transition-colors"
              />
            </Field>
          </div>
          <Field label="Service">
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full bg-transparent border-b border-border focus:border-bronze py-3 outline-none transition-colors"
            >
              <option>UPVC Windows & Doors</option>
              <option>Interior Design</option>
              <option>Kitchen Cabinets</option>
              <option>Renovation & Construction</option>
            </select>
          </Field>
          <Field label="Tell us about your project">
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-transparent border-b border-border focus:border-bronze py-3 outline-none transition-colors resize-none"
            />
          </Field>
          <button
            type="submit"
            className="btn-luxe !bg-bronze !border-bronze hover:!bg-bronze-light"
          >
            Send via WhatsApp
          </button>
        </form>

        {/* Info */}
        <aside className="lg:col-span-5 space-y-10 reveal">
          <div>
            <div className="eyebrow mb-4">Office</div>
            <p className="font-serif text-xl">{SITE.office}</p>
          </div>
          <div>
            <div className="eyebrow mb-4">Factory</div>
            <p className="font-serif text-xl">{SITE.factory}</p>
          </div>
          <div>
            <div className="eyebrow mb-4">Phone</div>
            {SITE.phones.map((p) => (
              <a
                key={p}
                href={telLink(p)}
                className="block font-serif text-2xl hover:text-bronze transition-colors"
              >
                {p}
              </a>
            ))}
          </div>
          <div className="flex gap-3 pt-4">
            <a href={waLink()} target="_blank" rel="noreferrer" className="btn-luxe">
              WhatsApp
            </a>
            <a href={telLink(SITE.phones[0])} className="btn-ghost-luxe">
              Call now
            </a>
          </div>
        </aside>
      </section>

      {/* Map */}
      <section className="container-luxe pb-24 reveal">
        <div className="eyebrow mb-6">Find our factory</div>
        <div className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden border border-border">
          <iframe
            title="Talat Interiors factory location"
            src={`https://maps.google.com/maps?q=${SITE.factoryCoords.lat},${SITE.factoryCoords.lng}&z=16&output=embed`}
            className="w-full h-full grayscale-[30%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow block mb-2 !text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
