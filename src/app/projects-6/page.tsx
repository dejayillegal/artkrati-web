import { ProjectCard } from '@/components/project-card';
import { projects } from '@/lib/projects-data';
import { Button } from '@/components/ui/button';

export default function ProjectsPage() {

    const filters = ["All", "Residential", "Commercial", "Office", "Showroom"];

  return (
    <div className="container mx-auto max-w-7xl py-12 px-4 md:px-6 md:py-24 bg-background text-foreground">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl md:text-6xl">Our Work</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A collection of our passion projects and client collaborations. Each one tells a unique story of creativity and craftsmanship.
        </p>
      </div>

      <div className="flex justify-center items-center gap-4 mb-12 flex-wrap">
          {filters.map(filter => (
              <Button key={filter} variant={filter === "All" ? "default" : "outline"} className="rounded-full">
                  {filter}
              </Button>
          ))}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
