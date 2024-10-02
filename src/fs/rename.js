import * as fs from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { access } from 'node:fs';

const rename = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const oldName = path.resolve(__dirname, 'files', 'wrongFilename.txt');
  const newName = path.resolve(__dirname, 'files', 'properFilename.md');
  fs.access(oldName).then(
    () => {
      fs.access(newName).then(
        () => {
          throw new Error('FS operation failed');
        },
        () => {
          fs.rename(oldName, newName);
        }
      );
    },
    () => {
      throw new Error('FS operation failed');
    }
  );
};

await rename();
