import { useState } from "react";
import Input from "./components/component-1/Input";
import Page from "./components/component-2/Page";
import GradientBorder from "./components/component-3/GradientBorder";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" w-full h-screen flex items-center justify-center bg-black">
      {/* <Input /> */}
      {/* <Page /> */}
      <GradientBorder />
    </div>
  );
}

export default App;
