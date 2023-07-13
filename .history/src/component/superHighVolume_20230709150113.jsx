import axios from "axios";
import React, { useEffect, useState } from "react";
import { db } from "../config";
import { ref, onValue } from "firebase/database";
const superHighVolume = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const starCountRef = ref(db, "reactBse/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const newPosts = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      console.log(newPosts);
      setData(newPosts);
    });
  }, []);
  const [searchStockName, SetsearchStockName] = useState("");
  const submitHandler = async (e) => {
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
    const res = await fetch(
      "https://bsestorage-75b05-default-rtdb.firebaseio.com/reactBse.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dataName: searchStockName }),
      }
    );
    if (res) {
      SetsearchStockName("");
    }

    // axios
    //   .get(
    //     `https://api.bseindia.com/BseIndiaAPI/api/EQPeerGp/w?scripcode=${searchStockName}&scripcomare=`
    //   )
    //   .then((res) => {
    //     setResponseData(res.data.Table[0]);
    //   })
    //   .then(console.log(responseData))
    //   .catch((err) => console.log(err));
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
      {data.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </div>
  );
};

export default superHighVolume;
