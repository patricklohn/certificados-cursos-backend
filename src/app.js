import express from 'express';
import cors from 'cors';
import main from './db/conn.js';
import router from './routes/routes.js';
import path from 'path';

const app = express();

main()

app.use(cors());
app.use(express.json());
app.use("/uploadsArquivos", express.static(path.join(process.cwd(), "src/public/uploadsArquivos")));

//Rotas
app.use("/api", router);

export default app;