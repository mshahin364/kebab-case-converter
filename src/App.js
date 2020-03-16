import React from "react";
import KebabCaseConverter from "./KebabCaseConverter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="header">
        <span className="github-link">
          <a href="https://github.com/mshahin364/kebab-case-converter" className="href"><FontAwesomeIcon icon={faGithub} /></a>
        </span>
      </div>
      
      <KebabCaseConverter />
      <div className="author-container">
        <span className="author">by mshahin364</span>
      </div>
    </div>
  );
}

export default App;
