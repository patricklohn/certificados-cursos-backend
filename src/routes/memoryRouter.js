import {Router} from "express";
import MemoryController from "../controllers/memoryController.js";

const memoryRouter = Router();

memoryRouter.post("/", MemoryController.createMemory);

export default memoryRouter;