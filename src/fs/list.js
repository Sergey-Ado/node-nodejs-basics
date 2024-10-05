import { access, readdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const list = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const dir = resolve(__dirname, 'files');
  await access(dir)
    .then(async () => {
      const files = await readdir(dir);
      console.log(files);
    })
    .catch(() => {
      throw new Error('FS operation failed');
    });
};

await list();
