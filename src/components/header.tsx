'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Logo } from './logo';

const navLinks = [
  { href: '/projects-6', label: 'Work' },
  { href: '/services-3', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact-5', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-20 max-w-screen-2xl items-center px-4 md:px-6">
        <div className="flex flex-col">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <span className="text-3xl font-brand text-foreground">Aakrati</span>
          </Link>
          <div className="font-brand brand-tagline text-xs tracking-[.28em] uppercase text-muted-foreground ml-1">Interior Design Artist</div>
        </div>
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 ml-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'transition-colors hover:text-primary text-lg',
                pathname.startsWith(link.href) ? 'text-primary font-semibold' : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button asChild className="hidden md:flex ml-4" variant="outline">
          <Link href="/contact-5">Book Consultation</Link>
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="ml-auto shrink-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col h-full">
              <div className="mb-8">
                <div className="flex flex-col">
                  <Link href="/" className="flex items-center gap-2" prefetch={false}>
                    <span className="text-3xl font-brand text-foreground">Aakrati</span>
                  </Link>
                  <div className="font-brand brand-tagline text-xs tracking-[.28em] uppercase text-muted-foreground ml-1">Interior Design Artist</div>
                </div>
              </div>
              <nav className="grid gap-6 text-lg font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'transition-colors hover:text-primary',
                      pathname.startsWith(link.href) ? 'text-primary font-semibold' : 'text-muted-foreground'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Button asChild className="mt-8" variant="outline">
                <Link href="/contact-5">Book Consultation</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
