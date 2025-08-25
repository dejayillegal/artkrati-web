import { Logo } from './logo';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 px-4 md:px-6">
        <Logo />
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built with admiration. This is an unofficial redesign concept.
        </p>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Artkrati Graphite</p>
      </div>
    </footer>
  );
}
