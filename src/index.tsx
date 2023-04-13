// react-dom
import { createRoot } from "react-dom/client";

const Header = ({ message }) => <div className="header">{message}</div>;

const App = () => {
  return (
    <div className="container">
      <Header message="Naming contests" />
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);
