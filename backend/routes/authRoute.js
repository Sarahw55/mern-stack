import express from "express";
import { register, login } from "../controllers/authController.js";
import { validateLogin, validateRegister } from "../validators/authValidators.js";

const router = express.Router();
//add swagger
router.post("/register", validateRegister, register);
//add swagger
router.post("/login", validateLogin, login);
export default router;