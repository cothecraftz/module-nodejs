import supertest from 'supertest';
import { app } from '../src/hello';

app
  .route('/product')
  .get((req, res) => {
    res.send('get product');
  })
  .post((req, res) => {
    res.send('create product');
  })
  .put((req, res) => {
    res.send('update product');
  });

test('test route function', async () => {
  let response = await supertest(app).get('/product');
  expect(response.text).toBe('get product');

  response = await supertest(app).post('/product');
  expect(response.text).toBe('create product');

  response = await supertest(app).put('/product');
  expect(response.text).toBe('update product');
});
