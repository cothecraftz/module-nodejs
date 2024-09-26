import { Worker, threadId } from 'node:worker_threads';

const worker1 = new Worker('./src/worker.mjs');
const worker2 = new Worker('./src/worker.mjs');

// event untuk menerima pesan dari worker
worker1.addListener('message', (message) => {
  console.info(`Thered-${threadId} recive from worker 1 : ${message}`);
});

worker2.addListener('message', (message) => {
  console.info(`Thered-${threadId} recive from worker 2 : ${message}`);
});

// untuk mengirim pesan ke worker
worker1.postMessage(10);
worker2.postMessage(10);
