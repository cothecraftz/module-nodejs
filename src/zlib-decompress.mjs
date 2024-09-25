import zlib from 'node:zlib';
import fs from 'node:fs';

const source = fs.readFileSync('txt/zlib-compress.txt');
console.info(source.toString());

const result = zlib.unzipSync(source);
console.info(result.toString());
