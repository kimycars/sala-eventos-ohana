"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, CalendarBlank, MapPin } from "@phosphor-icons/react";
import { brand, heroImage, pexels } from "@/site";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-12 sm:px-6 md:pb-28 md:pt-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent"
          >
            <MapPin size={14} weight="fill" className="text-accent" />
            {brand.tagline}
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            className="font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Espacios que dan vida a tus <em className="text-accent">celebraciones</em>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.16 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft dark:text-frost/75"
          >
            Un salón de eventos en Humanes de Madrid pensado para que cada ocasión
            sea tuya. Celebraciones, eventos privados y reuniones con un trato
            cercano y sin compromisos.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <a
              href="#contacto"
              className="inline-flex h-13 items-center gap-2 rounded-full bg-accent px-7 text-sm font-semibold text-white shadow-soft transition-all hover:bg-accent-strong hover:shadow-lg active:translate-y-px"
            >
              Solicitar información
            </a>
            <a
              href="#espacio"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-ink underline-offset-4 hover:underline dark:text-frost"
            >
              Ver el espacio
              <ArrowRight
                size={16}
                weight="bold"
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="relative lg:col-span-6"
        >
          <div className="overflow-hidden rounded-[28px] shadow-card">
            <div className="hero-zoom">
              <Image
                src={pexels(heroImage, 1400)}
                alt="Salón de eventos decorado con mesas redondas preparado para una celebración"
                width={1400}
                height={1750}
                priority
                className="aspect-[4/5] h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/80 px-5 py-4 backdrop-blur-md sm:right-auto sm:max-w-xs">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white">
              <CalendarBlank size={20} weight="fill" />
            </span>
            <p className="text-sm font-medium leading-snug text-ink">
              ¿Tienes una fecha en mente?{" "}
              <a href="#contacto" className="font-semibold text-accent underline underline-offset-2">
                Consulta disponibilidad
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}