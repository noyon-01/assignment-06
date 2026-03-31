import React, { Suspense, useState } from "react";
import Products from "./Product_Section/Products";
import Cart from "./Cart_Section/Cart";

const toolsData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const AvailableProducts = ({ addProduct, setAddProduct }) => {
  const [isProducts, setIsProducts] = useState("products");
  const toolsPromise = toolsData();

  return (
    <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
        Premium Digital Tools
      </h1>
      <p className="text-[#627382] text-center">
        Choose from our curated collection of premium digital products designed{" "}
        <br />
        to boost your productivity and creativity.
      </p>
      <div className="flex justify-center items-center mx-auto mt-4 btn w-40 rounded-3xl">
        <button
          onClick={() => setIsProducts("products")}
          className={
            isProducts === "products"
              ? `btn rounded-3xl bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white`
              : `btn rounded-3xl`
          }
        >
          Products
        </button>
        <button
          onClick={() => setIsProducts("cart")}
          className={
            isProducts === "cart"
              ? `btn rounded-3xl bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white`
              : `btn rounded-3xl`
          }
        >
          Cart ({addProduct.length})
        </button>
      </div>

      <Suspense
        fallback={
          <div className="flex justify-center items-center mt-5">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        }
      >
        {isProducts === "products" ? (
          <Products
            toolsPromise={toolsPromise}
            addProduct={addProduct}
            setAddProduct={setAddProduct}
          />
        ) : (
          <Cart addProduct={addProduct} setAddProduct={setAddProduct} />
        )}
      </Suspense>
    </div>
  );
};

export default AvailableProducts;
