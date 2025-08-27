
'use client';

import { useState } from 'react';
import { ProjectCard } from '@/components/project-card';
import { projects } from '@/lib/projects-data';
import { Button } from '@/components/ui/button';
import { Home, Refrigerator, Wardrobe, Sofa, Toy, Paintbrush, Search, DraftingCompass } from 'lucide-react';
import { Input } from '@/components/ui/input';

const allCategories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

const categoryIcons: { [key: string]: React.ElementType } = {
    All: Home,
    Residential: Home,
    Commercial: DraftingCompass,
    Showroom: Sofa,
    Kitchens: Refrigerator,
    Wardrobes: Wardrobe,
    Living: Sofa,
    Kids: Toy,
    "Art & Murals": Paintbrush,
};


export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const filters = ["All", "Residential", "Kitchens", "Wardrobes", "Living", "Kids", "Art & Murals"];

    const filteredProjects = projects
        .filter(project => activeFilter === 'All' || project.tags.includes(activeFilter))
        .filter(project => project.title.toLowerCase().includes(searchTerm.toLowerCase()));


  return (
    <div className="container mx-auto max-w-7xl py-12 px-4 md:px-6 md:py-24 bg-background text-foreground">
      <div className="text-left mb-12">
        <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl md:text-6xl">Work</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Select projects across kitchens, wardrobes, living and more.
        </p>
      </div>

       <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
          <div className="relative w-full md:w-auto">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
             <Input 
                placeholder="Search projects" 
                className="pl-10 w-full md:w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
             />
          </div>
          <Button size="lg">
              <DraftingCompass className="mr-2"/> Estimate My Space
          </Button>
      </div>

      <div className="flex justify-start items-center gap-2 mb-12 flex-wrap">
          {filters.map(filter => {
                const Icon = categoryIcons[filter] || Home;
                return (
                    <Button 
                        key={filter} 
                        variant={activeFilter === filter ? "default" : "outline"} 
                        className="rounded-full"
                        onClick={() => setActiveFilter(filter)}
                    >
                        <Icon className="mr-2"/>
                        {filter}
                    </Button>
                )
          })}
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
