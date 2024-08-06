import React, { useState } from "react";
import useCart from "../hooks/useCart";

const CartPage: React.FC = () => {
  const { cart, addItemToCart, removeItemFromCart, clearCart } = useCart();
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);

  const handleAddItem = () => {
    if (itemName && itemPrice > 0) {
      const newItem = {
        id: Date.now(),
        name: itemName,
        price: itemPrice,
        quantity: 1,
      };
      addItemToCart(newItem);
      setItemName("");
      setItemPrice(0);
    } else {
      alert("Item name and price must be provided");
    }
  };

  return (
    <div>
      <h1>Cart Page</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Item Name"
        />
        <input
          type="number"
          value={itemPrice}
          onChange={(e) => setItemPrice(Number(e.target.value))}
          placeholder="Item Price"
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <button onClick={() => clearCart()}>Clear Cart</button>
    </div>
  );
};

export default CartPage;
