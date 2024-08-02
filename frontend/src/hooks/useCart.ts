import { useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import {
  fetchCart,
  addToCart as addToCartService,
  removeFromCart as removeFromCartService,
  clearCart as clearCartService,
} from "../services/cartService";

const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  useEffect(() => {
    const loadCart = async () => {
      const cart = await fetchCart();
      cart.forEach(context.addToCart);
    };
    loadCart();
  }, [context.addToCart]);

  const addToCart = async (item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }) => {
    const newItem = await addToCartService(item);
    context.addToCart(newItem);
  };

  const removeFromCart = async (id: number) => {
    await removeFromCartService(id);
    context.removeFromCart(id);
  };

  const clearCart = async () => {
    await clearCartService();
    context.clearCart();
  };

  return { ...context, addToCart, removeFromCart, clearCart };
};

export default useCart;
