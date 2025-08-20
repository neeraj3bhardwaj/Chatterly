import express from "express"
import dotenv from "dotenv"
import {connectDB} from "./DB/connectDB.js"
import userRoutes from "./Routes/user.route.js"
import cookieParser from "cookie-parser"

dotenv.config()
const app = express()
const port = process.env.PORT || 4000;

app.use(express.json())
app.use(cookieParser())

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR:", error);
      throw error;
    }); 

    app.listen(process.env.PORT || 4000, () => {
      console.log(`🚀 App is running on https://localhost:${process.env.PORT || 4000}`);
    });
  })
  .catch((error) => {
    console.log("❌ MongoDB connection failed:", error);
  });

  // route
  app.use("/api/v1/user", userRoutes)
