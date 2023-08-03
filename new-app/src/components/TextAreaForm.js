import React, { useState } from "react";

export default function TextAreaForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was Clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  };

  const handleLowClick = () => {
    //console.log("Uppercase was Clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  };

  const handleClearClick = () => {
    //console.log("Uppercase was Clicked: " + text);
    let newText = "";
    setText(newText);
    props.showAlert("Cleared Successfully!", "success");
  };

  const handleAltClick = () => {
    //console.log("Uppercase was Clicked: " + text);
    const convertedText = text
      .split("")
      .map((char, index) =>
        index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
      )
      .join("");
    setText(convertedText);
    props.showAlert("Converted to AlternatingCase!", "success");
  };

  const handleCapitalClick = () => {
    //console.log("Uppercase was Clicked: " + text);
    const convertedText = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

    setText(convertedText);
    props.showAlert("Converted to ToggleCase!", "success");
  };

  const handleOnChange = (event) => {
    //console.log("On Change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById("Mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ] +/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const [text, setText] = useState("");
  //Always use setText(i.e update function) in order to change value of text(i.e default function)

  return (
    <>
      <div className="container">
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#323436" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="Mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleAltClick}>
          Alternating Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCapitalClick}>
          Capitalized Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copt Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something to Preview"}</p>
      </div>
    </>
  );
}
