import { access, mkdir, copyFile, readdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const copy = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const oldDir = resolve(__dirname, 'files');
  const newDir = resolve(__dirname, 'files_copy');
  await access(oldDir).catch(() => {
    throw new Error('FS operation failed');
  });
  await access(newDir).then(
    () => {
      throw new Error('FS operation failed');
    },
    async () => {
      await mkdir(newDir);
      const files = await readdir(oldDir);
      for (let file of files) {
        const oldName = resolve(oldDir, file);
        const newName = resolve(newDir, file);
        await copyFile(oldName, newName);
      }
    }
  );
};

await copy();
