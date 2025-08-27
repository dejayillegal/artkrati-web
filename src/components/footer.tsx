import Link from 'next/link';
import { Button } from './ui/button';
import { MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 px-4 md:px-6">
        <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} Artkrati Studio</div>

        <div className="flex items-center gap-4">
            <span className="text-muted-foreground">WhatsApp: +91-9902382308</span>
            <Button asChild>
                <Link href="/contact-5">
                    Discuss Your Project
                </Link>
            </Button>
        </div>
      </div>
    </footer>
  );
}
