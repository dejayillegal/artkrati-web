import { loadPage, loadPortfolio } from '@/lib/content';
import Image from 'next/image';

export default function Home() {
  const home = loadPage('home');
  const portfolio = loadPortfolio().slice(0, 8);

  return (
    <main className="space-y-12">
      <article className="prose prose-neutral mx-auto">
        <h1 className="font-header">{home.data?.description || 'Interior Design Artist'}</h1>
        <div dangerouslySetInnerHTML={{ __html: home.content }} />
      </article>

      <section className="mx-auto max-w-6xl">
        <h2 className="font-header text-2xl">Active Projects</h2>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {portfolio.map((p: any) => (
            <li key={p.slug} className="rounded-lg border p-3">
              {p.image ? (
                <Image src={p.image} alt={p.title} width={600} height={400} />
              ) : null}
              <h3 className="mt-2 font-header text-xl">{p.title}</h3>
              {p.caption ? <p className="text-sm opacity-80">{p.caption}</p> : null}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
