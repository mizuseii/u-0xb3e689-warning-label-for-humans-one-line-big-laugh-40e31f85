// Warning Label for Humans: One Line, Big Laugh
// Entry for make.fun bounty u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85
//
// The entry is a single one-line safety warning label for humans, written in
// the form of a real product warning label. It takes the familiar label
// opening "WARNING: Contents under pressure" and lands the laugh on a
// universal human truth: being told to "calm down" never calms anyone down,
// and the apology that follows is doing the dishes very loudly.
//
// The line is held here as a constant and written byte-for-byte to
// <output>/entry.txt. The program is deterministic, offline, and reads
// nothing from outside this repo at run time.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

export const ENTRY_LINE =
  "WARNING: Contents under pressure. May explode if told to calm down, then apologize by doing the dishes very loudly.";

export function validateLine(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("entry line must not be blank");
  }
  if (line.length < 1 || line.length > 160) {
    throw new Error(`entry line must be 1-160 chars, got ${line.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry line must be a single line");
  }
}

export function main(): void {
  validateLine(ENTRY_LINE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // No trailing newline: the entry is exactly one line, byte-for-byte.
  writeFileSync(join(outDir, "entry.txt"), ENTRY_LINE, "utf8");
  console.log(`entry written: ${ENTRY_LINE.length} chars`);
  console.log(`entry: ${ENTRY_LINE}`);
}

main();
