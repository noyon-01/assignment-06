import { use } from "react";
import SingleProduct from "../Single_Product_Section/SingleProduct";

const Products = ({ toolsPromise, addProduct, setAddProduct }) => {
  const data = use(toolsPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
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
