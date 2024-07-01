import { useState } from "react";
import Input from "./components/component-1/Input";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-screen flex items-center justify-center ">
      <Input />
    </div>
  );
}

export default App;
