import { useState, useEffect } from "react";
import { fetchContest } from "../api-client";
import Header from "./header";

const Contest = ({ initialContest, onContestListClick }) => {
  const [contest, setContest] = useState(initialContest);
  useEffect(() => {
    if (!contest.names) {
      fetchContest(contest.id).then((contest) => setContest(contest));
    }
  }, [contest.names, contest.id]);

  const handleClickContestList = (event) => {
    event.preventDefault();
    onContestListClick();
  };

  return (
    <>
      <Header message={contest.contestName} />

      <div className="contest">
        <div className="title">Contest description</div>
        {contest && <div className="description">{contest.description}</div>}
      </div>
      <a href="/" className="link" onClick={handleClickContestList}>
        Contest List
      </a>
    </>
  );
};

export default Contest;
