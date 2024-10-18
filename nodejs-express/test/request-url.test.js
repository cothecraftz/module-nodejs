import supertest from 'supertest';
import { app } from '../src/hello';

test('test request url', async () => {
  app.get('/user/contact', (req, res) => {
    res.json({
      path: req.path,
      originalUrl: req.originalUrl,
      hostname: req.hostname,
      protocol: req.protocol,
      secure: req.secure,
    });
  });

  const response = await supertest(app).get('/user/contact').query({ name: 'joko' });
  expect(response.body).toEqual({
    path: '/user/contact',
    originalUrl: '/user/contact?name=joko',
    hostname: '127.0.0.1',
    protocol: 'http',
    secure: false,
  });
});
