import { body, validationResult } from "express-validator";

export const validateRegister = [
  body("name").isString().withMessage("Name must be string").trim().notEmpty().withMessage("Name required"),
  body("email").isEmail().withMessage("Enter valid email").normalizeEmail(),
  body("password").isLength({ min: 6 }).withMessage("Password must be at least 8 characters"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success: false, errors: errors.array().map((err) => ({field: err.param, message: err.msg})),
      })}
    next();
}];

export const validateLogin = [
  body("email").isEmail().withMessage("Enter valid email").normalizeEmail(),
  body("password").notEmpty().withMessage("Password required"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success: false, errors: errors.array().map((err) => ({field: err.param, message: err.msg})),
      })}
    next();
}];