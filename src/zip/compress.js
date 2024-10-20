import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

const compress = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const oldFileName = path.resolve(__dirname, 'files', 'fileToCompress.txt');
  const newFileName = path.resolve(__dirname, 'files', 'archive.gz');
  const input = createReadStream(oldFileName);
  const output = createWriteStream(newFileName);
  const gzip = createGzip();
  input.pipe(gzip).pipe(output);
};

await compress();
