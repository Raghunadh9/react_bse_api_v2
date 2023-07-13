// useTodoMutation.js
import { useMutation, useQueryClient } from "react-query";
import { addTodo, deleteTodo, getTodos } from "../api/todoApis";

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
  const onRefresh = queryClient.invalidateQueries("todos");

  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
    onError: (err) => {
      console.log("Error deleting todo:", err);
    },
  });

  return { addTodoMutation, deleteTodoMutation, onRefresh };
};

export default useTodoMutation;
