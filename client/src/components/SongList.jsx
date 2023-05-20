import React from "react";
// import gql from "graphql-tag";
// import { graphql } from "react-apollo";

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
    <div>
      <ul>
        {data.songs.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
