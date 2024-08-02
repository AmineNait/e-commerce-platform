import React from "react";
import useCart from "../hooks/useCart";

const CartPage: React.FC = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h1>Cart Page</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          addToCart({
            id: Date.now(),
            name: "New Item",
            price: 50,
            quantity: 1,
          })
        }
      >
        Add Item
      </button>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default CartPage;
