import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { TrashIcon } from "@heroicons/react/24/solid";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import GetVolume from "./GetVolume";
import Popup from "reactjs-popup";

const SuperHighVolume = () => {
  const [searchStockName, setSearchStockName] = useState("");
  const [bseApiSearchResponse, setBseApiSearchResponse] = useState("");

  const changeHandler = (e) => {
    setSearchStockName(e.target.value);
  };

  useEffect(() => {
    if (searchStockName.trim() === "") {
      setBseApiSearchResponse("");
      return;
    }

    axios
      .get(
        `https://api.bseindia.com/Msource/90D/getQouteSearch.aspx?Type=EQ&text=${searchStockName}&flag=gq`
      )
      .then((res) => setBseApiSearchResponse(res.data))
      .catch((error) => {
        console.log("Error fetching BSE API data:", error);
      });
  }, [searchStockName]);

  const {
    isLoading,
    isError,
    error,
    data = [],
  } = useQuery("todos", async () => {
    // Add your getTodos API call here
    // For example: const response = await getTodos();
    // Return the response data
    // return response.data;
    return []; // Placeholder until you implement getTodos
  });

  const handleDelete = (id) => {
    // Add your delete logic here
  };

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const arrayIdOrder = JSON.parse(localStorage.getItem("taskOrder"));
    if (!arrayIdOrder && data.length) {
      const idsOrderArray = data.map((task) => task.scrip_cd);
      localStorage.setItem("taskOrder", JSON.stringify(idsOrderArray));
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
    setTodos(myArray);
  }, [data]);

  const handleOnDragEnd = (result) => {
    if (!result?.destination) return;

    const tasks = [...todos];
    const [reorderedItem] = tasks.splice(result.source.index, 1);
    tasks.splice(result.destination.index, 0, reorderedItem);

    const idsOrderArray = tasks.map((task) => task.scrip_cd);
    localStorage.setItem("taskOrder", JSON.stringify(idsOrderArray));

    setTodos(tasks);
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
              {todos.map((todo, index) => (
                <Draggable
                  key={todo.scrip_cd}
                  draggableId={todo.Change.toString()}
                  index={index}
                >
                  {(provided) => (
                    <tr {...provided.draggableProps} ref={provided.innerRef}>
                      <td
                        className="border border-black p-2"
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
                              Tr.v
                            </button>
                          }
                          position="right center"
                        >
                          {/* Add your popup content here */}
                        </Popup>
                      </td>
                      <td className="border border-black p-2">
                        <GetVolume scrip_cd={todo.scrip_cd} />
                      </td>
                      <td className="border border-black p-2">
                        <span className="text-black font-bold">hello</span>
                      </td>
                      <td className="border border-black p-2">
                        <button onClick={() => handleDelete(todo.scrip_cd)}>
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
            id="hello"
            className="mt-5 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            placeholder="Add Stock Here..."
            value={searchStockName}
            onChange={changeHandler}
          />
          <div>
            <div
              className="bg-blue-300 text-white"
              dangerouslySetInnerHTML={{ __html: bseApiSearchResponse }}
            />
          </div>
        </div>
      </center>
      <br />
      <br />
      <center>
        <h1 className="font-bold mb-2 text-2xl">Watchlist</h1>
        <table className="table">
          <thead
            style={{
              background: "linear-gradient(270deg,#20bf55,#01baef)",
              position: "sticky",
              top: 0,
              color: "#fff",
            }}
          >
            <tr>
              <th className="border border-black">Drag</th>
              <th className="border border-black">S.No</th>
              <th className="border border-black">Name</th>
              <th className="border border-black">LTP</th>
              <th className="border border-black">Change</th>
              <th className="border border-black">Tr.v</th>
              <th className="border border-black">Volume</th>
              <th className="border border-black">Max.Uc</th>
              <th className="border border-black">Delete</th>
            </tr>
          </thead>
          {content}
        </table>
      </center>
    </div>
  );
};

export default SuperHighVolume;
