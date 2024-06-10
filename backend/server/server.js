import express from 'express';
import dotenv from 'dotenv';
import router from '../router/router.js';
import cors from "cors";

dotenv.config();

const app = express();
const api = '/api'
const port = process.env.PORT || 3000;

app.use(cors());

export const startServer = () => {
    app.use(express.json());

    app.use(api + '/producto', router);


    app.listen(port, () => {
        console.log(`Esta corriendo el servidor ${port}`);
    });


}



