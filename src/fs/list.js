import * as fs from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { access } from 'node:fs';

const list = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const dir = path.resolve(__dirname, 'files');
  await fs
    .access(dir)
    .then(async () => {
      const files = await fs.readdir(dir);
      console.log(files);
    })
    .catch(() => {
      throw new Error('FS operation failed');
    });
};

await list();
