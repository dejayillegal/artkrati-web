import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const teamMembers = [
  { name: 'Alex Drake', role: 'Creative Director', avatar: 'https://picsum.photos/id/237/100/100' },
  { name: 'Jasmine Kaur', role: 'Lead Designer', avatar: 'https://picsum.photos/id/238/100/100' },
  { name: 'Leo Martinez', role: 'Head of Strategy', avatar: 'https://picsum.photos/id/239/100/100' },
  { name: 'Sofia Chen', role: 'Art Director', avatar: 'https://picsum.photos/id/240/100/100' },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl py-12 px-4 md:px-6 md:py-24">
      <div className="space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl md:text-6xl">About Artkrati</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We are a collective of artists, designers, and strategists passionate about creating beautiful and effective digital experiences.
          </p>
        </div>

        <div className="relative w-full h-96 overflow-hidden rounded-2xl">
          <Image
            src="https://picsum.photos/1200/800"
            alt="Artkrati team working"
            data-ai-hint="team office"
            fill
            className="object-cover"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold font-headline">Our Mission</h2>
            <p className="mt-4 text-muted-foreground">
              To merge artistry with technology, crafting digital solutions that are not only visually stunning but also deeply functional and user-centric. We believe in a collaborative process, working closely with our clients to bring their unique visions to life. Our work is our craft, and we pursue it with passion and precision.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold font-headline">Our Values</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
              <li>Creativity: Pushing boundaries and exploring new ideas.</li>
              <li>Collaboration: Working together to achieve shared goals.</li>
              <li>Craftsmanship: Attention to detail and commitment to quality.</li>
              <li>Integrity: Honest and transparent in all our interactions.</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold font-headline text-center">Meet the Team</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden border-border/20 bg-card/50 backdrop-blur-lg text-center">
                <CardHeader>
                  <Avatar className="mx-auto h-24 w-24 border-2 border-primary">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-medium">{member.name}</CardTitle>
                  <p className="text-primary">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
