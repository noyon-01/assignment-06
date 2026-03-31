import React, { useState } from "react";

const SingleProduct = ({ product, addProduct, setAddProduct }) => {
  const [addBtn, setAddBtn] = useState(false);
  const handleAddToCart = () => {
    const isFound = addProduct.find((item) => item.id === product.id);
    if (isFound) {
      alert("Item is alredy added to cart");
      return;
    }

    setAddProduct([...addProduct, product]);
    setAddBtn(true);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-sm">
      <div className="card-body">
        <div className="flex justify-between">
          <p>img</p>
          <p className="text-right">{product.tag}</p>
        </div>
        <div className="">
          <h2 className="text-2xl font-bold">{product.name}</h2>
        </div>
        <p className="text-[#627382]">{product.description}</p>
        <span className="text-xl font-bold">
          ${product.price}/{" "}
          <span className="font-semibold text-sm">{product.period}</span>
        </span>
        <ul className="mt-2 flex flex-col gap-2 text-xs">
          {product.features.map((feature, index) => (
            <li key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-3">
          <button
            onClick={handleAddToCart}
            className="btn bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white btn-block rounded-3xl"
          >
            {addBtn ? "Add To Cart" : " Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
