"use client";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -40]);
  return (
    <section className="relative overflow-hidden">
      <motion.div
        style={prefersReduced ? {} : { y }}
        className="absolute inset-0 -z-10"
        aria-hidden
      >
        <Image
          src="/assets/landing.png"
          alt="Interior rendering"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </motion.div>
      <div className="mx-auto max-w-7xl px-4 py-28 md:py-40">
        <motion.h1
          initial={prefersReduced ? { opacity: 1, y: 0 } : { y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-brand text-5xl leading-tight md:text-7xl"
        >
          Crafted Spaces. Considered Details.
        </motion.h1>
        <motion.p
          initial={prefersReduced ? { opacity: 1, y: 0 } : { y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 max-w-2xl opacity-80"
        >
          Bespoke interiors balancing warmth and precision—tailored for modern living.
        </motion.p>
      </div>
    </section>
  );
}
