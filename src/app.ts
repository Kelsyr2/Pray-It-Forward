import express from 'express';
import type { Request, Response } from 'express';
import { pool } from './services/mysql.connector';
import prayersRouter from './prayers/prayers.routes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/', prayersRouter);
app.get('/', (req: Request, res: Response) => {
  res.send('Pray It Forward API is running!');
});

app.get('/db-test', async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query('SELECT 1 AS result');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Database connection failed');
  }
});

app.listen(port, () => {
  console.log(`Pray It Forward API listening at http://localhost:${port}`);
});