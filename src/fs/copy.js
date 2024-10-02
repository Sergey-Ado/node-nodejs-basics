import * as fs from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const copy = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const oldDir = path.resolve(__dirname, 'files');
  const newDir = path.resolve(__dirname, 'files_copy');
  await fs.access(oldDir).catch(() => {
    throw new Error('FS operation failed');
  });
  await fs.access(newDir).then(
    () => {
      throw new Error('FS operation failed');
    },
    async () => {
      await fs.mkdir(newDir);
      const files = await fs.readdir(oldDir);
      for (let file of files) {
        const oldName = path.resolve(oldDir, file);
        const newName = path.resolve(newDir, file);
        await fs.copyFile(oldName, newName);
      }
    }
  );
};

await copy();
