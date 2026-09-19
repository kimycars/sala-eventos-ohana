"use client";

import { useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { CalendarCheck, List, X } from "@phosphor-icons/react";
import { brand } from "@/site";

const links = [
  { href: "#espacio", label: "El espacio" },
  { href: "#eventos", label: "Eventos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 16);
  });

  const dark = !scrolled;

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-sand/85 shadow-[0_1px_0_rgba(35,28,20,0.06)] backdrop-blur-md dark:bg-night/80"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.jpg"
            alt={`Logo de ${brand.name}`}
            className={`h-9 w-9 rounded-full border object-cover transition-colors ${
              dark ? "border-white/40" : "border-ink/10 dark:border-frost/20"
            }`}
          />
          <span className="leading-tight">
            <span
              className={`block font-display text-lg transition-colors ${
                dark ? "text-white" : "text-ink dark:text-frost"
              }`}
            >
              {brand.shortName}
            </span>
            <span
              className={`block text-[10px] font-semibold uppercase tracking-[0.22em] transition-colors ${
                dark ? "text-white/70" : "text-ink-soft dark:text-frost/70"
              }`}
            >
              Sala de eventos
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                dark
                  ? "text-white/80 hover:text-white"
                  : "text-ink-soft hover:text-ink dark:text-frost/70 dark:hover:text-frost"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="hidden h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white transition-all hover:bg-accent-strong active:translate-y-px sm:flex"
          >
            <CalendarCheck size={18} weight="fill" />
            Solicitar información
          </a>
          <button
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors md:hidden ${
              dark
                ? "border-white/40 text-white"
                : "border-ink/10 text-ink dark:border-frost/15 dark:text-frost"
            }`}
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </nav>

      <motion.div
        initial={reduce ? false : { opacity: 0, height: 0 }}
        animate={open ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden border-t border-ink/5 bg-sand/95 backdrop-blur-md dark:border-frost/10 dark:bg-night/95 md:hidden"
      >
        <div className="flex flex-col gap-1 px-4 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-ink dark:text-frost"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white"
          >
            <CalendarCheck size={18} weight="fill" />
            Solicitar información
          </a>
        </div>
      </motion.div>
    </header>
  );
}