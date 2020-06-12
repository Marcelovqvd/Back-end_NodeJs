import express from 'express';

const app = express();

app.get('/', (req, res) => (res.json({ message: 'hello go' })));

app.listen(3333, () => {
  console.log('hello');
});
