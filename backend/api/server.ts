import express, { Application } from 'express';
import pg from 'pg';
import "dotenv/config";
import { registerRoutes, shirtsRouter, shortsRouter } from './routes.js';
import { PantsController } from '../controllers/pants.js';
import { PantsRepository } from '../repository/productsPgRepo.js';

const app: Application = express();
const port = process.env.SERVER_PORT || 3000;

const db = new pg.Pool({
    host: process.env.POSTGRES_HOST || "localhost",
    port: parseInt(process.env.POSTGRES_PORT!) || 5432,
    database: process.env.POSTGRES_DB || "postgres",
    user: process.env.POSTGRES_USER || "postgres",
    password: process.env.POSTGRES_PASSWORD,
    max: 10,

});

const pantsRepo = new PantsRepository(db)
const pantsController =  new PantsController(pantsRepo)

registerRoutes(app, pantsController)

app.use(shirtsRouter);
app.use(shortsRouter);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);