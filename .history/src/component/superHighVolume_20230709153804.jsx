import axios from "axios";
import React, { useEffect, useState } from "react";
import { db } from "../config";
import { ref, onValue } from "firebase/database";

const SuperHighVolume = () => {
  const [data, setData] = useState([]);
  const [searchStockName, setSearchStockName] = useState("");
  const [bseData, setBseData] = useState({});

  useEffect(() => {
    const starCountRef = ref(db, "reactBse/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const newPosts = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setData(newPosts);

      // Map the data and fetch here:
      const bseCode = newPosts.map((item) => item.dataName);

      const fetchDataBse = async () => {
        try {
          const res = await axios.get(
            `https://api.bseindia.com/BseIndiaAPI/api/EQPeerGp/w?scripcode=${bseCode}&scripcomare=`
          );
          setBseData(res.data.Table[0]);
        } catch (err) {
          console.log(err);
        }
      };

      fetchDataBse();
    });
  }, []);

  useEffect(() => {
    console.log("bseData", bseData);
  }, [bseData]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (searchStockName.length < 6) {
      alert("Correct stock code number should not be below 6 characters");
      return;
    } else if (searchStockName.length > 6) {
      alert("Please enter a correct stock code number with 6 characters");
      return;
    }

    try {
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

      if (res.ok) {
        setSearchStockName("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <center>
        <div className="md:w-2/3">
          <form onSubmit={submitHandler}>
            <input
              className="mt-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              placeholder="Search Stock Code Here..."
              value={searchStockName}
              onChange={(e) => setSearchStockName(e.target.value)}
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
      <ul>{bseData.scrip_cd}</ul>
    </div>
  );
};

export default SuperHighVolume;
