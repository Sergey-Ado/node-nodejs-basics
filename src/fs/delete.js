import * as fs from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const remove = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const fileName = path.resolve(__dirname, 'files', 'fileToRemove.txt');
  await fs
    .access(fileName)
    .then(() => fs.rm(fileName))
    .catch(() => {
      throw new Error('FS operation failed');
    });
};

await remove();
