// react-dom
import { createRoot } from "react-dom/client";
import App from "./components/app";

const container = document.getElementById("app");
const root = createRoot(container);

// apis
import axios from "axios";
import { API_SERVER_URL } from "./public-config";
axios.get(`${API_SERVER_URL}/contests`).then((response) => {
  root.render(<App initialData={{ contests: response.data.contests }} />);
});
