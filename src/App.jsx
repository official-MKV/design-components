import { useState } from "react";
import Input from "./components/component-1/Input";
import Page from "./components/component-2/Page";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" w-full h-screen flex items-center justify-center">
      <Input />
      {/* <Page /> */}
    </div>
  );
}

export default App;
