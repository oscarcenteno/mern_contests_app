import ContestList from "./contest-list";
import Contest from "./contest";
import { useState, useEffect } from "react";

const App = ({ initialData }) => {
  type ValidPages = "contestList" | "contest";
  const [page, setPage] = useState<ValidPages>("contestList");
  const [currentContestId, setCurrentContestId] = useState();

  // to be able to navigate between pages
  useEffect(() => {
    window.onpopstate = (event) => {
      const newPage = event.state?.contestId ? "contest" : "contestList";
      setPage(newPage);
      setCurrentContestId(event.state?.contestId);
    };
  }, []);

  const navigateToContest = (contestId) => {
    window.history.pushState({ contestId }, "", `/contests/${contestId}`);
    setPage("contest");
    setCurrentContestId(contestId);
  };

  const pageContent = () => {
    switch (page) {
      case "contestList":
        return (
          <ContestList
            initialContests={initialData.contests}
            onContestClick={navigateToContest}
          />
        );
      case "contest":
        return <Contest id={currentContestId} />;
      default:
        return "...";
    }
  };

  return <div className="container">{pageContent()}</div>;
};

export default App;
