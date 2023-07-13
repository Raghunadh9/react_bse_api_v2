import axios from "axios";
export const getTodos = async () => {
  const response = await axios.get(
    "https://fetchbseapibackend.vercel.app/allConvertedData"
  );
  return response.data;
};
export const addTodo = async (code) => {
  return await axios.post(
    `https://fetchbseapibackend.vercel.app/add_code`,
    code
  );
};
export const deleteTodo = async (code) => {
  return await axios.delete(
    `https://fetchbseapibackend.vercel.app/removeCode/${code}`
  );
};
