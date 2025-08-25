import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const featuredProjects = [
  {
    title: "Modern & Minimalistic House",
    imageUrl: "/assets/images/project-1.jpeg",
    imageHint: "modern living room",
  },
  {
    title: "Luxury & Budget Friendly House",
    imageUrl: "/assets/images/project-2.jpeg",
    imageHint: "luxury bedroom",
  },
  {
    title: "Mr. Shailesh Kumar's Residence",
    imageUrl: "/assets/images/project-3.jpeg",
    imageHint: "residence exterior",
  },
  {
    title: "Fashion Fusion",
    imageUrl: "/assets/images/project-4.jpeg",
    imageHint: "fashion boutique interior",
  },
  {
    title: "Dental Clinic",
    imageUrl: "/assets/images/project-5.jpeg",
    imageHint: "modern dental clinic",
  },
  {
    title: "Jewellery Showroom",
    imageUrl: "/assets/images/project-6.jpeg",
    imageHint: "jewellery showroom design",
  },
];

const services = [
    { title: "Interior", description: "We design and execute complete Luxury Interiors and Exteriors as per your taste and budget." },
    { title: "Exterior", description: "Our team of expert designers and craftsmen work together to create stunning and functional spaces." },
    { title: "Renovation", description: "We specialize in renovating old spaces and giving them a new life with our innovative designs." },
    { title: "Vastu", description: "We provide Vastu consultancy services to ensure that your space is in harmony with nature." },
    { title: "3D View", description: "We provide realistic 3D views of your space to help you visualize the final outcome." },
    { title: "Turnkey", description: "We undertake turnkey projects, from design to execution, to provide a hassle-free experience." },
];

const testimonials = [
  {
    name: 'Mrs. Suman Devi',
    avatar: '/assets/images/avatar-1.jpeg',
    testimonial: 'Team is very supportive and have innovative ideas. They are very punctual and deliver the project on time. Also the quality of work is very good, I am very satisfied with their work. I would highly recommend them to everyone.'
  },
  {
    name: 'Mr. Rakesh Kumar',
    avatar: '/assets/images/avatar-2.jpeg',
    testimonial: 'They did a fantastic job with our new office. The design is modern, functional, and exactly what we envisioned. The entire process was smooth and professional. Highly recommend their services.'
  },
  {
    name: 'Mr. Sarvesh Kumar',
    avatar: '/assets/images/avatar-3.jpeg',
    testimonial: 'Working with Aakrati was a wonderful experience. They listened to our ideas and transformed our home into a beautiful and comfortable living space. Their attention to detail is commendable.'
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-charcoal text-fog">
      <section className="relative w-full h-[70vh] md:h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/hero-bg.jpeg"
            alt="Beautifully designed modern interior"
            data-ai-hint="modern interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container px-4 md:px-6 z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              We design and execute complete Luxury Interiors and Exteriors as per your taste and budget.
            </h1>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/projects-6">
                  Our Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-projects" className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Link href="/projects-6" key={index} className="group block">
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
                  <CardContent className="p-6 absolute bottom-0 w-full">
                    <CardTitle className="font-headline text-2xl text-white">{project.title}</CardTitle>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32 bg-secondary/20">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Services</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                  <Card key={index} className="border-border bg-card/50 backdrop-blur-lg p-6 text-center">
                      <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                      <CardDescription className="mt-2 text-muted-foreground">{service.description}</CardDescription>
                  </Card>
              ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Our Philosophy</h2>
              <p className="text-muted-foreground text-lg">
                We believe that every space has a story to tell. Our philosophy is to create designs that are not just aesthetically pleasing but also functional and timeless. We work closely with our clients to understand their needs and bring their vision to life.
              </p>
              <p className="text-muted-foreground text-lg">
                Our approach is rooted in a deep understanding of design principles, materials, and craftsmanship. We strive for excellence in every project, ensuring that the final result is a true reflection of our client's personality and style.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image src="/assets/images/philosophy.jpeg" alt="design sketch" data-ai-hint="interior sketch" width={500} height={500} className="rounded-2xl object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32 bg-secondary/20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl text-center mb-12">What our clients say</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border bg-card/50 backdrop-blur-lg p-6">
                <div className="flex items-center mb-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.testimonial}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
