/* eslint-disable no-console */
import { createWriteStream, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import fetch from 'node-fetch';
import AdmZip from 'adm-zip';
import readline from 'node:readline';

const DL_URL = 'https://dl.dafont.com/dl/?f=brother_home';
const OUT_DIR = 'public/fonts';
const OUT_TTF = join(OUT_DIR, 'BrotherHome.ttf');
const OUT_LICENSE = join(OUT_DIR, 'BrotherHome.LICENSE.txt');
const TMP_ZIP = join(OUT_DIR, 'brother_home.zip');

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
  await new Promise<void>((resolve, reject) => {
    const file = createWriteStream(TMP_ZIP);
    res.body.pipe(file);
    res.body.on('error', reject);
    file.on('finish', () => file.close(() => resolve()));
  });

  console.log('Extracting TTF...');
  const zip = new AdmZip(TMP_ZIP);
  const entries = zip.getEntries();
  const ttfEntry = entries.find(e => e.entryName.toLowerCase().endsWith('.ttf'));
  if (!ttfEntry) {
    console.error('No .ttf found in ZIP.');
    process.exit(1);
  }
  const data = ttfEntry.getData();
  writeFileSync(OUT_TTF, data);

  const licenseText = `Brother Home — downloaded from dafont
Source: https://www.dafont.com/brother-home.font
Download: ${DL_URL}

⚠️ IMPORTANT:
- Fonts on dafont are often "free for personal use".
- Before using commercially or embedding on a live site, verify the exact license from the author or dafont listing.
- This project does not alter or relicense the font; it keeps the original file and provenance.`;
  writeFileSync(OUT_LICENSE, licenseText);

  console.log(`Done. Wrote:\n- ${OUT_TTF}\n- ${OUT_LICENSE}`);
})();
