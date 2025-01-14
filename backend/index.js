import express from "express";
import cors from "cors";
import Router from "./routes/routes.js";
import db from "./config/database.js";
 

const app = express();

app.use(express.json());

app.use(cors());

app.use(Router);
 
app.listen(5000, () => console.log('Server running at http://localhost:5000'));