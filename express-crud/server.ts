import express from 'express';
import pg from 'pg';
import { ClientError } from './lib/index.js';

type Grade = {
  gradeId?: number;
  name: string;
  course: string;
  score: number; // A number between 0 and 100
};

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get('/api/grades', async (req: Grade, res, next) => {
  try {
    const sql = `
      select *
        from "grades"
    `;

    const result = await db.query(sql);
    const grades = result.rows;
    res.status(200).json(grades);
  } catch (error) {
    next(error);
  }
});

app.get('/api/grades/:gradeId', async (req: Grade, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId))
      throw new ClientError(`gradeId ${gradeId} needs to be a number`);

    const sql = `
    select *
      from "grades"
      where "gradeId" = $1;
  `;

    const params = [gradeId];
    const result = await db.query(sql, params);
    if (!result) res.sendStatus(500);
    const grade = result.rows[0];
    if (!grade) res.status(404).send('File not found.');
    res.status(200).json(grade);
  } catch (error) {
    next(error);
  }
});

app.put('/api/grades/:gradeId', async (req: Grade, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId))
      throw new ClientError(400, `gradeId ${gradeId} must be a number.`);
    if (!gradeId) throw new ClientError(400, `gradeId ${gradeId} is required.`);

    const { name, course, score } = req.body;
    if (!name || !course || !score)
      throw new ClientError(400, 'Invalid/missing name, course, or score.');

    const sql = `
      update "grades"
        set "name" = $1,
            "course" = $2,
            "score" = $3
        where "gradeId" = $4
        returning *;
    `;

    const params = [name, course, score, gradeId];
    const result = await db.query(sql, params);
    if (!result) res.sendStatus(500);
    const grade = result.rows[0];
    if (!grade)
      throw new ClientError(
        404,
        `Target grade does not exist in the database.`
      );
    res.status(200).json(grade);
  } catch (error) {
    next(error);
  }
});

app.delete('/api/grades/:gradeId', async (req: Grade, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId))
      throw new ClientError(400, `gradeId ${gradeId} must be a number.`);
    if (!gradeId) throw new ClientError(400, 'gradeId is required');

    const sql = `
      delete from "grades"
        where "gradeId" = $1
        returning *;
    `;

    const params = [gradeId];
    const result = await db.query(sql, params);
    if (!result) res.sendStatus(500);
    const grade = result.rows[0];
    if (!grade)
      throw new ClientError(
        404,
        'Target grade does not exist in the database.'
      );
    res.status(204).json(grade);
  } catch (error) {
    next(error);
  }
});

app.listen(8080, () => {
  console.log(`Example app listening on port 8080`);
});
