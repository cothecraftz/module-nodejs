import supertest from 'supertest';
import { app } from '../src/hello';

test('test response', async () => {
  app.get('/', (req, res) => {
    res
      .set({
        'X-Author': 'Joko Santoso',
        'X-Auth': '123',
      })
      .end();
  });

  const response = await supertest(app).get('/');
  expect(response.get('x-author')).toBe('Joko Santoso');
  expect(response.get('x-auth')).toBe('123');
});
