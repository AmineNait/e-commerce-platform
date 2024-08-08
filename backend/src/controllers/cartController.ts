import { Request, Response } from "express";
import CartItem, { ICartItem } from "../models/cartModel";

export const getCartController = async (req: Request, res: Response) => {
  try {
    const cartItems = await CartItem.find();
    res.json(cartItems);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ message: errorMessage });
  }
};

export const addItemToCartController = async (req: Request, res: Response) => {
  const { productId, name, price, quantity } = req.body;
  const newItem: ICartItem = new CartItem({ productId, name, price, quantity });

  try {
    const savedItem = await newItem.save();
    res.json({ message: "Item added to cart", item: savedItem });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ message: errorMessage });
  }
};

export const removeItemFromCartController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  try {
    await CartItem.findByIdAndDelete(id);
    res.json({ message: `Item with id ${id} removed from cart` });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ message: errorMessage });
  }
};

export const clearCartController = async (req: Request, res: Response) => {
  try {
    await CartItem.deleteMany();
    res.json({ message: "Cart cleared" });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ message: errorMessage });
  }
};
