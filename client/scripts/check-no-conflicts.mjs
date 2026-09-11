import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd());
const skip = new Set(['node_modules', 'dist', '.git']);
const markers = [/^<<<<<<<(?:\s.*)?$/m, /^=======(?:\s.*)?$/m, /^>>>>>>>?(?:\s.*)?$/m];
const bad = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skip.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else {
      const ext = path.extname(entry.name).toLowerCase();
      if (!['.js','.jsx','.ts','.tsx','.html','.css','.json','.toml','.md'].includes(ext)) continue;
      const text = fs.readFileSync(full, 'utf8');
      if (markers.some((rx) => rx.test(text))) bad.push(path.relative(root, full));
    }
  }
}

walk(root);
if (bad.length) {
  console.error('Git merge-conflict markers found in:');
  for (const file of bad) console.error(` - ${file}`);
  process.exit(1);
}
console.log('No Git merge-conflict markers found.');
