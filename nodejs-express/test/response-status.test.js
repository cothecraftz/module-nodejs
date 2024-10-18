import supertest from 'supertest';
import { app } from '../src/hello';

test('test response status', async () => {
  app.get('/', (req, res) => {
    if (req.query.name) {
      res.status(200).send('status sucess');
    } else {
      res.status(400).end();
    }
  });

  let response = await supertest(app).get('/').query({ name: 'joko' });
  expect(response.status).toBe(200);
  expect(response.text).toBe('status sucess');

  response = await supertest(app).get('/');
  expect(response.status).toBe(400);
});
