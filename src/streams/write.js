import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { createWriteStream } from 'node:fs';

const write = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const fileName = resolve(__dirname, 'files', 'fileToWrite.txt');
  const output = createWriteStream(fileName);
  console.log('Enter text');
  console.log('To complete your entry, press Ctrl+C');
  process.stdin.pipe(output);
};

await write();
