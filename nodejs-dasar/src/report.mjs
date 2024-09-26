import process from 'node:process';

process.report.reportOnUncaughtException = true;
process.report.reportOnFatalError = true;
process.report.reportOnSignal = true;
process.report.filename = 'data/report-error.json';

function newError() {
  throw new Error('Upss!!!');
}

newError();
