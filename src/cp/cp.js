import { spawn } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { stdin, stdout } from 'node:process';

const spawnChildProcess = async (args) => {
  if (!Array.isArray(args)) args = [];
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const fileName = resolve(__dirname, 'files', 'script.js');
  const child = spawn('node', [fileName, ...args]);

  stdin.pipe(child.stdin);
  child.stdout.pipe(stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2', 'someArgument3']);
