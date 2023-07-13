import React, { useEffect, useState } from "react";
import "reactjs-popup/dist/index.css";
import { useQuery } from "react-query";
import { getTodos2 } from "../api/todoApis";
import { TrashIcon } from "@heroicons/react/24/solid";
import useTodoMutuation from "./todoMutuation.js";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import GetDetailsComponent from "./GetDetailsComponent";
import GetVolume from "./GetVolume";
import Popup from "reactjs-popup";

const watchList2 = () => {
  const { deleteTodoMutation2 } = useTodoMutuation();
  const {
    isLoading,
    isError,
    error,
    data = [],
  } = useQuery("todos2", getTodos2, { cacheTime: 1000 });

  const handledelete = (id) => {
    const arraysOrder = JSON.parse(localStorage.getItem("taskOrder2"));
    if (arraysOrder?.length) {
      const newArray = arraysOrder.filter((num) => num !== id);
      localStorage.setItem("taskOrder2", JSON.stringify(newArray));
    }
    deleteTodoMutation2.mutate({ id });
  };

  const [todos, updateTodos] = useState([]);

  useEffect(() => {
    const arrayIdOrder = JSON.parse(localStorage.getItem("taskOrder2"));
    if (!arrayIdOrder && data.length) {
      const idsOrderArray = data.map((task) => task.scrip_cd);
      localStorage.setItem("taskOrder2", JSON.stringify(idsOrderArray));
    }
    let myArray = [];
    if (arrayIdOrder?.length && data.length) {
      myArray = arrayIdOrder.map((pos) => {
        return data.find((el) => el.scrip_cd === pos);
      });
      const newItems = data.filter((el) => {
        return !arrayIdOrder.includes(el.scrip_cd);
      });
      if (newItems.length) myArray = [...newItems, ...myArray];
    }
    updateTodos(myArray);
  }, [data]);

  const handleOnDragEnd = (result) => {
    if (!result?.destination) return;

    const tasks = [...todos];

    const [reorderedItem] = tasks.splice(result.source.index, 1);

    tasks.splice(result.destination.index, 0, reorderedItem);
    const idsOrderArray = tasks.map((task) => task.scrip_cd);
    localStorage.setItem("taskOrder2", JSON.stringify(idsOrderArray));
    console.log(tasks);

    updateTodos(tasks);
  };
  //Select

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>{error.message}</p>;
  } else {
    content = (
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="todos2">
          {(provided) => (
            <tbody {...provided.droppableProps} ref={provided.innerRef}>
              {todos.map((todo, index) => (
                <Draggable
                  key={todo.scrip_cd}
                  draggableId={todo.Change.toString()}
                  index={index}
                >
                  {(provided) => (
                    <tr {...provided.draggableProps} ref={provided.innerRef}>
                      <td
                        className="border border-black p-2 font-bold"
                        {...provided.dragHandleProps}
                      >
                        ::
                      </td>
                      <td className="border border-black p-2">{index + 1}</td>
                      <td className="border border-black p-2">{todo.Name}</td>
                      {/* ... other table cells ... */}
                      <td className="border border-black p-2">{todo.LTP}</td>
                      <td className="border border-black p-2">{todo.Change}</td>
                      <td className="border border-black ">
                        <Popup
                          trigger={
                            <button className="bg-purple-500 p-1 rounded-md text-white">
                              {" "}
                              Tr.v
                            </button>
                          }
                          position="right center"
                        >
                          <a
                            href={`https://in.tradingview.com/chart/qmDo3C1P/?symbol=BSE%3A${todo.Name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className=" text-black">Konidoni</div>
                          </a>{" "}
                          <hr />
                          <a
                            href={`https://in.tradingview.com/chart/VViXq6AO/?symbol=BSE%3A${todo.Name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className=" text-black">Balaanand</div>
                          </a>
                          <hr />
                          <a
                            href={`https://in.tradingview.com/chart/1gQFO9Ge/?symbol=BSE%3A${todo.Name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className=" text-black">Mvsrcm</div>
                          </a>
                          <hr />
                          <a
                            href={`https://in.tradingview.com/chart/3QIPa6zQ/?symbol=BSE%3A${todo.Name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className=" text-black">alaknanda</div>
                          </a>
                          <hr />
                          <a
                            href={`https://in.tradingview.com/chart/GYpMww4j/?symbol=BSE%3A${todo.Name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className=" text-black">shivonica9</div>
                          </a>
                          <hr />
                          <a
                            href={`https://in.tradingview.com/chart/fPuBRHoA/?symbol=BSE%3A${todo.Name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className=" text-black">vwuxi0j</div>
                          </a>
                          <hr />
                          <a
                            href={`https://in.tradingview.com/chart/Ls1Vc76A/?symbol=BSE%3A${todo.Name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className=" text-black">txqm0ga</div>
                          </a>
                          <hr />
                          <a
                            href={`https://in.tradingview.com/chart/yenE16ib/?symbol=BSE%3A${todo.Name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className=" text-black">s3uqog1</div>
                          </a>
                          <hr />
                          <a
                            href={`https://in.tradingview.com/chart/BxyKps7d/?symbol=BSE%3A${todo.Name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className=" text-black">ke1a6e9</div>
                          </a>
                          <hr />
                          <a
                            href={`https://in.tradingview.com/chart/ZhZee2zq/?symbol=BSE%3A${todo.Name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className=" text-black">hztm13v</div>
                          </a>
                          <hr />
                          <a
                            href={`https://in.tradingview.com/chart/ZhZee2zq/?symbol=BSE%3A${todo.Name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className=" text-black">ZuViBDG7</div>
                          </a>
                          <hr />
                          <a
                            href={`https://in.tradingview.com/chart/r37zOlcQ/?symbol=BSE%3A${todo.Name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className=" text-black">bwbkdkm</div>
                          </a>
                          <hr />
                          <a
                            href={`https://in.tradingview.com/chart/yvElZCzr/?symbol=BSE%3A${todo.Name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className=" text-black">ajutam4</div>
                          </a>
                          <hr />
                          <a
                            href={`https://in.tradingview.com/chart/75frF6LZ/?symbol=BSE%3A${todo.Name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className=" text-black">agbifw1</div>
                          </a>
                          <hr />
                        </Popup>{" "}
                      </td>{" "}
                      <td className="border border-black p-2">
                        <GetVolume scrip_cd={todo.scrip_cd} />
                      </td>
                      <td className="border border-black p-2">
                        <span className="text-black font-bold ">
                          <GetDetailsComponent scrip_cd={todo.scrip_cd} />
                        </span>
                      </td>
                      <td className="border border-black p-2">
                        <button onClick={() => handledelete(todo.scrip_cd)}>
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
      <h1 className="font-bold mb-2 text-2xl">Watchlist 2</h1>
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
            <th className="border border-black ">Drag</th>
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

export default watchList2;
