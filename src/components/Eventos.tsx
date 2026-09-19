"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";
import { eventIdeas, pexels } from "@/site";

export default function Eventos() {
  return (
    <section id="eventos" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Ideas para celebrar <em className="text-accent">en Ohana</em>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft dark:text-frost/75">
            Cada evento es único; nosotros ponemos el espacio. Estas son algunas
            de las formas más habituales de vivirlo en nuestro salón.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {eventIdeas.map((e, i) => (
            <motion.article
              key={e.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-[22px] border border-ink/8 bg-surface shadow-soft transition-shadow hover:shadow-card dark:border-frost/10 dark:bg-night-soft"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={pexels(e.image, 800)}
                  alt={`${e.title} en Sala de Eventos Ohana`}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl">{e.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft dark:text-frost/70">
                  {e.desc}
                </p>
                <a
                  href="#contacto"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent underline-offset-4 hover:underline"
                >
                  Consultar opciones
                  <ArrowRight
                    size={15}
                    weight="bold"
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 text-center text-sm text-ink-soft dark:text-frost/60"
        >
          ¿Buscas algo distinto?{" "}
          <a href="#contacto" className="font-semibold text-accent underline underline-offset-2">
            Cuéntanos tu idea
          </a>{" "}
          y la hacemos posible.
        </motion.p>
      </div>
    </section>
  );
}