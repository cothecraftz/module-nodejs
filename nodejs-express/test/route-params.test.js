import supertest from 'supertest';
import { app } from '../src/hello';

app.get('/product/:id', (req, res) => {
  res.send(req.params.id);
});

app.get('/category/:id(\\d+)', (req, res) => {
  res.send(req.params.id);
});

test('test route params', async () => {
  let response = await supertest(app).get('/product/123');
  expect(response.text).toBe('123');

  response = await supertest(app).get('/product/string');
  expect(response.text).toBe('string');

  response = await supertest(app).get('/category/1234');
  expect(response.text).toBe('1234');

  response = await supertest(app).get('/category/salah');
  expect(response.status).toBe(404);
});
