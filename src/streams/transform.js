import { Transform } from 'node:stream';
import { EOL } from 'node:os';

const transform = async () => {
  const reverseText = new Transform({
    transform(chunk, encoding, callback) {
      callback(
        null,
        chunk.toString().split('').reverse().join('').slice(EOL.length) + EOL
      );
    },
  });
  console.log('Enter text');
  console.log('To complete your entry, press Ctrl+C');
  process.stdin.pipe(reverseText).pipe(process.stdout);
};

await transform();
