import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Sidebar from "../Sidebar/Sidebar";
import "./productlist.css";

const ProductList = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [products, setProduct] = useState([]);

  const searchProducts = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    setProduct(data);
  };

  const handleFilterChange = async (category) => {
    if (category === "") {
      const response = await fetch(`${API_URL}`);
      const data = await response.json();
      setProduct(data);
    } else {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      setProduct(filteredProducts);
    }
  };



  useEffect(() => {
    searchProducts();
  }, []);

  return (
    <div className="productbody">
      <Sidebar products={products} onFilter={handleFilterChange} />
      <div className="container">
        {products?.length > 0 ? (
          <div className="product-container">
            {products.map((product, id) => (
              <ProductCard product={product} key={id} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Product found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
