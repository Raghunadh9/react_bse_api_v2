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
  const { deleteTodoMutation } = useTodoMutuation();

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
        <td className="border border-black ">{index + 1}</td>
        <td className="border border-black ">{todo.Name}</td>
        <td className="border border-black ">{todo.LTP}</td>
        <td className="border border-black ">{todo.Change}</td>
        <td className="border border-black ">tr.v</td>
        <td className="border border-black ">vol</td>
        <td className="border border-black ">max.uc</td>
        <td className="border border-black ">
          <button
            onClick={() => deleteTodoMutation.mutate({ id: todo.scrip_cd })}
          >
            <XCircleIcon className="h-5 w-5 text-red-500" />
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
      <table className="table w-fit">
        <thead
          style={{
            background: "linear-gradient(270deg,#20bf55,#01baef)",
            position: "sticky",
            top: 0,
            color: "#fff",
          }}
        >
          <tr>
            <th className="border border-black ">S.No</th>
            <th className="border border-black ">Name</th>
            <th className="border border-black ">LTP</th>
            <th className="border border-black ">Change</th>
            <th className="border border-black ">Tr.v</th>
            <th className="border border-black ">Volume</th>
            <th className="border border-black ">Max.Uc</th>
            <th className="border border-black ">Delete</th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>
    </div>
  );
};

export default SuperHighVolume;
