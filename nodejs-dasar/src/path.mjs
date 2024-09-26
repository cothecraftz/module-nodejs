import path from 'node:path';

const file = '/Users/joko/index.html';

console.info(path.dirname(file));
console.info(path.basename(file));
console.info(path.extname(file));
