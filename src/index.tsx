// react-dom
import { createRoot } from "react-dom/client";

const TODOS = ["Learn react", "build something"];

const App = () => {
  return (
    <div className="container" title="Hello React">
      <h1>Hello React</h1>
      <h2 style={{ color: "green" }}>with JSX</h2>
      {Math.random()}
      {TODOS.map((e) => {
        return <li>{e}</li>;
      })}
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);
