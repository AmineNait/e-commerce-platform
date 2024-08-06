import { useContext, useEffect, useRef } from "react";
import { ProductContext } from "../contexts/ProductContext";
import {
  fetchProducts,
  addProduct as addProductService,
  removeProduct as removeProductService,
} from "../services/productService";

const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductProvider");
  }

  const didFetchProducts = useRef(false);

  useEffect(() => {
    if (didFetchProducts.current) return;

    const loadProducts = async () => {
      const products = await fetchProducts();
      context.clearProducts();
      products.forEach(context.addProduct);
    };

    loadProducts();
    didFetchProducts.current = true;
  }, [context]);

  const addProduct = async (product: {
    id: number;
    name: string;
    price: number;
  }) => {
    const newProduct = await addProductService(product);
    context.addProduct(newProduct);
  };

  const removeProduct = async (id: number) => {
    await removeProductService(id);
    context.removeProduct(id);
  };

  return { ...context, addProduct, removeProduct };
};

export default useProducts;
