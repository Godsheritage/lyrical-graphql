import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const SongList = () => {
  const query = gql`
    {
      songs {
        title
      }
    }
  `;

  const { loading, data, error } = useQuery(query);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container">
      <ul>
        {data.songs.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
      <Link to="/addsong">
        <FaPlusCircle />
      </Link>
    </div>
  );
};

export default SongList;
