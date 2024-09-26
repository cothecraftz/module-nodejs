import fs from 'node:fs';

const writer = fs.createWriteStream('data/target-stream.log');
writer.write('Joko\n');
writer.write('Santoso\n');
writer.write('Ganteng\n');

writer.end();

const reader = fs.createReadStream('data/target-stream.log');

reader.addListener('data', (data) => {
  console.info(data.toString());
});
