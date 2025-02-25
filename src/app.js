import express from 'express';
import cors from 'cors';
const app = express();
import main from './db/conn.js';

app.use(cors());
app.use(express.json());
app.use(express.static("public"))

export default app;