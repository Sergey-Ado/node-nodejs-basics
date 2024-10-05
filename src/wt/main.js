import { cpus } from 'node:os';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Worker } from 'node:worker_threads';

const performCalculations = async () => {
  const countCore = cpus().length;
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const fileName = resolve(__dirname, 'worker.js');
  const workers = [];
  for (let i = 0; i < countCore; i++) {
    workers.push(
      new Promise((res) => {
        const worker = new Worker(fileName);
        worker.postMessage(i + 10);
        worker.once('message', res);
      })
    );
  }
  await Promise.all(workers).then(console.log);
};

await performCalculations();
