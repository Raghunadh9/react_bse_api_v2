import React, { useEffect, useState } from "react";
import { getChromeProfileUrl } from "./chromeProfileUrl";
import "../index.css";
import useSWR from "swr";
import GetDetailsComponent from "./GetDetailsComponent";
const Home = () => {
  const [profileUrl, setProfileUrl] = useState("");

  useEffect(() => {
    const fetchProfileUrl = async () => {
      try {
        const url = await getChromeProfileUrl();
        setProfileUrl(url);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProfileUrl();
  }, []);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://bse-api-server.vercel.app/",
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <center>
        <div className="">You're filtering only Percentage.</div>
        <p>URL of the second profile: {profileUrl}</p>
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
        {data.Table.map((i, index) => {
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
                  <GetDetailsComponent scrip_cd={i.scrip_cd} />
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Home;
