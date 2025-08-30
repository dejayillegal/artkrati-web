"use client";
import { motion, useReducedMotion } from "framer-motion";
import TiltCard from "@/components/ui/tilt-card";
import Image from "next/image";

export default function FeaturedProjects({ items = [] }: { items: any[] }) {
  const prefersReduced = useReducedMotion();
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="flex items-end justify-between">
        <h2 className="font-brand text-3xl md:text-4xl">Signature Projects</h2>
      </div>
      <div className="mt-10 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => (
          <motion.article
            key={p.slug ?? i}
            initial={prefersReduced ? { opacity: 1, y: 0 } : { y: 24, opacity: 0 }}
            whileInView={prefersReduced ? { opacity: 1, y: 0 } : { y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <TiltCard className="overflow-hidden rounded-2xl border border-foreground/10 bg-background/60 backdrop-blur">
              <div className="relative aspect-[4/3]">
                <Image src={p.imageUrl ?? p.image} alt={p.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-brand text-xl">{p.title}</h3>
                {p.description && <p className="mt-1 text-sm opacity-70">{p.description}</p>}
              </div>
            </TiltCard>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
