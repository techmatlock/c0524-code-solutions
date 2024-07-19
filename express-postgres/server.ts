import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';
import pg from 'pg';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.get('/api/films/', async (req, res, next) => {
  try {
    const sql = `
      select
        "title",
        "filmId"
      from "films"
      order by "replacementCost" desc
    `;
    const result = await db.query(sql);
    const films = result.rows;
    res.send(films);
  } catch (error) {
    next(error);
  }
});

app.get('/api/film/', async (req, res, next) => {
  try {
    const { filmId } = req.query;
    if (filmId === undefined) {
      throw new ClientError(400, 'filmId is required');
    }

    const sql = `
      select
        "title"
      from "films"
      where "filmId" = $1
    `;
    const params = [filmId];
    await db.query(sql, params);
    res.send('success');
  } catch (error) {
    next(error);
  }
});

app.put('/api/film', async (req, res, next) => {
  try {
    const { filmId, title } = req.query;

    if (filmId === undefined) {
      throw new ClientError(400, 'filmId is required');
    }
    if (title === undefined) {
      throw new ClientError(400, 'title is required');
    }

    const sql = `
      update
        "films"
      set "title" = $2
      where "filmId" = $1
    `;
    const params = [filmId, title];
    await db.query(sql, params);
    res.send('success');
  } catch (error) {
    next(error);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
