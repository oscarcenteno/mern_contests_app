import axios from "axios";
import { API_SERVER_URL } from "./public-config";

export const fecthContests = async () => {
  const response = await axios.get(`${API_SERVER_URL}/contests`);
  return response.data;
};
