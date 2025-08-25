import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Twitter, Instagram, Dribbble } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-6xl py-12 px-4 md:px-6 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl md:text-6xl">Get In Touch</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Have a project in mind or just want to say hello? We'd love to hear from you.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <Card className="border-border/20 bg-card/50 backdrop-blur-lg">
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What's this about?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us more..." rows={5} />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className="space-y-8">
          <h2 className="text-3xl font-bold font-headline">Contact Information</h2>
          <div className="space-y-4 text-lg">
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-primary" />
              <span className="text-muted-foreground">hello@artkratigraphite.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-primary" />
              <span className="text-muted-foreground">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <span className="text-muted-foreground">
                123 Design Street
                <br />
                Creativity City, ART 54321
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold font-headline mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-7 w-7" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-7 w-7" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Dribbble className="h-7 w-7" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
