import Header from "./header";
import { useState, useEffect } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  // do anything that is a side effect to the component
  // anything outside React
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("set interval");
      setCounter(counter + 1);
    }, 1000);
    return () => {
      //do clean up for any asynchonous calls
      clearInterval(intervalId);
      console.log("clearInterval");
    };
  });

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
