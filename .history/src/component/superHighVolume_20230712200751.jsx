import React, { useEffect, useState } from "react";
import axios from "axios";
import "reactjs-popup/dist/index.css";
import { useQuery } from "react-query";
import { getTodos, deleteTodo } from "../api/todoApis";
import { XCircleIcon } from "@heroicons/react/24/solid";
import useTodoMutuation from "./todoMutuation.js";

const SuperHighVolume = () => {
  const [searchStockName, setSearchStockName] = useState("");
  const [bseapisearchresponse, setBseapisearchresponse] = useState("");

  const changeHandler = (e) => {
    setSearchStockName(e.target.value);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.bseindia.com/Msource/90D/getQouteSearch.aspx?Type=EQ&text=${searchStockName}&flag=gq`
      )
      .then((res) => setBseapisearchresponse(res.data))
      .catch((error) => {
        console.log("Error fetching BSE API data:", error);
      });
  }, [searchStockName]);
  const { addTodoMutation, deleteTodoMutation } = useTodoMutuation();

  const { isLoading, isError, error, data } = useQuery("todos", getTodos, {
    select: (data) => data.sort((a, b) => b.id - a.id),
  });

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>{error.message}</p>;
  } else {
    content = data.map((todo, index) => (
      <tr key={todo.id}>
        <td>{index + 1}</td>
        <td>{todo.Name}</td>
        <td>{todo.LTP}</td>
        <td>{todo.Change}</td>
        <td>tr.v</td>
        <td>vol</td>
        <td>max.uc</td>
        <td>
          <button
            onClick={() => deleteTodoMutation.mutate({ id: todo.scrip_cd })}
          >
            <XCircleIcon className="h-5 w-5" />
          </button>
        </td>
      </tr>
    ));
  }

  return (
    <div>
      <center>
        <div className="md:w-2/3">
          <input
            className="mt-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            placeholder="Search Code Here..."
            value={searchStockName}
            onChange={changeHandler}
          />
          <div>
            <div
              className="bg-blue-300 text-white"
              dangerouslySetInnerHTML={{ __html: bseapisearchresponse }}
            />
          </div>
        </div>
      </center>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>LTP</th>
            <th>Change</th>
            <th>Tr.v</th>
            <th>Volume</th>
            <th>Max.Uc</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>
    </div>
  );
};

export default SuperHighVolume;
