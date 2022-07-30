import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import connectDB from "./config/db"

const app = express()
dotenv.config()

connectDB();

app.use(cors())

app.listen(process.env.PORT, ()=>console.log(`Server is listening on PORT ${process.env.PORT}`))