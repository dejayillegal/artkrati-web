import { loadPortfolio } from '@/lib/content';
import Image from 'next/image';

export default function Portfolio() {
  const items = loadPortfolio();
  return (
    <main className="mx-auto max-w-6xl">
      <h1 className="font-header text-3xl">Portfolio</h1>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {items.map((p: any) => (
          <li key={p.slug} className="rounded-lg border p-3">
            {p.image ? <Image src={p.image} alt={p.title} width={600} height={400} /> : null}
            <h3 className="mt-2 font-header text-xl">{p.title}</h3>
            {p.caption ? <p className="text-sm opacity-80">{p.caption}</p> : null}
          </li>
        ))}
      </ul>
    </main>
  );
}
