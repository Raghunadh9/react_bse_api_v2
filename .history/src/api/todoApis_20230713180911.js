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

//2

export const getTodos2 = async () => {
  const response = await axios.get(
    "https://dragdropapi.onrender.com/allConvertedData2"
  );
  return response.data;
};
export const addTodo2 = async (todo) => {
  return await axios.post(`https://dragdropapi.onrender.com/add_code2`, todo);
};
export const deleteTodo2 = async ({ id }) => {
  return await axios
    .delete(`https://dragdropapi.onrender.com/removeCode2/${id}`, id)
    .catch((err) => console.log(err));
};
