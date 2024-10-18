import supertest from 'supertest';
import { app } from '../src/hello';

test('test response', async () => {
  app.get('/', (req, res) => {
    res.send('hello response');
  });

  const response = await supertest(app).get('/');
  expect(response.text).toBe('hello response');
});
