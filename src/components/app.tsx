import Header from "./header";
import ContestList from "./contest-list";
import Contest from "./contest";
import { useState } from "react";

const App = ({ initialData }) => {
  type ValidPages = "contestList" | "contest";
  const [page, setPage] = useState<ValidPages>("contestList");
  const [currentContestId, setCurrentContestId] = useState();

  const navigateToContest = (contestId) => {
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

  return (
    <div className="container">
      <Header message="Naming contests" />

      {pageContent()}
    </div>
  );
};

export default App;
