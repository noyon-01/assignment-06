import React from "react";
import SingleProduct from "./SingleProduct";

const Products = ({ data, addProduct, setAddProduct }) => {
  return (
    <div className="grid grid-cols-3 gap-5 mt-5">
      {data.map((product) => (
        <SingleProduct
          key={product.id}
          product={product}
          addProduct={addProduct}
          setAddProduct={setAddProduct}
        />
      ))}
    </div>
  );
};

export default Products;
