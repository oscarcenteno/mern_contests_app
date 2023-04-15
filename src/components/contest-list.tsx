/* eslint-disable react/jsx-key */
import ContestPreview from "./contest-preview";
import { useState } from "react";
import Header from "./header";

const ContestList = ({ initialContests, onContestClick }) => {
  const [contests, setContests] = useState(initialContests);

  return (
    <>
      <Header message="Naming contests" />

      <div className="contest-list">
        {contests.map((contest) => {
          return (
            <ContestPreview
              key={contest.id}
              contest={contest}
              onClick={onContestClick}
            />
          );
        })}
      </div>
    </>
  );
};

export default ContestList;
