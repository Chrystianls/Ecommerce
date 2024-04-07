import express, { Application } from 'express';
import { pantsRouter, shirtsRouter, shortsRouter } from './routes.js';

const app: Application = express();
const port = 3000;
app.use(shirtsRouter);
app.use(shortsRouter);
app.use(pantsRouter);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);