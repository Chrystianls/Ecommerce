import {Request, Response} from 'express';

export const getAllShirts = (req: Request, res: Response) => {
    res.send("Get all shirts");
};

export const getShirtsById = (req: Request, res: Response) => {
    res.send(`Get shirts with id ${req.params.id}`);
};

export const createShirts = (req: Request, res: Response) => {
    res.send("Create a new shirt");
};

export const updateShirts = (req: Request, res: Response) => {
    res.send(`Update shirt with id ${req.params.id}`);
};

export const deleteShirts = (req: Request, res: Response) => {
    res.send(`Delete shirt with id ${req.params.id}`);
};

