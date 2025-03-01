import {Router} from "express";
import MemoryController from "../controllers/memoryController.js";
import {upload, uploadMiddleware} from "../helpers/middlewareUpload.js";

const memoryRouter = Router();

memoryRouter.post("/", upload.single("image"), uploadMiddleware, MemoryController.createMemory);
memoryRouter.get("/", MemoryController.getMemorys);
memoryRouter.get("/:id", MemoryController.getMemory);
memoryRouter.delete("/:id", MemoryController.deleteMemory);
memoryRouter.patch("/:id", upload.single("image"), MemoryController.updateMemory);

export default memoryRouter;