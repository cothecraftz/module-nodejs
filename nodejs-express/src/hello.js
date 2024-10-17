import express from 'express';

export const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'hello world.' });
});

app.listen(8000, () => {
  console.log('server running in port 8000');
});
