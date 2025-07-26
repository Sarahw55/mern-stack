import express from "express";
import {createProducts, getProducts, getProductsById} from "../controllers/productController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getProducts);
router.get("/:id", authMiddleware, getProductsById);
router.post("/", authMiddleware, createProducts);
export default router;