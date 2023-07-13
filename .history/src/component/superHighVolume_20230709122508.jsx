import axios from "axios";
import React, { useState } from "react";

const superHighVolume = () => {
  const [searchStockName, SetsearchStockName] = useState("");
  const [responseData, setResponseData] = useState(null);
  const submitHandler = (e) => {
    e.preventDefault();
    if (searchStockName.length < 6) {
      alert("correct stock code number could not below 6 characters");
      return;
    } else if (searchStockName.length > 6) {
      alert(
        "Please type correct stock code number could not above 6 characters"
      );
      return;
    }
    axios
      .get(
        `https://api.bseindia.com/BseIndiaAPI/api/EQPeerGp/w?scripcode=${searchStockName}&scripcomare=`
      )
      .then((res) => {
        console.log(res.data.Table[0]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <center>
        <div className="md:w-2/3">
          <form onSubmit={(e) => submitHandler(e)}>
            <input
              className="mt-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
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
