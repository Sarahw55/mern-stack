import express from "express";
import { createProducts, deleteProducts, getProducts, getProductsById, updateProducts } from "../controllers/productController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import authorizeRoles from "../middleware/roleMiddleware.js";

const router = express.Router();
//add swagger
router.get("/", authMiddleware, authorizeRoles("customer"), getProducts);
//add swagger
router.get("/:id", authMiddleware, authorizeRoles("customer"), getProductsById);
// add swagger
router.post("/", authMiddleware, authorizeRoles("customer"), createProducts);
//add swagger
router.put("/:id", authMiddleware, authorizeRoles("customer"), updateProducts);

//add swagger
router.delete(
  "/:id",
  authMiddleware,
  authorizeRoles("customer"),
  deleteProducts
);
export default router;