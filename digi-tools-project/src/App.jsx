import { Suspense, useState } from "react";
import "./App.css";
import DigitalTools from "./components/DigitalTools";
import Navber from "./components/Navber";

const toolsData = async () => {
  const res = await fetch("/public/data.json");
  return res.json();
};

function App() {
  const [addProduct, setAddProduct] = useState([]);

  const toolsPromise = toolsData();

  return (
    <>
      <Navber addProduct={addProduct} />
      <Suspense fallback={<div className="flex justify-center items-center mt-5"><span className="loading loading-bars loading-xl"></span></div>}>
        <DigitalTools
          toolsPromise={toolsPromise}
          addProduct={addProduct}
          setAddProduct={setAddProduct}
        />
      </Suspense>
    </>
  );
}

export default App;
