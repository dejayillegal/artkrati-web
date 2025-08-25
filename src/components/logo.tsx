import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex flex-col">
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
       <Image src="/assets/logo.png" alt="Aakrati Logo" width={40} height={40} />
      <span className="text-3xl font-brand text-foreground">Aakrati</span>
    </Link>
      <div className="font-brand brand-tagline text-xs tracking-[.28em] uppercase text-muted-foreground ml-12 -mt-1">Interior Design Artist</div>
    </div>
  );
}
