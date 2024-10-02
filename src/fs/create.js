import * as fs from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const create = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const fileName = path.resolve(__dirname, 'files', 'fresh.txt');
  await fs.access(fileName).then(
    () => {
      throw new Error('FS operation failed');
    },
    () => {
      fs.writeFile(fileName, 'I am fresh and young');
    }
  );
};

await create();
