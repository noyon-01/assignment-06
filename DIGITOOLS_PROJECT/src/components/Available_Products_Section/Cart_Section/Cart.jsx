import { toast } from "react-toastify";

const Cart = ({ addProduct, setAddProduct }) => {
  const handleRemoveBtn = (product) => {
    const filterProduct = addProduct.filter((p) => p.name !== product.name);
    setAddProduct(filterProduct);
    toast.success("Item is successfully Remove");
  };

  const total = addProduct.reduce((sum, item) => sum + item.price, 0);

  const handleCheckoutBtn = () => {
    setAddProduct([]);
    toast.success("Order is Successfully Completed!");
  }

  return (
    <>
      {addProduct.length === 0 ? (
        <div>
          <h3 className="text-2xl font-bold p-4">Your Cart</h3>
          <div className="flex justify-center items-center p-10">
            <button className="text-[#627382] text-sm font-semibold">
              Cart is empty.
            </button>
          </div>
        </div>
      ) : (
        <div>
          {addProduct.map((product, index) => {
            return (
              <div
                key={index}
                className="flex justify-between items-center w-110 md:w-2xl lg:w-5xl mt-5 bg-[#F9FAFC] p-5 rounded"
              >
                <div className="flex justify-center items-center gap-3">
                  <div className="border-2 border-gray-300 bg-white p-3 rounded-full">
                    <img src={product.img} alt={product.name} />
                  </div>
                  <div>
                    <h1 className="text-[20px] font-semibold">
                      {product.name}
                    </h1>
                    <p className="text-[#627382]">${product.price}</p>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleRemoveBtn(product)}
                    className="text-[#FF3980] font-bold cursor-pointer"
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

          <div>
            <p onClick={handleCheckoutBtn} className="btn w-full text-xl font-bold text-center bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white rounded py-2 cursor-pointer">Proceed to Checkout</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
