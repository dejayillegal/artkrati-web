import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'A. Shah',
    location: 'Mumbai',
    avatar: 'https://picsum.photos/seed/ashah/100/100',
    testimonial: 'They translated our needs into a home that feels inevitably right. The attention to detail and understanding of our vision was remarkable. We couldn\'t be happier with our new space.',
  },
  {
    name: 'R. Menon',
    location: 'Bengaluru',
    avatar: 'https://picsum.photos/seed/rmenon/100/100',
    testimonial: 'Exquisite detailing. The kitchen works as beautifully as it looks. The team was professional, creative, and delivered beyond our expectations. Highly recommended!',
  },
  {
    name: 'Priya & Rahul',
    location: 'Delhi',
    avatar: 'https://picsum.photos/seed/priyar/100/100',
    testimonial: 'From concept to completion, the process was seamless. Their design sensibility transformed our apartment into a modern sanctuary. It was a pleasure working with such a talented team.',
  },
  {
    name: 'S. Verma',
    location: 'Pune',
    avatar: 'https://picsum.photos/seed/sverma/100/100',
    testimonial: 'The team at Aakrati brought our vision for our retail space to life. The design is both beautiful and functional, and our customers love it. A truly professional and creative firm.',
  },
  {
    name: 'Anjali K.',
    location: 'Chennai',
    avatar: 'https://picsum.photos/seed/anjalik/100/100',
    testimonial: 'We hired them for our office renovation, and the result is fantastic. The new space is bright, modern, and has greatly improved our team\'s morale and productivity. Thank you!',
  },
  {
    name: 'Vikram Singh',
    location: 'Ahmedabad',
    avatar: 'https://picsum.photos/seed/vikram/100/100',
    testimonial: 'The level of craftsmanship and attention to detail in our custom furniture is outstanding. They understood our style perfectly and delivered pieces that are true works of art.',
  }
];

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto max-w-6xl py-12 px-4 md:px-6 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl md:text-6xl">Client Testimonials</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Words from our clients who have experienced the Aakrati difference.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border-border bg-card/50 backdrop-blur-lg p-6 flex flex-col">
            <CardContent className="p-0 flex-grow">
              <div className="flex items-center mb-4">
                <Avatar className="h-14 w-14 mr-4 border-2 border-primary">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold text-lg text-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                ))}
              </div>
              <blockquote className="text-muted-foreground italic border-l-2 border-primary pl-4">
                "{testimonial.testimonial}"
              </blockquote>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
