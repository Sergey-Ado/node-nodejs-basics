import { stdin, stdout } from 'node:process';
import { Transform } from 'node:stream';

const transform = async () => {
  const reverseText = new Transform({
    transform(chunk, encoding, callback) {
      callback(
        null,
        chunk.toString().split('').reverse().join('').slice(1) + '\n'
      );
    },
  });
  console.log('Enter text');
  console.log('To complete your entry, press Ctrl+C');
  stdin.pipe(reverseText).pipe(stdout);
};

await transform();
