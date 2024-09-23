import fs from 'fs/promises';

const readFile = await fs.readFile('./async.mjs', 'utf-8');
console.log(readFile);

await fs.writeFile('./txt/temp.txt', 'Hello Nodejs!!', 'utf-8');
console.log('success create file temp.txt');
