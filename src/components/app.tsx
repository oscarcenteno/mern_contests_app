import Header from "./header";
import ContestList from "./contest-list";
import { useState } from "react";

const App = ({ initialData }) => {
  const [page, setPage] = useState("contestList");

  const navigateToContest = () => {
    setPage("contest");
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
        return "something else";
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
