import express, { Application } from 'express';
import shirtsRouter from './routes/shorts';
import shortsRouter from './routes/shorts';
import pantsRouter from './routes/pants';

const app: Application = express();
const port = 3000;
app.use(shirtsRouter);
app.use(shortsRouter);
app.use(pantsRouter);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);