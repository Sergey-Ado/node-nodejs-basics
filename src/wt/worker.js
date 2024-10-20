import { parentPort } from 'node:worker_threads';

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  parentPort.once('message', (message) => {
    try {
      const data = nthFibonacci(message);

      // For testing where errors may occur
      // if (Math.random() > 0.5) throw new Error();

      parentPort.postMessage({ status: 'resolved', data });
    } catch {
      parentPort.postMessage({ status: 'error', data: null });
    }
  });
};

sendResult();
