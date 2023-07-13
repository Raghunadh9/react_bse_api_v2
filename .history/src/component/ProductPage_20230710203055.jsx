import React from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { compName, name, id } = useParams();

  return (
    <div>
      <h1>Company Name: {compName}</h1>
      <h1>Name: {name}</h1>
      <h1>ID: {id}</h1>
    </div>
  );
}

export default ProductPage;
