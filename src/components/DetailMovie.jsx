import React from "react";
import { useParams } from "react-router-dom";

const DetailMovie = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>MovieId {id}</h1>
    </div>
  );
};

export default DetailMovie;
