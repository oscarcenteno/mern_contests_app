import { useState, useEffect } from "react";
import { addNewNameToContest, fetchContest } from "../api-client";
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

  const handleNewNameSubmit = async (event) => {
    event.preventDefault();
    // using the DOM API to create a new name
    const newName = event.target.newName.value;
    const updatedContest = await addNewNameToContest({
      contestId: contest.id,
      newNameValue: newName,
    });
    console.log(updatedContest);
  };

  return (
    <>
      <Header message={contest.contestName} />
      <div className="contest">
        <div className="title">Contest description</div>
        {contest && <div className="description">{contest.description}</div>}

        <div className="title">Proposed names</div>
        <div className="body">{renderNames()}</div>

        <div className="title">Propose a new name</div>
        <div className="body">
          <form onSubmit={handleNewNameSubmit}>
            <input type="text" name="newName" placeholder="New name here" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <a href="/" className="link" onClick={handleClickContestList}>
          Contest List
        </a>
      </div>
    </>
  );
};

export default Contest;
