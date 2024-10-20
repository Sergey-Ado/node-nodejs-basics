import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { createReadStream } from 'node:fs';

const read = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const fileName = resolve(__dirname, 'files', 'fileToRead.txt');
  const input = createReadStream(fileName);
  input.pipe(process.stdout);
  input.on('end', () => console.log(''));
};

await read();
