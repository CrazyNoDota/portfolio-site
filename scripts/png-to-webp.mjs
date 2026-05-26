import sharp from "sharp";
import { readdir, stat, unlink } from "node:fs/promises";
import { join } from "node:path";

const roots = ["public/assets/home", "public/assets/project"];
let totalIn = 0;
let totalOut = 0;

for (const root of roots) {
  const files = (await readdir(root)).filter((f) => f.endsWith(".png"));
  for (const f of files) {
    const inPath = join(root, f);
    const outPath = join(root, f.replace(/\.png$/, ".webp"));
    const inSize = (await stat(inPath)).size;
    await sharp(inPath).webp({ quality: 88, effort: 6 }).toFile(outPath);
    const outSize = (await stat(outPath)).size;
    await unlink(inPath);
    totalIn += inSize;
    totalOut += outSize;
    console.log(`${f}: ${inSize} -> ${outSize} (${Math.round((outSize / inSize) * 100)}%)`);
  }
}

console.log(`\nTOTAL: ${(totalIn / 1024 / 1024).toFixed(2)} MB -> ${(totalOut / 1024 / 1024).toFixed(2)} MB`);
