import { access, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const read = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const fileName = resolve(__dirname, 'files', 'fileToRead.txt');
  await access(fileName).then(
    async () => {
      const content = await readFile(fileName, { encoding: 'utf-8' });
      console.log(content);
    },
    () => {
      throw new Error('FS operation failed');
    }
  );
};

await read();
