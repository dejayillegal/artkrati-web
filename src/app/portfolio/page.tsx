"use client";
import { useState } from "react";
import ScrollProgress from "@/components/ui/scroll-progress";
import Header from "@/components/layout/header";
import Footer from "@/components/footer";
import FeaturedProjects from "@/components/sections/featured-projects";
import { projects } from "@/lib/projects-data";

const filters = ["All", "Residential", "Commercial", "Kitchens", "Wardrobes", "Bath"] as const;

type Filter = (typeof filters)[number];

export default function PortfolioPage() {
  const [active, setActive] = useState<Filter>("All");
  const items =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <section className="mx-auto max-w-7xl px-4 pt-20">
          <div className="flex flex-wrap gap-4">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-4 py-2 text-sm transition-opacity focus-visible:outline-2 focus-visible:outline-foreground/50 ${active === f ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </section>
        <FeaturedProjects items={items} />
      </main>
      <Footer />
    </>
  );
}
