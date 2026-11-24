import { mkdirSync, writeFileSync } from "node:fs";

// One-liner: a robot vacuum's excuse after eating a sock.
// Deadpan deflection — the sock is "touring" the dustbin and declines comment.
const entry =
  "Your sock is fine — it's touring my dustbin and has asked not to be contacted.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
