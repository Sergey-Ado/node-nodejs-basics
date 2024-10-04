import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const fileName = path.resolve(
    __dirname,
    'files',
    'fileToCalculateHashFor.txt'
  );
  await fs.access(fileName).catch(() => {
    throw new Error('FS operation failed');
  });
  const readStream = createReadStream(fileName);
  const hash = createHash('sha256');
  readStream.pipe(hash);
  readStream.on('end', () => {
    console.log(hash.digest('hex'));
  });
};

await calculateHash();
