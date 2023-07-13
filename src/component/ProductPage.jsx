import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useTodoMutuation from "./todoMutuation.js";
import "reactjs-popup/dist/index.css";
import { useNavigate } from "react-router-dom";

function ProductPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { addTodoMutation } = useTodoMutuation();
  useEffect(() => {
    addTodoMutation.mutate({ scrip_code: id });
    navigate("/superhighvolumestocks");
  }, []);

  return <div className="">Loading...</div>;
}

export default ProductPage;
