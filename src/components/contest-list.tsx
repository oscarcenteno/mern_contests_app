import ContestPreview from "./contest-preview";
import { useState, useEffect } from "react";
import Header from "./header";
import { fetchContests, addNewContest } from "../api-client";

const ContestList = ({ initialContests, onContestClick }) => {
  const [contests, setContests] = useState(initialContests ?? []);

  useEffect(() => {
    fetchContests().then((contests) => {
      setContests(contests);
    });
  }, [initialContests]);

  const handleNewContestSubmit = async (event) => {
    event.preventDefault();
    // using the DOM API to create a new contest
    const contestName = event.target.newContestName.value;
    const categoryName = event.target.newCategoryName.value;
    const description = event.target.newDescription.value;
    const newContest = await addNewContest({
      contestName,
      categoryName,
      description,
    });

    setContests([...contests, newContest]);
  };

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

      <div className="add-new-contest">
        <div className="header">Propose a new name</div>

        <form onSubmit={handleNewContestSubmit}>
          <input type="text" name="newContestName" placeholder="Contest name" />
          <input
            type="text"
            name="newCategoryName"
            placeholder="Category name"
          />
          <textarea name="newDescription" placeholder="Description" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default ContestList;
