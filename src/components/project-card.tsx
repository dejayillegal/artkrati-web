import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/projects-data';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <Card className="h-full overflow-hidden rounded-2xl border-border bg-card transition-all duration-300 hover:shadow-glow-primary hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="relative h-80 w-full overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={project.title}
              data-ai-hint={project.imageHint}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
          <CardDescription className="mt-2 h-12 text-muted-foreground">{project.description}</CardDescription>
          {project.category && <div className="mt-4 flex gap-2">
            <Badge variant="secondary">{project.category}</Badge>
          </div>}
        </CardContent>
      </Card>
    </Link>
  );
}
