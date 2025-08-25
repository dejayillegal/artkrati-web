import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/lib/projects-data';
import { ProjectCard } from '@/components/project-card';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="flex flex-col min-h-dvh">
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/1920/1080"
            alt="Abstract background image"
            data-ai-hint="abstract design"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="container px-4 md:px-6 z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Artkrati Graphite
            </h1>
            <p className="mt-4 max-w-xl mx-auto text-lg text-foreground/80 md:text-xl">
              A modern, sleek redesign concept for the Artkrati portfolio. Preserving content, reimagining style.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/projects">
                  Explore Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/about">About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-projects" className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
            <p className="mt-4 text-muted-foreground">
              A glimpse into our creative world. Discover the stories behind our most celebrated work.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Our Philosophy</h2>
              <p className="text-muted-foreground text-lg">
                We believe in the power of design to transform ideas into tangible, impactful experiences. Our approach is collaborative, transparent, and always focused on achieving our clients' goals through creative excellence and strategic thinking.
              </p>
              <p className="text-muted-foreground text-lg">
                This redesign, Artkrati Graphite, is a testament to our commitment to evolution and innovation, applying our core principles to our own digital identity.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Card className="relative overflow-hidden rounded-2xl border-none bg-card/50 p-8 backdrop-blur-lg w-full max-w-md">
                <CardContent className="text-center">
                  <h3 className="font-headline text-2xl font-bold">Ready to Create?</h3>
                  <p className="mt-2 text-muted-foreground">
                    Let's discuss how we can bring your vision to life.
                  </p>
                  <Button asChild size="lg" className="mt-6">
                    <Link href="/contact">Get In Touch</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
