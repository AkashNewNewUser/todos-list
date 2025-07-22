import React, { useState } from 'react';

export default function Form() {
  const [text, setText] = useState('Enter text Here');

  // Function to handle text change
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Function to convert to uppercase
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  return (
    <>
    <div>
      <h1>{text}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
    </div>
    <div className="mb-3">
       <h1>Your text summary</h1>
       <p>{text.split(" ").length}your length is {text.length}</p>
       <p>total time to read {0.008 * text.split(" ").length}</p>
    </div>

    </>
  );
}
