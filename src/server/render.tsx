import ReactDOMServer from "react-dom/server";

import { fetchContests, fetchContest } from "../api-client";

import App from "../components/app";

const serverRender = async (req) => {
  const { contestId } = req.params;
  const initialData = contestId
    ? { currentContest: await fetchContest(contestId) }
    : { contests: await fetchContests() };

  const initialMarkup = ReactDOMServer.renderToString(
    <App initialData={initialData} />,
  );

  return { initialMarkup, initialData };
};

export default serverRender;
