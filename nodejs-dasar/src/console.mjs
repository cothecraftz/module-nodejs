import { Console } from 'console';
import fs from 'node:fs';

const file = fs.createWriteStream('data/console.log');

const log = new Console({
  stdout: file,
  stderr: file,
});

const person = {
  name: 'Joko Santoso',
  age: 21,
};

log.info('hello world');
log.error('Error: hello world');
log.table(person);
