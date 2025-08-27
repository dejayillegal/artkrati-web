import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Gem, Leaf, Users, Sun, Calendar } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

const values = [
    {
        title: "Refined Minimalism",
        description: "Clarity in form, richness in detail.",
        icon: Gem
    },
    {
        title: "Material Integrity",
        description: "Natural palettes, honest textures.",
        icon: Leaf
    },
    {
        title: "Client-Centered",
        description: "Every decision serves your life.",
        icon: Users
    },
    {
        title: "Light as Medium",
        description: "Atmosphere first, always.",
        icon: Sun
    }
];

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto max-w-7xl py-12 px-4 md:px-6 md:py-24">
        <div className="flex justify-between items-center mb-12">
            <div className="space-y-2">
                <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">About Aakrati</h1>
                <p className="text-lg text-muted-foreground">Cinematic interiors shaped by narrative, light, and material honesty.</p>
            </div>
            <Button asChild size="lg" className="hidden md:flex">
                <Link href="/contact-5"><Calendar className="mr-2 h-4 w-4" /> Book Consultation</Link>
            </Button>
        </div>

        <div className="bg-card/50 rounded-2xl p-8 lg:p-12 mb-16">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center gap-4">
                        <Avatar className="h-20 w-20 border-2 border-primary">
                            <AvatarImage src="https://picsum.photos/seed/aakrati/100/100" />
                            <AvatarFallback>AA</AvatarFallback>
                        </Avatar>
                        <div>
                            <h2 className="text-2xl font-bold">Aakrati Agrawal</h2>
                            <p className="text-primary">Founder</p>
                        </div>
                    </div>
                    <div className="border-l-4 border-primary pl-4 italic text-lg text-muted-foreground">
                        "Creator of ideas, swimming in the sparkling sea of imagination."
                    </div>
                    <div className="space-y-4 text-muted-foreground text-base">
                        <p>
                            We understand that every client is unique, and that's why we approach each project with an open mind and a sense of creativity. Whether you prefer traditional or modern furnishings, we have everything you need to create the perfect space for you. From custom furniture pieces to hand-selected décor, we have an extensive selection of products to choose from. Our goal is to help you create a space that is both beautiful and functional, no matter your budget or style preference.
                        </p>
                        <p>
                            At Aakrati Interior Design Artist, we believe that great design is all about the details. With our comprehensive and personalized interior design services, we help you embrace your individuality and create a space that's truly yours. From timeless classics to modern trends, our designs are tailored to cater to your unique preferences and lifestyle needs.
                        </p>
                         <p>
                            Based in Bangalore, we bring a fresh and innovative perspective to interior design, with a focus on quality craftsmanship, sustainable materials, and attention to detail. Follow us to see how we can transform your space into a work of art.
                        </p>
                    </div>
                     <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Bangalore</Badge>
                        <Badge variant="outline">Sustainable Materials</Badge>
                        <Badge variant="outline">Custom Furniture</Badge>
                        <Badge variant="outline">Residential & Hospitality</Badge>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="relative w-full h-96 overflow-hidden rounded-xl">
                      <Image
                        src="https://picsum.photos/seed/about-palette/600/800"
                        alt="Curated material palette"
                        data-ai-hint="interior design palette"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-center text-muted-foreground italic">A curated palette inspired by Bangalore's materiality and light.</p>
                </div>
            </div>
        </div>

        <div className="bg-card/50 rounded-2xl p-8 lg:p-12 mb-16">
            <h2 className="text-3xl font-headline font-bold mb-8 text-center">Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value) => (
                    <div key={value.title} className="flex items-start gap-4">
                       <div className="bg-primary/10 text-primary p-3 rounded-lg">
                         <value.icon className="h-6 w-6" />
                       </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                            <p className="text-muted-foreground">{value.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

         <div className="bg-card/50 rounded-2xl p-8 lg:p-12 text-center">
            <p className="text-lg text-muted-foreground mb-4">Consultations typically 30-45 minutes via video or in-studio.</p>
            <div className="flex justify-center gap-4">
                 <Button asChild size="lg">
                    <Link href="/contact-5">Start Your Project</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                    <Link href="/contact-5">Contact Us</Link>
                </Button>
            </div>
        </div>

      </div>
    </div>
  );
}
