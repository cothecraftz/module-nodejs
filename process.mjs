import process from 'node:process';

process.addListener('exit', (exitCode) => {
  console.log('Exit code' + exitCode);
});

console.info(process.version);
console.table(process.argv);
console.info(process.env.USERNAME);

process.exit(1);

// hello tidak akan di eksekusi
console.log('hello');
