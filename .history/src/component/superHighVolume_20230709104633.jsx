import React, { useState } from "react";

const superHighVolume = () => {
  const [setsearchStock, setSetsearchStock] = useState("");
  const changeHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div>
      <center>
        <div class="md:w-2/3">
          <input
            class="mt-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            placeholder="Search Stock Code Here..."
            onChange={(e) => changeHandler(e.target.value)}
          />
        </div>
      </center>
    </div>
  );
};

export default superHighVolume;
