import { mkdir, copyFile, cp } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = fileURLToPath(new URL('../', import.meta.url));
const destination = path.join(root, 'dist');
await mkdir(destination, { recursive: true });
for (const file of ['index.html', 'style.css', 'script.js']) {
  await copyFile(path.join(root, file), path.join(destination, file));
}
await cp(path.join(root, 'assets'), path.join(destination, 'assets'), { recursive: true });
console.log('Production site built in dist/');
