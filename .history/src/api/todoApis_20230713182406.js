import axios from "axios";
export const getTodos = async () => {
  const response = await axios.get(
    "https://dragdropapi.onrender.com/allConvertedData"
  );
  return response.data;
};
export const addTodo = async (todo) => {
  return await axios.post(`https://dragdropapi.onrender.com/add_code`, todo);
};
export const deleteTodo = async ({ id }) => {
  return await axios
    .delete(`https://dragdropapi.onrender.com/removeCode/${id}`, id)
    .catch((err) => console.log(err));
};
