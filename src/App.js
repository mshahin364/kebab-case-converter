import React from "react";
import KebabCaseConverter from "./KebabCaseConverter";
import "./App.css";

function App() {
  return (
    <div className="container">
      <KebabCaseConverter />
      <div className="author-container">
        <span className="author">by mshahin364</span>
      </div>
    </div>
  );
}

export default App;
