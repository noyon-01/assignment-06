import React, { use, useState } from "react";
import Products from "./Products";
import Cart from "./Cart";

const DigitalTools = ({ toolsPromise }) => {
  const [isProducts, setIsProducts] = useState("products");

  const [addProduct, setAddProduct] = useState([]);


  const data = use(toolsPromise);

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-5xl font-bold text-center mb-4">
        Premium Digital Tools
      </h1>
      <p className="text-[#627382] text-center">
        Choose from our curated collection of premium digital products designed{" "}
        <br />
        to boost your productivity and creativity.
      </p>
      <div className="flex justify-center items-center mt-2">
        <button
          onClick={() => setIsProducts("products")}
          className={
            isProducts === "products"
              ? `btn rounded-3xl bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white `
              : `btn rounded-3xl`
          }
        >
          Products
        </button>
        <button
          onClick={() => setIsProducts("cart")}
          className={
            isProducts === "cart"
              ? `btn rounded-3xl bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white `
              : `btn rounded-3xl`
          }
        >
          Cart ({addProduct.length})
        </button>
      </div>

      {isProducts === "products" ? (
        <Products
          data={data}
          addProduct={addProduct}
          setAddProduct={setAddProduct}
        />
      ) : (
        <Cart
        addProduct={addProduct}
        setAddProduct={setAddProduct}
        />
      )}
    </div>
  );
};

export default DigitalTools;
