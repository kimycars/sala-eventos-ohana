"use client";

import { motion } from "motion/react";
import { HandHeart, PaintBrush, CalendarCheck } from "@phosphor-icons/react";
import { ArrowRight } from "@phosphor-icons/react";

const features = [
  {
    icon: HandHeart,
    title: "Trato cercano",
    desc: "Estás en manos de quien cuida cada celebración como si fuera la suya.",
  },
  {
    icon: PaintBrush,
    title: "Espacio adaptable",
    desc: "Un salón que se prepara para tu ocasión, a tu manera y a tu ritmo.",
  },
  {
    icon: CalendarCheck,
    title: "Disponibilidad clara",
    desc: "Pregunta por tu fecha y te confirmamos en seguida, sin rodeos.",
  },
];

export default function Presentacion() {
  return (
    <section id="presentacion" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            01 — Nosotros
          </p>
          <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Un espacio para tus <em className="text-accent">momentos</em>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft dark:text-frost/75">
            Sala de Eventos Ohana es un espacio en Humanes de Madrid pensado para
            celebrar lo importante: cumpleaños, celebraciones familiares, eventos
            privados y esas ocasiones que se quedan para siempre.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft dark:text-frost/75">
            Nos ocupamos de que tu evento tenga sitio, ambiente y los detalles que
            lo hacen tuyo. Cuéntanos qué necesitas y te orientamos sin compromiso.
          </p>
          <a
            href="#contacto"
            className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-ink underline-offset-4 hover:underline dark:text-frost"
          >
            Solicitar información
            <ArrowRight
              size={16}
              weight="bold"
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        <div className="lg:col-span-7">
          <div className="grid gap-5 sm:grid-cols-3 lg:gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-[22px] border border-ink/8 bg-surface p-6 shadow-soft dark:border-frost/10 dark:bg-night-soft"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent-ink">
                  <f.icon size={22} weight="fill" />
                </span>
                <h3 className="font-display mt-5 text-2xl">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-frost/70">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}