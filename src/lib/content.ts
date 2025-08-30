import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const root = process.cwd();
const pageDir = path.join(root, 'content/pages');
const portDir = path.join(root, 'content/portfolio');

export type PageDoc = { data: any; content: string };

export const loadPage = (name: string): PageDoc => {
  const p = path.join(pageDir, `${name}.mdx`);
  const raw = fs.readFileSync(p, 'utf8');
  return matter(raw);
};

export const loadPortfolio = () => {
  if (!fs.existsSync(portDir)) return [];
  const files = fs.readdirSync(portDir).filter(f => f.endsWith('.md'));
  return files.map(f => {
    const raw = fs.readFileSync(path.join(portDir, f), 'utf8');
    const { data, content } = matter(raw);
    return { ...data, body: content };
  });
};
