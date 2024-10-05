import { access, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const create = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const fileName = resolve(__dirname, 'files', 'fresh.txt');
  await access(fileName).then(
    () => {
      throw new Error('FS operation failed');
    },
    () => {
      writeFile(fileName, 'I am fresh and young');
    }
  );
};

await create();
