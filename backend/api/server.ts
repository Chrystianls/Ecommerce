import express, { Application } from 'express';
import { registerRoutes, shirtsRouter, shortsRouter } from './routes.js';
import { PantsController } from '../controllers/pants.js';
import { PantsRepository, db } from '../repository/productsPgRepo.js';

const app: Application = express();
const port = 3000;

const pantsRepo = new PantsRepository(db)
const pantsController =  new PantsController(pantsRepo)

registerRoutes(app, pantsController)

app.use(shirtsRouter);
app.use(shortsRouter);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);