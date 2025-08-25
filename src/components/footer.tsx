import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 px-4 md:px-6">
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <span className="text-3xl font-brand text-foreground">Aakrati</span>
          </Link>
          <div className="font-brand brand-tagline text-xs tracking-[.28em] uppercase text-muted-foreground">Interior Design Artist</div>
        </div>
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Designing dreams, creating reality.
        </p>
        <div className="flex gap-4">
          <Link className="text-muted-foreground hover:text-primary" href="#">Facebook</Link>
          <Link className="text-muted-foreground hover:text-primary" href="#">Instagram</Link>
          <Link className="text-muted-foreground hover:text-primary" href="#">LinkedIn</Link>
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Aakrati</p>
      </div>
    </footer>
  );
}
