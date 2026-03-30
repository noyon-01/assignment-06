import { Suspense } from "react";
import "./App.css";
import DigitalTools from "./components/DigitalTools";
import Navber from "./components/Navber";

const toolsData = async () => {
  const res = await fetch("/public/data.json");
  return res.json();
}

function App() {
  

  const toolsPromise = toolsData();

  return (
    <>
    <Navber />
    <Suspense fallback={<p>Loading....</p>}>
      <DigitalTools toolsPromise={toolsPromise}/>
    </Suspense>
    </>
  );
}

export default App;
