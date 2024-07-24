import 'dotenv/config';
import pg from 'pg';
import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

type Products = {
  productId: number;
  name: string;
  price: number;
  imageUrl: string;
  shortDescription: string;
  longDescription: string;
};

const app = express();
app.use(express.json());

app.get('/api/products', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "products";
    `;
    const result = await db.query<Products[]>(sql);
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
});

app.get('/api/products/:productId', async (req, res, next) => {
  try {
    const productId = Number(req.params.productId);
    if (!Number.isInteger(+productId))
      throw new ClientError(400, `productId ${productId} must be a number.`);

    const sql = `
      select *
        from "products"
        where "productId" = $1
    `;

    const params = [productId];
    const result = await db.query<Products>(sql, params);
    if (!result.rows[0])
      throw new ClientError(404, `product with ${productId} not found.`);
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
});

app.use(errorMiddleware);

app.listen(
  process.env.PORT,
  () => `Express server running on port: ${process.env.PORT}`
);
