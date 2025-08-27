import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye, MessageSquare, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const featuredProjects = [
  {
    title: "Terrace Kitchen",
    location: "Mumbai",
    tags: ["Residential", "Kitchen"],
    size: "420 sq ft",
    imageUrl: "/assets/images/project-1.jpeg",
    imageHint: "terrace kitchen",
    slug: "/projects/modern-minimalistic-house"
  },
  {
    title: "Wardrobe Suite",
    location: "Bengaluru",
    tags: ["Wardrobes", "Detail"],
    size: "260 sq ft",
    imageUrl: "/assets/images/project-2.jpeg",
    imageHint: "wardrobe suite",
    slug: "/projects/luxury-budget-friendly-house"
  },
  {
    title: "Living Room",
    location: "Delhi",
    tags: ["Living", "Lighting"],
    size: "520 sq ft",
    imageUrl: "/assets/images/project-3.jpeg",
    imageHint: "living room",
    slug: "/projects/mr-shailesh-kumar-residence"
  },
  {
    title: "Kids Studio",
    location: "Pune",
    tags: ["Kids", "Play"],
    size: "180 sq ft",
    imageUrl: "https://picsum.photos/seed/kids-studio/600/400",
    imageHint: "kids play studio",
    slug: "/projects/fashion-fusion",
  },
    {
    title: "Stone Bath",
    location: "Chennai",
    tags: ["Bath", "Stone"],
    size: "140 sq ft",
    imageUrl: "https://picsum.photos/seed/stone-bath/600/400",
    imageHint: "stone bathroom",
    slug: "/projects/dental-clinic",
  },
    {
    title: "Art & Mural",
    location: "Ahmedabad",
    tags: ["Art & Murals", "Feature"],
    size: "300 sq ft",
    imageUrl: "/assets/images/project-4.jpeg",
    imageHint: "art mural hallway",
    slug: "/projects/jewellery-showroom",
  },
];

const services = [
    { title: "Residential Design", description: "Homes tailored to light, material and flow." },
    { title: "Kitchens", description: "Ergonomic, durable, quietly luxurious." },
    { title: "Wardrobes", description: "Joinery that respects fabric and form." },
    { title: "Living Spaces", description: "Layered light, elegant comfort." },
    { title: "Baths", description: "Stone-forward, calm, precise." },
    { title: "Art & Murals", description: "Statement walls, crafted in-house." },
];

const testimonials = [
  {
    name: 'A. Shah',
    testimonial: 'They translated our needs into a home that feels inevitably right.'
  },
  {
    name: 'R. Menon',
    testimonial: 'Exquisite detailing. The kitchen works as beautifully as it looks.'
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <section className="container mx-auto py-12 px-4 md:px-6 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="https://picsum.photos/seed/redefining/800/1000"
              alt="Redefining Spaces"
              data-ai-hint="abstract interior architecture"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-primary font-medium">Through Vision</p>
            <h1 className="font-headline text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Redefining Spaces
            </h1>
            <p className="text-lg text-muted-foreground">
              Where luxury meets functionality. We craft immersive environments that transcend traditional boundaries and inspire extraordinary living.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/contact-5">
                  <MessageSquare className="mr-2" /> Book Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/projects-6">
                  <Eye className="mr-2" /> View Work
                </Link>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Badge variant="outline">Detail</Badge>
              <Badge variant="outline">Materiality</Badge>
              <Badge variant="outline">Light</Badge>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-projects" className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-left max-w-2xl mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link href={project.slug} key={project.title} className="group block">
                <Card className="h-full overflow-hidden rounded-2xl border-border bg-card/50 transition-all duration-300 hover:shadow-glow-primary hover:-translate-y-1">
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
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="font-headline text-2xl text-foreground">{project.title}</CardTitle>
                            <p className="text-sm text-muted-foreground">{project.location}</p>
                        </div>
                        <p className="text-sm text-muted-foreground whitespace-nowrap">{project.size}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32 bg-secondary/10">
        <div className="container px-4 md:px-6">
          <div className="text-left max-w-2xl mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Services</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                  <Card key={index} className="border-border bg-card/50 p-6">
                      <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                      <CardDescription className="mt-2 text-muted-foreground">{service.description}</CardDescription>
                  </Card>
              ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-left max-w-2xl mb-12">
             <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Studio Philosophy</h2>
          </div>
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-2xl font-headline font-bold">Detail</h3>
              <p className="text-muted-foreground text-lg">
                Every edge, seam and reveal is intentional—quiet rigor you can feel.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-headline font-bold">Materiality</h3>
              <p className="text-muted-foreground text-lg">
                Wood, stone and linen layered with restraint for lasting calm.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-headline font-bold">Light</h3>
              <p className="text-muted-foreground text-lg">
                We choreograph light for golden-hour serenity throughout the day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32 bg-secondary/10">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl text-left mb-12">Testimonials</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none bg-transparent shadow-none p-6">
                <p className="text-xl font-medium">"{testimonial.testimonial}"</p>
                <p className="text-muted-foreground mt-4">- {testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
