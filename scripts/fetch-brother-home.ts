/* eslint-disable no-console */
import { createWriteStream, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import fetch from 'node-fetch';
import AdmZip from 'adm-zip';
import readline from 'node:readline';

const DL_URL = 'https://dl.dafont.com/dl/?f=brother_home';
const OUT_DIR = 'public/fonts';
const OUT_FONT_BASENAME = 'BrotherHome';
const OUT_LICENSE = join(OUT_DIR, 'BrotherHome.LICENSE.txt');
const TMP_ZIP = join(OUT_DIR, 'brother_home.zip');

const getOutPath = (ext: '.ttf' | '.otf') => join(OUT_DIR, `${OUT_FONT_BASENAME}${ext}`);

const prompt = (q: string) =>
  new Promise<string>(res => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question(q, ans => {
      rl.close();
      res(ans);
    });
  });

(async () => {
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

  console.log(
    'This script will download the "Brother Home" font from dafont.com\n' +
      'Source page: https://www.dafont.com/brother-home.font\n' +
      'Note: Many dafont fonts are "free for personal use". Verify license before commercial use.\n'
  );

  const autoAccept = process.env.FONT_ACCEPT_LICENSE === '1' || process.env.CI === 'true';
  if (!autoAccept) {
    const ans = (await prompt('Type "YES" to confirm you have reviewed the license and want to proceed: ')).trim();
    if (ans !== 'YES') {
      console.log('Aborted. Please review the license and re-run.');
      process.exit(1);
    }
  } else {
    console.log('License accepted via environment variable.');
  }

  console.log('Downloading ZIP...');
  const res = await fetch(DL_URL);
  if (!res.ok || !res.body) {
    console.error('Download failed: HTTP ' + res.status);
    process.exit(1);
  }
  const body = res.body as NodeJS.ReadableStream;
  await new Promise<void>((resolve, reject) => {
    const file = createWriteStream(TMP_ZIP);
    body.pipe(file);
    body.on('error', reject);
    file.on('finish', () => file.close(() => resolve()));
  });

  console.log('Extracting font...');
  const zip = new AdmZip(TMP_ZIP);
  const entries: any[] = zip.getEntries();
  const fontEntry = entries.find((e: any) =>
    ['.ttf', '.otf'].some(ext => (e.entryName as string).toLowerCase().endsWith(ext))
  );
  if (!fontEntry) {
    console.error('No .ttf or .otf found in ZIP.');
    process.exit(1);
  }
  const lowerName = fontEntry.entryName.toLowerCase();
  const ext = (lowerName.endsWith('.otf') ? '.otf' : '.ttf') as '.ttf' | '.otf';
  const outPath = getOutPath(ext);
  const data = fontEntry.getData();
  writeFileSync(outPath, data);

  const licenseText = `Brother Home — downloaded from dafont
Source: https://www.dafont.com/brother-home.font
Download: ${DL_URL}

⚠️ IMPORTANT:
- Fonts on dafont are often "free for personal use".
- Before using commercially or embedding on a live site, verify the exact license from the author or dafont listing.
- This project does not alter or relicense the font; it keeps the original file and provenance.`;
  writeFileSync(OUT_LICENSE, licenseText);

  console.log(`Done. Wrote:\n- ${outPath}\n- ${OUT_LICENSE}`);
})();
