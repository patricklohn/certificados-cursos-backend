import express from 'express';
import cors from 'cors';
import main from './db/conn.js';
import router from './routes/routes.js';

const app = express();

main()

app.use(cors());
app.use(express.json());
app.use(express.static("public"))

//Rotas
app.use("/api", router);

export default app;