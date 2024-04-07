import express, { Router} from 'express';
import { getAllPants, getPantsById, createPants, updatePants, deletePants } from '../controllers/pants.js';
import { getAllShirts, getShirtsById, createShirts, updateShirts, deleteShirts } from '../controllers/shirts.js';
import { getAllShorts, getShortsById, createShorts, updateShorts, deleteShorts } from '../controllers/shorts.js';

export const pantsRouter: Router = express.Router();

pantsRouter.get("/api/v1/pants", getAllPants);
pantsRouter.get("/api/v1/pants/:id", getPantsById);
pantsRouter.post("/api/v1/pants", createPants);
pantsRouter.put("/api/v1/pants/:id", updatePants);
pantsRouter.delete("/api/v1/pants/:id", deletePants);

export const shirtsRouter: Router = express.Router();
shirtsRouter.get("/api/v1/shirts", getAllShirts);
shirtsRouter.get("/api/v1/shirts/:id", getShirtsById);
shirtsRouter.post("/api/v1/shirts", createShirts);
shirtsRouter.put("/api/v1/shirts/:id", updateShirts);
shirtsRouter.delete("/api/v1/shirts/:id", deleteShirts );

export const shortsRouter: Router = express.Router();
shortsRouter.get("/api/v1/shorts", getAllShorts );
shortsRouter.get("/api/v1/shorts/:id", getShortsById);
shortsRouter.post("/api/v1/shorts",  createShorts);
shortsRouter.put("/api/v1/shorts/:id", updateShorts );
shortsRouter.delete("/api/v1/shorts/:id", deleteShorts );
