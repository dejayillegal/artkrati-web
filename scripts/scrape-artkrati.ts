/* eslint-disable no-console */
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { join, basename, extname } from 'node:path';
import matter from 'gray-matter';
import slugify from '@sindresorhus/slugify';
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

const SITE = 'https://www.artkrati.in';
const OUT_IMG = 'public/assets/artkrati';
const OUT_PAGES = 'content/pages';
const OUT_PORTFOLIO = 'content/portfolio';

const ensure = (p: string) => {
  if (!existsSync(p)) mkdirSync(p, { recursive: true });
};
ensure(OUT_IMG);
ensure(OUT_PAGES);
ensure(OUT_PORTFOLIO);
ensure(join(OUT_IMG, 'home'));
ensure(join(OUT_IMG, 'about'));
ensure(join(OUT_IMG, 'services'));
ensure(join(OUT_IMG, 'portfolio'));

const saveImage = async (url: string, subdir: string) => {
  if (!url) return '';
  const u = url.startsWith('http') ? url : SITE + (url.startsWith('/') ? url : `/${url}`);
  const res = await fetch(u);
  if (!res.ok) return '';
  const ct = res.headers.get('content-type') || '';
  const ext = ct.includes('png')
    ? '.png'
    : ct.includes('webp')
    ? '.webp'
    : ct.includes('svg')
    ? '.svg'
    : '.jpg';
  const name = slugify(basename(u).replace(extname(u), '')) + ext;
  const dest = join(OUT_IMG, subdir, name);
  const buf = await res.buffer();
  writeFileSync(dest, buf);
  return `/assets/artkrati/${subdir}/${name}`;
};

const extractText = ($el: any) =>
  $el.text().replace(/\s+\n/g, '\n').replace(/\s{2,}/g, ' ').trim();

const writeMDX = (path: string, data: any, body: string) => {
  const fm = matter.stringify((body || '').trim() + '\n', data);
  writeFileSync(path, fm);
};

const load = async (url: string) => {
  const res = await fetch(url);
  const html = await res.text();
  return cheerio.load(html);
};

(async () => {
  // HOME
  const $home = await load(SITE);
  const homeTitle = $home('h1').first().text().trim() || 'Interior Design Artist';
  const mainText = extractText($home('main').first().length ? $home('main').first() : $home('body'));
  const heroImgSrc = $home('img').first().attr('src') || '';
  const heroImg = await saveImage(heroImgSrc, 'home');
  writeMDX(
    join(OUT_PAGES, 'home.mdx'),
    {
      title: 'Home',
      slug: '/',
      description: homeTitle,
      cover: heroImg || '',
      source: SITE,
      updatedAt: new Date().toISOString(),
    },
    `# ${homeTitle}\n\n${mainText}\n`
  );

  // PORTFOLIO
  const $gal = await load(`${SITE}/projects-6`);
  const items: { src: string; alt: string; caption: string }[] = [];
  $gal('img').each((_i: number, el: any) => {
    const src = $gal(el).attr('src') || '';
    const alt = $gal(el).attr('alt') || '';
    const caption =
      $gal(el).closest('figure').find('figcaption,p').first().text().trim() ||
      $gal(el).parent().next().text().trim();
    if (src) items.push({ src, alt, caption });
  });
  for (const it of items) {
    const img = await saveImage(it.src, 'portfolio');
    const title = it.alt || it.caption || 'Portfolio Item';
    const slug = slugify(title).slice(0, 80) || slugify(basename(it.src));
    writeMDX(
      join(OUT_PORTFOLIO, `${slug}.md`),
      {
        title,
        slug: `/portfolio/${slug}`,
        image: img,
        caption: it.caption || '',
        tags: [],
        source: `${SITE}/projects-6`,
        updatedAt: new Date().toISOString(),
      },
      `${it.caption || ''}\n`
    );
  }

  // SERVICES
  const $svc = await load(`${SITE}/services-3`);
  const svcTitle = $svc('h1,h2').first().text().trim() || 'Our Services';
  const svcText = extractText($svc('main').first().length ? $svc('main').first() : $svc('body'));
  const svcImgSrc = $svc('img').first().attr('src') || '';
  const svcImg = await saveImage(svcImgSrc, 'services');
  writeMDX(
    join(OUT_PAGES, 'services.mdx'),
    {
      title: 'Services',
      slug: '/services',
      description: svcTitle,
      cover: svcImg || '',
      source: `${SITE}/services-3`,
      updatedAt: new Date().toISOString(),
    },
    `# ${svcTitle}\n\n${svcText}\n`
  );

  // ABOUT
  const $about = await load(`${SITE}/about`);
  const aboutTitle = $about('h1,h2').first().text().trim() || 'About';
  const aboutText = extractText($about('main').first().length ? $about('main').first() : $about('body'));
  const aboutImgSrc = $about('img').first().attr('src') || heroImgSrc;
  const aboutImg = await saveImage(aboutImgSrc, 'about');
  writeMDX(
    join(OUT_PAGES, 'about.mdx'),
    {
      title: 'About',
      slug: '/about',
      description: aboutTitle,
      cover: aboutImg || '',
      source: `${SITE}/about`,
      updatedAt: new Date().toISOString(),
    },
    `# ${aboutTitle}\n\n${aboutText}\n`
  );

  // CONTACT
  const $contact = await load(`${SITE}/contact`);
  const contactTitle = $contact('h1,h2').first().text().trim() || 'Contact';
  const contactText =
    extractText($contact('main').first().length ? $contact('main').first() : $contact('body')) ||
    'Get in touch.';
  writeMDX(
    join(OUT_PAGES, 'contact.mdx'),
    {
      title: 'Contact',
      slug: '/contact',
      description: contactTitle,
      source: `${SITE}/contact`,
      updatedAt: new Date().toISOString(),
    },
    `# ${contactTitle}\n\n${contactText}\n`
  );
  console.log('Scrape complete.');
})();
