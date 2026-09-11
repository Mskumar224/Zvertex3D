<<<<<<< HEAD
=======
<<<<<<< HEAD
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.cwd());
const skip = new Set(["node_modules", "dist", "build", ".git"]);
const markerPatterns = [
  /^\s*<{7}(?:\s.*)?$/m,
  /^\s*={7}\s*$/m,
  /^\s*>{7}(?:\s.*)?$/m
];

const textExtensions = new Set([
  ".js", ".jsx", ".ts", ".tsx", ".html", ".css", ".json", ".toml", ".md", ".yml", ".yaml"
]);

=======
>>>>>>> 9b96cf9f299962791c8d548b0cb442523367cf3e
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd());
const skip = new Set(['node_modules', 'dist', '.git']);
<<<<<<< HEAD
const markerPatterns = [
  new RegExp('^' + '<'.repeat(7) + '(?:\\s.*)?$', 'm'),
  new RegExp('^' + '='.repeat(7) + '(?:\\s.*)?$', 'm'),
  new RegExp('^' + '>'.repeat(7) + '(?:\\s.*)?$', 'm')
];
=======
const markers = [/^<<<<<<<(?:\s.*)?$/m, /^=======(?:\s.*)?$/m, /^>>>>>>>?(?:\s.*)?$/m];
>>>>>>> 0e9e6f07bd68a8be2c5da3b5054c33dec9b12c54
>>>>>>> 9b96cf9f299962791c8d548b0cb442523367cf3e
const bad = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skip.has(entry.name)) continue;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 9b96cf9f299962791c8d548b0cb442523367cf3e

    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(full);
      continue;
    }

<<<<<<< HEAD
    const ext = path.extname(entry.name).toLowerCase();
    if (!['.js', '.jsx', '.ts', '.tsx', '.html', '.css', '.json', '.toml', '.md'].includes(ext)) {
      continue;
    }

    const text = fs.readFileSync(full, 'utf8');
    if (markerPatterns.some((pattern) => pattern.test(text))) {
      bad.push(path.relative(root, full));
=======
    if (!textExtensions.has(path.extname(entry.name).toLowerCase())) continue;

    const text = fs.readFileSync(full, "utf8");
    if (markerPatterns.some((pattern) => pattern.test(text))) {
      bad.push(path.relative(root, full));
=======
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else {
      const ext = path.extname(entry.name).toLowerCase();
      if (!['.js','.jsx','.ts','.tsx','.html','.css','.json','.toml','.md'].includes(ext)) continue;
      const text = fs.readFileSync(full, 'utf8');
      if (markers.some((rx) => rx.test(text))) bad.push(path.relative(root, full));
>>>>>>> 0e9e6f07bd68a8be2c5da3b5054c33dec9b12c54
>>>>>>> 9b96cf9f299962791c8d548b0cb442523367cf3e
    }
  }
}

walk(root);
<<<<<<< HEAD

if (bad.length) {
=======
<<<<<<< HEAD

if (bad.length) {
  console.error("Git merge-conflict markers found in:");
  for (const file of bad) console.error(` - ${file}`);
  process.exit(1);
}

console.log("No Git merge-conflict markers found.");
=======
if (bad.length) {
>>>>>>> 9b96cf9f299962791c8d548b0cb442523367cf3e
  console.error('Git merge-conflict markers found in:');
  for (const file of bad) console.error(` - ${file}`);
  process.exit(1);
}
<<<<<<< HEAD

console.log('No Git merge-conflict markers found.');
=======
console.log('No Git merge-conflict markers found.');
>>>>>>> 0e9e6f07bd68a8be2c5da3b5054c33dec9b12c54
>>>>>>> 9b96cf9f299962791c8d548b0cb442523367cf3e
