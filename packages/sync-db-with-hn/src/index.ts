import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const { PORT } = process.env;

const app = express();

app.get('/', async (req, res) => {
  res.send('hello here 1');
});

app.listen(PORT, () => console.log(`Listen on port ${PORT}`));
