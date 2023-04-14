/* eslint-disable react/jsx-key */
import ContestPreview from "./contest-preview";
import { useState, useEffect } from "react";

const ContestList = ({ initialContests, onContestClick }) => {
  const [contests, setContests] = useState(initialContests);

  useEffect(() => {
    // get data
    /**import { fetchContests } from "../api-client";
   fetchContests().then((contests) => {
      setContests(contests);
    });*/
  }, []);

  return (
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
  );
};

export default ContestList;
