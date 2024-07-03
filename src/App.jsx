import { useState } from "react";
import Input from "./components/component-1/Input";
import Page from "./components/component-2/Page";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      {/* <Input /> */}
      <Page />
    </div>
  );
}

export default App;
