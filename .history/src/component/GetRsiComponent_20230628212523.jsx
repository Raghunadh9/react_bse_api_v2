import axios from "axios";
import React, { useEffect, useState } from "react";
// import useSWR from "swr";
const GetDetailsComponent = ({ scripname }) => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://www.alphavantage.co/query?function=RSI&symbol=${scripname}.BSE&interval=daily&time_period=14&series_type=open&apikey=MVQ9HSBN1WSJKUX6`
      )
      .then((res) => console.log(res.data))

      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {"title"}
      {" %"}
    </div>
  );
};

export default GetDetailsComponent;
