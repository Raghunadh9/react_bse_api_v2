import axios from "axios";
import React, { useEffect, useState } from "react";
import { db } from "../config";
import { ref, onValue } from "firebase/database";

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
      <ul>
        {bseData.map((i, index) => {
          return (
            <tbody key={index}>
              <tr className="border border-black ">
                <td className="border border-black "> {index + 1}</td>
                <td className="underline text-blue-500">
                  <a href={i.NSUrl} target="_blank" rel="noopener noreferrer">
                    {i.scripname}
                  </a>
                </td>
                <td className="border border-black p-2 ">
                  {i.LONG_NAME.split(" - ")[0]
                    .replaceAll("Ltd", "limited")
                    .replaceAll("LTD", "limited")
                    .replaceAll(".", " ")
                    .replaceAll("-$", " ")
                    .replaceAll("{", "")
                    .replaceAll("}", "")
                    .replaceAll("(", "")
                    .replaceAll(")", "")
                    .replaceAll("&", "and")}
                </td>
                <td className="border border-black ">
                  <span className="font-extrabold text-md text-green-700">
                    {i.ltradert.toString().split(".")[0]}
                  </span>
                  <span className=" text-xs">
                    {i.ltradert.toString().split(".")[1] === undefined
                      ? ".00"
                      : "." + i.ltradert.toString().split(".")[1]}
                  </span>
                </td>

                <td className="border border-black p-2">{i.change_percent}</td>
                <td className="border border-black p-2 underline text-blue-500">
                  {" "}
                  <a
                    href={`https://in.tradingview.com/chart/qmDo3C1P/?symbol=BSE%3A${i.scripname}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tr.v
                  </a>
                </td>
                <td className="border border-black p-2 underline text-blue-500">
                  {" "}
                  <a
                    href={`https://www.google.com/search?q=zauba+${i.LONG_NAME.split(
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
                    Z
                  </a>
                </td>

                <td className="border border-black p-2 underline text-blue-500">
                  {" "}
                  <a
                    href={`https://www.google.com/search?q=moneycontrol+${i.LONG_NAME.split(
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
                <td className="border border-black p-2 underline text-blue-500">
                  <a
                    href={`https://advancedastra.onrender.com/${i.LONG_NAME.split(
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
                    N
                  </a>
                </td>
                <td className="border border-black p-2 underline text-blue-500">
                  <a
                    href={`https://chartink.com/stocks/${i.scrip_cd}.html`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    C.I
                  </a>
                </td>
                <td className="border border-black p-2 underline text-blue-500">
                  <a
                    href={`https://www.screener.in/company/${i.scrip_cd}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SC
                  </a>
                </td>
                <td className="border border-black p-2">{i.trd_vol}</td>
                <td className="border  border-black p-2 font-bold">
                  {/* <GetDetailsComponent scrip_cd={i.scrip_cd} /> */}
                </td>
              </tr>
            </tbody>
          );
        })}
      </ul>
    </div>
  );
};

export default SuperHighVolume;
