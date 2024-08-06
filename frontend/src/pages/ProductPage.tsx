import React, { useState } from "react";
import useProducts from "../hooks/useProducts";

const ProductPage: React.FC = () => {
  const { products, addProduct, removeProduct } = useProducts();
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);

  const handleAddProduct = () => {
    if (productName && productPrice > 0) {
      addProduct({ id: Date.now(), name: productName, price: productPrice });
      setProductName("");
      setProductPrice(0);
    } else {
      alert("Product name and price must be provided");
    }
  };

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
      <div>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Product Name"
        />
        <input
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(Number(e.target.value))}
          placeholder="Product Price"
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
    </div>
  );
};

export default ProductPage;
