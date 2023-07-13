import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useTodoMutuation from "./todoMutuation.js";
import "reactjs-popup/dist/index.css";
import { useNavigate } from "react-router-dom";

function ProductPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { addTodoMutation, deleteTodoMutation } = useTodoMutuation();
  useEffect(() => {
    addTodoMutation.mutate({ scrip_code: id });
  }, []);

  return <div className="">Loading...</div>;
}

export default ProductPage;
