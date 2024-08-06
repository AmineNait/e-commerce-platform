import { Request, Response } from "express";
import {
  getAllProducts,
  addProduct,
  removeProduct,
} from "../services/productService";

export const getAllProductsController = (_req: Request, res: Response) => {
  const products = getAllProducts();
  res.json(products);
};

export const addProductController = (req: Request, res: Response) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res
      .status(400)
      .json({ message: "Product name and price are required" });
  }

  const newProduct = addProduct({ id: "", name, price });
  res.json({ message: "Product added", product: newProduct });
};

export const removeProductController = (req: Request, res: Response) => {
  const { id } = req.params;
  removeProduct(id);
  res.json({ message: `Product with id ${id} removed` });
};
