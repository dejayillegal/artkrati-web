import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import type { Project } from '@/lib/projects-data';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <Card className="h-full overflow-hidden rounded-2xl border-border bg-card text-card-foreground shadow-sm transition-all duration-300">
        <CardContent className="relative h-96 w-full p-0">
          <Image
            src={project.imageUrl}
            alt={project.title}
            data-ai-hint={project.imageHint}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/60"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-2xl font-headline font-bold">{project.title}</h3>
            <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100 group-hover:pt-2">
              <p className="text-sm text-fog/90">{project.description}</p>
              <Button variant="outline" className="mt-4 bg-transparent text-white border-white hover:bg-white hover:text-black">
                View Project <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}