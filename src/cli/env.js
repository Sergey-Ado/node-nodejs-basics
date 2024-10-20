const parseEnv = () => {
  const listEnv = process.env;
  const arr = [];
  for (let key in listEnv) {
    if (key.indexOf('RSS_') == 0) {
      arr.push(`${key}=${listEnv[key]}`);
    }
  }
  console.log(arr.join('; '));
};

parseEnv();
