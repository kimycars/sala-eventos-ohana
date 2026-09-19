"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, MapPin } from "@phosphor-icons/react";
import { brand, heroImage, pexels } from "@/site";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 -z-20"
      >
        <Image
          src={pexels(heroImage, 1920)}
          alt="Salón de eventos decorado con mesas redondas preparado para una celebración"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-night/90 via-night/40 to-night/25"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-44 bg-gradient-to-b from-night/70 to-transparent"
      />

      <div className="mx-auto flex min-h-[calc(100dvh-4rem)] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 md:pb-24">
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/85"
        >
          <MapPin size={14} weight="fill" />
          {brand.tagline}
        </motion.p>

        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          className="font-display max-w-3xl text-5xl leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Espacios que dan vida a tus <em>celebraciones</em>
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.16 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/85"
        >
          Un salón en Humanes de Madrid para celebrar cumpleaños, eventos
          privados y reuniones, con un trato cercano y sin compromiso.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.24 }}
          className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-x-8"
        >
          <a
            href="#contacto"
            className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-accent px-8 text-sm font-semibold text-white shadow-lg transition-all hover:bg-accent-strong active:translate-y-px"
          >
            Solicitar información
          </a>
          <a
            href="#espacio"
            className="group inline-flex items-center justify-center gap-2 text-sm font-semibold text-white underline-offset-4 hover:underline"
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
    </section>
  );
}