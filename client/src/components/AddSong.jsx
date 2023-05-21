import React from "react";
import { useState } from "react";

const AddSong = () => {
  const [input, setInput] = useState("");
  const clickHandler = () => {};

  return (
    <div className="container">
      <h1>Add a song</h1>
      <form action="">
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button onClick={clickHandler} className="btn waves-effect waves-light">Submit</button>
      </form>
    </div>
  );
};

export default AddSong;
