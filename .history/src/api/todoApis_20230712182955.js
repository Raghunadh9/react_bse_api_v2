import axios from "axios";
export const getTodos = async () => {
  const response = await axios.get(
    "https://fetchbseapibackend.vercel.app/allConvertedData"
  );
  return response.data;
};
export const addTodo = async (todo) => {
  return await axios.post(
    `https://fetchbseapibackend.vercel.app/add_code`,
    todo
  );
};
export const deleteTodo = async (todo) => {
  return await axios.delete(
    `https://fetchbseapibackend.vercel.app//removeCode/${todo}`
  );
};
