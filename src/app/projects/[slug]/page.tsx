import { projects } from '@/lib/projects-data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-5xl py-12 px-4 md:px-6 md:py-24">
      <div className="space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl md:text-6xl">{project.title}</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-primary">{project.description}</p>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {project.images.map((img, index) => (
              <CarouselItem key={index}>
                <Card className="overflow-hidden border-none">
                  <CardContent className="relative aspect-[16/9] p-0">
                    <Image
                      src={img.url}
                      alt={`${project.title} image ${index + 1}`}
                      data-ai-hint={img.hint}
                      fill
                      className="object-cover rounded-2xl"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-16" />
          <CarouselNext className="mr-16" />
        </Carousel>

        <div>
          <h2 className="text-3xl font-bold font-headline">About the Project</h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{project.longDescription}</p>
        </div>
      </div>
    </div>
  );
}
