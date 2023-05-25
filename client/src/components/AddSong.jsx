import React from "react";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const AddSong = () => {
  const [textInput, setTextInput] = useState("");
  const clickHandler = () => {};





 

  const createSong = gql`
    mutation AddSong($title:String){
      addSong(title:$title) {
        id
        title
      }
    }
  `;

  const [addSong, { loading, error }] = useMutation(createSong);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const { data } = await addSong({
    //     variables: {
    //       input: {
    //         title: 'Fourth Song',
    //       },
    //     },
    //   });
    //   console.log('Song created:', data.addSong);
    // } catch (error) {
    //   console.error('Error creating song:', error);
    // }
  };




  return (
    <div className="container">
      <h1>Add a song</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setTextInput(e.target.value)} />
        <button onClick={clickHandler} className="btn waves-effect waves-light">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddSong;









