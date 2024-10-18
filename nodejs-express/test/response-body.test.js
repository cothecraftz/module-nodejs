import supertest from 'supertest';
import { app } from '../src/hello';

test('test response', async () => {
  app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h1>hello world</h1>
    </body>
    </html>`);
  });

  const response = await supertest(app).get('/');
  expect(response.get('content-type')).toContain('text/html');
  expect(response.text).toBe(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h1>hello world</h1>
    </body>
    </html>`);
});
