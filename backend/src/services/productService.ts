import { v4 as uuidv4 } from "uuid";

interface Product {
  id: string;
  name: string;
  price: number;
}

let products: Product[] = [
  { id: uuidv4(), name: "Product 1", price: 100 },
  { id: uuidv4(), name: "Product 2", price: 200 },
];

export const getAllProducts = (): Product[] => {
  return products;
};

export const addProduct = (product: Product): Product => {
  const newProduct = { ...product, id: uuidv4() };
  products.push(newProduct);
  return newProduct;
};

export const removeProduct = (id: string): void => {
  products = products.filter((product) => product.id !== id);
};
