import { useState, useEffect } from "react";
import { fetchContest } from "../api-client";
import Header from "./header";

class ContestDTO {
  id: any;
  names: [{ id: string; name: string }];
  contestName: any;
  description: any;
}

const Contest = ({ initialContest, onContestListClick }) => {
  const [contest, setContest] = useState<ContestDTO>(initialContest);
  useEffect(() => {
    if (!contest.names) {
      fetchContest(contest.id).then((contest) => setContest(contest));
    }
  }, [contest.names, contest.id]);

  const handleClickContestList = (event) => {
    event.preventDefault();
    onContestListClick();
  };

  // render the names from the contest
  const renderNames = () => {
    if (contest.names?.length > 0) {
      return (
        <div className="list">
          {contest.names.map((proposedName) => (
            <div key={proposedName.id} className="item">
              {proposedName.name}
            </div>
          ))}
        </div>
      );
    } else {
      return <div>No names proposed yet</div>;
    }
  };

  return (
    <>
      <Header message={contest.contestName} />
      <div className="contest">
        <div className="title">Contest description</div>
        {contest && <div className="description">{contest.description}</div>}

        <div className="title">Proposed names</div>
        <div className="body">{renderNames()}</div>
        <a href="/" className="link" onClick={handleClickContestList}>
          Contest List
        </a>
      </div>
    </>
  );
};

export default Contest;
