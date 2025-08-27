import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import type { Project } from '@/lib/projects-data';
import { Badge } from './ui/badge';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <Card className="h-full overflow-hidden rounded-2xl border-border/20 bg-card/50 shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
        <CardContent className="p-0">
          <div className="relative h-80 w-full overflow-hidden rounded-t-2xl">
            <Image
              src={project.imageUrl}
              alt={project.title}
              data-ai-hint={project.imageHint}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
             <div className="absolute bottom-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
              {project.location}
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-xl font-headline font-bold text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.location}</p>
                </div>
                 <Badge variant="outline" className="capitalize whitespace-nowrap">{project.category}</Badge>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.slice(0, 2).map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
