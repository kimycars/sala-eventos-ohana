import {
  InstagramLogo,
  MapPin,
  Phone,
} from "@phosphor-icons/react/dist/ssr";
import { brand } from "@/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-night text-frost dark:border-frost/10">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-display text-3xl">{brand.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-frost/60">
              Un espacio para celebrar lo importante en Humanes de Madrid.
              Estamos a un mensaje de distancia.
            </p>
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-frost/15 px-4 py-2.5 text-sm font-medium text-frost transition-colors hover:border-accent hover:text-accent"
            >
              <InstagramLogo size={18} weight="fill" />
              {brand.instagram}
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-frost/50">
              Secciones
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                { href: "#espacio", label: "El espacio" },
                { href: "#eventos", label: "Eventos" },
                { href: "#contacto", label: "Contacto" },
                { href: "/privacidad", label: "Política de privacidad" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-frost/80 transition-colors hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-frost/50">
              Contacto
            </p>
            <ul className="mt-4 space-y-3 text-sm text-frost/80">
              <li className="flex items-start gap-2">
                <MapPin size={16} weight="fill" className="mt-0.5 shrink-0 text-accent" />
                <span>
                  {brand.address}
                  <br />
                  {brand.city}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} weight="fill" className="shrink-0 text-accent" />
                <a
                  href={`tel:+${brand.phoneRaw}`}
                  className="text-frost/80 transition-colors hover:text-accent"
                >
                  {brand.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-frost/10 pt-7 text-xs text-frost/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {brand.name}, {brand.city}
          </p>
          <p>Diseñado y cuidado para tus celebraciones.</p>
        </div>
      </div>
    </footer>
  );
}