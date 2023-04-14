/* eslint-disable react/jsx-key */
import ContestPreview from "./contest-preview";
import { useState, useEffect } from "react";
import { fecthContests } from "../api-client";

const ContestList = ({ initialContests }) => {
  const [contests, setContests] = useState(initialContests);

  useEffect(() => {
    // get data
    fecthContests().then((response) => {
      // update state
      setContests(response.contests);
    });
  }, []);

  return (
    <div className="contest-list">
      {contests.map((contest) => {
        return <ContestPreview key={contest.id} contest={contest} />;
      })}
    </div>
  );
};

export default ContestList;
