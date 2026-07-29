import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import cors from "cors";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


const app = express();

console.log(process.env.MONGO_URI);
connectDB();
//middleware
app.use(cors({
  origin:"http://localhost:5173",
})); //Enable CORS for all routes

app.use(express.json());
app.use(rateLimiter); // Apply the rate limiter middleware to all routes


app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});

