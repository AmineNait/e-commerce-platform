interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export const fetchCart = async (): Promise<CartItem[]> => {
  const response = await fetch("http://localhost:5000/api/cart");

  if (!response.ok) {
    throw new Error("Failed to fetch cart");
  }

  return response.json();
};

export const addToCart = async (item: CartItem): Promise<CartItem> => {
  const response = await fetch("http://localhost:5000/api/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });

  if (!response.ok) {
    throw new Error("Failed to add item to cart");
  }

  const responseData = await response.json();
  return responseData.item; // Extrait l'élément de la réponse
};

export const removeFromCart = async (id: number): Promise<void> => {
  const response = await fetch(`http://localhost:5000/api/cart/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to remove item from cart");
  }
};

export const clearCart = async (): Promise<void> => {
  const response = await fetch("http://localhost:5000/api/cart", {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to clear cart");
  }
};
