import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/projects-data';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <Card className="relative h-full overflow-hidden rounded-2xl border-border bg-card/50 backdrop-blur-lg transition-all duration-300 hover:shadow-glow-primary hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="relative h-80 w-full overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={project.title}
              data-ai-hint={project.imageHint}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
          <CardDescription className="mt-2 h-12 text-muted-foreground">{project.description}</CardDescription>
        </CardContent>
        <div className="absolute top-4 right-4 flex items-center justify-center rounded-full bg-background/80 p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5 text-primary" />
        </div>
      </Card>
    </Link>
  );
}
