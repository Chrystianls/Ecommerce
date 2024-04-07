import express, { Router, Request, Response } from 'express';

const pantsRouter: Router = express.Router();

pantsRouter.get("/api/v1/pants", (req: Request, res: Response) => {
    res.send("Get all pants");
});
pantsRouter.get("/api/v1/pants/:id", (req: Request, res: Response) => {
    res.send(`Get pants with id ${req.params.id}`);
});

pantsRouter.post("/api/v1/pants", (req: Request, res: Response) => {
    res.send("Create a new pair of pants");
});

pantsRouter.put("/api/v1/pants/:id", (req: Request, res: Response) => {
    res.send(`Update pants with id ${req.params.id}`);
});

pantsRouter.delete("/api/v1/pants/:id", (req: Request, res: Response) => {
    res.send(`Delete pants with id ${req.params.id}`);
});

export default pantsRouter;