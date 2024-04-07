import express, { Router, Request, Response } from 'express';

const shirtsRouter: Router = express.Router();

shirtsRouter.get("/api/v1/shirts", (req: Request, res: Response) => {
    res.send("Get all t-shirts");
});

shirtsRouter.get("/api/v1/shirts/:id", (req: Request, res: Response) => {
    res.send(`Get shirt with id ${req.params.id}`);
});

shirtsRouter.post("/api/v1/shirts", (req: Request, res: Response) => {
    res.send("Create a new t-shirt");
});

shirtsRouter.put("/api/v1/shirts/:id", (req: Request, res: Response) => {
    res.send(`Update shirt with id ${req.params.id}`);
});

shirtsRouter.delete("/api/v1/shirts/:id", (req: Request, res: Response) => {
    res.send(`Delete shirt with id ${req.params.id}`);
});

export default shirtsRouter;