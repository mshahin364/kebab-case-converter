import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [inputText, setInputtext] = useState("");
  const [output, setOutput] = useState("");
  const outputRef = useRef(null);

  const convertToSnakeCase = val => {
    setOutput("");    
    if (!val) return;

    const specialCharsRegex = /[!@.*+?^${}()|[\]|(: )'"=\-\\:/]/g;
    const endingSpecialCharsRegex = /[!@#$%^&*(),.?"':{}|<>\s]+$/g;
    const middleSpecialCharsRegex = /[!@#$%^&*(),.?"':{}|<>+]/g;
    
    val = val.replace(middleSpecialCharsRegex, "");
    val = val.replace(endingSpecialCharsRegex, "");   
    val = val.replace(specialCharsRegex, "{#}");
    val = val.replace(/({#})+/g, "-");

    const kebabCase = val.toLowerCase().replace(/ /g, "-");
    const titleCase = `${kebabCase[0].toUpperCase()}${kebabCase.slice(1)}`;
    setOutput(titleCase);    
  }

  const copy = () => {
    const copyText = outputRef.current;
    copyText.select();
    document.execCommand("copy");
  };

  const paste = () => {
    navigator.clipboard
      .readText()
      .then(text => {
        setInputtext(text);
      })
      .catch(err => {
        console.error("Failed to read clipboard contents: ", err);
      });
  };

  const clear = () => {
    setInputtext("");
    setOutput("");
  };

  return (
    <div className="container">
      <fieldset>
        <legend>Kebab-Case-Converter</legend>
        <small>
          Converts spaces to hyphens (-) and remove all special characters
        </small>
        <div>
          <input
            type="text"
            placeholder="Enter text"
            className="input"
            value={inputText}
            onChange={e => setInputtext(e.target.value)}
            id="input"
          />
        </div>

        <div className="d-flex">
          <button
            onClick={() => convertToSnakeCase(inputText)}
            className="btn-size btn-primary"
          >
            Convert
          </button>{" "}
          &nbsp;
          <button onClick={paste} className="btn-size btn-primary">
            Paste
          </button>{" "}
          &nbsp;
          <button onClick={clear} className="btn-size btn-primary">
            Clear
          </button>{" "}
          &nbsp;
        </div>

        <div style={{ paddingTop: "2em" }}>
          Output: <br />
          <br />
          <input
            type="text"
            id="output"
            className="output"
            value={output}
            ref={outputRef}
            readOnly
          />
        </div>
        <div>
          <button onClick={copy} className="btn-size btn-primary">
            COPY
          </button>
        </div>
      </fieldset>
    </div>
  );
}

export default App;
