import Header from "./header";
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <Header message="Naming contests" />
      <button
        type="submit"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        {counter}
      </button>
    </div>
  );
};

export default App;
