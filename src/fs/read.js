import * as fs from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const read = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const fileName = path.resolve(__dirname, 'files', 'fileToRead.txt');
  await fs.access(fileName).then(
    async () => {
      const content = await fs.readFile(fileName, { encoding: 'utf-8' });
      console.log(content);
    },
    () => {
      throw new Error('FS operation failed');
    }
  );
};

await read();
