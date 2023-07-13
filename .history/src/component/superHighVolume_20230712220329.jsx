import React, { useEffect, useState } from "react";
import axios from "axios";
import "reactjs-popup/dist/index.css";
import { useQuery } from "react-query";
import { getTodos } from "../api/todoApis";
import { TrashIcon } from "@heroicons/react/24/solid";
import useTodoMutuation from "./todoMutuation.js";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const SuperHighVolume = () => {
  const [searchStockName, setSearchStockName] = useState("");
  const [bseapisearchresponse, setBseapisearchresponse] = useState("");

  // const changeHandler = (e) => {
  //   setSearchStockName(e.target.value);
  // };

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.bseindia.com/Msource/90D/getQouteSearch.aspx?Type=EQ&text=${searchStockName}&flag=gq`
  //     )
  //     .then((res) => setBseapisearchresponse(res.data))
  //     .catch((error) => {
  //       console.log("Error fetching BSE API data:", error);
  //     });
  // }, [searchStockName]);
  const { deleteTodoMutation } = useTodoMutuation();

  const { isLoading, isError, error, data } = useQuery("todos", getTodos, {
    select: (data) => data.sort((a, b) => b.scrip_cd - a.scrip_cd),
  });
  const [todos, updateTodos] = useState(data || []);
  useEffect(() => {
    updateTodos(data);
  }, [data]);
  const handleOnDragEnd = (result) => {
    if (!result?.destination) return;

    const tasks = [...todos];

    const [reorderedItem] = tasks.splice(result.source.index, 1);

    tasks.splice(result.destination.index, 0, reorderedItem);

    const idsOrderArray = tasks.map((task) => task.id);
    localStorage.setItem("taskOrder", JSON.stringify(idsOrderArray));

    updateTodos(tasks);
  };

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>{error.message}</p>;
  } else {
    content = (
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <tbody {...provided.droppableProps} ref={provided.innerRef}>
              {data.map((todo, index) => (
                <Draggable
                  key={todo.scrip_cd}
                  draggableId={todo.scrip_cd.toString()}
                  index={index}
                >
                  {(provided) => (
                    <tr
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <td className="border border-black p-2">{index + 1}</td>
                      <td className="border border-black p-2">{todo.Name}</td>
                      <td className="border border-black p-2">{todo.LTP}</td>
                      <td className="border border-black p-2">{todo.Change}</td>
                      <td className="border border-black p-2">tr.v</td>
                      <td className="border border-black p-2">vol</td>
                      <td className="border border-black p-2">max.uc</td>
                      <td className="border border-black p-2">
                        <button
                          onClick={() =>
                            deleteTodoMutation.mutate({ id: todo.scrip_cd })
                          }
                        >
                          <TrashIcon className="h-5 w-5 text-red-500" />
                        </button>
                      </td>
                    </tr>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </tbody>
          )}
        </Droppable>
      </DragDropContext>
    );
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
      <table className="table ">
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
        {content}
      </table>
    </div>
  );
};

export default SuperHighVolume;
