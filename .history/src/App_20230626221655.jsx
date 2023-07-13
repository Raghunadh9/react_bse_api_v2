import React, { useEffect, useState } from "react";
import fetchAllData from "./lib";
import axios from "axios";
import "./index.css";

const App = () => {
  const [data, setData] = useState([]);
  const [scripcode, setScripcode] = useState("");
  // const getDetails = async (scrip_cd) => {
  //   axios
  //     .get(
  //       `https://api.bseindia.com/BseIndiaAPI/api/PriceBand/w?scripcode=${scrip_cd}`
  //     )
  //     .then((res) => console.log(res.data));
  //   // console.log(scripcode);
  // };
  useEffect(() => {
    const fetchThem = async () => {
      axios
        .get(
          `https://api.bseindia.com/BseIndiaAPI/api/MktRGainerLoserData/w?GLtype=gainer&IndxGrp=AllMkt&IndxGrpval=AllMkt&orderby=all`
        )
        .then((res) => setData(res.data.Table));
    };
    fetchThem();

    const getDetails = async (scrip_cd) => {
      axios
        .get(
          `https://api.bseindia.com/BseIndiaAPI/api/PriceBand/w?scripcode=${scrip_cd}`
        )
        .then((res) => console.log(res.data));
      // console.log(scripcode);
    };
    getDetails();
  }, []);

  return (
    <div>
      <table className="mt-4 table w-full p-4">
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
            <th className="border border-black ">Company Name</th>
            <th className="border border-black ">LTP</th>
            <th className="border border-black ">Now %</th>
            <th className="border border-black ">Tr.v</th>
            <th className="border border-black ">Z</th>
            <th className="border border-black ">M.C</th>
            <th className="border border-black ">N</th>
            <th className="border border-black ">C.I</th>
            <th className="border border-black ">SC</th>
            <th className="border border-black ">Volume</th>
            <th className="border border-black ">Max U.C</th>
          </tr>
        </thead>
        {data.map((i, index) => {
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
                  {getDetails(i.scrip_cd)} {" %"}
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default App;
