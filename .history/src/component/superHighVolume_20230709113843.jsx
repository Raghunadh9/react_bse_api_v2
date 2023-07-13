import React, { useState } from "react";

const superHighVolume = () => {
  const [searchStockName, SetsearchStockName] = useState("");
  const [responseData, setResponseData] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(searchStockName.toUpperCase().replace(" ", ""));
  };
  return (
    <div>
      <center>
        <div class="md:w-2/3">
          <form onSubmit={submitHandler}>
            <input
              className="mt-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="number"
              placeholder="Search Stock Code Here..."
              value={searchStockName}
              onChange={(e) => SetsearchStockName(e.target.value)}
            />
            <button
              className="bg-purple-500 p-1 rounded-md text-white"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </center>
    </div>
  );
};

export default superHighVolume;
