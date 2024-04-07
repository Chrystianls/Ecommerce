import {Request, Response} from 'express';

export const getAllPants = (req: Request, res: Response) => {
    res.send("Get all pants");
};

export const getPantsById = (req: Request, res: Response) => {
    res.send(`Get pants with id ${req.params.id}`);
};

export const createPants = (req: Request, res: Response) => {
    res.send("Create a new pair of pants");
};

export const updatePants = (req: Request, res: Response) => {
    res.send(`Update pants with id ${req.params.id}`);
};

export const deletePants = (req: Request, res: Response) => {
    res.send(`Delete pants with id ${req.params.id}`);
};