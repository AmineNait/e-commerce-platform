interface Product {
  id: number;
  name: string;
  price: number;
}

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch("http://localhost:5000/api/products");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
};

export const addProduct = async (product: Product) => {
  const response = await fetch("http://localhost:5000/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Failed to add product");
  }

  return response.json();
};

export const removeProduct = async (id: number) => {
  const response = await fetch(`http://localhost:5000/api/products/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to remove product");
  }

  return response.json();
};
