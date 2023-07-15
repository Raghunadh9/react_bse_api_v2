import axios from "axios";
import React, { useEffect, useState } from "react";
// import useSWR from "swr";
const GetDetailsComponent = ({ scrip_cd }) => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    axios
      .get(`https://bse-api-server.vercel.app/getDetails?scripcode=${scrip_cd}`)
      .then((res) => setTitle(res.data.PBpcUC))

      .catch((err) => console.log(err));
  }, []);
  if (title === "5") {
    return "display:none"; // This will render nothing if the title is "5"
  }

  return <div>{title.toString()}</div>;
};

export default GetDetailsComponent;
