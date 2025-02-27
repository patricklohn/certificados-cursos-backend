import {Router} from "express";
import MemoryController from "../controllers/memoryController.js";
import middlewareUpload from "../helpers/middlewareUpload.js";

const memoryRouter = Router();

memoryRouter.post("/", middlewareUpload.upload.single("image"), middlewareUpload.uploadMiddleware, MemoryController.createMemory);
memoryRouter.get("/", MemoryController.getMemory);

export default memoryRouter;