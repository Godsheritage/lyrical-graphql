import React from "react";

import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Card, Col, Row, Button } from "antd";
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
      <h1>List Of Songs</h1>
      <ul>
        {data.songs.map((item, index) => (
          <Row gutter={16}>
            <Col span={8} >
              <Card bordered={true}>{item.title}</Card>
            </Col>
          </Row>
        ))}
      </ul>
      <Button>
        <Link to="/addsong">
          Add a song <FaPlusCircle /> 
        </Link>
      </Button>
    </div>
  );
};

export default SongList;
