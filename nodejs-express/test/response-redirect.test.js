import supertest from 'supertest';
import { app } from '../src/hello';

test('test response', async () => {
  app.get('/', (req, res) => {
    res.redirect('/to-next-page');
  });

  const response = await supertest(app).get('/');
  expect(response.status).toBe(302);
  expect(response.get('location')).toBe('/to-next-page');
});
