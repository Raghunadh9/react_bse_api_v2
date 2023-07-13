import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "react-query";

import "reactjs-popup/dist/index.css";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { addTodo } from "../api/todoApis";

function ProductPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { id } = useParams();

  const addTodoMutuation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  addTodoMutuation.mutate({ scrip_code: id });

  return <div className="">Loading...</div>;
}

export default ProductPage;
