import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useTodoMutuation from "./todoMutuation.js";
import "reactjs-popup/dist/index.css";
import { useNavigate } from "react-router-dom";

function ProductPage() {
  const items = JSON.parse(localStorage.getItem("watchList"));
  const navigate = useNavigate();
  const { id } = useParams();
  const { addTodoMutation2, addTodoMutation } = useTodoMutuation();
  useEffect(() => {
    if (items.value === "1") {
      addTodoMutation.mutate({ scrip_code: id });
    } else if (items.value === "2") {
      addTodoMutation2.mutate({ scrip_code: id });
    }
    navigate("/superhighvolumestocks");
  }, []);

  return <div className="">Loading...</div>;
}

export default ProductPage;
