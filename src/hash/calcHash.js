import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const fileName = resolve(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const readStream = createReadStream(fileName);
  const hash = createHash('sha256');
  readStream.pipe(hash);
  readStream.on('end', () => {
    console.log(hash.digest('hex'));
  });
};

await calculateHash();
