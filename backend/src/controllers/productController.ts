import { Request, Response } from "express";
import Product, { IProduct } from "../models/productModel";

export const getAllProductsController = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ message: errorMessage });
  }
};

export const addProductController = async (req: Request, res: Response) => {
  const { name, price } = req.body;
  const newProduct: IProduct = new Product({ name, price });

  try {
    const savedProduct = await newProduct.save();
    res.json({ message: "Product added", product: savedProduct });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ message: errorMessage });
  }
};

export const removeProductController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await Product.findByIdAndDelete(id);
    res.json({ message: `Product with id ${id} removed` });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ message: errorMessage });
  }
};
