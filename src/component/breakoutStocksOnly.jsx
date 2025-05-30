import React, { useEffect, useState } from "react";
import "../index.css";
import useSWR from "swr";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { FaCheckCircle } from "react-icons/fa";
import { IoCloseCircleSharp } from "react-icons/io5";

const Home = () => {


  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR("http://localhost:5005/", fetcher, {
    refreshInterval: 1000,
  });

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <center>
        <div className="">
          You're filtering only <b>Percentage</b>.
        </div>
      </center>
      <table className="mt-4 table w-full p-4">
        <thead
          className="rounded-md"
          style={{
            background: "linear-gradient(270deg,#20bf55,#01baef)",
            position: "sticky",
            top: 0,
            color: "#fff",
            borderRadius: 10,
          }}
        >
          <tr>
            {" "}
            <th className="border border-black ">S.no</th>
            <th className="border border-black ">Name</th>
            <th className="border border-black ">Company Name</th>
            {/* breakoutValue */}
            <th className="border border-black ">Br. Price</th>

            <th className="border border-black text-2xl font-bold">LTP</th>
            <th className="border border-black text-2xl font-bold">Now %</th>
            <th className="border border-black ">Tr.v</th>
            <th className="border border-black ">Z</th>
            <th className="border border-black ">M.C</th>
            <th className="border border-black ">N</th>
            <th className="border border-black ">C.I</th>
            <th className="border border-black ">SC</th>
            <th className="border border-black text-2xl font-bold">Volume</th>
            <th className="border border-black ">Breakout</th>
            {/* <th className="border border-black ">Max U.C</th> */}
          </tr>
        </thead>
        {data.filter((a)=>a.isBreakout).sort((a, b) => {
  const hasBreakoutA = "isBreakout" in a;
  const hasBreakoutB = "isBreakout" in b;

  // If "isBreakout" exists in both items or neither, maintain their order
  if (hasBreakoutA === hasBreakoutB) return 0;

  // Move items with "isBreakout" after the last breakout index
  return hasBreakoutA ? 1 : -1;
}).reverse().map(
          (i, index) => {
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
                  <td className="border border-black ">{i.breakoutValue}</td>
                  <td className="border border-black ">
                    <span className="font-extrabold text-xl text-green-700">
                      {i.ltradert}
                    </span>
                   
                  </td>
                  <td className="border border-black p-2 text-xl">
                    {i.change_percent}
                  </td>
                  <td className="border border-black ">
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
                        href={`https://in.tradingview.com/chart/qmDo3C1P/?symbol=BSE%3A${i.scripname}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className=" text-black">Konidoni</div>
                      </a>{" "}
                      <hr />
                      <a
                        href={`https://in.tradingview.com/chart/VViXq6AO/?symbol=BSE%3A${i.scripname}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className=" text-black">Balaanand</div>
                      </a>
                      <hr />
                      <a
                        href={`https://in.tradingview.com/chart/1gQFO9Ge/?symbol=BSE%3A${i.scripname}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className=" text-black">Mvsrcm</div>
                      </a>
                      <hr />
                      <a
                        href={`https://in.tradingview.com/chart/3QIPa6zQ/?symbol=BSE%3A${i.scripname}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className=" text-black">alaknanda</div>
                      </a>
                      <hr />
                      <a
                        href={`https://in.tradingview.com/chart/GYpMww4j/?symbol=BSE%3A${i.scripname}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className=" text-black">shivonica9</div>
                      </a>
                      <hr />
                      <a
                        href={`https://in.tradingview.com/chart/fPuBRHoA/?symbol=BSE%3A${i.scripname}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className=" text-black">vwuxi0j</div>
                      </a>
                      <hr />
                      <a
                        href={`https://in.tradingview.com/chart/Ls1Vc76A/?symbol=BSE%3A${i.scripname}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className=" text-black">txqm0ga</div>
                      </a>
                      <hr />
                      <a
                        href={`https://in.tradingview.com/chart/yenE16ib/?symbol=BSE%3A${i.scripname}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className=" text-black">s3uqog1</div>
                      </a>
                      <hr />
                      <a
                        href={`https://in.tradingview.com/chart/BxyKps7d/?symbol=BSE%3A${i.scripname}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className=" text-black">ke1a6e9</div>
                      </a>
                      <hr />
                      <a
                        href={`https://in.tradingview.com/chart/ZhZee2zq/?symbol=BSE%3A${i.scripname}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className=" text-black">hztm13v</div>
                      </a>
                      <hr />
                      <a
                        href={`https://in.tradingview.com/chart/ZhZee2zq/?symbol=BSE%3A${i.scripname}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className=" text-black">ZuViBDG7</div>
                      </a>
                      <hr />
                      <a
                        href={`https://in.tradingview.com/chart/r37zOlcQ/?symbol=BSE%3A${i.scripname}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className=" text-black">bwbkdkm</div>
                      </a>
                      <hr />
                      <a
                        href={`https://in.tradingview.com/chart/yvElZCzr/?symbol=BSE%3A${i.scripname}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className=" text-black">ajutam4</div>
                      </a>
                      <hr />
                      <a
                        href={`https://in.tradingview.com/chart/75frF6LZ/?symbol=BSE%3A${i.scripname}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className=" text-black">agbifw1</div>
                      </a>
                      <hr />
                    </Popup>{" "}
                  </td>{" "}
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
                    {/* <Modal /> */}
                    <a
                      href={`https://miniphinzi.vercel.app/?name=${i.LONG_NAME.split(
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
                  {i.isBreakout?<FaCheckCircle color="green" size={30}/>:<IoCloseCircleSharp color="red"size={35}/>}
                  </td>
                </tr>
              </tbody>
            );
          }
        )}{" "}
      </table>
    </div>
  );
};

export default Home;
