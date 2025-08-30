"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import MagneticButton from "@/components/ui/magnetic-button";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/portfolio", label: "Work" },
  { href: "/services-3", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 w-full border-b border-foreground/10 bg-background/60 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4">
        <div className="flex flex-col leading-none">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <span className="font-brand text-xl sm:text-2xl md:text-3xl text-foreground">Aakrati</span>
          </Link>
          <div className="ml-1 mt-1 font-sans text-xs uppercase tracking-[.28em] text-foreground/70">
            Interior Design Artist
          </div>
        </div>
        <nav className="ml-auto hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-opacity opacity-70 hover:opacity-100",
                pathname.startsWith(link.href) && "opacity-100"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <MagneticButton href="/contact-5" className="ml-6 hidden md:inline-block">
          Enquire
        </MagneticButton>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="ml-auto md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="mb-8 flex flex-col leading-none">
              <Link href="/" className="flex items-center gap-2" prefetch={false}>
                <span className="font-brand text-2xl text-foreground">Aakrati</span>
              </Link>
              <div className="ml-1 mt-1 font-sans text-xs uppercase tracking-[.28em] text-foreground/70">
                Interior Design Artist
              </div>
            </div>
            <nav className="grid gap-6 text-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "transition-opacity opacity-70 hover:opacity-100",
                    pathname.startsWith(link.href) && "opacity-100"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <MagneticButton href="/contact-5" className="mt-8 inline-block">
              Enquire
            </MagneticButton>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
