import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createReadStream, createWriteStream } from 'node:fs';
import { createUnzip } from 'node:zlib';

const decompress = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const oldFileName = path.resolve(__dirname, 'files', 'archive.gz');
  const newFileName = path.resolve(__dirname, 'files', 'fileToCompress.txt');
  const input = createReadStream(oldFileName);
  const output = createWriteStream(newFileName);
  const gzip = createUnzip();
  input.pipe(gzip).pipe(output);
};

await decompress();
