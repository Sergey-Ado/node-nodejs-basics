import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';

const write = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const fileName = path.resolve(__dirname, 'files', 'fileToWrite.txt');
  const output = createWriteStream(fileName);
  console.log('Enter text');
  console.log('To complete your entry, press Ctrl+C');
  stdin.pipe(output);
};

await write();
