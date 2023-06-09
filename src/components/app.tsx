import ContestList from "./contest-list";
import Contest from "./contest";
import { useState, useEffect } from "react";

const App = ({ initialData }) => {
  type ValidPages = "contestList" | "contest";
  const [page, setPage] = useState<ValidPages>(
    initialData.currentContest ? "contest" : "contestList",
  );
  type CurrentContest = object | undefined;

  const [currentContest, setCurrentContest] = useState<CurrentContest>(
    initialData.currentContest,
  );

  // to be able to navigate between pages
  useEffect(() => {
    window.onpopstate = (event) => {
      const newPage = event.state?.contestId ? "contest" : "contestList";
      setPage(newPage);
      setCurrentContest({ id: event.state?.contestId });
    };
  }, []);

  const navigateToContest = (contestId) => {
    window.history.pushState({ contestId }, "", `/contests/${contestId}`);
    setPage("contest");
    setCurrentContest({ id: contestId });
  };

  const navigateToContestList = () => {
    window.history.pushState({}, "", `/`);
    setPage("contestList");
    setCurrentContest(undefined);
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
        return (
          <Contest
            initialContest={currentContest}
            onContestListClick={navigateToContestList}
          />
        );
      default:
        return "...";
    }
  };

  return <div className="container">{pageContent()}</div>;
};

export default App;
