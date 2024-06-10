import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


export const conectarDB = async () => {

    try {
        await mongoose.connect(process.env.MONGO_DB)

        console.log('base de datos conectado ');

    } catch (error) {
        console.log(error);

    }

};