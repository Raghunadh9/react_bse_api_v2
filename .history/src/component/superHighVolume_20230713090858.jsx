import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { TrashIcon } from "@heroicons/react/outline";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Popup from "reactjs-popup";

const SuperHighVolume = () => {
  const [todos, setTodos] = useState([]);
  const { isLoading, isError, error, data = [] } = useQuery("todos", getTodos);

  useEffect(() => {
    setTodos(data);
  }, [data]);

  const handleDelete = (id) => {
    // Delete logic here
  };

  const handleOnDragEnd = (result) => {
    // Drag and drop logic here
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
                      {/* Render table cells here */}
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
      {/* Render other components here */}
      <center>
        <h1 className="font-bold mb-2 text-2xl">Watchlist</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Drag</th>
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
          {content}
        </table>
      </center>
    </div>
  );
};

export default SuperHighVolume;
