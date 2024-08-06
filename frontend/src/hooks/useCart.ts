import { useContext, useEffect, useRef } from "react";
import { CartContext } from "../contexts/CartContext";
import {
  fetchCart,
  addToCart as addItemService,
  removeFromCart as removeItemService,
  clearCart as clearCartService,
} from "../services/cartService";

const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  const didFetchCart = useRef(false);

  useEffect(() => {
    if (didFetchCart.current) return;

    const loadCart = async () => {
      const cart = await fetchCart();
      context.clearCart();
      cart.forEach(context.addItemToCart);
    };

    loadCart();
    didFetchCart.current = true;
  }, [context]);

  const addItemToCart = async (item: {
    id: number;
    name: string;
    price: number;
  }) => {
    const newItem = await addItemService({ ...item, quantity: 1 });
    context.addItemToCart(newItem);
  };

  const removeItemFromCart = async (id: number) => {
    await removeItemService(id);
    context.removeItemFromCart(id);
  };

  const clearCart = async () => {
    await clearCartService();
    context.clearCart();
  };

  return { ...context, addItemToCart, removeItemFromCart, clearCart };
};

export default useCart;
