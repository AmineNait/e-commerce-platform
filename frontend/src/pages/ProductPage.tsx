import React from "react";
import useProducts from "../hooks/useProducts";

const ProductPage: React.FC = () => {
  const { products, addProduct, removeProduct } = useProducts();

  return (
    <div>
      <h1>Product Page</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => removeProduct(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          addProduct({ id: Date.now(), name: "New Product", price: 100 })
        }
      >
        Add Product
      </button>
    </div>
  );
};

export default ProductPage;
