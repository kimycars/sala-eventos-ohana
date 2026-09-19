"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";
import { ctaImage, pexels } from "@/site";

export default function Cta() {
  return (
    <section className="px-4 py-20 sm:px-6 md:py-28">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] shadow-card"
      >
        <Image
          src={pexels(ctaImage, 1600)}
          alt="Celebración al aire libre con luces cálidas y ambiente acogedor"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/40 to-night/30" />
        <div className="relative flex flex-col items-center px-6 py-24 text-center md:py-36">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/80">
            Tus planes, nuestro espacio
          </p>
          <h2 className="font-display max-w-2xl text-4xl leading-[1.05] text-white sm:text-5xl md:text-6xl">
            ¿Tienes un evento <em>en mente</em>?
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
            Cuéntanos qué necesitas y te ayudamos a organizarlo. El espacio ya
            está listo; solo falta el motivo.
          </p>
          <a
            href="#contacto"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-ink transition-all hover:bg-accent hover:text-white active:translate-y-px"
          >
            Solicitar información
            <ArrowRight
              size={16}
              weight="bold"
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </motion.div>
    </section>
  );
}