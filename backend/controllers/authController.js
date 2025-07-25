import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

export const register = async (req, res) => {
  const {name, email, password} = req.body;
  try {
    const userExists = await User.findOne({email});
    if (userExists)
      return 
    res.status(400).json({message: "The user exists."});

    const hashPass = await bcrypt.hash(password, 10);
    const user = await User.create({name, email, password: hashPass, role: "customer"});
    const token = jwt.sign({id: user._id, role: user.role}, JWT_SECRET,{expiresIn: "2h"});
    res.status(201).json({user: {id: user._id, name: user.name, email: user.email}, token});
  } catch (err) {
    res.status(500).json({message: err.message});
}};

export const login = async (req, res) => {
  const {email, password} = req.body;
  try {
    const user = await User.findOne({email});
    if (!user) return res.status(404).json({message: "User cannot be found"});

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({message: "Invalid credentials"});

    const token = jwt.sign({id: user._id, role: user.role}, JWT_SECRET, {expiresIn: "1h"});
    res.status(200).json({user: { id: user._id, name: user.name, email: user.email }, token});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }};