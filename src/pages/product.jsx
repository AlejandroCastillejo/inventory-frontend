import React from "react";
import { useParams } from "react-router-dom";

export const ProductPage = ({ match }) => {
  const { id } = useParams();

  return <div>{id}</div>;
};
