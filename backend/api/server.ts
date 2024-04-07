import express, { Application } from 'express';
import shirtsRouter from './routes/shirts.js';
import shortsRouter from './routes/shorts.js';
import pantsRouter from './routes/pants.js';

const app: Application = express();
const port = 3000;
app.use(shirtsRouter);
app.use(shortsRouter);
app.use(pantsRouter);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);