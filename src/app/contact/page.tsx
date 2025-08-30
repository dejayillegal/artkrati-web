import { loadPage } from '@/lib/content';

export default function Page() {
  const doc = loadPage('contact');
  return (
    <main className="prose prose-neutral mx-auto">
      <h1 className="font-header">{doc.data?.description || doc.data?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: doc.content }} />
    </main>
  );
}
