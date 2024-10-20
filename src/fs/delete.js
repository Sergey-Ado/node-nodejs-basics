import { access, rm } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const remove = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const fileName = resolve(__dirname, 'files', 'fileToRemove.txt');
  await access(fileName)
    .then(() => rm(fileName))
    .catch(() => {
      throw new Error('FS operation failed');
    });
};

await remove();
