import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import AvailableProducts from "./components/Available_Products_Section/AvailableProducts";
import Navber from "./components/Navber_Section/Navber";
import Hero from "./components/Hero_Section/Hero";
import Count from "./components/Count_Section/Count";
import Account from "./components/Account_Section/Account";
import Price from "./components/Price_Section/Price";
import Workflow from "./components/Workflow_Section/Workflow";
import Footer from "./components/Footer_Section/Footer";

function App() {
  const [addProduct, setAddProduct] = useState([]);

  return (
    <div>
      <Navber addProduct={addProduct} />
      <Hero />
      <Count />
      <AvailableProducts
        addProduct={addProduct}
        setAddProduct={setAddProduct}
      />
      <ToastContainer />
      <Account />
      <Price />
      <Workflow />
      <Footer />
    </div>
  );
}

export default App;
