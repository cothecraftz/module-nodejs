import supertest from 'supertest';
import { app } from '../src/hello';

app.get('/all/*', (req, res) => {
  res.send(req.originalUrl);
});

app.get('/decimal/*(\\d+)', (req, res) => {
  res.send(req.originalUrl);
});

test('test route path', async () => {
  let response = await supertest(app).get('/all/string');
  expect(response.text).toBe('/all/string');

  response = await supertest(app).get('/all/123');
  expect(response.text).toBe('/all/123');

  response = await supertest(app).get('/decimal/123');
  expect(response.text).toBe('/decimal/123');

  response = await supertest(app).get('/decimal/salah');
  expect(response.status).toBe(404);
});
