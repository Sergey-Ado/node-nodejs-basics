import { argv } from 'node:process';

const parseArgs = () => {
  const list = argv.slice(2);
  const res = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].indexOf('--') == 0)
      res.push(`${list[i].slice(2)} is ${list[i + 1]}`);
  }
  console.log(res.join(', '));
};

parseArgs();
