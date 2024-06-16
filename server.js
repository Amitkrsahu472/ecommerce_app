import pkg from 'colors';
const { bgCyan } = pkg;
import express  from 'express';
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from './config/db.js';
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js"
import authRoute from "./routes/authRoute.js"
import productRoutes from "./routes/productRoutes.js"
import path from 'path'
import { fileURLToPath } from 'url';

// configure env
dotenv.config();

//connect to database
connectDB();
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename)

//rest object
const app=express()

//middleware
app.use(cors())
app.use(express.json()) // allow ause to use json format data
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname,'./client/build')))

//routes

app.use("/api/v1/auth",authRoute)
app.use("/api/v1/category",categoryRoutes)
app.use("/api/v1/product", productRoutes);

//rest api
app.use('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'));
});

//port
const PORT=process.env.port || 8080;

//RUN LISTEN
app.listen(PORT,()=>{
    console.log(`app listening in ${process.env.DEV_MODE} MODE on port ${PORT}`.bgCyan.white);
})