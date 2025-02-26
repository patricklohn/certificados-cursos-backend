import {Router} from "express";
import memoryRouter from "./memoryRouter.js";

const routes = Router();

routes.use("/Memory", memoryRouter);

export default routes;