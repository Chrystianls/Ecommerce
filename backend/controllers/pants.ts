import {Request, Response} from 'express';
import { PantsRepository } from '../repository/productsPgRepo.js';
import { PantsDTO, TPantsDTO } from '../entities/entities.js';


export class PantsController {
    repo: PantsRepository
    constructor(repo: PantsRepository){
        this.repo = repo
    }
    getAll = async (req: Request, res: Response) => {
        const pants = await this.repo.getAll()
        res.json(pants);
    };
    getById = (req: Request, res: Response) => {
        let {id} = req.params
        const pant = this.repo.getById(parseInt (id))
    };
    create = (req: Request, res: Response) => {
        try{
            const pants = new PantsDTO(req.body)
            pants.validate()
            res.json(pants);
        } catch (error) {
            console.error(error)
            res.status(400).json(`{"error": ${error}}`)
        }
    
    };
    update = (req: Request, res: Response) => {
        res.send(`Update pants with id ${req.params.id}`);
    };
    delete = (req: Request, res: Response) => {
        res.send(`Delete pants with id ${req.params.id}`);
    };
}