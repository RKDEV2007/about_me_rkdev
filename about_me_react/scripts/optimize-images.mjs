import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const IMAGES_DIR = path.resolve(import.meta.dirname, "..", "public", "images");
const MIN_SIZE_BYTES = 50 * 1024;
const WEBP_QUALITY = 78;

// Real max display sizes derived from the layout:
// - profile.jpg is the hero photo, shown at ~460 CSS px wide (2x retina ~920px).
// - all other gallery images are reused for the BounceCards lightbox, whose
//   frame caps at 1100 CSS px wide, so 1600px keeps headroom for retina
//   without shipping full 2x-of-1100 (2200px) screenshots.
const MAX_WIDTH_BY_NAME = {
  "profile.jpg": 1000
};
const DEFAULT_MAX_WIDTH = 1600;

async function collectImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectImages(fullPath)));
      continue;
    }

    if (/\.(jpe?g|png)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

function formatBytes(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

async function optimizeImage(filePath) {
  const { size: beforeSize } = await stat(filePath);

  if (beforeSize < MIN_SIZE_BYTES) {
    return null;
  }

  const fileName = path.basename(filePath);
  const maxWidth = MAX_WIDTH_BY_NAME[fileName] ?? DEFAULT_MAX_WIDTH;
  const outputPath = filePath.replace(/\.(jpe?g|png)$/i, ".webp");

  const image = sharp(filePath);
  const metadata = await image.metadata();

  if (metadata.width && metadata.width > maxWidth) {
    image.resize({ width: maxWidth });
  }

  await image.webp({ quality: WEBP_QUALITY }).toFile(outputPath);

  const { size: afterSize } = await stat(outputPath);

  return {
    name: path.relative(IMAGES_DIR, filePath),
    beforeSize,
    afterSize
  };
}

async function main() {
  const images = await collectImages(IMAGES_DIR);
  const results = [];

  for (const filePath of images) {
    const result = await optimizeImage(filePath);
    if (result) {
      results.push(result);
    }
  }

  results.sort((a, b) => b.beforeSize - a.beforeSize);

  const rows = results.map((r) => {
    const savings = 100 - (r.afterSize / r.beforeSize) * 100;
    return {
      name: r.name,
      before: formatBytes(r.beforeSize),
      after: formatBytes(r.afterSize),
      savings: `${savings.toFixed(1)}%`
    };
  });

  console.table(rows);

  const totalBefore = results.reduce((sum, r) => sum + r.beforeSize, 0);
  const totalAfter = results.reduce((sum, r) => sum + r.afterSize, 0);
  const totalSavings = 100 - (totalAfter / totalBefore) * 100;

  console.log(
    `\nTotal: ${formatBytes(totalBefore)} -> ${formatBytes(totalAfter)} (${totalSavings.toFixed(1)}% saved)`
  );
}

main();
