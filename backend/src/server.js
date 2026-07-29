import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import cors from "cors";
import path from "path";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


const app = express();
const __dirname = path.resolve()

console.log(process.env.MONGO_URI);
connectDB();
//middleware
if(process.env.NODE_ENV !== "production") {
app.use(cors({
  origin:"http://localhost:5173",
})
);
} //Enable CORS for all routes

app.use(express.json());
app.use(rateLimiter); // Apply the rate limiter middleware to all routes


app.use("/api/notes", notesRoutes);
if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});

