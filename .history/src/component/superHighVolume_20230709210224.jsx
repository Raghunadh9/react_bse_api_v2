import React, { useEffect, useState } from "react";
import axios from "axios";
import { db } from "../config";
import { ref, onValue, remove } from "firebase/database";
import GetDetailsComponent from "./GetDetailsComponent";
import GetVolume from "./GetVolume";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const SuperHighVolume = () => {
  const [data, setData] = useState([]);
  const [searchStockName, setSearchStockName] = useState("");
  const [bseData, setBseData] = useState([]);

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
          if (Array.isArray(res.data.Table)) {
            setBseData(res.data.Table);
          } else {
            setBseData([]);
          }
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
  // const deleteHandler = (scrip_cd) => {
  //   remove(ref(db, "reactBse/" + scrip_cd))
  //     .then(() => {
  //       alert("Remove Succeeded!");
  //     })
  //     .catch((err) => console.log(err));
  // };

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
      <table>
        <thead
          style={{
            background: "linear-gradient(270deg,#20bf55,#01baef)",
            position: "sticky",
            top: 0,
            color: "#fff",
          }}
        >
          <tr>
            {" "}
            <th className="border border-black ">S.no</th>
            <th className="border border-black ">Name</th>
            <th className="border border-black ">LTP</th>
            <th className="border border-black ">Now %</th>
            <th className="border border-black ">Tr.v</th>
            <th className="border border-black ">M.C</th>
            <th className="border border-black ">Volume</th>
            <th className="border border-black ">Max U.C</th>
            {/* <th className="border border-black ">Delete</th> */}
          </tr>
        </thead>
        {bseData[0].map((i, index) => (
          <tbody key={index + 1}>
            {/* item.scrip_cd */}
            <tr className="border border-black p-2">
              <td> {index + 1}</td>
              <td className="border border-black p-2">{i.Name}</td>
              <td className="border border-black p-2">{i.LTP}</td>
              <td className="border border-black p-2">{i.Change}</td>
              <td className="border border-black p-2">
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
                    href={`https://in.tradingview.com/chart/qmDo3C1P/?symbol=BSE%3A${i.Name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-pink-500 text-white">Konidoni</div>
                  </a>{" "}
                  <a
                    href={`https://in.tradingview.com/chart/VViXq6AO/?symbol=BSE%3A${i.Name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-purple-500 text-white">Balaanand</div>
                  </a>{" "}
                  <a
                    href={`https://in.tradingview.com/chart/1gQFO9Ge/?symbol=BSE%3A${i.Name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-blue-500 text-white">Mvsrcm</div>
                  </a>
                  <a
                    href={`https://in.tradingview.com/chart/3QIPa6zQ/?symbol=BSE%3A${i.Name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-green-700 text-white">alaknanda</div>
                  </a>
                </Popup>{" "}
              </td>
              <td className="border border-black p-2">
                {" "}
                <a
                  href={`https://www.google.com/search?q=moneycontrol+${i.Name.split(
                    " - "
                  )[0]
                    .replaceAll("Ltd", "limited")
                    .replaceAll("LTD", "limited")
                    .replaceAll(".", " ")
                    .replaceAll("-$", " ")
                    .replaceAll("{", "")
                    .replaceAll("}", "")
                    .replaceAll("(", "")
                    .replaceAll(")", "")
                    .replaceAll("&", "and")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  M.C
                </a>
              </td>
              <td className="border border-black p-2">
                <GetVolume scrip_cd={i.scrip_cd} />
              </td>
              <td className="border border-black p-2">
                <GetDetailsComponent scrip_cd={i.scrip_cd} />
                {/* {i.scrip_cd} */}
              </td>
              {/* <td>
                <button
                  onClick={() => deleteHandler(i.scrip_cd)}
                  className="bg-purple-500 p-1 rounded-md text-white"
                >
                  D
                </button>
              </td> */}
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default SuperHighVolume;
