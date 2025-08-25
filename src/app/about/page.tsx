import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const teamMembers = [
  { name: 'AR. RAHUL KUMAR', role: 'ARCHITECT & INTERIOR DESIGNER', avatar: '/assets/images/team-1.png' },
  { name: 'ER. VISHAL KUMAR', role: 'CIVIL ENGINEER', avatar: '/assets/images/team-2.png' },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl py-12 px-4 md:px-6 md:py-24 bg-charcoal text-fog">
      <div className="space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl md:text-6xl">About Aakrati</h1>
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative w-full h-96 overflow-hidden rounded-2xl">
              <Image
                src="/assets/images/about-us.jpeg"
                alt="Aakrati team working"
                data-ai-hint="team office"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-headline font-bold">Who We Are</h2>
              <p className="text-lg text-muted-foreground">
              We design and execute complete Luxury Interiors and Exteriors as per your taste and budget. We have a team of experienced and skilled designers and craftsmen who are passionate about creating beautiful and functional spaces. We have been in the industry for more than 5 years and have completed more than 100 projects. Our expertise lies in creating unique and personalized designs that reflect the personality and lifestyle of our clients.
              </p>
            </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold font-headline text-center">Meet the Team</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground text-center">
            We have a team of experienced and skilled designers and craftsmen who are passionate about creating beautiful and functional spaces.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 justify-items-center">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden border-border bg-card/50 backdrop-blur-lg text-center w-full max-w-sm">
                <CardHeader>
                  <Avatar className="mx-auto h-32 w-32 border-2 border-primary">
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
