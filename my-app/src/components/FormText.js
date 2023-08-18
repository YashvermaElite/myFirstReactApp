import React, { useState } from "react";

export default function FormText(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase !",'success')
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase !",'success')
  };

  const handleOnChange = (event) => {
    setText(event.target.value) 
  };
  const copyText = ()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard",'success')

  };
  const clearAll = () => {
    let clear = "";
    setText(clear)
    props.showAlert("Clear All",'success')
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container"  style={{color: props.mode==='dark'? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            
            style={{backgroundColor: props.mode==='light'? 'white':'black', color: props.mode==='dark'? 'white':'#08040b'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lower Case
        </button>
        <button className="btn btn-primary mx-1" onClick={copyText}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={clearAll}>
          Clear All
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'? 'white':'black'}}>
        <h2>Your text summery</h2>
        <p> {text.split(" ").length === 1 ? 0 : text.split(" ").length } words, {text.length} charachters</p>
      </div>
      </>
      
  );
}
