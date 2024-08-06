import React, {
  createContext,
  useState,
  ReactNode,
  useCallback,
  useContext,
} from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  clearProducts: () => void;
}

export const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = useCallback((product: Product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  }, []);

  const removeProduct = useCallback((id: number) => {
    setProducts((prevProducts) => prevProducts.filter((p) => p.id !== id));
  }, []);

  const clearProducts = useCallback(() => {
    setProducts([]);
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, addProduct, removeProduct, clearProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};
