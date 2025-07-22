import express from "express";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import productRoutes from "./routes/productRoute.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const allowedOrigins = [
 //Add URLS
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
      return callback(null, true);
      } else {
      return callback(new Error("Not allowed by CORS"));
      }},
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }));

app.use(express.json());
app.use(
  "/api-docs",
 //add swagger!
);

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("Server is live!");
});

app.listen(process.env.PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:5401 ");
  console.log(
    `Swagger dos available at http://localhost:${process.env.PORT}/api-docs`
  )});