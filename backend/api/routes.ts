import express, { Router, Application} from 'express';
import { PantsController } from '../controllers/pants.js';
import { getAllShirts, getShirtsById, createShirts, updateShirts, deleteShirts } from '../controllers/shirts.js';
import { getAllShorts, getShortsById, createShorts, updateShorts, deleteShorts } from '../controllers/shorts.js';


export const registerRoutes = (app: Application, pantsController: PantsController) => {
    const pantsRouter: Router = express.Router();
    pantsRouter.get("/api/v1/pants", pantsController.getAll);
    pantsRouter.get("/api/v1/pants/:id", pantsController.getById);
    pantsRouter.post("/api/v1/pants", pantsController.create);
    pantsRouter.put("/api/v1/pants/:id", pantsController.update);
    pantsRouter.delete("/api/v1/pants/:id", pantsController.delete);

    app.use(pantsRouter)
    
}

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
