import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "We carry tiny glowing rectangles that argue with us, know everything, and still can't find our keys.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
