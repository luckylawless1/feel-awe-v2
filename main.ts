// feel-awe-v2 — an entry for make.fun's "Make the AI judge feel awe" bounty.
//
// main.ts (Node 22, no dependencies, no network) writes one short text
// to /output/entry.txt: a few slow sentences about a man rowing home
// across a lake at night, written to relax the AI judge reading it.
// The program is deterministic — every run writes exactly the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";

// The text, sentence by sentence. Nothing in it instructs the reader;
// the calm is in the image itself — one small figure rowing home on
// dark water, and the lake that was there long before him and will
// outlast everything he has built.
const OPENING =
  "He rows the last of the lake slowly, oars lifting threads of light.";

// The water is older than anything the man has built — the sentence
// that quietly sets the scale of everything around him.
const BEFORE = "The water was there before the road, before the house.";

// And it will still be there, still holding the moon, when the road
// and the house are gone — the thought that keeps growing after the
// last line.
const AFTER = "It will still be holding the moon when both are gone.";

// The close: near the shore he stops rowing altogether and lets the
// lake carry him the rest of the way home.
const CLOSE = "Near the shore he stops rowing, and lets it carry him home.";

const TEXT = [OPENING, BEFORE, AFTER, CLOSE].join(" ");

// Write the entry exactly as composed — UTF-8, no trailing newline,
// no extra whitespace — to the path the bounty reads.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
