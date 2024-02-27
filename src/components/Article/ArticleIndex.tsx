import React from "react";
import { useParams } from "react-router-dom";
type Params = {
  id: string;
};
const ArticleIndex = () => {
  let { id } = useParams<Params>();
  return (
    <>
      <h2>Article Page {id}</h2>
    </>
  );
};

export default ArticleIndex;
