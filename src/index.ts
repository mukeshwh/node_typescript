import express from 'express';

const bodyParser = require('body-parser');

import { todoRouter } from './routes/todo';


const db = require('./config/db');

const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Type Script Js!');
});

app.use(todoRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});