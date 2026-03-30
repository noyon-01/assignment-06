import React from "react";

const Cart = ({ addProduct, setAddProduct }) => {
  const handleRemoveBtn = (product) => {
    const filterProduct = addProduct.filter((p) => p.name !== product.name);
    setAddProduct(filterProduct);
  };

  const total = addProduct.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {addProduct.length === 0 ? (
        <div>
          <h3 className="text-2xl font-bold p-4">Your Cart</h3>
          <div className="flex justify-center items-center p-10">
            <p className="text-[#627382] text-sm font-semibold">
              Cart is empty.
            </p>
          </div>
        </div>
      ) : (
        <div>
          {addProduct.map((product, index) => {
            return (
              <div
                key={index}
                className="flex justify-between items-center mt-5 bg-[#F9FAFC] p-5 rounded"
              >
                <div>
                  <h1 className="text-[20px] font-semibold">{product.name}</h1>
                  <p className="text-[#627382]">${product.price}</p>
                </div>
                <div>
                  <button
                    onClick={() => handleRemoveBtn(product)}
                    className="text-[#FF3980] font-bold"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
          <div className="flex justify-between items-center my-4">
            <p className="text-[#627382] font-bold">Total:</p>
            <p className="text-2xl font-bold">${total}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
