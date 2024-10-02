import { env } from 'node:process';

const parseEnv = () => {
  const arr = [];
  for (let key in env) {
    if (key.indexOf('RSS_') == 0) {
      arr.push(`${key}=${env[key]}`);
    }
  }
  console.log(arr.join('; '));
};

parseEnv();
