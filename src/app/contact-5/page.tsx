import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, MessageSquare, User, Briefcase, Send } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-6xl py-12 px-4 md:px-6 md:py-24 bg-charcoal text-fog">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl md:text-6xl">Contact Us</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Have a project in mind or just want to say hello? We'd love to hear from you.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <Card className="border-border bg-card/50 backdrop-blur-lg">
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2"><User /> Name</Label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2"><Phone /> Phone</Label>
                  <Input id="phone" type="tel" placeholder="Your Phone" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2"><Mail /> Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="flex items-center gap-2"><Briefcase /> Message</Label>
                <Textarea id="message" placeholder="Tell us about your project..." rows={5} />
              </div>
              <Button type="submit" className="w-full" size="lg">
                <Send className="mr-2" /> Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className="space-y-8">
          <h2 className="text-3xl font-bold font-headline">Contact Information</h2>
          <div className="space-y-4 text-lg">
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-primary" />
              <a href="mailto:art.aakrati@gmail.com" className="text-muted-foreground hover:text-primary">art.aakrati@gmail.com</a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-primary" />
              <span className="text-muted-foreground">+91-9902382308</span>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <span className="text-muted-foreground">
                #34, 5th cross, 7th block,
                <br />
                Jayanagar, Bengaluru
                <br />
                560070
              </span>
            </div>
            <div className="flex items-start gap-4">
              <MessageSquare className="h-6 w-6 text-primary mt-1" />
              <Link href="https://wa.me/919902382308" target="_blank" className="text-muted-foreground hover:text-primary">
                Chat on WhatsApp
              </Link>
            </div>
          </div>
           <div>
            <h3 className="text-2xl font-bold font-headline mb-4">Business Hours</h3>
             <p className="text-muted-foreground">Monday - Saturday: 9:30 AM - 6:30 PM</p>
             <p className="text-muted-foreground">Sunday: Closed</p>
          </div>
          <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.948959918797!2d77.57947781482136!3d12.910915390905307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae153d8254f11d%3A0x15094269966579e0!2s7th%20Block%2C%20Jayanagar%2C%20Bengaluru%2C%20Karnataka%20560070%2C%20India!5e0!3m2!1sen!2sus!4v1693157321654!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
