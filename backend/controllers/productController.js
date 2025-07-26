import mongoose from "mongoose";
import Product from "../models/productModel.js";

export const getProducts = async (req,res) => {
  try {
    const products = await Product.find({});

    res.status(200).json({success: true, message: "Products recieved successfully", data: products});
  } catch (error) {
    console.error("Error in recieving products:", error.message);
    res.status(500).json({success: false, message: "Server Error",});
  }};

export const getProductsById = async (req, res) => {
  const { prodId } = req.params;
  try {
    const product = await Product.findById(prodId);
    res.status(200).json({success: true, message: "Product fetched successfully", data: product});
  } catch (error) {
    console.error("Error in fetching product:", error.message);
    res.status(500).json({success: false, message: "Server Error"});
  }};

export const createProducts = async (req, res) => {
  const product =req.body;
  if (!product.title || !product.image || !product.description || !product.price) {
    return res.status(400).json({success: false, message: "Please provide fields"});
  }
  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({success: true, message: "Product created successfully", data: newProduct});
  } catch (error) {
    console.error("Error in Create product:", error.message);
    res.status(500).json({
      success: false, message: "Server Error"});
  }};