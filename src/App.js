import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputtext] = useState("");
  const [output, setOutput] = useState("");

  const convertToSnakeCase = val => {
    console.log(val);
    
    setOutput('');
    if (!val) return;
    // val = val.replace(/[.*+?^${}()|[\]\=\-\\:/]/g, '{#}');
    // val = val.replace(/[.*+?^${}()|[\]|(: )\=\-\\:/]/g, '{#}');
    val = val.replace(/[.*+?^${}()|[\]|(: )'\"\=\-\\:/]/g, "{#}");
    val = val.replace(/({#})+/g, "-");
    const orginal = val.toLowerCase().replace(/ /g, "-");
    const _output = `${orginal[0].toUpperCase()}${orginal.slice(1)}`;
    setOutput(_output);
  };

  const copy = () => {
    /* Get the text field */
    const copyText = document.getElementById("output");

    /* Select the text field */
    copyText.select();

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    // alert("Copied the text: " + copyText.value);
  };
  const paste = () => {
    navigator.clipboard
      .readText()
      .then(text => {
        // this.inputText.setValue(text);
        setInputtext(text);
      })
      .catch(err => {
        console.error("Failed to read clipboard contents: ", err);
      });
  };

  const clear = () => {
    setInputtext('');
    setOutput('');
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
