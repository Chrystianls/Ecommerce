import express, { Router, Request, Response } from 'express';

const shortsRouter: Router = express.Router();

shortsRouter.get("/api/v1/shorts", (req: Request, res: Response) => {
    res.send("Get all shorts");
});

shortsRouter.get("/api/v1/shorts/:id", (req: Request, res: Response) => {
    res.send(`Get short with id ${req.params.id}`);
});

shortsRouter.post("/api/v1/shorts", (req: Request, res: Response) => {
    res.send("Create a new pair of shorts");
});

shortsRouter.put("/api/v1/shorts/:id", (req: Request, res: Response) => {
    res.send(`Update shorts with id ${req.params.id}`);
});

shortsRouter.delete("/api/v1/shorts/:id", (req: Request, res: Response) => {
    res.send(`Delete shorts with id ${req.params.id}`);
});

export default shortsRouter;