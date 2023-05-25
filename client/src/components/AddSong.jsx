import React from "react";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const AddSong = () => {
  const [textInput, setTextInput] = useState("");
  const clickHandler = () => {};

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const addSong = gql`
    mutation AddSong($title:String){
      addSong(title:$title) {
        id
        title
      }
    }
  `;

  const [AddSong, { loading, error }] = useMutation(addSong);



  


  return (
    <div className="container">
      <h1>Add a song</h1>
      <form action="" onSubmit={submitHandler}>
        <input type="text" onChange={(e) => setTextInput(e.target.value)} />
        <button onClick={clickHandler} className="btn waves-effect waves-light">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddSong;
