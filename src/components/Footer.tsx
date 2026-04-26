import { Link } from "@tanstack/react-router";
import { SITE, telLink, waLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-obsidian text-bone mt-32">
      <div className="container-luxe py-20 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="font-serif text-3xl">{SITE.brand}</div>
          <div className="eyebrow mt-2">UPVC · Interior · Renovation</div>
          <p className="mt-6 text-sm text-bone/70 max-w-md leading-relaxed">
            Premium UPVC windows & doors, interior design, kitchen cabinets and full renovation —
            crafted in Chakwal for clients who expect more.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost-luxe !text-bone !border-bone/30 hover:!border-bronze"
            >
              WhatsApp
            </a>
            <a
              href={telLink(SITE.phones[0])}
              className="btn-ghost-luxe !text-bone !border-bone/30 hover:!border-bronze"
            >
              Call
            </a>
          </div>
        </div>

        <div>
          <div className="eyebrow mb-5">Visit</div>
          <p className="text-sm text-bone/70 leading-relaxed">
            <strong className="text-bone block mb-1">Office</strong>
            {SITE.office}
          </p>
          <p className="text-sm text-bone/70 leading-relaxed mt-4">
            <strong className="text-bone block mb-1">Factory</strong>
            {SITE.factory}
          </p>
        </div>

        <div>
          <div className="eyebrow mb-5">Pages</div>
          <ul className="space-y-3 text-sm">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/services", "Services"],
              ["/projects", "Projects"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-bone/70 hover:text-bronze transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-bone/10">
        <div className="container-luxe py-6 flex flex-col md:flex-row justify-between gap-4 text-xs text-bone/50">
          <span>
            © {new Date().getFullYear()} {SITE.fullName}. All rights reserved.
          </span>
          <span className="tracking-[0.2em] uppercase">Chakwal · Pakistan</span>
        </div>
      </div>
    </footer>
  );
}
