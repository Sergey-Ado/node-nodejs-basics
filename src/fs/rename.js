import { access, rename as rn } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rename = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const oldName = resolve(__dirname, 'files', 'wrongFilename.txt');
  const newName = resolve(__dirname, 'files', 'properFilename.md');
  access(oldName).then(
    () => {
      access(newName).then(
        () => {
          throw new Error('FS operation failed');
        },
        () => {
          rn(oldName, newName);
        }
      );
    },
    () => {
      throw new Error('FS operation failed');
    }
  );
};

await rename();
