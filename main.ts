// food-picture-01 entry program.
// Writes the entry picture to $MAKEFUN_OUTPUT_DIR/entry.png.
// Node 22, standard library only. No network, deterministic output.

import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

if (!existsSync(source)) {
  console.error(`error: ${source} not found`);
  process.exit(1);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outputDir, { recursive: true });

const destination = join(outputDir, "entry.png");
copyFileSync(source, destination);

const bytes = statSync(destination).size;
console.log(`wrote ${destination} (${bytes} bytes)`);
