import { Suspense, useState } from "react";
import "./App.css";
import DigitalTools from "./components/DigitalTools";
import Navber from "./components/Navber";
import Hero from "./components/Hero";
import Count from "./components/Count";
import Account from "./components/Account";
import Price from "./components/Price";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";

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
      <Hero />
      <Count />
      <Suspense fallback={<div className="flex justify-center items-center mt-5"><span className="loading loading-bars loading-xl"></span></div>}>
        <DigitalTools
          toolsPromise={toolsPromise}
          addProduct={addProduct}
          setAddProduct={setAddProduct}
        />
      </Suspense>
      <Account />
      <Price />
      <Workflow />
      <Footer />
    </>
  );
}

export default App;
