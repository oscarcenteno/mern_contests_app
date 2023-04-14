import * as React from "react";

type ContestPreviewParams = React.FC<{
  contest: Object;
  onClick: any;
}>;

const ContestPreview: ContestPreviewParams = ({ contest, onClick }) => {
  const handleClick = (event) => {
    event.preventDefault;

    // Navigate to a new View using a state element to render the contest.
    onClick(contest.id);
  };

  return (
    <div className="contest-preview" onClick={handleClick}>
      <div className="category">{contest.categoryName}</div>
      <div className="contest">{contest.contestName}</div>
    </div>
  );
};

export default ContestPreview;
