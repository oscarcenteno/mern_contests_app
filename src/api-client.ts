import axios from "axios";
import { API_SERVER_URL } from "./public-config";

export const fetchContests = async () => {
  const response = await axios.get(`${API_SERVER_URL}/contests`);
  return response.data.contests;
};

export const fetchContest = async (contestId) => {
  const response = await axios.get(`${API_SERVER_URL}/contests/${contestId}`);
  return response.data.contest;
};

export const addNewNameToContest = async ({ contestId, newNameValue }) => {
  const response = await axios.put(`${API_SERVER_URL}/contests/${contestId}`, {
    newNameValue,
  });
  return response.data.updatedContest;
};

export const addNewContest = async ({
  contestName,
  categoryName,
  description,
}) => {
  const response = await axios.post(`${API_SERVER_URL}/contests`, {
    contestName,
    categoryName,
    description,
  });
  return response.data.insertedContest;
};
