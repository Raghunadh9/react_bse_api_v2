// useTodoMutation.js
import { useMutation, useQueryClient } from "react-query";
import {
  addTodo,
  addTodo2,
  deleteTodo,
  deleteTodo2,
  getTodos,
} from "../api/todoApis";

const useTodoMutation = () => {
  const queryClient = useQueryClient();

  const addTodoMutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
    onError: (err) => {
      console.log("Error adding todo:", err);
    },
  });

  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
    onError: (err) => {
      console.log("Error deleting todo:", err);
    },
  });

  //2

  const addTodoMutation2 = useMutation(addTodo2, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos2");
    },
    onError: (err) => {
      console.log("Error adding todo:", err);
    },
  });

  const deleteTodoMutation2 = useMutation(deleteTodo2, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos2");
    },
    onError: (err) => {
      console.log("Error deleting todo:", err);
    },
  });

  return {
    addTodoMutation,
    deleteTodoMutation,
    addTodoMutation2,
    deleteTodoMutation2,
  };
};

export default useTodoMutation;
