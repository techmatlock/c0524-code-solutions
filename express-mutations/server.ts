import express from 'express';
import pg from 'pg';
import { ClientError } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

// Endpoint for testing
app.get('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, `Non-integer actorId: ${actorId}`);
    }
    const sql = `
      select * from "actors"
      where "actorId" = $1;
    `;
    const params = [actorId];
    const result = await db.query(sql, params);
    const actor = result.rows[0];
    if (!actor) throw new ClientError(404, `actor ${actorId} not found`);
    res.json(actor);
  } catch (err) {
    next(err);
  }
});

app.post('/api/actors/', async (req, res, next) => {
  try {
    const { firstName, lastName } = req.body;

    if (!firstName || !lastName)
      throw new ClientError(400, 'firstName/lastName missing in the request.');

    const sql = `
    insert into actors ("firstName", "lastName")
    values ($1, $2)
    returning *;
    `;

    const params = [firstName, lastName];
    const result = await db.query(sql, params);
    if (!result) res.sendStatus(500);
    const actor = result.rows[0];
    if (!actor)
      throw new ClientError(404, `actor ${firstName} ${lastName} not found.`);
    res.status(201).json(actor);
  } catch (error) {
    next(error);
  }
});

app.put('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;

    if (!actorId) throw new ClientError(400, 'actorId required');
    if (!Number.isInteger(+actorId))
      throw new ClientError(400, `actorId ${actorId} not a number.`);

    const { firstName, lastName } = req.body;

    if (!firstName)
      throw new ClientError(400, 'firstName missing in request body.');
    if (!lastName)
      throw new ClientError(400, 'lastName missing in request body.');

    const sql = `
    update "actors"
      set "firstName" = $1,
          "lastName" = $2
      where "actorId" = $3
      returning *;
  `;

    const params = [firstName, lastName, actorId];
    const result = await db.query(sql, params);
    if (!result) res.sendStatus(500);
    const actor = result.rows[0];
    if (!actor) throw new ClientError(404, `actor ${actor} was not found.`);
    res.status(200).json(actor);
  } catch (error) {
    next(error);
  }
});

app.delete('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (!Number.isInteger(+actorId))
      throw new ClientError(404, 'actorId not found.');

    const sql = `
      delete from "actors"
        where "actorId" = $1
        returning *;
    `;

    const params = [actorId];
    const result = await db.query(sql, params);
    if (!result) res.sendStatus(500);
    const actor = result.rows[0];
    if (!actor) throw new ClientError(404, `actor ${actor} not found.`);
    res.status(204).json(actor);
  } catch (error) {
    next(error);
  }
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
