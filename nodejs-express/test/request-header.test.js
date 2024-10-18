import supertest from 'supertest';
import { app } from '../src/hello';

test('test request header', async () => {
  app.get('/', (req, res) => {
    const type = req.get('auth');
    res.send(`auth is ${type}`);
  });

  const response = await supertest(app).get('/').set('auth', '123');
  expect(response.text).toBe('auth is 123');
});
