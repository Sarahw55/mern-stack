import express from "express";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import productRoutes from "./routes/productRoute.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = 5100;

app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("Server is live!");
});
app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:5100 ")});