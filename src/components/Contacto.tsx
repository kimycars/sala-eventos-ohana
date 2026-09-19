"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  PaperPlaneTilt,
} from "@phosphor-icons/react";
import { brand } from "@/site";

const eventTypes = [
  "Cumpleaños",
  "Evento privado",
  "Reunión",
  "Fiesta y ocasión especial",
  "Otro",
];

const inputClass =
  "w-full rounded-2xl border border-ink/12 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 transition-shadow focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-frost/15 dark:bg-night dark:text-frost";

export default function Contacto() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contacto" className="bg-surface py-20 dark:bg-night-soft md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            04 — Contacto
          </p>
          <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Cuéntanos tu <em className="text-accent">evento</em>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft dark:text-frost/75">
            Rellena el formulario y te respondemos lo antes posible para
            confirmar disponibilidad y resolver cualquier duda.
          </p>

          <ul className="mt-9 space-y-5">
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-ink">
                <MapPin size={20} weight="fill" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink dark:text-frost">
                  Dónde estamos
                </p>
                <p className="mt-0.5 text-sm text-ink-soft dark:text-frost/70">
                  {brand.address}, {brand.city}
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-ink">
                <Phone size={20} weight="fill" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink dark:text-frost">
                  Teléfono
                </p>
                <a
                  href={`tel:+${brand.phoneRaw}`}
                  className="mt-0.5 inline-block text-sm text-ink-soft underline-offset-2 hover:text-accent hover:underline dark:text-frost/70"
                >
                  {brand.phone}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-ink">
                <Clock size={20} weight="fill" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink dark:text-frost">
                  Horario
                </p>
                <ul className="mt-0.5 space-y-0.5 text-sm text-ink-soft dark:text-frost/70">
                  {brand.hours.map((h) => (
                    <li key={h.days}>
                      <span className="font-medium">{h.days}:</span> {h.time}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="rounded-[28px] border border-ink/8 bg-sand p-6 shadow-card dark:border-frost/10 dark:bg-night sm:p-9">
            {sent ? (
              <div className="flex min-h-96 flex-col items-center justify-center gap-5 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <CheckCircle size={32} weight="fill" />
                </span>
                <h3 className="font-display text-3xl">¡Solicitud enviada!</h3>
                <p className="max-w-sm text-sm text-ink-soft dark:text-frost/70">
                  Te contactaremos para confirmar disponibilidad y resolver
                  cualquier duda. ¡Gracias por confiar en Ohana!
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-accent underline-offset-4 hover:underline"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="grid gap-5 sm:grid-cols-2"
              >
                <div>
                  <label htmlFor="nombre" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft dark:text-frost/70">
                    Nombre
                  </label>
                  <input id="nombre" name="nombre" type="text" required placeholder="Tu nombre" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="telefono" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft dark:text-frost/70">
                    Teléfono
                  </label>
                  <input id="telefono" name="telefono" type="tel" inputMode="tel" required placeholder="Tu teléfono" className={inputClass} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft dark:text-frost/70">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required placeholder="Tu email" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="tipo" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft dark:text-frost/70">
                    Tipo de evento
                  </label>
                  <select id="tipo" name="tipo" required defaultValue="" className={inputClass}>
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    {eventTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="fecha" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft dark:text-frost/70">
                    Fecha aproximada
                  </label>
                  <input id="fecha" name="fecha" type="date" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="asistentes" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft dark:text-frost/70">
                    Nº aproximado de asistentes
                  </label>
                  <input id="asistentes" name="asistentes" type="number" min="1" placeholder="P. ej. 30" className={inputClass} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="mensaje" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft dark:text-frost/70">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    placeholder="Cuéntanos qué tienes en mente..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-accent px-7 text-sm font-semibold text-white shadow-soft transition-all hover:bg-accent-strong hover:shadow-lg active:translate-y-px"
                  >
                    <PaperPlaneTilt size={18} weight="fill" />
                    Solicitar disponibilidad
                  </button>
                  <p className="mt-3 text-center text-xs text-ink-soft dark:text-frost/60">
                    Te contactaremos para confirmar disponibilidad y resolver
                    cualquier duda.
                  </p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}