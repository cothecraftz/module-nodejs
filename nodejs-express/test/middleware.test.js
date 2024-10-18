import supertest from 'supertest';
import express from 'express';

const logger = (req, res, next) => {
  console.info(`request : ${req.method}${req.url}`);
  next();
};

const apiKey = (req, res, next) => {
  if (req.query.apikey) {
    next();
  } else {
    res.status(401).end();
  }
};

const addrequest = (req, res, next) => {
  req.time = Date.now();
  next();
};

const app = express();
app.use(logger);
app.use(apiKey);
app.use(addrequest);

test('test middleware authorized', async () => {
  app.get('/', (req, res) => {
    res.send('hello world');
  });

  const response = await supertest(app).get('/').query({ apikey: '123' });
  expect(response.text).toBe('hello world');
});

test('test middleware unauthorized', async () => {
  app.get('/', (req, res) => {
    res.send('hello world');
  });

  const response = await supertest(app).get('/');
  expect(response.status).toBe(401);
});

test('test middleware add request', async () => {
  app.get('/time', (req, res) => {
    res.send(`today : ${req.time}`);
  });

  const response = await supertest(app).get('/time').query({ apikey: '123' });
  expect(response.text).toContain('today :');
});
