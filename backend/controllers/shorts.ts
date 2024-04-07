import {Request, Response} from 'express';

export const getAllShorts = (req: Request, res: Response) => {
    res.send("Get all shorts");
};

export const getShortsById = (req: Request, res: Response) => {
    res.send(`Get shorts with id ${req.params.id}`);
};

export const createShorts = (req: Request, res: Response) => {
    res.send("Create a new pair of shorts");
};

export const updateShorts = (req: Request, res: Response) => {
    res.send(`Update shorts with id ${req.params.id}`);
};

export const deleteShorts = (req: Request, res: Response) => {
    res.send(`Delete shorts with id ${req.params.id}`);
};

