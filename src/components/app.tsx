import Header from "./header";
import ContestList from "./contest-list";
//import { useState } from "react";

const App = ({ initialData }) => {
  return (
    <div className="container">
      <Header message="Naming contests" />

      <ContestList initialContests={initialData.contests} />
    </div>
  );
};

export default App;
