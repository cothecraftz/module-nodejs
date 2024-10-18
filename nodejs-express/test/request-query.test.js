import supertest from 'supertest';
import { app } from '../src/hello';

test('test request query', async () => {
  app.get('/query', (req, res) => {
    res.send(`hello ${req.query.firstName} ${req.query.lastName}`);
  });

  const response = await supertest(app).get('/query').query({ firstName: 'joko', lastName: 'santoso' });
  expect(response.text).toBe('hello joko santoso');
});
