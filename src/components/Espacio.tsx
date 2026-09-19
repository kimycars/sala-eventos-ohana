"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, ImageSquare } from "@phosphor-icons/react";
import { gallery, pexels } from "@/site";

export default function Espacio() {
  return (
    <section id="espacio" className="bg-surface py-20 dark:bg-night-soft md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            02 — El espacio
          </p>
          <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Así es <em className="text-accent">Ohana</em>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft dark:text-frost/75">
            Un salón amplio, luminoso y con encanto para reunir a los tuyos sin
            agobios. La decoración se adapta a tu ocasión: nosotros ponemos el
            espacio, tú pones el motivo.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-12 md:grid-rows-2">
          {gallery.map((g, i) => (
            <motion.figure
              key={g.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className={`group relative overflow-hidden rounded-[22px] bg-accent-soft ${g.className}`}
            >
              <Image
                src={pexels(g.id, i === 0 ? 1400 : 900)}
                alt={g.alt}
                width={i === 0 ? 1400 : 900}
                height={i === 0 ? 1750 : 660}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] max-md:aspect-[4/3]"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent px-5 pb-4 pt-14">
                <span className="text-sm font-semibold text-white">
                  {g.caption}
                </span>
              </figcaption>
            </motion.figure>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between rounded-[22px] border-2 border-dashed border-accent/40 bg-accent-soft/60 p-7 md:col-span-6"
          >
            <div>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white">
                <ImageSquare size={22} weight="fill" />
              </span>
            </div>
            <div>
              <h3 className="font-display text-2xl text-accent-ink">
                ¿Prefieres verlo en persona?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-frost/70">
                Cuéntanos qué resuelves visitando el espacio y te lo planteamos
                sin compromiso.
              </p>
              <a
                href="#contacto"
                className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent-ink underline-offset-4 hover:underline"
              >
                Solicitar una visita
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>
        </div>

        <p className="mt-6 flex items-center gap-2 text-xs text-ink-soft dark:text-frost/50">
          <ImageSquare size={14} />
          Imágenes de referencia: las fotografías reales del espacio se publicarán
          en cuanto estén disponibles.
        </p>
      </div>
    </section>
  );
}