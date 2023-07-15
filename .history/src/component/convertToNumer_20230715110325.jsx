// import React, { useEffect, useState } from "react";
// import "../index.css";
// import useSWR from "swr";
// import GetDetailsComponent from "./GetDetailsComponent";
// import axios from "axios";
// const Convert = () => {
//   const fetcher = (...args) => fetch(...args).then((res) => res.json());

//   const { data, error, isLoading } = useSWR(
//     "https://bse-api-server.vercel.app/",
//     fetcher
//   );
//   if (error) return <div>failed to load</div>;
//   if (isLoading) return <div>loading...</div>;
//   useEffect(() => {
//     const searchParamValue = data.Table.filter((i) => i.ltradert > 5).map(
//       (i, index) =>
//         +i.LONG_NAME.replaceAll("1", "a")
//           .replaceAll("2", "b")
//           .replaceAll("3", "c")
//           .replaceAll("4", "d")
//           .replaceAll("5", "e")
//           .replaceAll("6", "cc")
//           .replaceAll("7", "dc")
//           .replaceAll("8", "dd")
//           .replaceAll("9", "de")
//           .replaceAll("0", "")
//           .replaceAll("_", " ")
//           .replaceAll("'", "")
//           .replaceAll("(", "")
//           .replaceAll(")", "")
//     );
//     console.log(`https://phinzi.com/convert?name=${searchParamValue}`);
//   }, []);

//   return (
//     <div>
//       {/* data.Table.filter((i) => i.ltradert > 50 && i.ltradert < 500) */}
//       {/* .sort((a, b) => (a.trd_vol < b.trd_vol ? 1 : -1)) */}
//     </div>
//   );
// };

// export default Convert;
import React from "react";

const convertToNumer = () => {
  return <div>convertToNumer</div>;
};

export default convertToNumer;
