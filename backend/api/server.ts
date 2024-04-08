import express, { Application } from 'express';
import pg from 'pg';
import { registerRoutes, shirtsRouter, shortsRouter } from './routes.js';
import { PantsController } from '../controllers/pants.js';
import { PantsRepository } from '../repository/productsPgRepo.js';

const app: Application = express();
const port = 3000;

const db = new pg.Pool({
    host: "localhost",
    port: 5432,
    database: "postgres",
    user: "postgres",
    password: "password",
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