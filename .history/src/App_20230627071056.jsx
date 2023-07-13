import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.bseindia.com/BseIndiaAPI/api/MktRGainerLoserData/w?GLtype=gainer&IndxGrp=AllMkt&IndxGrpval=AllMkt&orderby=all"
        );
        setData(response.data.Table);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getDetails = async (scrip_cd) => {
    try {
      const response = await axios.get(
        `https://api.bseindia.com/BseIndiaAPI/api/PriceBand/w?scripcode=${scrip_cd}`
      );
      console.log(response.data.PBpcUC);
    } catch (error) {
      console.error("Error getting details:", error);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (data.length > 0) {
        const scrip_cd = data[0].scrip_cd; // Example: Get scrip_cd from data array
        getDetails(scrip_cd);
      }
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [data]);

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
        <tbody>
          {data.map((item, index) => (
            <tr key={item.scrip_cd} className="border border-black ">
              <td className="border border-black ">{index + 1}</td>
              <td className="underline text-blue-500">
                <a href={item.NSUrl} target="_blank" rel="noopener noreferrer">
                  {item.scripname}
                </a>
              </td>
              <td className="border border-black p-2">
                {item.LONG_NAME.split(" - ")[0]
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
                  {item.ltradert.toString().split(".")[0]}
                </span>
                <span className=" text-xs">
                  {item.ltradert.toString().split(".")[1] === undefined
                    ? ".00"
                    : "." + item.ltradert.toString().split(".")[1]}
                </span>
              </td>
              <td className="border border-black p-2">{item.change_percent}</td>
              <td className="border border-black p-2 underline text-blue-500">
                <a
                  href={`https://in.tradingview.com/chart/qmDo3C1P/?symbol=BSE%3A${item.scripname}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tr.v
                </a>
              </td>
              <td className="border border-black p-2 underline text-blue-500">
                <a
                  href={`https://www.google.com/search?q=zauba+${item.LONG_NAME.split(
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
                <a
                  href={`https://www.google.com/search?q=moneycontrol+${item.LONG_NAME.split(
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
                  href={`https://advancedastra.onrender.com/${item.LONG_NAME.split(
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
                  href={`https://chartink.com/stocks/${item.scrip_cd}.html`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  C.I
                </a>
              </td>
              <td className="border border-black p-2 underline text-blue-500">
                <a
                  href={`https://www.screener.in/company/${item.scrip_cd}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SC
                </a>
              </td>
              <td className="border border-black p-2">{item.trd_vol}</td>
              <td className="border border-black p-2 font-bold">
                {getDetails(item.scrip_cd)} {" %"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
