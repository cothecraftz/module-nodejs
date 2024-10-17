import supertest from 'supertest';
import { app } from '../src/hello';

test('test request', async () => {
  app.get('/req', (req, res) => {
    res.send(`Hello ${req.query.name}`);
  });

  const response = await supertest(app).get('/req').query({ name: 'Joko' });
  expect(response.text).toBe('Hello Joko');
});
