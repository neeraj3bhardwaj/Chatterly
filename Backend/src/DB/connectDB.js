import mongoose from "mongoose"
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("DataBase Connected Successfully !!");
    } catch (error) {
        console.error(`Some error occured while connecting !!`);;
        console.error(error);
        throw error;
    }
}

export  {connectDB};