import { Request, Response } from "express";
import {
  getCart,
  addItemToCart,
  removeItemFromCart,
  clearCart,
} from "../services/cartService";

export const getCartController = (_req: Request, res: Response) => {
  const cart = getCart();
  res.json(cart);
};

export const addItemToCartController = (req: Request, res: Response) => {
  const item = req.body;
  const addedItem = addItemToCart(item);
  res.json({ message: "Item added to cart", item: addedItem });
};

export const removeItemFromCartController = (req: Request, res: Response) => {
  const { id } = req.params;
  removeItemFromCart(parseInt(id, 10));
  res.json({ message: `Item with id ${id} removed from cart` });
};

export const clearCartController = (_req: Request, res: Response) => {
  clearCart();
  res.json({ message: "Cart cleared" });
};
