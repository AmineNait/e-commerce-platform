interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export const fetchCart = async (): Promise<CartItem[]> => {
  const response = await fetch("/api/cart");

  if (!response.ok) {
    throw new Error("Failed to fetch cart");
  }

  return response.json();
};

export const addToCart = async (item: CartItem) => {
  const response = await fetch("/api/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });

  if (!response.ok) {
    throw new Error("Failed to add to cart");
  }

  return response.json();
};

export const removeFromCart = async (id: number) => {
  const response = await fetch(`/api/cart/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to remove from cart");
  }

  return response.json();
};

export const clearCart = async () => {
  const response = await fetch("/api/cart", {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to clear cart");
  }

  return response.json();
};
