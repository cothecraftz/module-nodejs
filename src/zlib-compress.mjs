import zlib from 'node:zlib';
import fs from 'node:fs';

const source = fs.readFileSync('src/zlib-compress.mjs');
const result = zlib.gzipSync(source);

fs.writeFileSync('txt/zlib-compress.txt', result);
