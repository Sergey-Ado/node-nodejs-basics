import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

const read = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const fileName = path.resolve(__dirname, 'files', 'fileToRead.txt');
  const input = createReadStream(fileName);
  input.pipe(stdout);
  input.on('end', () => console.log(''));
};

await read();
